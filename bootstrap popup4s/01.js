$(document).ready(function(){
	showStartModal();
	$('#modal-accept').on('click', function(){
		localStorage.setItem('modalAccept', 1);
		$('#exampleModal').modal('hide');
	})
})
function showStartModal(){
	if (localStorage.getItem('modalAccept') != 1){
	setTimeout(function(){$('#exampleModal').modal('show')}, 5000)
}
	
}
