import React from "react";
import AnalyticsWrapper from "./src/components/AnalyticsWrapper";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export const wrapPageElement = ({ element }) => {
  return <AnalyticsWrapper>{element}</AnalyticsWrapper>;
};

import "./src/styles/global.css";
