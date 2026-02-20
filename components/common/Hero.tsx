import Image from "next/image";
export default function Hero() {
  return (
    <div className="  bg-[#f0f1f5]   w-full relative  ">
      <Image
        src={"/qrocode.svg"}
        alt="header image"
        width={116}
        height={116}
        className=" absolute  hidden md:block md:left-9   top-1/2 -translate-y-1/2"
      />
      <div className=" container flex items-center justify-center flex-col">
        <Image src={"/hero.webp"} alt="hero image" width={500} height={800} />
        <div className=" max-w-[588px] space-y-11">
          <h1 className=" font-bold  md:text-8xl text-5xl text-center text-[#20294C]">
            Be painfully 😜 aware.
          </h1>
          <p className="  md:text-2xl text-xl text-primary text-center">
            Fold securely connects to your Bank accounts and gives a clear
            picture of your finances. So you can make better decisions and lead
            a healthier financial life.
          </p>
        </div>
        <div className=" md:w-[388px] w-[350px] bg-gray rounded-[18px] p-2 mt-12 flex items-center justify-between">
          <div className=" space-y-1">
            <h3 className=" font-semibold text-2xl text-gray-800">
              Download iOS app
            </h3>
            <p className="  text-lg text-gray-600">
              Currently in invite only Beta
            </p>
          </div>
          <Image
            src={"/qrocodtwo.svg"}
            alt="hero image"
            width={100}
            height={100}
          />
        </div>
        <div className="relative md:w-[520px]    w-[300px] md:h-[400px] h-[200px] ">
          <img
            src={"/frame.svg"}
            alt="hero image"
            className=" absolute  left-1/2 -translate-x-1/2 -bottom-8"
          />
          <img
            className=" absolute left-1/2  z-20   -translate-x-1/2 -bottom-20"
            src={"IcIcIbanck.svg"}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
