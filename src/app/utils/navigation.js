import * as BIcon from "react-bootstrap-icons";

export const navigations = [
  {
    name: "List",
    link: "/admin/list",
    icon: <BIcon.List />,
  },
  {
    name: "Sub menu",
    icon: <BIcon.ListCheck />,
    children: [
      { name: "Sub Menu 1", icon: <BIcon.Dropbox />, link: "/session/signin" },
      { name: "Sub Menu 2", icon: <BIcon.Activity />, link: "/session/signup" },
    ],
  },
];
