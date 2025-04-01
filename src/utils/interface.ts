import { MenuProps, TableProps } from "antd";
import { ReactElement } from "react";

export interface Product {
    id: number;
    title: string;
    price: number ;
    category: { name: string };
    images: string;
    image: string;
    slug: string;
    description: string;
    creationAt: string;
    updatedAt: string;
    // data: ProductCardProps;
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

export interface CarouselProps {
  images: string[];
}

export interface ProductCardProps {
  data: {
      title: string;
      price: string;
      image: string;
      slug: string;
      description: string;
      creationAt: string;
      updatedAt:string;
  }
}