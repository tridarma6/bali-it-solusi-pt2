import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href={route('Welcome')} className="cursor-pointer">
            <img src="\assets\images\logo-bali-it-solusi.png" alt="LOGO BALI IT SOLUSI" className="w-24"/>
        </Link>
    );
}
