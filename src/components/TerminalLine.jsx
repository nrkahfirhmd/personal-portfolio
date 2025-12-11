export default function TerminalLine({ children, command="sudo apt update" }) {
    return (
        <div className="flex flex-col gap-1">
            <p className="flex gap-2 text-sm">
                <span className="text-[#00ffdd]">$</span> {command}
            </p>
            <span>
                {children}
            </span>
        </div>
    )
}