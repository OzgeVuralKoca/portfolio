import React from 'react'

const SocialMedia = () => {
    return (
        <>
            <button className="bg-sky-800 text-sky-50 font-semibold hover:bg-sky-600 pt-2 pb-1 px-3 me-5 mb-5 rounded shadow shadow-sky-800/100">
                <a className="link first" target="_blank" href="https://www.linkedin.com/in/%C3%B6zge-vural-koca/">
                    <i className="fa-brands fa-linkedin-in text-xl"></i>
                </a>
            </button>
            <button className="bg-gray-700 text-sky-50 font-semibold hover:bg-gray-800 pt-2 pb-1 px-2 me-5 rounded-full shadow shadow-gray-700/100">
                <a className="link second" target="_blank" href="https://github.com/OzgeVuralKoca">
                    <i className="fa-brands fa-github text-2xl"></i>
                </a>
            </button>
        </>
    )
}

export default SocialMedia
