// JavaScript Document
xmlDoc=loadXMLDoc("http://kearchive.wordpress.com/feed/");
$(document).ready(function(){
	$('#main').append((xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue + "<br>"));
	document.write(xmlDoc.getElementsByTagName("link")[5].childNodes[0].nodeValue + "<br>");
	document.write(xmlDoc.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue);
	
	for(i = 0; i <= 8; i+=2){
		document.write(xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue + "<br>");
	}
});