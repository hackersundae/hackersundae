// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the page',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'dynamic_content',
  documentTypes: [Page],
})
