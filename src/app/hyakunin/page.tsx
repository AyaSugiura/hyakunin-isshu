import HyakuninTable from "@/components/HyakuninTable";
import TopButton from "@/components/button/topButton";
import Data from "@/data/hyakunin.json"

export default () => {

    return (
        <>
            <TopButton></TopButton>
            <HyakuninTable data={Data}></HyakuninTable>
        </>
    );
}