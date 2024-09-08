import DefaultCard from "@/components/DefaultCard"
import dishes from "../../api/prisma";
// import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MainCourses() {
    // const router = useRouter()
    // useEffect(() => {
    //     router.push
    // }, [])
    let dishs = dishes.slice(23, 32)
    // function handleClick() {
    //     router.push('/menu/Maincourses/product?product=steak')
    // }
    return (
        <div className=" grid lg:grid-cols-4 grid-cols-1 gap-x-[2dvw] my-[5dvh] gap-y-[2dvh] px-[5dvw] ">
            {dishs.map((item) => (
                <DefaultCard key={item.id} menu="Salads" image={item.photo} desc={item.description} title={item.name} id={item.id} />
            ))}
            {/* <button onClick={handleClick}>Click here</button> */}
        </div>
    )
}