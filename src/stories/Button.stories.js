import React from "react";
import Button from "../components/button";

export default {
  title: "Button",
  args: {
    label: "Button",
  },
};

const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
export const Secondary = Story.bind({});
export const Danger = Story.bind({});
export const Success = Story.bind({});
