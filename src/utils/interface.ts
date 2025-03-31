import { MenuProps } from "antd";
import { ReactElement } from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: { name: string };
    images: string[];
  }


 export interface Item {
    key: string;

}
  
export interface DashboardLayoutProps {
    title: string; 
    children: ReactElement;
  }

export type MenuItem = Exclude<NonNullable<MenuProps["items"]>[number], null | undefined> & {
    path: string;
    label: string;
};