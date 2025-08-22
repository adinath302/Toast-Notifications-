import { AnimatePresence, easeIn, easeInOut } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion';

const toasts = [
    { id: 1, type: "success", message: "Your profile was updated successfully." },
    { id: 2, type: "error", message: "Login failed. Please try again." },
    { id: 3, type: "info", message: "A new version is available." },
    { id: 4, type: "warning", message: "Password strength is weak." },
    { id: 5, type: "cart", message: "Item added to cart." }
];

const Toast_Notifications = () => {
    const [ActiveToasts, setActiveToasts] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveToasts([])
        }, 3000);
        return () => clearTimeout(timer)
    }, [ActiveToasts])

    const HandleType = (type) => {
        const Filtered = toasts.filter(item => item.type === type);
        setActiveToasts(Filtered);
    }

    return (
        <div>
            <div className='flex items-center justify-center flex-col gap-2'>
                <div className='border rounded-2xl p-2 bg-gray-600 text-white cursor-pointer'>
                    Toasts Notifications
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <div className='border-1 p-1 rounded-xl' onClick={() => HandleType("success")}>success</div>
                    <div className='border-1 p-1 rounded-xl' onClick={() => HandleType("error")}>error</div>
                    <div className='border-1 p-1 rounded-xl' onClick={() => HandleType("info")}>info</div>
                    <div className='border-1 p-1 rounded-xl' onClick={() => HandleType("warning")}>warning</div>
                    <div className='border-1 p-1 rounded-xl' onClick={() => HandleType("cart")}>cart</div>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {
                    ActiveToasts.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2, ease: easeInOut }}
                            key={item.id}
                            className='border-1 flex justify-between items-center w-[350px]'>
                            <div className='font-serif'>{item.message}</div>
                            <div className='bg-black text-white p-2' onClick={() => type('')}>
                                <RxCross1 />
                            </div>
                        </motion.div>
                    ))
                }
            </AnimatePresence>

        </div>
    )
}

export default Toast_Notifications;