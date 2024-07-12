import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { Link } from "react-router-dom";

type TRoutes = {
  path: string;
  element: ReactNode;
};

type TAdminSideBarItem = {
  key: string;
  label: ReactNode;
  children ?: TAdminSideBarItem[]
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];

export const adminRoutes: TRoutes[] = [];
for (const element of adminPaths) {
  if (element.name && element.path) {
    adminRoutes.push({
      path: element.path,
      element: element.element,
    });
  }
  if (element.name && element.children) {
    for (const childrenElement of element.children) {
      adminRoutes.push({
        path: childrenElement.path,
        element: childrenElement.element,
      });
    }
  }
}


export const adminSideBarItems : TAdminSideBarItem[] = [];
for (const element of adminPaths) {
  if (element.name && element.path) {
    adminSideBarItems.push({
      key: element.name,
      label:<Link to={`/admin/${element.path}`} >{element.name}</Link>,
    });
  }
  if (element.name && element.children) {
    adminSideBarItems.push({
      key: element.name,
      label:element.name,
      children:element.children.map(item =>({
        key: item.name,
        label:<Link to={`/admin/${item.path}`} >{item.name}</Link>,
      }))
    })
  }
}


export default adminPaths;
