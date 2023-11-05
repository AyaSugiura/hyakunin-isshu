import Link from "next/link";
import { Button } from "@mantine/core";

const TopButton = () => {
    return (
        <Link href={"/"}>
            <Button>TOPへ</Button>
        </Link>
    );
}

export default TopButton