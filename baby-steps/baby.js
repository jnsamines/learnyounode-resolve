var args = process.argv, sum = 0;

for(var i = 2; i <= args.length - 1; i++){
	sum += Number(args[i]);	
}

console.log(sum);