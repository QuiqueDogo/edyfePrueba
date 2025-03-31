import { Principal as DashboardLayout } from "@/layout/dashboard";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import styles from "@/styles/Home.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "@/store/slices/counterSlice";
// import { RootState } from "@/store";


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
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  useEffect(() => {
    // Redirigir automáticamente a /dashboard cuando se accede a la raíz
    router.push('/tablaDinamica');
  }, [router]);
  return (
    <>
        {/* <h1>Contador: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> */}
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
      
      </div>
    </>
  );
}

Home.getLayout = (page:ReactElement) => <DashboardLayout title="home">{page}</DashboardLayout>;
