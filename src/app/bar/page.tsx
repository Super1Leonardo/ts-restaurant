import LittleCard from "@/components/LittleCard";

export default function Bar() {

    return (
        <div className="flex flex-col px-[5dvw] py-[4dvh] ">
            <div className="flex w-full justify-around ">
                <LittleCard title="Strong alcohol" href="bar" />
                <LittleCard title="Light alcohol" href="bar" />
                <LittleCard title="Alcoholic cocktails" href="bar" />
            </div>
            <div className="flex w-full justify-center gap-[1.78dvw] px-[10dvw] ">
                <LittleCard title="Cocktails" href="bar" />
                <LittleCard title="Other drinks" href="bar" />
            </div>
        </div>
    )
}

