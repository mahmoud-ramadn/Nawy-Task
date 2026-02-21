import Dashboard from "@/components/common/Dashbord";
import "./globals.css";

import Hero from "@/components/common/Hero";
import StopRecording from "@/components/ui/StopRecording";
import Spreadsheet from "@/components/common/Spreadsheet ";
import SearchRecall from "@/components/common/SearchRecall";

export default function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
      <StopRecording />
      <Spreadsheet />
      <SearchRecall />
      
    </>
  );
}
