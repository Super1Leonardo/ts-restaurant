import SmallCard from "@/components/SmallCard";

export default function Home() {
  return (
    <div className=" flex flex-col items-center pt-[5dvh] px-[5dvw] ">
      <h1 className=" text-center text-5xl lg:text-8xl font-bold">Savory Delights</h1>
      <div className="bg-black p-[1%] border-0 lg:border-slate-800 lg:border-[6px] w-[80%] mt-[5dvh] rounded-xl ">
        <p className="text-2xl hidden lg:block text-center lg:text-left"><a className="text-3xl font-bold">Savory Delights</a> — luxury restaurant with dark-theme interior. It create an unforgetable and enchating atmosphere of your evening.
        The elegant decor features lush plants and sophisticated furnishings, offering diners a serene and visually captivating experience amidst the rich, dark tones of the space. </p>
      </div>
      <div className=" bg-slate-50 mt-[5dvh] hidden lg:flex px-[2dvw] py-[1dvh] items-center justify-center rounded-xl ">
        <h1 className="text-black">Our interior</h1>
      </div>
      <div className="w-[70%] my-[5dvh] h-[550px] hidden lg:flex bg-black rounded-xl ">
        <div style={{backgroundImage: `url('https://i.imgur.com/9Z4KEBO.jpeg')`}} className=" hover-scale-[110%] rounded-xl bg-no-repeat bg-contain basis-1/2 mr-[5dvw] h-full"></div>
        <div style={{backgroundImage: `url('https://i.imgur.com/2iE2stH.jpeg')`}} className=" hover-scale-[110%] rounded-xl bg-no-repeat bg-contain basis-1/2 h-full"></div>
      </div>
      <div className=" lg:hidden">
        <h1 className="text-center text-5xl mb-[2.5dvh]">Menu</h1>
        <SmallCard menu={true} title="Main courses" />
        <SmallCard menu={true} title="Side dishes" />
        <SmallCard menu={true} title="Salads" />
        <SmallCard menu={true} title="Desserts" />
      </div>
      <span className="w-full h-[0.5dvh] mb-[7dvh] lg:hidden rounded-full bg-white"></span>
      <div className=" lg:hidden">
        <h1 className="text-center text-5xl mb-[2.5dvh]">Bar</h1>
        <SmallCard menu={false} title="Strong alcohol" />
        <SmallCard menu={false} title="Light alcohol" />
        <SmallCard menu={false} title="Alcoholic cocktails" />
        <SmallCard menu={false} title="Cocktails" />
        <SmallCard menu={false} title="Other drinks" />
      </div>
    </div>
  )
}