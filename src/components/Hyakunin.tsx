const Hyakunin = (props: {hyakunin: HyakuninType | undefined}) => {
    return (
        props.hyakunin ? (
            <div>
                <h3>No. {props.hyakunin.no}</h3>
                {props.hyakunin.kami}
                {props.hyakunin.shimo}
                （{props.hyakunin.yomite}）
                
                <h3>現代語訳</h3>
                {props.hyakunin.yaku}

                <h3>image</h3>
                <img src={props.hyakunin.image} alt="画像" />
            </div>
        ) : (
            <div>ありません</div>
        )
    );
}

export default Hyakunin