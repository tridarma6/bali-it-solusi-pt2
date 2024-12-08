import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import IconUser from "./Icons/IconUser";
import Search from "./Icons/Search";
import ProfileIcon from '@/Components/Icons/ProfileIcon';

export default function Navbar() {
    const { auth } = usePage().props;  
    const [show, setIsShow] = useState(false);
    const [showNav, setIsShowNav] = useState(false);
    const [scrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState(""); 

    function showDropDown() {
        setIsShow(!show);
    }

    function showNavbar() {
        setIsShowNav(!showNav);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setIsScrolled(scroll > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownItemClick = () => {
        setIsShow(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <nav className={`bg-white w-full flex justify-between px-16 py-1 sticky z-50 top-0 ${scrolled ? "shadow" : "shadow-md"}`}>
            <span className="">
                <ApplicationLogo />
            </span>
            <ul className="flex flex-row gap-6 justify-center items-center">
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#About">About</a>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#Faq">FAQ</a>
                </li>
                <li className="space-x-1 relative" ref={dropdownRef}>
                    <div className="flex flex-row gap-1 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-[10px] w-max p-2" onClick={showDropDown}>
                        <a href="#">Category</a>
                        <i className="mt-1"></i>
                    </div>
                    <ul>
                        <li className={`md:absolute bg-white mt-3 p-2 min-w-max shadow-none md:shadow-md border-none md:border-[1px] border-gray-200 rounded flex-col space-y-2 transition-all duration-300 ${!show ? "hidden" : "flex"}`}>
                            <Link href="/categories/1" className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Laptop</Link>
                            <Link href="/categories/2" className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Desktop Computer</Link>
                            <Link href="/categories/3" className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Monitor</Link>
                            <Link href="/categories/4" className="hover:bg-gray-200 rounded-[10px] w-full p-1.5" onClick={handleDropdownItemClick}>Computer Components</Link>
                        </li>
                    </ul>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max p-2">
                    <a href="/#Contact">Contact Person</a>
                </li>
                <li className="hover:bg-gray-200 rounded-[10px] w-max py-2">
                    
                </li>
            </ul>
            <div className="flex flex-row justify-around gap-8 items-center">
                    <div className="flex flex-row">
                        <div className="flex">
                            <form className="flex" method="GET" onSubmit={handleSearchSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Search" 
                                    className="rounded-l-xl w-60" 
                                    value={searchQuery} 
                                    onChange={(e) => setSearchQuery(e.target.value)} 
                                />
                                <button type="submit" className="bg-[#0A223C] rounded-r-xl w-16 flex justify-center items-center">
                                    <Search />
                                </button>
                            </form>
                        </div>
                    </div>
                {auth?.user ? (
                    <Link href="/shopping" rel="noopener noreferrer" className="border-2 border-solid p-3 rounded-[20px]">
                        <ProfileIcon/>
                    </Link> 
                ) : (
                    <Link href="/login" rel="noopener noreferrer" className="border-2 border-solid p-2 rounded-[10px]">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}
