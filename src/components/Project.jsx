export default function Project({ name, desc, links }) {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl">{name}</h1>
            <p className="text-[#808080]">
                {desc}
            </p>
            <span className="text-xs flex gap-2">
                {links.map((item, i) => (
                    <a key={i} href={item.link}>{item.platform} -&gt;</a>
                ))}
            </span>
        </div>
    )
}