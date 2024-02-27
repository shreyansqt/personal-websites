import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/block-content";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import link from "./schemaTypes/link";
import header from "./schemaTypes/header";
import footer from "./schemaTypes/footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, link, header, footer],
};
