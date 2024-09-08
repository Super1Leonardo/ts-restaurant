import LittleCard from "@/components/LittleCard";
import Card from "@/components/LittleCard";
import dishes from "../api/prisma";

export default function Menu() {
  return (
    <>
      <div className="flex w-full items-center mb-[-3dvh] justify-around px-[5dvw] py-[4dvh] ">
        <LittleCard title="Main courses" href="menu" />
        <LittleCard title="Side dishes" href="menu" />
        <LittleCard title="Salads" href="menu" />
      </div>
      <div className="w-full flex justify-center ">
        <LittleCard title="Desserts" href="menu" />
      </div>
    </>
  )
}