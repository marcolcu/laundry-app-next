import Image from "next/image";
import Laundry from "../../../public/laundry.png";
import Clothes from "../../../public/clothes.png";
import BedCover from "../../../public/bed.png";
import Shoes from "../../../public/shoes.png";
import Link from "next/link";

export function Category() {
  return (
    <>
      <div className="bg-white p-4 mt-4 w-[95%] mx-auto rounded-lg shadow-md">
        <div className="flex justify-around">
          <Link href={"/"}>
            <div className="flex flex-col items-center">
              <Image src={Laundry} width={70} height={70} alt="Laundry" />
              <span>Laundry</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex flex-col items-center">
              <Image src={Clothes} width={70} height={70} alt="Dry Clean" />
              <span>Dry Clean</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex flex-col items-center">
              <Image src={BedCover} width={70} height={70} alt="Bed Cover" />
              <span>Bed Cover</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex flex-col items-center">
              <Image src={Shoes} width={70} height={70} alt="Shoes" />
              <span>Shoes</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
