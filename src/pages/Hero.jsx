export default function Hero()
{   
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="flex flex-col items-center justify-center max-w-6xl text-center gap-3">
                <h1 className="font-medium text-lg">Based in Indonesia</h1>
                <div className="text-7xl font-medium">
                    Artificial Intelligence & Product Development Synergy
                </div>
                <div className="text-lg">
                    Building products that push the boundaries of what's possible
                </div>
                <div className="flex gap-2">
                    <button className="py-4 px-6 bg-(--dark-fg)/25 rounded-md">
                        See My Work &gt;
                    </button>
                    <button className="py-4 px-6 rounded-md">
                        See My CV
                    </button>
                </div>
                <div className="flex gap-[-2em]">
                    <div className="size-12 rounded-full overflow-hidden">
                        <img src="profile.jpg" alt="testajah" className="w-full" />
                    </div>
                    <div className="size-12 rounded-full overflow-hidden">
                        <img src="profile.jpg" alt="testajah" className="w-full" />
                    </div>
                    <div className="size-12 rounded-full overflow-hidden">
                        <img src="profile.jpg" alt="testajah" className="w-full" />
                    </div>
                    <div className="size-12 rounded-full overflow-hidden">
                        <img src="profile.jpg" alt="testajah" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}