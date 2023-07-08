import type { StructureBuilder, StructureResolverContext } from "sanity/desk";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { media } from "sanity-plugin-media";
import { FiBriefcase } from "react-icons/fi";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '18la2th8',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S: StructureBuilder, context: StructureResolverContext) =>
      S.list().title(`Content`).items([
        orderableDocumentListDeskItem({ type: `project`, title: `Project`, icon: FiBriefcase, S, context }),
      ]),
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
