var fs = require('fs')

/*fs.readFile("./chat.log", "UTF-8", (err, chatlog)=>{

	console.log(`FIle Read ${chatlog.length}`)

})

console.log("Redaing File")*/

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

stream.once("data", ()=>{

	console.log("\n\n\n")
	console.log("Started Reading FIle")
	console.log("\n\n\n")

})

stream.on("data", (chunk)=>{
	process.stdout.write(`chunk: ${chunk.length} |`)
	data += chunk;
})

stream.on("end", ()=>{
	console.log("\n\n\n")
	console.log(`Finished Reading FIle ${data.length}`)
	console.log("\n\n\n")
})