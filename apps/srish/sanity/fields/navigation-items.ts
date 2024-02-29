import {defineField, defineArrayMember} from 'sanity';

export const navigationItems = defineField({
  name: "items",
  title: "Navigation Items",
  type: "array",
  of: [
    defineArrayMember({
      name: "link",
      title: "Reference to Link",
      type: "reference",
      to: { type: "link" },
    }),
    defineArrayMember({
      name: "downloadFile",
      title: "Reference to File",
      type: "reference",
      to: { type: "downloadFile" },
    }),
    defineArrayMember({
      name: "page",
      title: "Reference to Page",
      type: "reference",
      to: { type: "page" },
    }),
  ],
})
