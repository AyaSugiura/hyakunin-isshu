import Hyakunin from "@/components/Hyakunin";
import TopButton from "@/components/button/topButton";
import Data from "@/data/hyakunin.json"
import Link from "next/link";

const Page = ({params} : {params: {no: string}}) => {
    
    const data = Data.find(value => {return value.no.toString() === params.no});
    return (
        <>
            <TopButton/>
            <Link href={"/hyakunin"}>一覧へ</Link>
            <Hyakunin hyakunin={data}></Hyakunin>
        </>
    );
}

export default Page;

