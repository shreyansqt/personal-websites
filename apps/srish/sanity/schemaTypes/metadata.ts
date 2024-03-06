import { defineField, defineType } from "sanity";

export default defineType({
  name: "metadata",
  type: "document",
  title: "SEO Metadata",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "favicon",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "SEO Metadata",
      };
    },
  },
});
