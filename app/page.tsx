import Dashboard from "@/components/common/Dashbord";
import "./globals.css";

import Hero from "@/components/common/Hero";
import StopRecording from "@/components/ui/StopRecording";

export default function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
      <StopRecording />
    </>
  );
}
