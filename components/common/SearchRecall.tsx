import Image from "next/image";
import { MarqueeDemo } from "./MarqueeMarke";
export default function SearchRecall() {
  return (
    <div className="  relative  overflow-hidden">
      <div className="  relative container flex pb-20  z-1 flex-col items-center md:mt-56 mt-24">
        <Image
          src={"search-icon.svg"}
          alt="search recall"
          width={74}
          height={74}
          className=" rounded-lg"
        />
        <h1 className=" text-primary text-6xl mt-10 font-bold">
          Search. Recall
        </h1>
        <Image
          src={"/InputSallary.svg"}
          alt="input salary"
          width={500}
          height={100}
        />
        <h1 className="text-primary pb-10 text-6xl font-bold">Filter</h1>
        <MarqueeDemo  />
        <Image
          src={"ABCPVt.svg"}
          alt="ABCPVt"
          width={588}
          height={164}
          className=" mt-12"
        />
        <Image
          src={"/bar.svg"}
          alt="ABCPVt"
          width={588}
          height={164}
          className=" absolute   left-1/2 -translate-x-1/2  -bottom-25 "
        />

      </div>

      <img
        src={"backGrounGrayForSeachRecall.svg"}
        alt="ABCPVt"
        className=" mt-12 absolute  left-0 bottom-0 w-full"
      />
    </div>
  );
}
