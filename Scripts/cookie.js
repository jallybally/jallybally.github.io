var color = GetCookie('username');
function cookiest(){

if (color == null) {
	color = 'white';
	pathname = location.pathname;
	myDomain = pathname.substring(0,pathname.lastIndexOf('/')) +'/';
	var largeExpDate = new Date ();
	largeExpDate.setTime(largeExpDate.getTime() + (3600 * 24 * 30));
	SetCookie('username',color,largeExpDate,myDomain);
	alertMod('На сайте используется cookie');
}
function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg)
                        return getCookieVal (j);
                i = document.cookie.indexOf(" ", i) + 1;
                        if (i == 0)
                                break;
                }
	return null;
}
function SetCookie (name, value) {
        var argv = SetCookie.arguments;
        var argc = SetCookie.arguments.length;
        var expires = (argc > 2) ? argv[2] : null;
        var path = (argc > 3) ? argv[3] : null;
        var domain = (argc > 4) ? argv[4] : null;
        var secure = (argc > 5) ? argv[5] : false;		
        document.cookie = name + "=" + escape (value) +
                ((expires == null) ? "" : ("; expires=" +
expires.toGMTString())) +
                ((path == null) ? "" : ("; path=" + path)) +
                ((domain == null) ? "" : ("; domain=" + domain)) +
                ((secure == true) ? "; secure" : "");
}
/*document.getElementById('user').innerHTML = username;*/

}
/*alert*/
function alertMod(content,afterFunction){
	$('<div id="alertm_all">'+content+'<div class="alertm_but" onclick="alert_close('+afterFunction+'); return false">OK</div></div>').appendTo('body');
	$(".overlay, .alertm_all").fadeIn("slow");
}
function alert_close(afterFunctionClouse){
	$(".overlay, #alertm_all").remove();
	afterFunctionClouse;
}
/*Color*/
function colorRed(){
	if(color != 'red'){
	color = 'red';
	document.body.style.color = '#FF0000';
	document.getElementById('tbr').style.borderBottom = '1px solid #FF0000';
	document.getElementById('popup').style.borderColor = '#FF0000';
	document.getElementById('tbr').style.borderBottom = '1px solid #FF0000';
	document.getElementById('alertm_all').style.borderColor = '#FF0000';
	document.getElementById('popupIMG').src = 'https://github.com/jallybally/jallybally.github.io/blob/master/css/Resources/gear_red.png?raw=true';
	
	function SetCookie (name, value) {
        var argv = SetCookie.arguments;
        var argc = SetCookie.arguments.length;
        var expires = (argc > 2) ? argv[2] : null;
        var path = (argc > 3) ? argv[3] : null;
        var domain = (argc > 4) ? argv[4] : null;
        var secure = (argc > 5) ? argv[5] : false;		
        document.cookie = name + "=" + escape (value) +
                ((expires == null) ? "" : ("; expires=" +
				expires.toGMTString())) +
                ((path == null) ? "" : ("; path=" + path)) +
                ((domain == null) ? "" : ("; domain=" + domain)) +
                ((secure == true) ? "; secure" : "");
	}
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
