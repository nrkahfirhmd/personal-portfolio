import ThemeToggle from "./ThemeToggle"

export default function Navbar()
{
    return (
        <div className="w-full flex py-6 md:px-20 text-xl justify-between items-center">
            <div className="italic font-black">
                KV.
            </div>

            <div className="flex gap-8">
                <p className="md:block hidden">Work</p>
                <p className="md:block hidden">About</p>
                <p className="md:block hidden">Contact</p>
                <ThemeToggle/>
            </div>
        </div>
    )
}