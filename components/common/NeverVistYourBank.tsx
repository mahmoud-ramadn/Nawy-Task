import Image from "next/image";
export default function NeverVistYourBank() {
  return (
    <div className=" bg-primary  md:pt-36 pt-20 pb-12  relative ">
      <div className=" container  relative">
        <div className=" flex items-center flex-wrap gap-y-7 gap-x-7">
          <Image
            src={"/icon-computer.svg.svg"}
            alt="icon computer"
            width={75}
            height={75}
          />
          <Image
            src={"/InputWebstieLink.svg"}
            alt="icon computer"
            width={690}
            height={75}
          />
        </div>
        <h1 className="text-white  max-w-[792px] mt-16 md:ml-24   md:text-8xl text-4xl font-bold">
          Never visit your Bank’s website again.
        </h1>
        <p className="text-white font-semibold max-w-[272px] mt-16 md:ml-24 text-lg">
          As great as our bank’s infrastructures are, they still haven’t caught
          up with the rest of the industry, software wise. Good thing, they
          don’t have to anymore.
        </p>
        <img
          src={"/RecurringPayments.svg"}
          alt="Recurring Payments"
          width={894}
          height={687}
          className=" md:absolute  md:right-0 md:z-10 mt-20   md:-bottom-[32rem]"
        />
      </div>
    </div>
  );
}
