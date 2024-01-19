import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navigations } from "../../app/utils/navigation";

const SideMaster = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Mengubah nilai state saat gambar diklik
  };

  const renderSidebar = (data) => {
    return data.map((item, index) => {
      let cekChildren = item.children || false;
      if (cekChildren) {
        return (
          <SubMenu
            label={item.name}
            icon={item.icon}
            rootStyles={{
              ["& > ." + menuClasses.button]: {
                color: "#fff",
                backgroundColor: "#150e37",
                "&:hover": {
                  backgroundColor: "#E6D2FD",
                  color: "#000",
                },
              },
              ["." + menuClasses.subMenuContent]: {
                color: "#fff",
                backgroundColor: "#150e37",
                "&:hover": {
                  backgroundColor: "#150e37",
                  color: "#fff",
                },
              },
            }}
          >
            {renderSidebar(cekChildren)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem
            component={<Link to={item.link} />}
            icon={item.icon}
            rootStyles={{
              ["." + menuClasses.button]: {
                "&:hover": {
                  backgroundColor: "#E6D2FD",
                  color: "#000",
                },
              },
            }}
          >
            {" "}
            {item.name}{" "}
          </MenuItem>
        );
      }
    });
  };
  return (
    <Sidebar collapsed={collapsed} backgroundColor="#150e37">
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: active ? "#000" : "#fff",
                backgroundColor: active ? "#E6D2FD" : "#150e37",
              };
          },
        }}
        closeOnClick
      >
        {renderSidebar(navigations)}
      </Menu>
    </Sidebar>
  );
};

export default React.memo(SideMaster);
