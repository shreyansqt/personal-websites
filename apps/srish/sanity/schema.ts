import type { SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/block-content";
import post from "./schemaTypes/post";
import link from "./schemaTypes/link";
import header from "./schemaTypes/header";
import footer from "./schemaTypes/footer";
import page from "./schemaTypes/page";
import hero from "./schemaTypes/hero";
import postList from "./schemaTypes/post-list";
import file from "./schemaTypes/file";
import metadata from "./schemaTypes/metadata";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blockContent,
    link,
    header,
    footer,
    page,
    hero,
    postList,
    file,
    metadata
  ],
};
