import TopButton from "@/components/button/topButton";
import Data from "@/data/hyakunin.json"
import Link from "next/link";

export default () => {

    return (
        <>
            <TopButton></TopButton>
            {Data.map((item, index) => {
               return (
                <div>
                    <Link href={`/hyakunin/${item.no}`}>{item.kami} {item.shimo}</Link>
                </div>
               )
            })}
        </>
    );
}