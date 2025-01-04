import React from "react";
import "./src/styles/global.css";
import AnalyticsWrapper from "./src/components/AnalyticsWrapper";

export const wrapPageElement = ({ element }) => {
  return <AnalyticsWrapper>{element}</AnalyticsWrapper>;
};
