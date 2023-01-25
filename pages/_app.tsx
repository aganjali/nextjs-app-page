import type { AppProps, NextWebVitalsMetric } from "next/app";

import React from "react";

import "../styles/index.css";

export function reportWebVitals({}: NextWebVitalsMetric) {}

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}
export default MyApp;
