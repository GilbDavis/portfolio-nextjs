import React from "react";

const ProjectTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
      {children}
    </div>
  );
};

export default ProjectTag;
