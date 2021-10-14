import Link from 'next/link'

const Footer = () => {
    return (
        <div className="bg-alabaster">
            <div className="flex lg:container mx-auto justify-between text-left text-gray-600 py-60 ">
                <div className=" flex flex-col font-Lexend-Deca w-276">
                    <Link href="/">
                        <img srcSet="/logo.png 2x" alt="logo zenmaps" className="h-59 w-149"/>
                    </Link>
                    <a className="pt-10 pb-5">CÔNG TY CỔ PHẦN REMAPS</a>
                    <p className="text-sm leading-6"> Văn phòng 02, tầng 8, tòa nhà Plaza 561A Điện Biên Phủ, P25, Q Bình Thạnh, TP. HCM </p>
                    <div className="flex mt-40 mb-3">
                        <Link href="https://google.com">
                            <div className="mr-3">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="34" height="34" rx="17" fill="#F53838"/>
                                <path d="M24.9057 15.896L24.8234 15.5413H17.2352V18.8042H21.7691C21.2983 21.0751 19.114 22.2705 17.3298 22.2705C16.0316 22.2705 14.6632 21.7157 13.7574 20.824C13.2795 20.346 12.8991 19.7769 12.638 19.1494C12.3769 18.5218 12.2402 17.8481 12.2357 17.1668C12.2357 15.7924 12.8436 14.4176 13.7283 13.5133C14.6129 12.609 15.949 12.103 17.2774 12.103C18.7988 12.103 19.8891 12.9238 20.2968 13.2981L22.5791 10.9916C21.9096 10.3939 20.0704 8.88782 17.2039 8.88782C14.9923 8.88782 12.8717 9.74849 11.3215 11.3182C9.79181 12.8638 9 15.0989 9 17.1727C9 19.2465 9.74922 21.3699 11.2316 22.9278C12.8156 24.5892 15.0589 25.4576 17.3688 25.4576C19.4704 25.4576 21.4625 24.621 22.8823 23.1031C24.2781 21.6089 25 19.5413 25 17.3739C25 16.4615 24.9097 15.9196 24.9057 15.896Z" fill="white"/>
                                </svg>
                            </div>
                        </Link>
                        <Link href="https://facebook.com">
                            <div className="mr-3">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34 17.1027C34 7.65804 26.3879 0 17 0C7.61205 0 0 7.65804 0 17.1027C0 25.6388 6.21563 32.7142 14.3438 33.9985V22.048H10.0262V17.1027H14.3438V13.3348C14.3438 9.04916 16.8824 6.67998 20.765 6.67998C22.6252 6.67998 24.5711 7.01439 24.5711 7.01439V11.2236H22.4263C20.3158 11.2236 19.6555 12.5415 19.6555 13.8959V17.1027H24.37L23.6171 22.048H19.6563V34C27.7844 32.7165 34 25.6411 34 17.1027V17.1027Z" fill="#F53838"/>
                                </svg>
                            </div>
                        </Link>
                        <Link href="https://twiter.com">
                            <div>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="34" height="34" rx="17" fill="#F53838"/>
                                <path d="M25 11.8512C24.3998 12.1888 23.7648 12.4112 23.115 12.5114C23.7979 11.9937 24.3114 11.1714 24.5593 10.1985C23.9137 10.6872 23.2085 11.0301 22.474 11.2125C22.1647 10.7929 21.7927 10.4591 21.3806 10.2314C20.9686 10.0036 20.525 9.88675 20.077 9.88782C18.263 9.88782 16.795 11.7606 16.795 14.0691C16.7937 14.3902 16.8221 14.7104 16.8797 15.0227C15.5789 14.9438 14.3052 14.5142 13.14 13.7616C11.9748 13.0089 10.9438 11.9496 10.113 10.6516C9.82152 11.2877 9.66738 12.0134 9.66667 12.753C9.66667 14.2029 10.251 15.4844 11.1333 16.2353C10.6106 16.2192 10.0985 16.0401 9.64067 15.7131V15.7649C9.64067 17.793 10.774 19.4802 12.274 19.8642C11.9919 19.9615 11.7013 20.0109 11.4093 20.0109C11.2022 20.0114 10.9955 19.9854 10.7923 19.9332C11.2093 21.5945 12.423 22.8028 13.8607 22.8373C12.6925 24.0027 11.2582 24.6327 9.78333 24.628C9.52154 24.6275 9.25999 24.6073 9 24.5676C10.5004 25.8078 12.2445 26.4639 14.0247 26.4576C20.07 26.4576 23.3727 20.0843 23.3727 14.5567C23.3727 14.3755 23.369 14.1942 23.3623 14.0173C24.0034 13.427 24.5579 12.6935 25 11.8512Z" fill="#F6F6F6"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    &copy; Zenmaps.vn
                </div>
                <div className="flex flex-col font-Lexend-Deca w-161 ml-auto mr-67">
                    <h5 className="text-black">Dịch vụ</h5>
                    <p className="pt-4"> <Link href="/tra-cuu-quy-hoach">Tra cứu quy hoạch</Link></p>
                    <p className="pt-10"> <Link href="/mua-ban-bds">Mua bán BĐS</Link></p>
                    <p className="pt-10"> <Link href="/kien-thuc-bds">Kiến thức BĐS</Link></p>
                </div>
                <div className="flex flex-col font-Lexend-Deca w-161 mr-67">
                    <h5 className="text-black">Giới Thiệu</h5>
                    <p className="pt-4"><Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link></p>
                    <p className="pt-10"><Link href="/quy-che-hoat-dong">Quy chế hoạt động</Link></p>
                    <p className="pt-10"><Link href="/huong-dan">Hướng dẫn</Link></p>
                </div>
                <div className="flex flex-col font-Lexend-Deca w-161">
                    <h5 className="text-black">Tổng đài CSKH</h5>
                    <p className="pt-4"><Link href="tel:1900633804">1900 63 38 04</Link></p>
                    <p className="pt-10"><Link href="mailto:hotro@remaps.vn">hotro@remaps.vn</Link></p>
                    <p className="pt-10"><Link href="mailto:cskh@remaps.vn">cskh@remaps.vn</Link></p>
                </div>    
            </div>
        </div>
    )
}

export default Footer
