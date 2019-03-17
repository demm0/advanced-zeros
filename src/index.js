module.exports = function getZerosCount(number, base) {
   // your implementation
   var primenumbers = [2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71,	73,	79,	83,	89,	97,
	101,	103,	107,	109,	113,	127,	131,	137,	139,	149,	151,	157,	163,	167,	173,
	179,	181,	191,	193,	197,	199,	211,	223,	227,	229,	233,	239,	241,	251,	257];
		
	let result = [];
	let num = base;
	let primenumberslength = primenumbers.length;
	for (let i = 0; i < primenumberslength; i++) {
		if (num % primenumbers[i] == 0) {
			result.push([primenumbers[i], 0, 0]);
				while (num % primenumbers[i] == 0) {
				result[result.length - 1][1] = result[result.length - 1][1] + 1;
				num = (num - num % primenumbers[i]) / primenumbers[i];
			}
			if (num == 1) {
				break;
			}
		}
	}

let resultlength = result.length;
	for (let factItem = number; factItem > 1; factItem--) {
		for (let i = 0; i < resultlength; i++) {
			let workFactItem = factItem;
			let primenumber = result[i][0];
			if (workFactItem % (primenumber) == 0) {
				while (workFactItem % (primenumber) == 0) {
					result[i][2] = result[i][2] + 1;
					workFactItem = (workFactItem - workFactItem % primenumber) / primenumber;	
				}
				if(workFactItem == 1) {
					break;
				}
			}
		}
	}
	let zeroCount = Infinity;
	for (let i = 0; i < resultlength; i++) {
		let vector = result[i];
		let pairQuotient = (vector[2] - vector[2] % vector[1]) / vector[1];
		zeroCount = zeroCount > pairQuotient ? pairQuotient : zeroCount;
	}
	return zeroCount;
}