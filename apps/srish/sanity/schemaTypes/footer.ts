import { defineField, defineType } from "sanity";
import { navigationItems } from "../fields/navigation-items";

export default defineType({
  name: "footer",
  title: "Site Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    navigationItems,
  ],
  preview: {
    prepare: () => {
      return {
        title: "Site Footer",
      };
    },
  },
});
