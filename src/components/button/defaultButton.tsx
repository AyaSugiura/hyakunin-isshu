import Link from "next/link";

const DefaultButton = (props:{href?:string, text:string}) => {
    return (
        <Link href={props.href || ''}>
            <button className="
                bg-blue-400 hover:bg-blue-700 
                text-white
                py-1 px-2 m-1 rounded"
            >
                {props.text}
            </button>
        </Link>
    );
}

export default DefaultButton