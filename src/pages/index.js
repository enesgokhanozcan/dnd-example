import Image from "next/image";
import { Inter } from "next/font/google";
import Title from "@/components/Title";
import DragAndDrop from "@/components/DragAndDrop";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <div className="container-main flex">
        <Title />
        <DragAndDrop/>
    </div>
    </>
  );
}
