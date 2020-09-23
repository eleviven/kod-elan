import React from "react";
import Button from "../components/button";

export default {
  title: "Buttons",
  component: Button,
};

const StoryButton = (args) => <Button {...args} />;

export const SimpleButton = StoryButton.bind({});
SimpleButton.args = {
  label: "Button",
  variant: "primary"
}