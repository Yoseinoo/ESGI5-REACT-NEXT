"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../external/fetch";
import Image from 'next/image'

export default function Fetch() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetchProducts();
                setProducts(res.products);
            } catch (err) {
                console.error(err);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        if (products) console.log(products);
    }, [products]);

    return (
        <>
            <div>{products ? 'Products loaded' : 'Loading...'}</div>
            <div>
                {products.map((product: any) => (
                    <div
                    key={product.code}
                    className="border p-4 rounded shadow flex flex-col items-center"
                    >
                        <Image
                            src={product.image_url}
                            alt={product.product_name}
                            width={128}
                            height={128}
                            className="w-32 h-32 object-contain mb-2"
                        />
                        <h2 className="font-bold text-lg text-center">{product.product_name}</h2>
                        <p>Energy: {product.nutriments.energy} kcal</p>
                    </div>
                ))}
            </div>
        </>
    );
}
