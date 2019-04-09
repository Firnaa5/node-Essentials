var spawn = require('child_process').spawn;

var cp = spawn("node", ["alwaysTalking"]);

cp.stdout.on("data", (data)=>{
	console.log(`STDOUT: ${data.toString()}`)
})

cp.on("close", ()=>{
	console.log("process ended")
	process.exit()
})

setTimeout(()=>{
	cp.stdin.write("stop")
}, 4000)