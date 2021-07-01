export default {
  name: "contact",
  title: "contact",
  type: "object",
  fields: [
    {
      name: "content",
      title: "content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "content",
    },
  },
};
