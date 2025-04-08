import React from "react";

const SkillTagContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{children}</div>
  );
};

export default SkillTagContainer;
