var https = require('https');
var fs = require('fs')

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path:"/wiki/A._P._J._Abdul_Kalam",
	method: "GET"
};

var req = https.request(options, (res)=>{

	var responseBody = "";
	console.log("Response from server started")
	console.log(`Server Status: ${res.statusCode}`)
	console.log("Response Headers : %j", res.headers)

	res.setEncoding("UTF-8")

	res.once("data", (chunk)=>{
		console.log(chunk)
	})

	res.on("data", (chunk)=>{
		console.log(`--chunk--${chunk.length}`)
		responseBody += chunk;
	})

	res.on("end", ()=>{
		fs.writeFile("abdulKalam.html", responseBody, (err)=>{
				if(err)
					throw err;
				console.log("file downloaded")
		})
	})
})
req.on("error", (error)=>{
	console.log(`Problem with request :${error.message}`)

})

req.end();
