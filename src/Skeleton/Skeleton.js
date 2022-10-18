import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={267}
    height={72}
    viewBox="0 0 267 72"
    backgroundColor="#f3f3f3"
    foregroundColor="#d8d5d5"
    {...props}
  >
    <circle cx="36" cy="36" r="36" />
    <rect x="82" y="16" rx="4" ry="4" width="178" height="16" />
    <rect x="82" y="45" rx="4" ry="4" width="105" height="15" />
  </ContentLoader>
);

export default MyLoader;
