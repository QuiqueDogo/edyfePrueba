import { Principal as DashboardLayout } from "@/layout/dashboard";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import styles from "@/styles/Home.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/tablaDinamica');
  }, [router]);
  return (
    <>
       
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
       
      
      </div>
    </>
  );
}

Home.getLayout = (page:ReactElement) => <DashboardLayout title="home">{page}</DashboardLayout>;
