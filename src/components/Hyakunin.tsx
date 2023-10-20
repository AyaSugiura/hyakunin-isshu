const Hyakunin = (props: {hyakunin: HyakuninType | undefined}) => {
    return (
        props.hyakunin ? (
            <div>
                {props.hyakunin.kami}
                {props.hyakunin.shimo}
                （{props.hyakunin.yomite}）
            </div>
        ) : (
            <div>ありません</div>
        )
    );
}

export default Hyakunin