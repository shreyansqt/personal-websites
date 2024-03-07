"use client";

import type { ReactElement } from "react";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useKeypress from "react-use-keypress";
import type { TSanityImage } from "../../types";
import { SanityImage } from "../sanity-image";
import { cn } from "../../utils/cn";
import { animationVariants } from "./animationVariants";

interface Props {
  images: (TSanityImage & { index: number })[];
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
  hasBackground?: boolean;
}

export function Lightbox({
  images,
  hasBackground,
  currentIndex,
  onIndexChange,
}: Props): ReactElement {
  const overlayRef = useRef(null);
  const [direction, setDirection] = useState(0);

  const image = images[currentIndex];

  const changeIndex = (newIndex: number) => {
    if (newIndex > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    onIndexChange(newIndex);
  };

  const handleClose = () => {
    onIndexChange(-1);
  };

  useKeypress("ArrowRight", () => {
    if (currentIndex + 1 < images.length) {
      changeIndex(currentIndex + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (currentIndex > 0) {
      changeIndex(currentIndex - 1);
    }
  });

  const initialScale = Math.min(
    window.innerWidth / image.asset.metadata.dimensions.width,
    window.innerHeight / image.asset.metadata.dimensions.height
  );

  return (
    <Dialog initialFocus={overlayRef} onClose={handleClose} open static>
      <Dialog.Overlay
        animate={{ opacity: 1 }}
        as={motion.div}
        className="z-30 fixed inset-0 bg-black/10 backdrop-blur-2xl cursor-zoom-out"
        initial={{ opacity: 0 }}
        key="backdrop"
        onClick={handleClose}
        ref={overlayRef}
      />
      <div className="z-50 fixed inset-0 pointer-events-none">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            animate="center"
            className="absolute inset-0"
            custom={direction}
            exit="exit"
            initial="enter"
            key={currentIndex}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            variants={animationVariants}
          >
            <TransformWrapper
              centerOnInit
              centerZoomedOut
              disablePadding
              initialScale={initialScale}
              maxScale={2}
              minScale={initialScale}
              panning={{ lockAxisX: false }}
              wheel={{ smoothStep: 0.02 }}
            >
              <TransformComponent
                contentClass="pointer-events-auto cursor-grab"
                wrapperClass="!size-full"
                wrapperStyle={{
                  transform: "translate3d(0,0,0)",
                }}
              >
                <SanityImage
                  className={cn("p-4 max-w-none", {
                    "bg-baby-pink": hasBackground,
                  })}
                  image={image}
                  priority
                  unoptimized
                />
              </TransformComponent>
            </TransformWrapper>
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-auto">
          {currentIndex > 0 && (
            <button
              className="top-[calc(50%-16px)] left-3 absolute bg-black/50 hover:bg-black/75 backdrop-blur-lg p-3 rounded-full text-white/75 hover:text-white transition focus:outline-none"
              onClick={() => {
                changeIndex(currentIndex - 1);
              }}
              style={{ transform: "translate3d(0, 0, 0)" }}
              type="button"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          )}
          {currentIndex + 1 < images.length && (
            <button
              className="top-[calc(50%-16px)] right-3 absolute bg-black/50 hover:bg-black/75 backdrop-blur-lg p-3 rounded-full text-white/75 hover:text-white transition focus:outline-none"
              onClick={() => {
                changeIndex(currentIndex + 1);
              }}
              style={{ transform: "translate3d(0, 0, 0)" }}
              type="button"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          )}
          <button
            className="top-3 right-3 absolute flex items-center gap-2 bg-black/50 hover:bg-black/75 backdrop-blur-lg p-3 rounded-full text-white text-white/75 hover:text-white transition"
            onClick={handleClose}
            type="button"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
