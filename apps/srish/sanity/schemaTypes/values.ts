import { defineField, defineType } from "sanity";

export const values = defineType({
  name: "values",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (S) => S.required(),
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "values",
      type: "array",
      of: [
        {
          type: "object",
          title: "Value",
          fields: [
            { name: "icon", type: "image" },
            { name: "title", type: "string", validation: (S) => S.required() },
            { name: "description", type: "blockContent" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }: { title?: string }) => ({
      title,
      subtitle: "Values Section",
    }),
  },
});
