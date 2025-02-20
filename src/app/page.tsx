import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("where I am ");
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={100} height={100} />
      </Link>
      <h1 className="">Hello</h1>
      <Button>Submit</Button>
    </div>
  );
}
