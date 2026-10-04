"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n/context";
import Image from "next/image";
import { ArrowUpRight, Maximize2, Minus, Plus, X, ZoomIn } from "lucide-react";

const ZOOM_LEVELS = [1, 1.5, 2, 2.5, 3];

function ImageModal({
  src,
  alt,
  language = "es",
  onClose,
}: {
  src: string;
  alt: string;
  language?: "es" | "en";
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState<number>(1);
  const [fitWidth, setFitWidth] = useState<number>(1000);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const dragStartRef = useRef<{
    x: number;
    y: number;
    scrollLeft: number;
    scrollTop: number;
  } | null>(null);
  const dragDistanceRef = useRef(0);
  const prevZoomRef = useRef(zoom);
  const backdropMouseDownRef = useRef(false);

  const handleZoomIn = () => {
    setZoom((prev) => {
      const next = ZOOM_LEVELS.find((lvl) => lvl > prev);
      return next ?? Math.min(prev + 0.5, 3);
    });
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const reversed = [...ZOOM_LEVELS].reverse();
      const next = reversed.find((lvl) => lvl < prev);
      return next ?? Math.max(prev - 0.5, 1);
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  const handleToggleZoom = () => {
    setZoom((prev) => (prev > 1 ? 1 : 2));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // Center scroll viewport smoothly when zooming in
  useEffect(() => {
    if (zoom > prevZoomRef.current && containerRef.current) {
      const container = containerRef.current;
      const timer = setTimeout(() => {
        container.scrollTo({
          left: Math.max(0, (container.scrollWidth - container.clientWidth) / 2),
          top: Math.max(0, (container.scrollHeight - container.clientHeight) / 2),
          behavior: "smooth",
        });
      }, 30);
      return () => clearTimeout(timer);
    }
    prevZoomRef.current = zoom;
  }, [zoom]);

  // Image load & measurement
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.clientWidth > 0) {
      setFitWidth(img.clientWidth);
    } else if (img.naturalWidth > 0) {
      setFitWidth(Math.min(img.naturalWidth, 1050));
    }
  };

  // Drag to pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1 || !containerRef.current) return;
    if (e.button !== 0) return; // Only primary button
    e.preventDefault();
    setIsDragging(true);
    dragDistanceRef.current = 0;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: containerRef.current.scrollLeft,
      scrollTop: containerRef.current.scrollTop,
    };
  };

  // Global mousemove and mouseup listeners during dragging so the user can drag freely
  // even if the cursor leaves the container or window, without triggering backdrop click
  useEffect(() => {
    if (!isDragging) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!dragStartRef.current || !containerRef.current) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      dragDistanceRef.current = Math.hypot(dx, dy);
      containerRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx;
      containerRef.current.scrollTop = dragStartRef.current.scrollTop - dy;
    };

    const handleWindowMouseUp = () => {
      setIsDragging(false);
      dragStartRef.current = null;
      // Clear drag distance after current call stack to let onClick check drag status
      setTimeout(() => {
        dragDistanceRef.current = 0;
      }, 50);
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [isDragging]);

  const handleImageClick = () => {
    // If dragged, do not toggle zoom
    if (dragDistanceRef.current > 5) return;
    handleToggleZoom();
  };

  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      backdropMouseDownRef.current = true;
    } else {
      backdropMouseDownRef.current = false;
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if mousedown also originated on the backdrop itself and we were not dragging
    if (
      e.target === e.currentTarget &&
      backdropMouseDownRef.current &&
      dragDistanceRef.current <= 5
    ) {
      onClose();
    }
    backdropMouseDownRef.current = false;
  };

  const isEs = language === "es";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0F11]/92 backdrop-blur-md p-3 sm:p-6"
      onMouseDown={handleBackdropMouseDown}
      onClick={handleBackdropClick}
    >
      <div
        className="relative max-w-6xl w-full flex flex-col items-center justify-center"
        onMouseDown={(e) => {
          e.stopPropagation();
          backdropMouseDownRef.current = false;
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior de título y controles */}
        <div className="w-full flex items-center justify-between gap-3 mb-2.5 px-1">
          {/* Título de la imagen */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs sm:text-sm font-medium text-[#E7E5E1] truncate">
              {alt}
            </span>
          </div>

          {/* Grupo de controles */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Controles de zoom */}
            <div className="flex items-center rounded-md border border-[#26292E] bg-[#15171A] p-0.5 text-xs text-[#E7E5E1]">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                title={isEs ? "Alejar (-)" : "Zoom out (-)"}
                aria-label={isEs ? "Alejar" : "Zoom out"}
                className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-[#26292E] text-[#A3A19C] hover:text-[#E7E5E1] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#A3A19C] transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                <Minus className="size-3.5" />
              </button>

              <button
                type="button"
                onClick={handleToggleZoom}
                title={isEs ? "Alternar zoom (100% / 200%)" : "Toggle zoom (100% / 200%)"}
                className="px-2 py-1 font-mono text-[11px] sm:text-xs text-[#A3A19C] hover:text-[#6FB58F] transition-colors cursor-pointer select-none"
              >
                {Math.round(zoom * 100)}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                title={isEs ? "Acercar (+)" : "Zoom in (+)"}
                aria-label={isEs ? "Acercar" : "Zoom in"}
                className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-[#26292E] text-[#A3A19C] hover:text-[#E7E5E1] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#A3A19C] transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                <Plus className="size-3.5" />
              </button>
            </div>

            {/* Botón Ajustar (reset a 1x) */}
            {zoom > 1 && (
              <button
                type="button"
                onClick={handleResetZoom}
                title={isEs ? "Ajustar a la pantalla (0)" : "Fit to screen (0)"}
                className="hidden sm:inline-flex min-h-[32px] items-center gap-1.5 rounded-md border border-[#26292E] bg-[#15171A] px-2.5 text-xs text-[#A3A19C] hover:text-[#E7E5E1] hover:bg-[#26292E] transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3" />
                <span>{isEs ? "Ajustar" : "Fit"}</span>
              </button>
            )}

            {/* Abrir archivo original en nueva pestaña */}
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              title={isEs ? "Abrir imagen original" : "Open full image"}
              aria-label={isEs ? "Abrir imagen original en nueva pestaña" : "Open full image in new tab"}
              className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md border border-[#26292E] bg-[#15171A] text-[#A3A19C] hover:text-[#E7E5E1] hover:bg-[#26292E] transition-colors cursor-pointer"
            >
              <ArrowUpRight className="size-3.5" />
            </a>

            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={onClose}
              title={isEs ? "Cerrar (Esc)" : "Close (Esc)"}
              aria-label={isEs ? "Cerrar vista ampliada" : "Close enlarged view"}
              className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md border border-[#26292E] bg-[#15171A] text-[#A3A19C] hover:text-[#E7E5E1] hover:bg-[#26292E] transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Contenedor desplazable de la imagen */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          className={`relative w-full max-h-[76vh] overflow-auto rounded-lg border border-[#26292E] bg-[#0E0F11] select-none ${
            zoom > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
          }`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#26292E transparent",
          }}
        >
          <div
            className={`p-2 sm:p-4 flex ${
              zoom === 1
                ? "items-center justify-center min-h-[50vh]"
                : "min-w-max items-start justify-start"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              onClick={handleImageClick}
              draggable={false}
              className={`block select-none transition-[width] duration-150 ease-out ${
                zoom === 1
                  ? "max-h-[72vh] max-w-full w-auto h-auto object-contain cursor-zoom-in m-auto rounded"
                  : "rounded shadow-2xl cursor-grab active:cursor-grabbing"
              }`}
              style={
                zoom > 1
                  ? {
                      width: `${Math.round(fitWidth * zoom)}px`,
                      maxWidth: "none",
                      height: "auto",
                    }
                  : undefined
              }
            />
          </div>
        </div>

        {/* Barra inferior de ayuda */}
        <div className="mt-2.5 flex items-center justify-between w-full px-1 text-xs text-[#A3A19C]">
          <span className="truncate pr-2">
            {zoom === 1
              ? isEs
                ? "Click en la imagen o '+' para ampliar"
                : "Click image or use '+' to zoom"
              : isEs
              ? "Arrastrá o scrolleá para recorrer · Click para volver a ajustar"
              : "Drag or scroll to pan · Click to fit to screen"}
          </span>
          <span className="font-mono text-[11px] shrink-0 text-[#A3A19C]/70">
            {isEs ? "Esc para salir" : "Esc to exit"}
          </span>
        </div>
      </div>
    </div>
  );
}

function ImageSlot({
  src,
  alt,
  zoomLabel,
  onOpen,
}: {
  src: string;
  alt: string;
  zoomLabel: string;
  onOpen: (src: string, alt: string) => void;
}) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const probe = new window.Image();
    probe.src = src;
    probe.onload = () => setExists(true);
    probe.onerror = () => setExists(false);
  }, [src]);

  if (!exists) return null;

  return (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      aria-label={`${zoomLabel}: ${alt}`}
      className="group relative block w-full text-left overflow-hidden rounded-lg border border-[#26292E] bg-[#0E0F11] hover:border-[#6FB58F]/60 transition-colors duration-150 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-[#6FB58F]"
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        unoptimized
        className="w-full h-auto object-cover transition-opacity duration-150 group-hover:opacity-90 aspect-video"
      />
      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-md bg-[#0E0F11]/85 border border-[#26292E] px-2 py-1 text-xs text-[#A3A19C] group-hover:text-[#E7E5E1] transition-colors duration-150 pointer-events-none">
        <ZoomIn className="size-3.5" />
        <span>{zoomLabel}</span>
      </div>
    </button>
  );
}

export function Projects() {
  const { t, language } = useLanguage();
  const { featured, items } = t.projects;
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const zoomLabel = language === "es" ? "Ampliar" : "Zoom";

  return (
    <section id="proyectos" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E7E5E1]">
          {t.projects.title}
        </h2>
        <p className="text-sm sm:text-base text-[#A3A19C]">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Tarjeta del proyecto principal */}
      <div className="rounded-lg border border-[#26292E] bg-[#15171A] p-6 sm:p-8 space-y-5">
        <div className="text-sm text-[#A3A19C]">
          {featured.metadata}
        </div>

        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#E7E5E1] tracking-tight">
            {featured.title}
          </h3>
          <p className="text-sm text-[#A3A19C]">
            {featured.organization}
          </p>
        </div>

        <p className="text-[17px] leading-[1.65] text-[#E7E5E1]">
          {featured.description}
        </p>

        {/* 4 logros como lista simple con guion, sin caja anidada ni checks */}
        <ul className="space-y-2.5 my-4 text-[15px] sm:text-base text-[#E7E5E1]">
          {featured.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="text-[#A3A19C] select-none shrink-0">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Slots para captura real de demo y diagrama de arquitectura */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 empty:hidden">
          <ImageSlot
            src="/img/demo-medicamentos.png"
            alt={
              language === "es"
                ? "Captura del Sistema de Gestión de Medicamentos"
                : "Medication Management System Demo Screenshot"
            }
            zoomLabel={zoomLabel}
            onOpen={(src, alt) => setModalImage({ src, alt })}
          />
          <ImageSlot
            src="/img/arquitectura-medicamentos.png"
            alt={
              language === "es"
                ? "Diagrama de Arquitectura del Sistema de Medicamentos"
                : "Medication Management System Architecture Diagram"
            }
            zoomLabel={zoomLabel}
            onOpen={(src, alt) => setModalImage({ src, alt })}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#26292E]">
          <div className="text-xs sm:text-sm font-mono text-[#A3A19C]">
            <span className="text-[#E7E5E1] font-sans font-medium mr-2">Stack:</span>
            <span>{featured.tech.join(" · ")}</span>
          </div>

          <a
            href={featured.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-ver-demo-operativa"
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-[#6FB58F] px-5 py-2.5 text-sm font-medium text-[#0E0F11] hover:bg-[#82C8A3] transition-colors duration-150 shrink-0 cursor-pointer"
          >
            <span>{t.projects.viewDemo}</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      {/* Timeline de trayectoria */}
      <div className="space-y-4 pt-6">
        <h3 className="text-xl font-semibold text-[#E7E5E1] tracking-tight">
          {language === "es" ? "Trayectoria" : "Experience"}
        </h3>

        <div className="divide-y divide-[#26292E] border-y border-[#26292E]">
          {items.map((proj, idx) => (
            <div
              key={idx}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
            >
              <div className="md:col-span-4 space-y-1">
                <div className="text-sm font-medium text-[#E7E5E1]">
                  {proj.period}
                </div>
                <div className="text-sm text-[#A3A19C]">
                  {proj.organization}
                </div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <h4 className="text-base sm:text-lg font-semibold text-[#E7E5E1] tracking-tight">
                  {proj.title}
                </h4>

                <p className="text-[15px] leading-relaxed text-[#E7E5E1]">
                  {proj.description}
                </p>

                <ul className="space-y-1.5 text-sm text-[#A3A19C]">
                  {proj.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#A3A19C] select-none shrink-0">–</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-1 text-xs sm:text-sm font-mono text-[#A3A19C]">
                  <span className="text-[#E7E5E1] font-sans font-medium mr-2">Stack:</span>
                  <span>{proj.tech.join(" · ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          language={language}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  );
}
