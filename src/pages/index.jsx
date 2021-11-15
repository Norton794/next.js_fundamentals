import Link from 'next/link'
export default function Home() {
    return (
        <div>
            <Link href="/stylish">Stylish</Link>
            <Link href="/jsx">JSX</Link>
            <Link href="/example">Example</Link>
        </div>
    )
}