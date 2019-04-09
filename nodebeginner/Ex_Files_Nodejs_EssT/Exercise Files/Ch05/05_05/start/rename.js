var fs = require('fs')

fs.renameSync("./lib/project-config.js", "./lib/config.json")
console.log("config.json created")

fs.rename("/.lib/notes.md", "/notes.md", (err)=>{
	if (err)
		console.log(err)
	console.log("notes.md moved out")
})