'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Idishes } from '@/app/api/prisma';

export default function Product() {
  const searchParams = useSearchParams();
  const product = searchParams?.get('product')

  const [dishes, setDishes] = useState<Idishes[]>([]);

  useEffect(() => {
    const getDishes = async () => {
      const res = await fetch('http://localhost:3000/api')
      const data = await res.json()
      setDishes(data)
    }
    getDishes()
  }, [])

  useEffect(() => {
    // console.log(dishes);
  }, [dishes]);

  const selectedDish = dishes.find((item) => item.id === Number(product));
  console.log(selectedDish);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>{selectedDish?.name ? null:('Page is loading')}</h1>
      {selectedDish ? (
        <>
          <div style={{ backgroundImage: `url('${selectedDish.photo}')` }} className=' w-full top-[-50%] mt-[5dvh] h-[69dvh] bg-no-repeat bg-cover bg-center '>
            <div className=' w-full h-full bg-black bg-opacity-50'>
              <div className='h-full ml-[50%] px-[2dvw] items-center text-center flex-col flex py-[3dvh] bg-black bg-opacity-70 w-[50%]'>
                <h1 className='mb-[2dvh]'>{selectedDish.name}</h1>
                <h4>{selectedDish.description}</h4>
              </div>
            </div>
          </div>
        </>
      ): null}
    </div>
  );
};