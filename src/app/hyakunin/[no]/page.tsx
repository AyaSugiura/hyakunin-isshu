import Hyakunin from "@/components/Hyakunin";
import Data from "@/data/hyakunin.json"
import Link from "next/link"

const Page = ({params} : {params: {no: string}}) => {
    
    const data = Data.find(value => {return value.no.toString() === params.no});
    return (
        <div>
            <Link href={"/hyakunin/"}>一覧に戻る</Link>
            <img src={data?.image} alt="画像" />
            <Hyakunin hyakunin={data}></Hyakunin>
        </div>
    );
}

export default Page;

