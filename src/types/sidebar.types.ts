import { ReactNode } from "react";

export type TAdminSideBarItem = {
  key: string;
  label: ReactNode;
  children?: TAdminSideBarItem[];
};

export type TRoutes = {
  path: string;
  element: ReactNode;
};

export type TPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPaths[];
};
