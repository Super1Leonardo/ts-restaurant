'use client'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface smcard {
    title: string
    menu: boolean;
}

const SmallCard: FC<smcard> = ({title, menu}) => {
    let title1 = title
    let menu1 = menu ? 'menu' : 'bar'
    title = title.split(' ').join('')
    const router = useRouter()
    function handleClick() {
        router.push(`/${menu1}/${title}`)
    }
    return (
        <div onClick={handleClick} className='bg-gray-200 flex items-center justify-center mb-[5dvh] h-[10dvh] px-[4dvw] rounded-xl '>
            <h2 className=' text-3xl text-black text-center'>{title1}</h2>
        </div>
    );
};

export default SmallCard;