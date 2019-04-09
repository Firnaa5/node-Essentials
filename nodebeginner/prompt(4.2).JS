var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout)
var realPerson = {
	name: '',
	sayings: []
};
rl.question("what is ur name",(answer)=>{

	realPerson.name = answer;
	rl.setPrompt(`what would be the ${realPerson.name} say`);
	rl.prompt();
	rl.on('line', (saying)=>{

		realPerson.sayings.push(saying.trim());

		if(saying.toLowerCase().trim() === 'exit'){
			rl.close();
		}else{
			rl.setPrompt(`What else wouls ${realPerson.name} say? ('exit' to leave)`)
			rl.prompt();
		}
		
	})
});

rl.on('close', ()=>{
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings)

}) 
process.exit();