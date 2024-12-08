import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function GuestLayout({ children }){
    return(
        <div className="">
            <Navbar/>
            <div className="backg">
                {children}
            </div>
            <Footer/>
        </div>
    );
}