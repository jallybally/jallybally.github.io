
function popupOut(){
	setTimeout(
		function(){
			document.getElementById('popup').style.opacity='0';
			document.getElementById('popup').style.transform='scaleY(0)';
		}, 100		
	);
	setTimeout(
		function(){
			document.getElementById('overlay').style.display='none';
		}, 400
	);
}

function popupIn(){
	document.getElementById('overlay').style.display='block';
	setTimeout(
		function(){
			document.getElementById('popup').style.opacity='1';
			document.getElementById('popup').style.transform='scaleY(1)';
		}, 100
	);
}