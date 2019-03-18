module.exports = function getZerosCount(number, base) {
	let i = 2;
	let SI = base;
	let primeNumbers = [];
	while ((SI > 0) && (i <= SI)) {
		while (SI % i == 0) {
			primeNumbers.push(i);
			SI = SI / i;
		}
		i ++;
	}
  	let basePrimeNumbers = [];
  	primeNumbers.map (( x , index )=>{
		if ((primeNumbers[index - 1]) != x || (index == 0)){
  			basePrimeNumbers.push([x,1]);
		}
		else {
			basePrimeNumbers[basePrimeNumbers.length - 1][1] ++;
		}
  	});
 	let basePrimeNumbersInfo = [];
 	basePrimeNumbers.map ((x) =>{
 		let num = number;
 		let zerocount = 0;
 		while ( num > 0 ){
 			num = Math.floor(num / x[0]);
 			zerocount = num + zerocount;
 		}
 		basePrimeNumbersInfo.push(Math.floor(zerocount/x[1]));
 	});
 	return Math.min(...basePrimeNumbersInfo);
}