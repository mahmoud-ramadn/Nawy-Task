import Image from "next/image";
import { MarqueeDemo } from "./MarqueeMarke";
export default function SearchRecall() {
  return (
    <div className="  container flex  flex-col items-center md:mt-56 mt-24">
      <Image
        src={"search-icon.svg"}
        alt="search recall"
        width={74}
        height={74}
        className=" rounded-lg"
      />
      <h1 className=" text-primary text-6xl mt-10 font-bold">Search. Recall</h1>
      <Image
        src={"/InputSallary.svg"}
        alt="input salary"
        width={500}
        height={100}
      />
      <h1 className="text-primary text-6xl font-bold">Filter</h1>
      <MarqueeDemo />
    </div>
  );
}
