import { defineType } from "sanity";
import { navigationItems } from "../fields/navigation-items";

export default defineType({
  name: "header",
  title: "Site Header",
  type: "document",
  fields: [navigationItems],
  preview: {
    prepare: () => {
      return {
        title: "Site Header",
      };
    },
  },
});
