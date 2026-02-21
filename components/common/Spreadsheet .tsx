import Image from "next/image";
export default function Spreadsheet() {
  return (
    <div className=" container  mt-24">
      <div className=" max-w-[788px] mx-auto  flex  flex-col  gap-y-5  justify-center items-center">
        <Image
          src={"icon-polygon.svg.svg"}
          alt="spreadsheet image"
          width={143}
          height={122}
          className=" rounded-lg"
        />
        <h2 className=" text-primary  text-center  font-bold text-6xl">
          More than a row in a spreadsheet.
        </h2>
        <p className="text-2xl text-gray-800">
          Not just the numbers, but the story as well
        </p>
        <div className=" grid py-4  md:grid-cols-2 grid-cols-1 gap-x-5">
          <Image
            src={"/leftsspreadSheet.svg"}
            alt=" left spreadsheet"
            width={688}
            height={664}
            className=" rounded-lg"
          />
          <Image
            src={"/rightSpreadsheet.svg"}
            alt="right spreadsheet"
            width={688}
            height={664}
            className=" rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
