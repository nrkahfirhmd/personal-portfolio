export default function Works()
{
    return (
        <>
            <div className="w-full border border-white rounded-lg relative">
                <div className="w-[1px] h-full bg-white absolute left-15"></div>

                <div className="flex gap-4 py-4 px-8">
                    <div className="w-17 flex justify-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden z-5">
                            <img src="/src/assets/logo.jpeg" alt="Company Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <h6 className="text-xs">Sep 2024 - Jan 2025</h6>
                        <h1 className="text-xl font-bold">Bangkit Academy</h1>
                        <h3 className="text-sm">Machine Learning Cohort</h3>

                        <ol className="text-justify text-xs">
                            <li className="flex gap-2">
                                <span className="h-full">•</span>
                                Menye menye menye menye menye menye menye menye 
                            </li>
                            <li className="flex gap-2">
                                <span className="h-full">•</span>
                                oaidjwdawiojdwaioj awdoijdawojpadw adwodawoiadwkoawd awdoawdkawk dawadwidwawj jdwadwajdaj dawjhwadjdawj
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}