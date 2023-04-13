import React, { useState } from 'react'
import { HiMenu, HiOutlineDesktopComputer } from "react-icons/hi"
import { BiHomeAlt2, BiUserPin } from "react-icons/bi"
import { MdOutlineContactMail } from "react-icons/md"
import { AiOutlineProject } from "react-icons/ai"

const Navbar = () => {
    const [active, setActive] = useState(0)
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='w-full flex justify-center bg-neutral-900 text-sky-200'>
            <div
                className="sm:cursor-pointer fixed top-5 left-5 z-[999] rounded-xl bg-neutral-700 hover:bg-neutral-600 p-2"
                onClick={() => setShowMenu(!showMenu)}
            >
                <HiMenu size={34} />
            </div>
            <nav
                className={`
                    text-2xl text-sky-200 px-5 py-2 rounded-full bg-neutral-700/30 backdrop-blur-xl fixed flex items-center gap-5 ${showMenu ? "bottom-10" : "bottom-[-100%]"
                    }`}
                style={{ zIndex: "999" }}>
                <a
                    onClick={() => setActive(1)}
                    className={`p-2 rounded-full hover:bg-sky-600 ${active === 1 ? "bg-sky-600" : ""}`}
                    href='#home' >
                    <BiHomeAlt2 />
                </a>
                <a
                    onClick={() => setActive(2)}
                    className={`p-2 rounded-full hover:bg-sky-600 ${active === 2 ? "bg-sky-600" : ""}`}
                    href='#about'>
                    <BiUserPin />
                </a>
                <a
                    onClick={() => setActive(3)}
                    className={`p-2 rounded-full hover:bg-sky-600 ${active === 3 ? "bg-sky-600" : ""}`}
                    href='#skills'>
                    <HiOutlineDesktopComputer />
                </a>
                <a
                    onClick={() => setActive(4)}
                    className={`p-2 rounded-full hover:bg-sky-600 ${active === 4 ? "bg-sky-600" : ""}`}
                    href='#projects'>
                    <AiOutlineProject />
                </a>
                <a
                    onClick={() => setActive(5)}
                    className={`p-2 rounded-full hover:bg-sky-600 ${active === 5 ? "bg-sky-600" : ""}`}
                    href='#contact'>
                    <MdOutlineContactMail />
                </a>
            </nav>
        </div>
    )
}

export default Navbar