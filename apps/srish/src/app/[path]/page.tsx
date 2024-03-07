import type { TPage } from "@repo/common/types";
import type { Metadata, ResolvingMetadata } from "next";
import type { ReactElement } from "react";
import { client } from "@/sanity/lib/client";
import { PAGES_QUERY } from "@/sanity/lib/queries";
import { token } from "@/sanity/lib/token";
import { PageRenderer } from "@/src/components/page-renderer";
import { getPageMetadata } from "@/src/utils/get-page-metadata";

interface PageProps {
  params: {
    path: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return getPageMetadata(`/${params.path}`, parent);
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const pages = await client.withConfig({ token }).fetch<TPage[]>(PAGES_QUERY);

  return pages
    .filter(({ path }) => path !== "/") // remove homepage, as it has it's own page.tsx
    .map((page) => {
      return {
        path: page.path.substring(1),
      };
    });
}

export default function Page({ params }: PageProps): ReactElement {
  return <PageRenderer path={`/${params.path}`} />;
}
