var fs = require('fs')
var md =`
sample Markdown Title
======================

sample subtitile
----------------

*point
*point
*point

`;

fs.writeFile("sample.md", md.trim(), (err)=>{
	console.log("file created")
})