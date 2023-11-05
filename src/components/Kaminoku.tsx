const Kaminoku = (props: {hyakunin: HyakuninType | undefined}) => {
    return (
        props.hyakunin ? (
            <div>
                {props.hyakunin.kami}
            </div>
        ) : (
            <div>ありません</div>
        )
    );
}

export default Kaminoku