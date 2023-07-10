"use client"

import axios from "axios"

export default function Home() {
    function execute() {
        console.log("hello world!")
        axios.post('/api/test')
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
