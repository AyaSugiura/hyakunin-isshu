"use client"

import Link from "next/link";
import Hyakunin from "@/components/Hyakunin";
import {getOptionAndAnswer, optionAndAnswer} from "./game"
import { useState } from "react";
import Kaminoku from "@/components/Kaminoku";
import Shimonoku from "@/components/Shimonoku";

const Game = () => {

    const [status, setStatus] = useState("notStarted");
    const [data, setData] = useState<optionAndAnswer | undefined>(undefined);
    const [answer, setAnswer] = useState<HyakuninType | undefined>(undefined);
    const [collect, setCollect] = useState(false);

    // 表示される問題を変更する
    const changeData = () => {
        const newData = getOptionAndAnswer();
        setData(newData);
        setAnswer(undefined);
        setStatus("playing");
    };

    const handleClickChange = () => {
        changeData();
    }

    // 答えを表示する
    const displayAnswer = () => {
        setAnswer(data?.answer || undefined);
        setStatus("answer");
    }

    // 正誤判定をする
    const judgeAnswer = (option :HyakuninType) => {

        const answerNo = data?.answer?.no || 0;
        const optionNo = option.no;
        setCollect(answerNo === optionNo);
        setStatus("judge");
    }

    const returnOptions = () => {
        setStatus("playing");
    }

    return (
        <main>
            <h1>ゲームコーナー</h1>
            <Link href={"/"}>TOPに戻る</Link>
            {status === "playing" ? (
                <>
                    <h2>問題</h2>
                    <Kaminoku hyakunin={data?.answer}></Kaminoku>

                    <h2>選択肢</h2>
                    {
                        data?.options.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Shimonoku  hyakunin={item}></Shimonoku>
                                    <button onClick={() => judgeAnswer(item)}>選択</button>
                                </div>
                            )
                        })
                    }
                    <button onClick={handleClickChange}>問題を変更</button>
                    <button onClick={displayAnswer}>答えを見る</button>
                </>
            ) : status === "judge" ? (
                <>
                    <h2>判定</h2>
                    <div>{collect ? '正解!' : '不正解'}</div>
                    <button onClick={returnOptions}>選択肢に戻る</button>
                    <button onClick={displayAnswer}>答えを見る</button>
                    <button onClick={handleClickChange}>次の問題</button>
                </>
            ) : status === "answer" ? (
                <>
                    <h2>答え</h2>
                    <Hyakunin hyakunin={answer}></Hyakunin>
                    <button onClick={handleClickChange}>次の問題</button>
                </>
            ) : (
                <button onClick={handleClickChange}>Start!</button>
            )}
        </main>
    )
}

export default Game

