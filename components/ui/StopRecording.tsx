import Image from "next/image";
import { Button } from "./button";
import { EyeClosed } from "lucide-react";
export default function StopRecording() {
  return (
    <div className=" container   bg-white md:mt-24  mt-12 grid md:grid-cols-2 grid-cols-1     items-start ">
      <Image
        src={"restPayements.svg"}
        width={488}
        height={800}
        alt="rest payments"
      />
      <div className=" space-y-10">
        <Image
          src={"icon-category.svg.svg"}
          alt="icon category"
          width={64}
          height={64}
        />
        <h1 className=" font-bold text-6xl  text-primary">
          Stop recording expenses manually.
        </h1>
        <Button variant="outline" className=" py-2   rounded-full mr-3 ">
          <EyeClosed /> No Email scraping
        </Button>
        <Button variant="outline" className=" py-2   rounded-full ">
          <EyeClosed /> No SMS scraping
        </Button>
        <p className=" text-primary  text-2xl">
          It’s easy to forget, fall off the wagon, and miss. It’s hard to be
          diligent with expense tracking when you have to do it manually. Fold
          automatically pulls your expenses from your Bank accounts and
          categorises them. So you can relax and focus on things that are more
          important than tracking expenses.
        </p>
      </div>
    </div>
  );
}
