export default function Navbar()
{
    return (
        <div className="w-screen flex py-4 px-16 justify-between items-center bg-red-500">
            <div className="">
                LOGO
            </div>

            <div className="flex gap-8">
                <p className="hover:underline cursor-pointer">Skills</p>
                <p className="hover:underline cursor-pointer">About</p>
                <p className="hover:underline cursor-pointer">Projects</p>
            </div>

            <div className="px-4 py-2 bg-blue-500 rounded-full cursor-pointer">
                Hire Me!
            </div>
        </div>
    )
}