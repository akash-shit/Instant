import React from 'react'
import assets from '../assets/assets'
import { useContext, useState, useEffect } from 'react'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

const RightSidebar = () => {

    const {
        selectedUser,
        messages,
        showRightSidebar,
        setShowRightSidebar
    } = useContext(ChatContext)

    const { logout, onlineUsers } = useContext(AuthContext)

    const [msgImages, setMsgImages] = useState([])

    // Get all images from messages
    useEffect(() => {
        setMsgImages(
            messages
                .filter(msg => msg.image)
                .map(msg => msg.image)
        )
    }, [messages])

    if (!selectedUser) return null;

    return (
        <div
            className={`
                bg-[#8185B2]/10 text-white
                overflow-y-auto

                md:relative md:w-full md:block

                max-md:fixed
                max-md:inset-0
                max-md:z-[100]
                max-md:w-full
                max-md:h-screen

                ${showRightSidebar ? "max-md:block" : "max-md:hidden"}
            `}
        >

            {/* Mobile Header */}
            <div className="md:hidden flex items-center gap-4 px-5 py-4 border-b border-gray-700">

                <img
                    src={assets.arrow_icon}
                    alt="back"
                    onClick={() => setShowRightSidebar(false)}
                    className="w-7 cursor-pointer"
                />

                <p className="text-lg font-medium">
                    Profile
                </p>

            </div>


            {/* Profile Section */}
            <div className="pt-8 md:pt-16 flex flex-col items-center gap-3 text-xs font-light px-5">

                <img
                    src={selectedUser?.profilePic || assets.avatar_icon}
                    alt=""
                    className="w-24 h-24 object-cover rounded-full"
                />

                <div className="flex items-center gap-2">

                    {onlineUsers.includes(selectedUser._id) && (
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    )}

                    <h1 className="text-2xl font-medium">
                        {selectedUser.fullName}
                    </h1>

                </div>

                <p className="text-center text-sm text-gray-300 max-w-[350px]">
                    {selectedUser.bio}
                </p>

            </div>


            {/* Divider */}
            <hr className="border-[#ffffff30] my-6" />


            {/* Media */}
            <div className="px-5 pb-32">

                <p className="text-sm font-medium mb-4">
                    Media
                </p>

                <div className="grid grid-cols-2 gap-3">

                    {msgImages.map((url, index) => (

                        <div
                            key={index}
                            onClick={() => window.open(url)}
                            className="cursor-pointer rounded-lg overflow-hidden"
                        >

                            <img
                                src={url}
                                alt=""
                                className="w-full aspect-square object-cover"
                            />

                        </div>

                    ))}

                </div>

            </div>


            {/* Logout */}
            <button
                onClick={logout}
                className="
                    absolute

        bottom-5

        left-1/2

        -translate-x-1/2

        bg-gradient-to-r

        from-purple-400

        to-violet-600

        text-white

        text-sm

        font-medium

        py-3

        px-24

        rounded-full

        cursor-pointer

        whitespace-nowrap

         max-md:hidden
                "
            >
                Logout
            </button>

        </div>
    )
}

export default RightSidebar