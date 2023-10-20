"use client"

import Link from "next/link";
import Data from "@/data/hyakunin.json"
import Hyakunin from "@/components/Hyakunin";
import {getOptionAndAnswer, optionAndAnswer} from "./game"
import { useState } from "react";

const Game = () => {

    const [data, setData] = useState<optionAndAnswer | null>(null);

    const changeData = () => {
        const newData = getOptionAndAnswer();
        setData(newData);
    };

    const handleClick = () => {
        changeData();
    }

    return (
        <main>
            <h1>ゲームコーナー</h1>
            <Link href={"/"}>TOPに戻る</Link>
            {
                data ? (
                    <>
                            
                            <h2>問題</h2>
                            <Hyakunin hyakunin={data.answer}></Hyakunin>

                            <h2>選択肢</h2>
                            {
                                data.options.map((item, index) => {
                                    return (
                                        <Hyakunin key={index} hyakunin={item}></Hyakunin>
                                    )
                                })
                            }

                            <button onClick={handleClick}>Change!</button>
                    </>
                ) : (
                    <button onClick={handleClick}>Start!</button>
                )
            }

        </main>
    );
}

export default Game

