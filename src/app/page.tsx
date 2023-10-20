import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h1>百人一首TOP</h1>
      <Link href={"/hyakunin"}>リスト</Link> <br/>
      <Link href={"/game"}>ゲーム</Link>
    </main>
  )
}
