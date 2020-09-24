import React from "react";
import Button from "../components/button";
import IconButton from "../components/icon-button";
import { Plus } from "../components/icons";

export default {
  title: "Button",
  component: Button,
};

const StoryButton = (args) => <Button {...args} />;
const StoryIconButton = (args) => <IconButton {...args}><Plus/></IconButton>;

export const Default = StoryButton.bind({});
Default.args = {
  label: "Button",
  variant: "primary"
}

export const ButtonIcon = StoryIconButton.bind({});
ButtonIcon.args = {
  variant: "primary"
}