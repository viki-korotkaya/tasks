document.querySelector('#test').onmousemove = function(event){
	document.querySelector('#offsetX').innerHTML = event.offsetX;
	document.querySelector('#offsetY').innerHTML = event.offsetY;
}