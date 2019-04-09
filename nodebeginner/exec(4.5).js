var exec = require("child_process").exec;

exec("git version", (err, stdout)=>{

	if(err)
		throw err;

	console.log("git version executed");
	console.log(stdout);
});