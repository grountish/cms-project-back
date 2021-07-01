export default {
  name: "Page",
  title: "Page",
  type: "document",
  __experimental_actions: ["update", "publish", "create", "delete"],

  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [
        { type: "hero" },
        { type: "textCallImg" },
        { type: "richText" },
        { type: "marquee" },
        { type: "youtube" },
        { type: "blockHighlight" },
        { type: "contact" },
      
      ],
    },
  ],
};
