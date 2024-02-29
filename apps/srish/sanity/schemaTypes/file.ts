import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'downloadFile',
  title: 'File',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      validation: (Rule) => Rule.required()
    }),
  ],
})
