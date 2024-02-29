import type { ReactElement } from "react";
import type { TPage } from "@repo/common/types";
import { notFound } from "next/navigation";
import { loadQuery } from "@/sanity/lib/store";
import { getPageQuery } from "@/sanity/lib/queries";
import { PageComponent } from "./page-component";

interface PageRendererProps {
  path: string;
}

export async function PageRenderer({ path }: PageRendererProps): Promise<ReactElement> {
  const query = getPageQuery(path);
  const {data} = await loadQuery<TPage | null>(query);
  if(!data) {
    notFound();
  }
  return (
    <>
      {data.components.map((component) => {
        return <PageComponent key={component._key} {...component} />;
      })}
    </>
  );
}
