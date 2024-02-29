import { defineField, defineType } from "sanity";

export default defineType({
  name: "postList",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Unused title",
      initialValue: "Post List"
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }: { title?: string }) => ({
      title,
      subtitle: "Post List Component",

    }),
  },
});
