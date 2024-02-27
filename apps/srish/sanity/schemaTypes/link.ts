import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'isExternal',
      title: 'Is External?',
      type: 'boolean',
    }),
    defineField({
      name: 'downloadFile',
      title: 'File',
      type: 'file',
    }),
  ],
})
