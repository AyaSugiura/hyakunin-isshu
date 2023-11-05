import Link from "next/link";

const HyakuninTable = (props: {data: HyakuninType[]}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>句</th>
                    <th>よみ</th>
                    <th>現代語訳</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <tr>
                                <td><Link href={`/hyakunin/${item.no}`}>{item.no}</Link></td>
                                <td><Link href={`/hyakunin/${item.no}`}>{item.kami} {item.shimo}</Link></td>
                                <td><Link href={`/hyakunin/${item.no}`}>{item.kami_kana} {item.shimo_kana}</Link></td>
                                <td><Link href={`/hyakunin/${item.no}`}>{item.yaku}</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default HyakuninTable