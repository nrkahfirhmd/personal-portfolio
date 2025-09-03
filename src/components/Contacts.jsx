import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser';

export default function Contacts({ setView }) {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault()
        if (!form.current) return;

        if (form.current.website?.value) return;

        setSending(true);
        setMsg('');

        const timestamp = new Intl.DateTimeFormat('id-ID', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta',
            timeZoneName: 'short',
        }).format(new Date());

        form.current.elements['time'].value = timestamp;

        emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })

        try {
            const res = await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current);
            if (res.status === 200) {
                setMsg('Message Delivered!');
                form.current.reset();
            } else {
                setMsg('Failed to Send. Please Try Again');
            }
        } catch (err) {
            console.error(err);
            setMsg('Network/Configuration Error');
        } finally {
            setSending(false);
        }
    }

    return (
        <div onClick={() => setView(false)} className="fixed z-10 flex items-center justify-center h-screen w-screen backdrop-blur-sm px-2">
            <div onClick={(e) => e.stopPropagation()} className="overflow-hidden shadow-lg w-2xl bg-(--light-bg) dark:bg-(--dark-bg) animate-pop rounded-lg">
                <div className="p-8 border-b border-black/50 dark:border-white/50 flex justify-between items-center">
                    <h1 className="text-lg font-bold">Interested in Working with Me?</h1>
                    <div className="grid place-items-center" onClick={() => setView(false)}>
                        <IoClose size={24} />
                    </div>
                </div>

                <div className="p-4 flex overflow-hidden h-full">
                    <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
                        <input name="name" placeholder="Name" required className="w-full border p-2 rounded" />
                        <input name="email" type="email" placeholder="Email" required className="w-full border p-2 rounded" />
                        <textarea name="message" placeholder="Message" rows={5} required className="w-full border p-2 rounded" />
                        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        <input type="hidden" name="time" />
                        {msg && <p className="text-sm text-center">{msg}</p>}
                        <button disabled={sending} type="Submit" className="px-4 py-2 rounded bg-green-500 dark:bg-green-200 text-(--light-bg) dark:text-(--dark-bg) disabled:opacity-50">
                            {sending ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}