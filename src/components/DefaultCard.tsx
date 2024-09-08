'use client'
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { FC, useEffect, useRef } from "react";

interface defCardProps {
    title: string;
    desc?: string;
    image: string;
    id: number;
    menu: string;
}

const DefaultCard: FC<defCardProps> = ({title, image, id, menu}) => {
    let bar = id > 42 ? 'bar' : 'menu'
    const router = useRouter()
    function handleClick() {
        router.push(`/${bar}/${menu}/product?product=${id}`)
    }
    return (
        <div onClick={handleClick} className="bg-center bg-cover hover:z-10 hover-scale-[110%] cursor-pointer select-none rounded-xl bg-no-repeat h-[35dvh] " style={{ backgroundImage: `url('${image}')` }} >
            <div className="h-full flex justify-center w-full py-[1dvh] px-[1dvw] rounded-xl bg-black bg-opacity-50 ">
                <h2 className="text-center"> {title} </h2>
            </div>
        </div>
    )
}

export default DefaultCard;