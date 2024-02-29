import type { ReactElement } from "react";
import type { TPage } from "@repo/common/types";
import { loadQuery } from "@/sanity/lib/store";
import { getPageQuery } from "@/sanity/lib/queries";
import { PageComponent } from "./page-component";

interface PageRendererProps {
  path: string;
}

export async function PageRenderer({ path }: PageRendererProps): Promise<ReactElement> {
  const query = getPageQuery(path);
  const initial = await loadQuery<TPage>(query);
  return (
    <>
      {initial.data.components.map((component) => {
        return <PageComponent key={component._key} {...component} />;
      })}
    </>
  );
}
