import React from "react";

const SkillTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:scale-105 hover:transition-transform hover:duration-300">
      <div className="text-primary">{children}</div>
    </div>
  );
};

export default SkillTag;
