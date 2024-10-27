import { Link } from "react-router-dom";
import { TAdminSideBarItem, TPaths } from "../types";



export const sideBarItemsGenerator = (paths: TPaths[], role: string) => {
  const adminSideBarItems: TAdminSideBarItem[] = [];
  for (const element of paths) {
    if (element.name && element.path) {
      adminSideBarItems.push({
        key: element.name,
        label: <Link to={`/${role}/${element.path}`}>{element.name}</Link>,
      });
    }
    if (element.name && element.children) {
      adminSideBarItems.push({
        key: element.name,
        label: element.name,
        children: element.children.map((item) => ({
          key: item.name,
          label: <Link to={`/${role}/${item.path}`}>{item.name}</Link>,
        })),
      });
    }
  }
  return adminSideBarItems
};
