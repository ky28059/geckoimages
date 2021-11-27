import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white bg-opacity-90 shadow-md backdrop-blur-sm z-50 flex items-center text-black">
            <Link href="/"><a><Image src="/icon.png" alt="gecko" width={48} height={48}/></a></Link>
            <Link href="/#about"><a className="p-4 ml-auto">about</a></Link>
            <Link href="/submit"><a className="p-4">submit</a></Link>
            <Link href="/browse"><a className="p-4">browse</a></Link>
        </div>
    )
}
