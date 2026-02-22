import Dashboard from "@/components/common/Dashbord";
import "./globals.css";

import Hero from "@/components/common/Hero";
import StopRecording from "@/components/ui/StopRecording";
import Spreadsheet from "@/components/common/Spreadsheet ";
import SearchRecall from "@/components/common/SearchRecall";
import InformDelight from "@/components/common/InformDelight";
import NeverVistYourBank from "@/components/common/NeverVistYourBank";
import Cards from "@/components/common/Cards";
import Anxiety from "@/components/common/Anxiety";
import JustMoneyAfterAll from "@/components/common/JustMoneyAfterAll";

export default function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
      <StopRecording />
      <Spreadsheet />
      <SearchRecall />
      <InformDelight />
      <NeverVistYourBank />
      <Cards />
      <Anxiety />
      <JustMoneyAfterAll />
    </>
  );
}
