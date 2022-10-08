// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the page",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the page",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/page/${page._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "dynamic_pages",
  documentTypes: [Page]
});
export {
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HHGMZJ2Z.mjs.map
