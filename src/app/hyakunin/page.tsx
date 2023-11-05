import HyakuninTable from "@/components/HyakuninTable";
import TopButton from "@/components/button/topButton";
import Data from "@/data/hyakunin.json"
import Link from "next/link";

export default () => {

    return (
        <>
            <TopButton></TopButton>
            <HyakuninTable data={Data}></HyakuninTable>
        </>
    );
}