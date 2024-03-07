import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
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
      type: "blockContent",
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
