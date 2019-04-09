var fs = require('fs')

if(fs.existsSync("lib")){
	console.log("Dircetory exist")
}else{
fs.mkdir("lib", (err)=>{
 if(err)
 	console.log(err);
 console.log('Directory created')
})

}

