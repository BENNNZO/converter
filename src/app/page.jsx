"use client"


export default function Home() {
    function execute() {
        console.log("hello world!")
    }

    return (
        <main>
            Hello, World!
            <button onClick={() => execute()}>
                Execute
            </button>
        </main>
    )
}
