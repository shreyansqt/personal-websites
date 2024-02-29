import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (S) => S.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }: { title?: string }) => ({
      title,
      subtitle: "Hero Component",
    }),
  },
});
