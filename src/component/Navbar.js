import Link from 'next/link'

export default function Navabr() {
  return (
    <div>
    <div className="flex items-center justify-center space-x-2 bg-black text-white">
    <Link href='/'>Home</Link>
    <Link href='/upload'>Upload</Link>
    </div>
    </div>
  )
}
