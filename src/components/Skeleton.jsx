import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={509}
    viewBox="0 0 260 509"
    backgroundColor="#f5f5f5"
    foregroundColor="#b1aaaa"
    {...props}
  >
    <circle cx="123" cy="121" r="87" />
    <rect x="61" y="211" rx="0" ry="0" width="124" height="34" />
    <rect x="37" y="252" rx="0" ry="0" width="174" height="59" />
    <rect x="23" y="317" rx="0" ry="0" width="72" height="32" />
    <rect x="120" y="317" rx="0" ry="0" width="97" height="32" />
  </ContentLoader>
);

export default Skeleton;
