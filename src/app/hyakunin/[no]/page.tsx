import Data from "@/data/hyakunin.json"
import Link from "next/link"

const Page = ({params} : {params: {no: string}}) => {
    
    const data = Data.find(value => {return value.no == params.no})

    return (
        <div>
            <Link href={"/hyakunin/"}>一覧に戻る</Link>
            <img src={data?.image} alt="画像" />
            {data?.kami}
            {data?.shimo}
            （{data?.yomite}）
        </div>
    );
}

export default Page;