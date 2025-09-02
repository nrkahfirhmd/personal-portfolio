import { IoClose } from "react-icons/io5";

export default function Contacts({ setView }) {
    return (
        <div onClick={() => setView(false)} className="fixed z-10 flex items-center justify-center h-screen w-screen backdrop-blur-sm animate-pop px-2">
            <div onClick={(e) => e.stopPropagation()} className="overflow-hidden shadow-lg w-2xl bg-(--light-bg) dark:bg-(--dark-bg) rounded-lg">
                <div className="p-8 border-b border-black/50 dark:border-white/50 flex justify-between items-center">
                    <h1 className="text-lg font-bold">Interested in Working with Me?</h1>
                    <div className="grid place-items-center" onClick={() => setView(false)}>
                        <IoClose size={24} />
                    </div>
                </div>

                <div className="p-4 flex overflow-hidden h-full">
                    <form className="w-full flex flex-col gap-4">
                        <input name="name" placeholder="Name" required className="w-full border p-2 rounded" />
                        <input name="email" type="email" placeholder="Email" required className="w-full border p-2 rounded" />
                        <textarea name="message" placeholder="Message" rows={5} required className="w-full border p-2 rounded" />
                        <button className="px-4 py-2 rounded bg-green-500 dark:bg-green-200 text-(--light-bg) dark:text-(--dark-bg) disabled:opacity-50">
                            send
                        </button>
                        {/* {ok && <p className="text-sm">{ok}</p>} */}
                        </form>
                </div>
            </div>
        </div>
    )
}