import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'External Link',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    }),
  ],
})
