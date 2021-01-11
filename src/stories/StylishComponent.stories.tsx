import React from "react";
import StylishComponent from "../StylishComponent";

export default {
  title: "StylishComponent",
};

export const Default = () => <StylishComponent />;

export const PrimaryTheme = () => <StylishComponent theme="primary" />;

export const SecondaryTheme = () => <StylishComponent theme="secondary" />;
