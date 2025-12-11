export default function Experience({ role, company, start, end, jobdesc }) {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-xl">
                {role} @ <span className="text-[#00ffdd]">{company}</span>
            </h1>
            <p className="text-xs text-[#808080]">
                {start} - {end}
            </p>
            <ul className="text-sm">
                {jobdesc.map((item, i) => (
                    <li key={i} className="before:content-['-'] before:px-2">{item}</li>
                ))}
            </ul>
        </div>
    )
}