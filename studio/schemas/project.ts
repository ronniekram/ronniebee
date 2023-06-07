import { orderRankField } from "@sanity/orderable-document-list";
import { FiBriefcase } from "react-icons/fi";

export default {
  name: `project`,
  title: `Project`,
  type: `document`,
  icon: FiBriefcase,
  fieldsets: [
    { name: `details`, title: `Project Details` },
    { name: `seo`, title: `SEO` },
  ],
  groups: [
    { name: `details`, title: `Project Details` },
    { name: `media`, title: `Project Media` },
    { name: `seo`, title: `SEO`, },
  ],
  fields: [
    {
      name: `name`,
      title: `Project Name`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `slug`,
      type: `slug`,
      options: {
        source: `name`,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, `-`).slice(0, 200),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `thumbnail`,
      title: `Project Thumbnail`,
      type: `image`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `headline`,
      title: `Headline`,
      type: `string`,
      fieldset: `details`,
      group: `details`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `stack`,
      title: `Tech Stack`,
      type: `array`,
      of: [{ type: `string` }],
      fieldset: `details`,
      group: `details`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `client`,
      title: `Client Name`,
      type: `string`,
      fieldset: `details`,
      group: `details`,
    },
    {
      name: `creative`,
      title: `Creative Team`,
      type: `array`,
      of: [{ type: `string` }],
      fieldset: `details`,
      group: `details`,
    },
    {
      name: `devs`,
      title: `Development Team`,
      type: `array`,
      of: [{ type: `string` }],
      fieldset: `details`,
      group: `details`,
    },
    {
      name: `github`,
      title: `Github URL`,
      type: `url`,
      fieldset: `details`,
      group: `details`,
    },
    {
      name: `live`,
      title: `Live Site URL`,
      type: `url`,
      fieldset: `details`,
      group: `details`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `details`,
      title: `Details`,
      type: `array`,
      of: [{ type: `block` }],
      fieldset: `details`,
      group: `details`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `media`,
      title: `Project Media`,
      type: `array`,
      of: [
        { type: `file`, accept: [`mp4`] },
        { type: `image` },
      ],
      group: `media`,
      validation: (Rule: any) => Rule.required(),
    },
    // ORDER RANK FIELD
    orderRankField({ type: `project` }),
    // SEO
    {
      name: `metaTitle`,
      title: `Page/Meta Title`,
      type: `string`,
      fieldset: `seo`,
      group: `seo`,
    },
    {
      name: `metaDesc`,
      title: `Meta Description`,
      type: `text`,
      rows: 2,
      fieldset: `seo`,
      group: `seo`,
    },
  ],
};
