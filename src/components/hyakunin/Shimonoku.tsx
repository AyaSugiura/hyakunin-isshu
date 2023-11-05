const Shimonoku = (props: {hyakunin: HyakuninType | undefined}) => {
    return (
        props.hyakunin ? (
            <div>
                {props.hyakunin.shimo}
            </div>
        ) : (
            <div>ありません</div>
        )
    );
}

export default Shimonoku