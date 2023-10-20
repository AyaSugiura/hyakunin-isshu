import Data from "@/data/hyakunin.json"

export type optionAndAnswer = {
    answer?:HyakuninType, 
    options:HyakuninType[]
}

export function getOptionAndAnswer(): optionAndAnswer{

    // 1~100までの中から、4つの数字をランダムに選ぶ
    const numbers = getRandomNumbers(1,100,4);
    const options = filterHyakuninByNo(numbers);

    // 4つの中から1つ選ぶ
    const answerNo = numbers[getRandomNumbers(0,3,1)[0]];
    const answer = Data.find(value => {return value.no === answerNo});

    return {
        options: options,
        answer: answer
    }
}

export function getRandomNumbers(from: number, to:number, count: number): number[] {

    const numbers: number[] = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random() * to) + from;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
}

export function filterHyakuninByNo(selectedNos: number[]): HyakuninType[] {

    const all = Data;

    const result: HyakuninType[] = [];
    for (const obj of all) {
      if (selectedNos.includes(obj.no)) {
        result.push(obj);
      }
      if (result.length === selectedNos.length) {
        break;
      }
    }
    return result;
}