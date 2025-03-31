import React, { ReactElement } from 'react'
import { Principal as DashboardLayout } from "@/layout/dashboard";
import { Geist, Geist_Mono } from 'next/font/google';
import styles from "@/styles/Home.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function TablaDinamica() {
  return (
    <>      
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
xd
      </div>
      </>
  )
}

TablaDinamica.getLayout = (page:ReactElement):ReactElement => (
    <DashboardLayout title='Tabla Dinamica'>{page}</DashboardLayout>
);
