import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const AnalyticsWrapper = ({ children }: any) => {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default AnalyticsWrapper;
