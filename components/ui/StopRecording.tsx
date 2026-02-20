import Image from "next/image";
export default function StopRecording() {
  return (
    <div className=" container bg-white  grid md:grid-cols-2 grid-cols-1">
      <Image
        src={"restPayements.svg"}
        width={486}
        height={800}
        alt="rest payments"
      />
      <div className=" bg-green-300"></div>
    </div>
  );
}
