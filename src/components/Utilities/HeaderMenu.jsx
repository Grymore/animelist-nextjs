import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-4">
        <h3 className="text-2xl text-colors-primary text-center">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
