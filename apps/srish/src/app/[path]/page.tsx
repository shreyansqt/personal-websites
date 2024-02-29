import type { TPage } from "@repo/common/types";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { client } from "@/sanity/lib/client";
import { PAGES_QUERY } from "@/sanity/lib/queries";
import { token } from "@/sanity/lib/token";
import { PageRenderer } from "@/src/components/page-renderer";
import { getPageMetadata } from "@/src/utils/get-page-metadata";

export async function generateStaticParams(): Promise<{ path: string }[]> {
  const pages = await client.withConfig({ token }).fetch<TPage[]>(PAGES_QUERY);

  return pages
    .filter(({ path }) => path !== "/") // remove homepage, as it has it's own page.tsx
    .map((page) => {
      return {
        path: page.path.substring(1),
      };
    });
}

interface PageProps {
  params: {
    path: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return getPageMetadata(`/${params.path}`);
}

export default function Page({ params }: PageProps): ReactElement {
  return <PageRenderer path={`/${params.path}`} />;
}
