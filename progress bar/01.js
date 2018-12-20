function userProgress(time){
	let start = 0;
	let progressElement = document.getElementById('user-progress');
	let intervalId = setInterval(function(){
		if (start <= 100){
			progressElement.value = start;
			start++;
		} else {
			clearInterval(intervalId);
			showBlock();
			
		}
	}, time);

}

function showBlock(){
	document.querySelector('.hidden-block').style.display = 'block';
}
userProgress(100);
