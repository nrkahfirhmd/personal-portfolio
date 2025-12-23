import Terminal from "../components/Terminal";

export default function Chat() {
    return (
        <>
            <Terminal>
                <div className="rounded-lg w-full border border-[var(--color-text)] flex gap-2 p-2">
                    <p>
                        &gt;
                    </p>
                    <input type="text" name="message" id="message" placeholder="message me..." className="text-sm outline-none w-full" />
                </div>
            </Terminal>
        </>
    )
}