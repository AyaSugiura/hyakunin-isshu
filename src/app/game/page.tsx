"use client"

import Link from "next/link";
import Hyakunin from "@/components/Hyakunin";
import {getOptionAndAnswer, optionAndAnswer} from "./game"
import { useState } from "react";
import Kaminoku from "@/components/Kaminoku";
import Shimonoku from "@/components/Shimonoku";

const Game = () => {

    const [status, setStatus] = useState("notStarted");
    const [data, setData] = useState<optionAndAnswer | null>(null);
    const [answer, setAnswer] = useState("");

    const changeData = () => {
        const newData = getOptionAndAnswer();
        setData(newData);
        setStatus("playing")
    };

    const handleClick = () => {
        changeData();
        setStatus("playing")
    }

    return (
        <main>
            <h1>ゲームコーナー</h1>
            <Link href={"/"}>TOPに戻る</Link>
            {status === "playing" && data ? (
                <>
                    <h2>問題</h2>
                    <Kaminoku hyakunin={data.answer}></Kaminoku>

                    <h2>選択肢</h2>
                    {
                        data.options.map((item, index) => {
                            return (
                                <Shimonoku key={index} hyakunin={item}></Shimonoku>
                            )
                        })
                    }
                    <button onClick={handleClick}>Change!</button>
                </>
            ) : status === "answer" ? (
            <div>
                <h2>答え</h2>
                {/* 他のコンポーネントや要素を追加 */}
            </div>
            ) : (
                <button onClick={handleClick}>Start!</button>
            )}
        </main>
    )
}

export default Game

