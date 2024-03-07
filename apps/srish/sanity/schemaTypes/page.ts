import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "page",
  fields: [
    defineField({
      name: "path",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph Metadata",
      type: "object",
      fields: [
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "components",
      type: "array",
      of: [
        defineArrayMember({
          type: "hero",
        }),
        defineArrayMember({
          type: "postList",
        }),
        defineArrayMember({
          type: "values",
        }),
      ],
    }),
  ],
});
