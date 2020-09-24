import React from "react";
import Select from "../components/form-elements/select";

export default {
  title: "Select",
  component: Select
};

export const Default = (args) => (
  <Select {...args}>
    <option>Select</option>
  </Select>
);
