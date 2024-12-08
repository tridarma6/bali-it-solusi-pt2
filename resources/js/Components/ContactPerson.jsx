import { Link } from "@inertiajs/react";
import WhatsApp from "./Icons/whatsapp";
import Gmail from "./Icons/gmail";
import Light4 from "./Icons/Light4";

export default function ContactPerson() {
    return (
        <div className="contact-person-section text-white py-10" id="Contact">
            <h2 className="text-5xl font-bold mb-5 ml-16">Contact Person</h2>
            <div className="flex justify-between mt-10 mb-6">

                <div
                    className="relative flex items-start bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 p-10 ml-16 h-60 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 mr-5 cursor-pointer"
                    onClick={() => window.open('https://wa.me/6281239319841', '_blank')}
                >
                    <a className="text-white hover:text-gray transition-colors duration-300">
                        <WhatsApp />
                    </a>
                    <div className="ml-10 mt-10">
                        <h1 className="font-bold text-4xl">Gde Evan Adhiguna</h1>
                        <p className="text-xl">+62 812-3931-9841</p>
                    </div>
                </div>

                <div
                    className="relative flex items-start bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 p-10 mr-16 h-60 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 ml-5 cursor-pointer"
                    onClick={() => window.open('mailto:evanadhiguna@gmail.com', '_blank')}
                >
                    <a className="text-white hover:text-gray transition-colors duration-300">
                        <Gmail />
                    </a>
                    <div className="ml-10 mt-10">
                        <h1 className="font-bold text-4xl">Gmail</h1>
                        <p className="text-xl">evanadhiguna@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
