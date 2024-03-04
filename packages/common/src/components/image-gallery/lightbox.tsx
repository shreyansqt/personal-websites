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
import classNames from "classnames";
import type { TSanityImage } from "../../types";
import { SanityImage } from "../sanity-image";
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

  return (
    <Dialog initialFocus={overlayRef} onClose={handleClose} open static>
      <Dialog.Overlay
        animate={{ opacity: 1 }}
        as={motion.div}
        className="fixed inset-0 z-30 cursor-zoom-out bg-black/10 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        key="backdrop"
        onClick={handleClose}
        ref={overlayRef}
      />
      <div className="pointer-events-none fixed inset-0 z-50">
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
              initialScale={1}
              maxScale={2}
              minScale={1}
              panning={{ lockAxisX: false }}
              wheel={{ smoothStep: 0.02 }}
            >
              <TransformComponent
                contentClass={classNames("pointer-events-auto cursor-grab")}
                wrapperClass="!size-full"
              >
                <SanityImage
                  className={classNames("p-4", {
                    "bg-baby-pink p-4": hasBackground,
                  })}
                  image={image}
                  priority
                />
              </TransformComponent>
            </TransformWrapper>
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-auto">
          {currentIndex > 0 && (
            <button
              className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
              onClick={() => {
                changeIndex(currentIndex - 1);
              }}
              style={{ transform: "translate3d(0, 0, 0)" }}
              type="button"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          {currentIndex + 1 < images.length && (
            <button
              className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
              onClick={() => {
                changeIndex(currentIndex + 1);
              }}
              style={{ transform: "translate3d(0, 0, 0)" }}
              type="button"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
          <button
            className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-black/50 p-3 text-white text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
            onClick={handleClose}
            type="button"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
