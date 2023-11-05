import Hyakunin from "@/components/Hyakunin";
import TopButton from "@/components/button/topButton";
import Data from "@/data/hyakunin.json"

const Page = ({params} : {params: {no: string}}) => {
    
    const data = Data.find(value => {return value.no.toString() === params.no});
    return (
        <>
            <TopButton/>
            <Hyakunin hyakunin={data}></Hyakunin>
        </>
    );
}

export default Page;

