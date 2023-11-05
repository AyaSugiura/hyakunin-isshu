import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href={"/hyakunin"}>リスト</Link> <br/>
      <Link href={"/game"}>ゲーム</Link>
    </>
  )
}
