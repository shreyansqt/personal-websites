
import type { DocumentLocationResolver } from "sanity/presentation";
import { map } from "rxjs";
import type { TPost } from "@repo/common/types";

// Pass 'context' as the second argument
export const locate: DocumentLocationResolver = (params, context) => {
  // Set up locations for post documents
  if (params.type === "post") {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      { perspective: "previewDrafts" } // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc: TPost) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc.slug.current) {
          return null;
        }
        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/case-studies/${doc.slug.current}`,
            },
            {
              title: "Portfolio",
              href: "/",
            },
          ],
        };
      })
    );
  }
  return null;
}
