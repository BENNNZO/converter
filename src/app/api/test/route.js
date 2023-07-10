const { exec } = require("child_process")
const { spawn } = require('child_process')

export async function POST() {
    console.log("POST endpoint")
    const childPython = spawn('python', ['--version'])
    childPython.stdout.on('data', (data) => console.log(data.toString('utf8')))
    // console.log(childPython)
    return new Response("yay", { status: 200 })
}