import React from "react";
import Checkbox from "../components/form-elements/checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const StoryCheckbox = (args) => <Checkbox {...args}>Hey there!</Checkbox>;

export const Default = StoryCheckbox.bind({});