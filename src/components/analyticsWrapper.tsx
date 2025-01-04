import React from "react";
import { Analytics } from "@vercel/analytics/react";

const AnalyticsWrapper = ({ children }: any) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
};

export default AnalyticsWrapper;
