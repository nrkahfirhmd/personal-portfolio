import ThemeToggle from "./ThemeToggle"

export default function Navbar()
{
    return (
        <div className="w-full flex py-4 justify-between items-center">
            <div className="italic font-black dark:text-white text-black">
                KV.
            </div>

            {/* <div className="flex gap-8">
                <p className="hover:underline cursor-pointer">Skills</p>
                <p className="hover:underline cursor-pointer">About</p>
                <p className="hover:underline cursor-pointer">Projects</p>
            </div> */}

            <ThemeToggle/>
        </div>
    )
}