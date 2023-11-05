import Link from "next/link";
import DefaultButton from "./defaultButton";

const TopButton = () => {
    return (
        <DefaultButton 
            href="/" 
            text="TOPへ"
        ></DefaultButton>
    );
}

export default TopButton