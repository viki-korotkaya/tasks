const stairsMap = [0, 1, 1]
const climbStairs = function(n) {
   if (n === 0) return 0;
   if (!stairsMap[n]) {
    stairsMap[n] = climbStairs(n-1) + climbStairs(n-2)
   }
   return stairsMap[n]
};

function fib(n){
	var prev = 1;
	var cur = 1;
	var answ = 0;
	for (var i = 2; i <=n; i++){
		answ = prev + cur;
		[prev, cur] = [cur, answ]
	}
	return answ;
}