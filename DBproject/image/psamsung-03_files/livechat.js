var ssPageTrackCode=$("#pageTrack").val();

// JavaScript Document
document.writeln("<div id=\"livechat\" style=\"width:200px; height:218px; position:absolute; top:200px; right:10px;  z-index:400; display:none;\">");
document.writeln("	<div style=\"width:200px; height:218px; background:url(\/th\/support\/floating_icon\/liveChat_th.png); _background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'\/th\/support\/floating_icon\/liveChat_th.png\',sizingMethod=\'scale\');\">");
document.writeln("		<div style=\"position:absolute; width:200px; display:inline;\">");
document.writeln("			<span style=\"float:right; width:18px; height:14px; margin:0px 6px 0 0; font-size:0px; line-height:0px; cursor:pointer\" onclick=\"javascript:document.getElementById(\'livechat\').style.display=\'none\'\"><\/span>");

//document.writeln("			<span style=\"float:left; margin:0px 0 0 0px; display:inline; width:200px; height:202px; cursor:pointer\" onclick=\"window.open(\'http:\/\/www.samsung.com\/th\/clubs\/?pid=th_product_floating_banner_clubs_20131024')\"><\/span>");

document.writeln("			<span style=\"float:left; margin:0px 0 0 0px; display:inline;   width:200px; height:204px; cursor:pointer\" onclick=\"s_control_click('eVar7', '', 'th_floatbanner_support livechat', 'o', 'pid');window.open(\'http:\/\/livechat.support.samsung.com\/LiveChat\/customer\/th\')\"><\/span>")

document.writeln("		<\/div>");
document.writeln("	<\/div>");
document.writeln("<\/div>");

var lastScrollY_livechat=0;
function heartBeat_livechat(){ 
//diffY=document.documentElement.scrollTop; 
diffY=$(document).scrollTop(); 
percent=0.1*(diffY-lastScrollY_livechat); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("livechat").style.top=parseInt(document.getElementById("livechat").style.top)+percent+"px";
//document.getElementById("livechat").style.right=($(window).width()-960)/2-119+"px";
lastScrollY_livechat=lastScrollY_livechat+percent;
}

var _supportUrl=document.location.href;
if(_supportUrl.indexOf("/th/support/")>0  )
{	
	document.getElementById("livechat").style.display="block";
}


window.setInterval("heartBeat_livechat()",1);
function hidead(){
document.getElementById("livechat").style.display="none";
}


