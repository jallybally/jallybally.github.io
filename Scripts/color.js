
function colorRed(){
	var username = GetCookie('username');
	if(username == 'red'){
	document.body.style.color = '#FF0000';
	document.getElementById('tbr').style.borderBottom = '1px solid #FF0000';
	document.getElementById('popup').style.borderColor = '#FF0000';
	document.getElementById('tbr').style.borderBottom = '1px solid #FF0000';
	document.getElementById('alertm_all').style.borderColor = '#FF0000';
	document.getElementById('popupIMG').src = 'https://github.com/jallybally/jallybally.github.io/blob/master/css/Resources/gear_red.png?raw=true';
	}
	
}
function colorGreen(){
	document.body.style.color = '#23d82f';
	document.getElementById('tbr').style.borderBottom = '1px solid #23d82f';
	document.getElementById('popup').style.borderColor = '#23d82f';
	document.getElementById('alertm_all').style.borderColor = '#23d82f';
	document.getElementById('popupIMG').src = 'https://github.com/jallybally/jallybally.github.io/blob/master/css/Resources/gear_green.png?raw=true';
}
function colorBlue(){
	document.body.style.color = '#00cedf';
	document.getElementById('tbr').style.borderBottom = '1px solid #00cedf';
	document.getElementById('popup').style.borderColor = '#00cedf';
	document.getElementById('alertm_all').style.borderColor = '#00cedf';
	document.getElementById('popupIMG').src = 'https://github.com/jallybally/jallybally.github.io/blob/master/css/Resources/gear_blue.png?raw=true';
}
function colorYellow(){
	document.body.style.color = '#f9fb09';
	document.getElementById('tbr').style.borderBottom = '1px solid #f9fb09';
	document.getElementById('popup').style.borderColor = '#f9fb09';
	document.getElementById('alertm_all').style.borderColor = '#f9fb09';
	document.getElementById('popupIMG').src = 'https://github.com/jallybally/jallybally.github.io/blob/master/css/Resources/gear_yellow.png?raw=true';
}
function colorWhite(){
	document.body.style.color = '#ffffff';
	document.getElementById('tbr').style.borderBottom = '1px solid #ffffff';
	document.getElementById('popup').style.borderColor = '#ffffff';
	document.getElementById('alertm_all').style.borderColor = '#ffffff';
	document.getElementById('popupIMG').src = 'https://github.com/jallybally/jallybally.github.io/blob/master/css/Resources/gear_white.png?raw=true';
}

