import type { ReactElement } from "react";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { PageRenderer } from "../components/page-renderer";
import { getPageMetadata } from "../utils/get-page-metadata";

export const dynamic = "force-static";

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return getPageMetadata("/", parent);
}

export default function Page(): ReactElement {
  return <PageRenderer path="/" />;
}
