import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "../../css/app.css";
import "leaflet/dist/leaflet.css";
import Building from "./Icons/Building"; 
import Maps from "./Icons/Maps";

export default function AboutUS(){
    const markers = [
        {
            geocode: [-8.674573631939738, 115.20773851770228],
            popUp: "Bali IT Solusi"
        }
    ]

    const customIcon = new Icon({
        // iconUrl: logo,
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38]
    })

    return (
        <>
            <div className="text-white py-10 pb-16 px-16" id="About">
                <h1 className="font-bold text-5xl" id="About">About Us</h1>
            </div>
            <div className="flex flex-row gap-20 px-16 pb-10">
                <div>
                    <MapContainer center={[-8.674573631939738, 115.20773851770228]} zoom={[15]} className="width-map">
                        {/* <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                        /> */}
                        <TileLayer
                            attribution="CartoDb-Voyager"
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />

                        {markers.map(marker=>(
                            <Marker position={marker.geocode} icon={customIcon}>
                                <Popup>
                                    {marker.popUp}
                                </Popup>
                            </Marker>
                        ))
                        }
                    </MapContainer>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl">What are we?</h2>
                    <p className="pt-2 text-justify text-lg">Bali IT Solusi is 
                        <span className="text-amber-300"> a company engaged in information technology and the sale of computer hardware. </span> 
                        Founded in Bali, the company focuses on providing various IT needs such as 
                        <span className="text-amber-300"> laptops, PCs, mouses, keyboards, and other accessories. </span> 
                        With the increasing demand for technology devices in the digital era, Bali IT Solusi is here to offer complete solutions for individuals, students, and businesses in need of quality devices to support their activities.</p>
                    <h2 className="text-3xl pt-8">Where are we located?</h2>
                    <p className="pt-2 text-justify text-lg">We are located in Bali, Indonesia. For full address can be seen down below.</p>
                    <div className="flex flex-row gap-5 py-2">
                        <Building/>
                        <p className="">Jl. Teuku Umar No. 74XX, Kota Denpasar, Bali</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Maps/>
                        <a href="https://maps.app.goo.gl/JD4pdSH6aJrzGUjaA?g_st=com.google.maps.preview.copy" className="hover:underline">Click here to open Maps</a>
                    </div>
                    <div className="relative bg-blue-900 w-full h-20 mt-12 flex flex-col justify-center items-center px-10 py-24 rounded-[20px] gap-5">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-white text-lg font-bold">Signup to Our Newsletter</p>
                            <p className="text-white text-sm ">To get our latest information, Please enter your email down below</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <input type="email" placeholder="Enter your email" className="w-[360px] h-[50px] rounded-[10px]" />
                            <button className="border-none px-3 py-3 bg-[#0A223C] rounded-[10px]">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}