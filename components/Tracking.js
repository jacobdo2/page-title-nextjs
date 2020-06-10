import React from "react";
export default function Tracking({ children }) {
  React.useEffect(() => {
    console.log(document.title);
  });

  return <>{children}</>;
}
