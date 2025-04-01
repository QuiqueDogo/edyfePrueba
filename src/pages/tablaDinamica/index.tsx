import React, { ReactElement, useEffect, useState } from 'react'
import { Principal as DashboardLayout } from "@/layout/dashboard";
import { Geist, Geist_Mono } from 'next/font/google';
import styles from "@/styles/Home.module.css";
import useFetch from '@/utils/fetch';
import { Input, Space, Table, Tag, Typography, } from 'antd';
import { Product } from '@/utils/interface';
import { ColumnsType } from 'antd/lib/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { setSearchTerm } from '@/store/slices/filterSlice';
import { keygen } from '@/utils/utlis';
import Carousel from '@/components/Carousel';
import Loading from '@/components/Loading';



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
    const [fetched, setFetched] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const searchTerm = useSelector((state: RootState) => state.filter.searchTerm);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalCount] = useState<number>(60);
    const { data: products, loading, error, fetchData } = useFetch<Product[]>(
        `https://api.escuelajs.co/api/v1/products?offset=${(currentPage - 1) * 10}&limit=10`
    );


    const filteredData = products?.filter((product) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            product.title.toLowerCase().includes(searchLower) ||
            product.price.toString().includes(searchLower) ||
            product.category.name.toLowerCase().includes(searchLower)
        );
    }) || [];

    const handlePaginationChange = (page: number) => {
        setCurrentPage(page);
    };

    // const images = [
    //     "https://source.unsplash.com/600x400/?nature",
    //     "https://source.unsplash.com/600x400/?city",
    //     "https://source.unsplash.com/600x400/?ocean",
    //   ];
      
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        fetchData()
            .then((response) => {
                setFetched(true)
                const array:string [] = []
                response.forEach(element => {
                    array.push(element.images[0])
                })
                setImages(array)
                console.log(response, array)
            })
            .catch(error => console.error("Error al obtener productos:", error));
    }, [currentPage]);
    return (
        <>
            <div
                className={`${styles.page} ${geistSans.variable} ${geistMono.variable} w-100`}
            >
                {loading ? <Loading /> : fetched ? "" : ""}
                {error && <p style={{ color: "red" }}>Error: {error}</p>}
                <div style={{width:300, height:200}}>
                    <Carousel  images={images}/>

                </div>
                <Typography.Title level={2}>Lista de Productos</Typography.Title>
                <Space style={{ marginBottom: 16 }}>
                    <Input.Search
                        placeholder="Buscar por nombre..."
                        onChange={e => dispatch(setSearchTerm(e.target.value))}
                        value={searchTerm}
                        allowClear
                        style={{ width: 300 }}
                    />
                </Space>
                <Table
                    className='w-100'
                    dataSource={filteredData || []}
                    columns={columns}
                    loading={loading}
                    key={keygen('123','xd')}
                    pagination={{
                        current: currentPage,
                        pageSize: 10,
                        total: totalCount,
                        onChange: handlePaginationChange,
                        showSizeChanger: false, 
                    }}
                />
            </div>
        </>
    )
}

TablaDinamica.getLayout = (page: ReactElement): ReactElement => (
    <DashboardLayout title='Tabla Dinamica'>{page}</DashboardLayout>
);
