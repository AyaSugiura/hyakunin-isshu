import Data from "@/data/hyakunin.json"
import Link from "next/link";

export default () => {

    return (
        <main>
            <Link href={"/"}>TOPに戻る</Link>
            {Data.map((item, index) => {
               return (
                <div>
                    <Link href={`/hyakunin/${item.no}`}>{item.kami} {item.shimo}</Link>
                </div>
               )
            })}
        </main>
    );
}