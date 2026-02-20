import Image from "next/image";
import Switch from "../ui/ToggleModeButton";
export default function Dashboard() {
  return (
    <div className=" relative  overflow-hidden">
      <div className=" bg-white    pt-25   container      relative flex items-center justify-center  pb-10  flex-col  gap-y-24 ">
        <p className=" max-w-[606px] mx-auto text-gray-800 text-center">
          Fold establishes connection to your Banks through the Government
          regulated Account Aggregator Framework. OTP is required to connect
          bank accounts,
          <span className=" text-blue-400 ">
            {" "}
            see the list of banks that support Fold .
          </span>
        </p>
        <Switch />
        <Image
          src={"/dahsbord.png"}
          alt="dashboard image"
          className=" z-10 relative aspect-auto "
          width={1400}
          height={300}
        />
      </div>
      <img
        src={"/Section.svg"}
        alt="dashboard image"
        className=" absolute left-0  top-[124px] w-full h-auto"
      />
    </div>
  );
}
