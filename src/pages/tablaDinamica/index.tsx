import React, { ReactElement, useEffect, useState } from 'react'
import { Principal as DashboardLayout } from "@/layout/dashboard";
import { Geist, Geist_Mono } from 'next/font/google';
import styles from "@/styles/Home.module.css";
import useFetch from '@/utils/fetch';
import {  Table, Tag, Typography,  } from 'antd';
import { Product } from '@/utils/interface';
import { ColumnsType } from 'antd/es/table';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


  const columns: ColumnsType<Product> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Nombre",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: price => `$${price.toFixed(2)}`,
    },
    {
      title: "Categoría",
      dataIndex: "category",
      key: "category",
      render: category => <Tag color="blue">{category.name}</Tag>,
    },
  ];

export default function TablaDinamica() {
const { data: products, loading, error, fetchData } = useFetch<Product[]>(
    "https://api.escuelajs.co/api/v1/products"
    );
    const [fetched, setFetched] = useState(false);

    // const [data, setData] = useState<DataType[]>();

    useEffect(() => {
        fetchData()
          .then(() => setFetched(true))
          .catch(error => console.error("Error al obtener productos:", error));
      }, []);
  return (
    <>      
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
         {loading ? "Cargando..." : fetched ? "Productos Cargados" : "Cargar Productos"}
         {error && <p style={{ color: "red" }}>Error: {error}</p>}
         <Typography.Title level={2}>Lista de Productos</Typography.Title>
         <Table 
            dataSource={products || []}
            columns={columns}
         />
      </div>
      </>
  )
}

TablaDinamica.getLayout = (page:ReactElement):ReactElement => (
    <DashboardLayout title='Tabla Dinamica'>{page}</DashboardLayout>
);
