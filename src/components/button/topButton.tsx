import Link from "next/link";

const TopButton = () => {
    return (
        <Link href={"/"}>
            <button className="
                bg-blue-400 hover:bg-blue-700 
                text-white
                py-1 px-2 rounded"
            >
                TOPに戻る
            </button>
        </Link>
    );
}

export default TopButton