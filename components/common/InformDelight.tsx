import Image from "next/image";
export default function InformDelight() {
  return (
    <div className=" pt-12  container ">
      <p className=" max-w-[805px] mx-auto text-primary text-center  text-2xl">
        Just type in McDonald's for example and see all the times you have spent
        at McDonald's. Then type Gym Membership, realise there's no such
        transactions. Look yourself in the mirror, stop eating from McDonald's
        so much.
      </p>
      <div className=" mt-28 grid md:grid-cols-2  grid-cols-1 gap-4 items-center gap-x-32">
        <div className=" space-y-6">
          <Image
            src={"/graph-icon.svg"}
            alt="graph icon"
            width={64}
            height={64}
            className=" mx-auto"
          />
          <h2 className="text-primary  md:text-8xl  text-4xl font-bold">
            Inform & Delight.
          </h2>
          <p className="text-primary  md:text-2xl text-lg">
            Understand your financial health without drowning in numbers. Each
            nosedive, each swooping rise and each calm plateau gives real
            actionable insights. Take decisions, backed by Fold.
          </p>
        </div>
        <Image
          src={"/phone.svg"}
          alt="inform delight"
          width={462}
          height={796}
        />
      </div>
    </div>
  );
}
