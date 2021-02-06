import React from 'react'
import logo from "../image/logo.webp"

function Header() {
    return (
        <div className="w-full h-24 flex   bg-header">
            <img className="h-16 ml-14 mt-4" src={logo}/>

           
{/* center */}
            <div className="flex  ml-8 mt-1">
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">MODELS</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">OWNERSHIP</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">MOTORSPORT</h1>
                <h1 className="text-white text-xs mt-9 font-semibold">PRE-OWNED</h1>
            </div>

            {/* right */}

            <div className="flex absolute right-3  ml-8 mt-1">
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold" >DEALERSHIP</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">MUSEUM</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">STORE</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">LOGO</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">LOGO</h1>
                <h1 className="text-white text-xs mr-4 mt-9 font-semibold">LOGO</h1>
            </div>
            
        </div>
    )
}

export default Header
