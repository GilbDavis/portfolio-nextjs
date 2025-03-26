import React from "react";

const WorkTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-full bg-muted px-3 py-1 text-sm">{children}</div>
  );
};

export default WorkTag;
