import Hyakunin from "@/components/Hyakunin";
import DefaultButton from "@/components/button/defaultButton";
import TopButton from "@/components/button/topButton";
import Data from "@/data/hyakunin.json"
import Link from "next/link";

const Page = ({params} : {params: {no: string}}) => {
    
    const data = Data.find(value => {return value.no.toString() === params.no});
    return (
        <>
            <TopButton/>
            <DefaultButton href="/hyakunin" text="一覧へ"></DefaultButton>
            <Hyakunin hyakunin={data}></Hyakunin>
        </>
    );
}

export default Page;

