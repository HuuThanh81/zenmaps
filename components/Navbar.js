import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="sm:py-4 sm:px-4 sm:mt-5 mt-40 mb-4 container mx-auto flex justify-between items-center h-60 bg-white text-black relative">
            <Link href="/" className="">
                <img srcSet="/logo.png 2x" alt="logo zenmaps"/>
            </Link>
            <div className="cursor-pointer lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#4F5665"/>
                <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#4F5665"/>
                <path d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z" fill="#4F5665"/>
                <path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="#4F5665"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#4F5665"/>
                <path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="#4F5665"/>
                <path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="#4F5665"/>
                <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#4F5665"/>
                <path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="#4F5665"/>
            </svg>
            </div>
            <div className="lg:block hidden font-Lexend-Deca">
                <span className="px-3 "> <Link href="/tra-cuu-quy-hoach" >Tra cứu quy hoạch</Link> </span>
                <span className="px-3 "> <Link href="/mua-ban-bds">Mua bán BĐS</Link> </span>
                <span className="px-3 "> <Link href="/kien-thuc-bds">Kiến thức BĐS</Link> </span>
                <span className="px-3 "> <Link href="/tro-giup">Trợ giúp</Link> </span>   
            </div>
            <div className="lg:block hidden font-Lexend-Deca">
                <button>Đăng nhập</button>
                <button className="ml-4 px-6 py-2 rounded-full border border-red-400 text-black font-Lexend-Deca hover:bg-red-200 hover:text-white hover:border-none">Đăng ký</button>
            </div>
        </div>
    )
}

export default Navbar