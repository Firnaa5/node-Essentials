var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited =0;

function writeWaitingPercentage(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ....${p}%`)
}
var interval = setInterval(()=>{
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100)
	writeWaitingPercentage(percentWaited)
}, waitInterval)



setTimeout(function(){
	clearInterval(interval)
	console.log("\n \nDone")
}, waitTime)

process.stdout.write("\n\n\n")
writeWaitingPercentage(percentWaited)