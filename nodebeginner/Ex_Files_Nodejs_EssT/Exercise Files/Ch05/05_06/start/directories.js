var fs = require('fs');


fs.readdirSync("./logs").forEach((fileName)=>{
	fs.unlinkSync("./logs/" + fileName);

})

fs.rmdir("./logs", (err)=>{
	if(err)
		throw err;
	console.log('log removed');
})