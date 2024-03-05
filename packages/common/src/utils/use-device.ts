"use client";

import { useMediaQuery } from "@uidotdev/usehooks";

export default function useDevice() {
  const isDeviceSm = useMediaQuery("only screen and (max-width : 640px)");
  const isDeviceMd = useMediaQuery("only screen and (max-width : 768px)");
  const isDeviceLg = useMediaQuery("only screen and (max-width : 1024px)");
  const isDeviceXl = useMediaQuery("only screen and (max-width : 1280px)");
  const isDevice2Xl = useMediaQuery("only screen and (max-width : 1536px)");

  return { isDeviceSm, isDeviceMd, isDeviceLg, isDeviceXl, isDevice2Xl };
}
