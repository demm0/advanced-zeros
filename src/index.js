module.exports = function getZerosCount(number, base) {
  // your implementation
  var primeNumbers = [2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71,
	73,	79,	83,	89,	97,	101,	103,	107,	109,	113,	127,	131,	137,	139,	149,	151,	157,	
	163,	167,	173,
	179,	181,	191,	193,	197,	199,	211,	223,	227,	229,	233,	239,	241,	251,	257];
	
	function countZeros(num, baseNum) {
		
		let basePrimeNumbersInfo = initBasePrimeNumbersInfo(baseNum);
	
		for(let factItem = num; factItem > 1; factItem--) {
			for(let i = 0; i < basePrimeNumbersInfo.length; i++) {
				let workFactItem = factItem;
				let primeNumber = basePrimeNumbersInfo[i][0];
				
				if(workFactItem % (primeNumber) == 0) {
					while(workFactItem % (primeNumber) == 0) {
						basePrimeNumbersInfo[i][2] = basePrimeNumbersInfo[i][2] + 1;
						workFactItem = (workFactItem - workFactItem % primeNumber) / primeNumber;	
					}
	
					if(workFactItem == 1) {
						break;
					}
				}
			}
		}
	
		let zeroCount = Infinity;
	
		for(let i = 0; i < basePrimeNumbersInfo.length; i++) {
			let vector = basePrimeNumbersInfo[i];
			let pairQuotient = (vector[2] - vector[2] % vector[1]) / vector[1];
			zeroCount = zeroCount > pairQuotient ? pairQuotient : zeroCount;
		}
	
		return zeroCount;
	
	}
	
	function initBasePrimeNumbersInfo(num) {
		let result = [];
	
		for(let i = 0; i < primeNumbers.length; i++) {
			if (num % primeNumbers[i] == 0) {
				result.push([primeNumbers[i], 0, 0]);
				
				while(num % primeNumbers[i] == 0) {
					result[result.length - 1][1] = result[result.length - 1][1] + 1;
					num= (num - num % primeNumbers[i]) / primeNumbers[i];
				}
	
				if(num == 1) {
					break;
				}
	
			}
		}
	
		return result;
}
