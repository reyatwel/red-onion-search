import Link from "next/link";
import {TbGridDots} from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com/mail/&ogbl" className="hover:underline">
          Email
        </Link>
        <Link href="https://www.google.com.ph/imghp?hl=en&ogbl" className="hover:underline">
          Images
        </Link>
        <Link href="https://about.google/">
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        </Link>
        <Link href="https://accounts.google.com/">
          <button className="btn2">
            Sign in
          </button>
        </Link>
      </div>
    </header>
  )
}
