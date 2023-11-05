import Hyakunin from "@/components/Hyakunin";
import Data from "@/data/hyakunin.json"
import Link from "next/link"

const Page = ({params} : {params: {no: string}}) => {
    
    const data = Data.find(value => {return value.no.toString() === params.no});
    return (
        <>
            <Link href={"/hyakunin/"}>一覧に戻る</Link>
            <Hyakunin hyakunin={data}></Hyakunin>
        </>
    );
}

export default Page;

