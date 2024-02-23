"use client";

import { GalleryImageProps } from "./types";
import { ClientImage, ClientImageProps } from "../image/ClientImage";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { animationVariants as animationVariants } from "./animationVariants";
import useKeypress from "react-use-keypress";
import classNames from "classnames";

interface Props {
  images: Array<GalleryImageProps & ClientImageProps & { index: number }>;
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
  hasBackground?: boolean;
}

export function Lightbox({
  images,
  hasBackground,
  currentIndex,
  onIndexChange,
}: Props) {
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

  if (!image) return null;

  const initialScale = Math.min(
    window.innerHeight / image.height,
    window.innerWidth / image.width
  );

  return (
    <Dialog static open={true} onClose={handleClose} initialFocus={overlayRef}>
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 cursor-zoom-out bg-black/10 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
      />
      <div className="pointer-events-none fixed inset-0 z-50">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={animationVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <TransformWrapper
              wheel={{ smoothStep: 0.02 }}
              panning={{ lockAxisX: false }}
              minScale={Math.min(0.5, initialScale)}
              maxScale={2}
              centerZoomedOut={true}
              centerOnInit={true}
              initialScale={initialScale}
              disablePadding={true}
            >
              <TransformComponent
                wrapperClass="!size-full"
                contentClass={classNames("pointer-events-auto cursor-grab")}
              >
                <ClientImage
                  priority
                  src={image.src}
                  alt={image.alt}
                  base64={image.base64}
                  height={image.height}
                  width={image.width}
                  className={classNames("p-4", {
                    "bg-baby-pink p-4": hasBackground,
                  })}
                />
              </TransformComponent>
            </TransformWrapper>
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-auto">
          {currentIndex > 0 && (
            <button
              className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeIndex(currentIndex - 1)}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          {currentIndex + 1 < (images?.length ?? 0) && (
            <button
              className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeIndex(currentIndex + 1)}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-black/50 p-3 text-white text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
