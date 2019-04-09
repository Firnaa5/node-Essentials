var fs = require('fs')
var path = require('path')

/*fs.readFile("./lib/sayings.md", "UTF-8", (err, contents)=>{
	if(err)
		throw err
	console.log(contents)
})
*/

fs.readdir("./lib", (err, files)=>{
	files.forEach((fileName)=>{
		var file= path.join(__dirname,"lib",fileName)
		var stats  = fs.statSync(file)
		if(stats.isFile() && fileName !== ".DS_Store"){
			fs.readFile(file, "UTF-8", (err,contents)=>{
				console.log(contents)
			})
		}
	})
})