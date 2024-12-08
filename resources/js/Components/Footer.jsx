import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/Twitter";
import Globe from "./Icons/Globe";

export default function Footer() {
    return (
        <footer className="bg-[#00162D] text-white py-8 px-16">
            <div className="container flex md:flex-col justify-between gap-10">
                <ul className="flex flex-row justify-between mb-6 md:mb-0 z-10">  
                    <ul className="flex flex-col gap-3">
                        <a href="/#About" className="hover:underline font-bold text-xl">Laptop</a>
                        <li>
                            <a href="" className="hover:underline">For Home</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">For Work</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">For Creators</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">For Students</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">For Gaming</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <a href="/#Faq" className="hover:underline font-bold text-xl">Displays / Desktop</a>
                        <li>
                            <a href="" className="hover:underline">Monitors</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Projectors</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">PCs</a>
                        </li>   
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <a href="/#Contact" className="hover:underline font-bold text-xl">Components</a>
                        <li>
                            <a href="" className="hover:underline">Processor</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">RAM</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Motherboard</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">GPU</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Case</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Storage</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Power Supply</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <a href="/privacy" className="hover:underline font-bold text-xl">Accessories</a>
                        <li>
                            <a href="" className="hover:underline">Keyboards</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Mouse</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Mouse Pad</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Headset</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Speaker</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <a href="/privacy" className="hover:underline font-bold text-xl">About Us</a>
                        <li>
                            <a href="" className="hover:underline">About Bali IT Solusi</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">News</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </ul>

                {/* Social Media Icons */}
                <div className="flex space-x-4 justify-center gap-5">
                    <a href="#" className="text-white-400 hover:text-gray transition-colors duration-300">
                        <Facebook/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <Instagram/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <Twitter/>
                    </a>
                </div>
            </div>
            {/* garis */}
            <div className="text-left mt-6 border-t border-white pt-4"> </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-8">
                    <p className="text-sm text-white">
                        CV &copy; {new Date().getFullYear()} Bali IT Solusi. All rights reserved.
                    </p>
                    <p className="text-sm"> 
                        Terms of Use | Privacy Policy
                    </p>
                </div>
                <div className="flex flex-row text-sm items-center">
                    <Globe/>
                    <p className="ml-2">
                        United States / English
                    </p>
                </div>
            </div>
        </footer>
    );
}