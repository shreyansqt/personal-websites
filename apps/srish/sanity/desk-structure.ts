import type { StructureBuilder, ListBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder): ListBuilder => {
  return S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Header")
                .child(S.document().schemaType("header").documentId("header")),
              S.listItem()
                .title("Footer")
                .child(S.document().schemaType("footer").documentId("footer")),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => {
          const listItemId = listItem.getId();
          return listItemId && !["header", "footer"].includes(listItemId)
        }
      ),
    ]);
};
