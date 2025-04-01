import React, { ReactElement, useEffect, useState } from 'react'
import { Principal as DashboardLayout } from "@/layout/dashboard";
import { Geist, Geist_Mono } from 'next/font/google';
import styles from "@/styles/Home.module.css";
import { Flex } from 'antd';
import useFetch from '@/utils/fetch';
import { Product } from '@/utils/interface';
import Loading from '@/components/Loading';
import ProductCard from '@/components/Cardo';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: 6,
};


export default function Productos() {
  const [fetched, setFetched] = useState(false);

  const { data: products, loading, error, fetchData } = useFetch<Product[]>(
    `https://api.escuelajs.co/api/v1/products`
  );


  useEffect(() => {
    fetchData()
      .then((response) => {
        setFetched(true)
        console.log(response)
      })
      .catch(error => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable} flex flex-row`}
      >
        {loading ? <Loading /> : fetched ? "Productos Cargados" : "Cargar Productos"}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <Flex gap="large" align="start" vertical>
          <Flex style={boxStyle} wrap justify='space-around' align='center'>
            {products?.map(element => <ProductCard key={element.id} data={element}/> )}
          </Flex>
        </Flex>
      </div>
    </>
  )
}

Productos.getLayout = (page: ReactElement) => <DashboardLayout title='Productos'>{page}</DashboardLayout>;