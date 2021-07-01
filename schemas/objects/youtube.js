import React, { useState } from "react";


import { PatchEvent, set } from "part:@sanity/form-builder/patch-event";
import FormField from "part:@sanity/components/formfields/default";

import { Tooltip, Text, Box, TextInput } from "@sanity/ui";

const HoverInput = React.forwardRef((props, ref) => {
  const { type, onChange } = props;
  const lee = `https://www.youtube.com/embed/` + props.value.split('https://www.youtube.com/watch?v=')[1]
  return (
    <FormField label={type.title} description={type.description}>
      <Tooltip
        content={
          <Box padding={2}>
            <Text>Important Text</Text>
          </Box>
        }
        placement="top"
      >
        <TextInput
          type="text"
          ref={ref}
          placeholder={type.placeholder}
          value={props.value}
          onChange={(event) => {
            onChange(PatchEvent.from(set(event.target.value)));
          }}
        />
      </Tooltip>
      <Box padding={2}>
        <iframe
          width="560"
          height="315"
          src={lee}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </FormField>
  );
});
export default {
  name: "youtube",
  title: "Youtube",
  type: "object",

  fields: [
   
    {
      name: "seoString",
      title: "Youtubelink",
      description: "📼",
      type: "string",
      tipDescription: "Hey! Seriously, make it SEO friendly!",
      inputComponent: HoverInput,
    },
    {
      name: "size",
      type: "array",
      title: "size",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.unique(),
      options: {
        layout: "radio",
        list: [
          { title: "small", value: "small" },
          { title: "medium", value: "medium" },
          { title: "full", value: "full" },
        ],
      },
    },
  ],
};
