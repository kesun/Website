// JavaScript Document
xmlDoc=loadXMLDoc("http://kearchive.wordpress.com/feed/");

document.write(xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue + "<br>");
document.write(xmlDoc.getElementsByTagName("link")[5].childNodes[0].nodeValue + "<br>");
document.write(xmlDoc.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue);