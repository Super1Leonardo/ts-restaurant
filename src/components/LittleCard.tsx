import React, { FC } from 'react';
import dishes from '../app/api/prisma';
import { redirect } from 'next/dist/server/api-utils';

interface cardProps {
    title: string;
    desc?: string;
    href?: string;
}

const LittleCard: FC<cardProps> = async ({title, desc, href}) => {
    let array: string[] = []
    let Newtitle = title.split(' ').join('')
    switch (Newtitle) {
        case 'Maincourses': 
            let insidearray: string[] = []
            dishes.forEach((item) => {if(item.id < 6) {insidearray.push(item.photo)} })
            array = []
            insidearray.forEach((item) => array.push(item))
            // console.log(array)
            break;
        case 'Sidedishes': 
            array = []; 
            dishes.forEach((item) => {if(item.id >= 13 && item.id < 18) {
                array.push(item.photo)
            }})
            break;
        case 'Salads':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 23 && item.id < 28) {
                array.push(item.photo)
            }})
        break;
        case 'Desserts':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 34 && item.id < 39) {
                array.push(item.photo)
            }})
        break;
        case 'Strongalcohol':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 44 && item.id < 48) {
                array.push(item.photo)
            }})
        break;
        case 'Lightalcohol':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 54 && item.id < 59) {
                array.push(item.photo)
            }})
        break;
        case 'Alcoholiccocktails':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 67 && item.id < 72) {
                array.push(item.photo)
            }})
        break;
        case 'Cocktails':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 77 && item.id < 82) {
                array.push(item.photo)
            }})
        break;
        case 'Otherdrinks':
            array = []; 
            dishes.forEach((item) => {if(item.id >= 92 && item.id < 97) {
                array.push(item.photo)
            }})
        break;
    }
    return (
        <a href={`/${href}/${Newtitle}`}>
            <div className=' cursor-pointer border-2 h-[calc(100%-4dvh)] border-white mb-[2dvh] px-[2dvw] flex flex-col items-center w-[28dvw] justify-center rounded-xl hover-scale-[105%] py-[3dvh] '>
                <h1 className='bg-white w-full text-black rounded-xl flex text-center justify-center px-[4dvw] py-[1dvh] mb-[1dvh] '>{title}</h1>
                <div className='h-[25dvh] w-[15dvw] bg-center rounded-xl bg-no-repeat bg-cover' style={{ backgroundImage: `url('${array[0]}')`}}></div>
            </div>
        </a>
    )
};

export default LittleCard;