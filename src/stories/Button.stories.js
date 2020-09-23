import React from "react";
import Button from "../components/button";
import IconButton from "../components/icon-button";
import { Plus } from "../components/icons";

export default {
  title: "Buttons",
  component: Button,
};

const StoryButton = (args) => <Button {...args} />;
const StoryIconButton = (args) => <IconButton {...args}><Plus/></IconButton>;

export const Simple = StoryButton.bind({});
Simple.args = {
  label: "Button",
  variant: "primary"
}

export const Icon = StoryIconButton.bind({});
Icon.args = {
  variant: "primary"
}