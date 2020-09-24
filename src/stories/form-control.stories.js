import React from "react";
import Input from "../components/form-elements/input";
import { Grid } from "../components/icons";

export default {
  title: "Form Control",
  component: Input,
};

const StoryInput = (args) => <Input {...args} />;

export const Default = StoryInput.bind({});
Default.args = {
  placeholder: "Username",
};

export const WithIcon = StoryInput.bind({});
WithIcon.args = {
  placeholder: "Enter Url",
  leftText: "https://",
  RightIcon: Grid,
};
