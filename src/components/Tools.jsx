import React from "react";
import "./styles/Tools.css";
const Tools = ({ tools }) => {
  return (
    <div className="tools">
      {tools.map((tool) => {
        return (
          <span className="tool" key={tool.id} id={`tool${tool.id}`}>
            {tool.name}
          </span>
        );
      })}
    </div>
  );
};
export default Tools;
