<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="Untitled-4.css" rel="stylesheet" type="text/css" />
<style type="text/css">



</style>

<script language="JavaScript"> 
	function fncShow(ctrl){ // ฟังก์ชั่นสำหรับ แสดง (Show) ส่งค่า id ของ DIV หรือ Table TD TR
		document.getElementById(ctrl).style.display = ''; //สั่งให้แสดง
		
	}
 
	function fncHide(ctrl){ // ฟังก์ชั่นสำหรับ ซ่อน ส่งค่า id ของ DIV หรือ Table TD TR
		document.getElementById(ctrl).style.display = 'none'; //สั่งให้แสดง
		
	}
</script>

<?PHP
	session_start();
	
	
	if(isset($_POST['logout'])){
		session_destroy();
		
		}
	
	
  
?>




<script type="text/javascript">
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
</script>
</head>
<script>

</script>
<body bgcolor="#F1F1F1" onload="MM_preloadImages('menubarPC1.jpg','menubar2.jpg','menubarLAP2.jpg','menubarPHONE1.jpg','menubarTAP1.jpg','menubarSign up1.jpg')">
<div class="test">
 
  <div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/> 
  <div class="Profile" ><a href="CostumerDetail.php"><div class="myfont2">Profile</div></div>
  <div class="Profile2" >
    <form  method="post" action="Homepage.php">
    
    <input type="submit" name="logout" id="logout" value="Logout" />
  </form>
</div>
 
  </div>
  <div class="tab">
  <div class="tabmen"><a href="Homepage.php"><img src="menuhome.jpg" width="170" height="40" alt=""/></a>
  </div>
  <div class="tabmenu2"><a href="PCpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image3','','menubarPC1.jpg',1)"><img src="menuPC.jpg" alt="" width="165" height="40" id="Image3" /></a></div>
  
  <div class="tabmenu3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" /></a></div>
  <div class="tabmenu4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmenu5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmenu6"><a href="Sign_in.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  
  </div>
  <div class="showP"><img src="Showp1.jpg" width="1000" height="450" alt=""/>
	<div class="textshow">
  		  <font face = "CS PraJad"font-size = "+34">NEW PRODUCT! <br/> CLICK!</font>
  		</div>
  
  	
  </div>
  <div class="xx"><img src="yybg.png" width="400" height="150" alt=""/>
  <div class="yyproduct"><img src="psamsung-03.jpg" width="70" height="130" alt=""/></div>
  <div class="yyproduct1"><img src="psamsung-02.jpg" width="70" height="130" alt=""/></div>
  <div class="yyproduct2"><img src="psamsung-04.jpg" width="70" height="130" alt=""/></div>
  <div class="yyproduct3"><img src="psamsung-01.jpg" width="70" height="130" alt=""/></div>
  </div>
  <div class="yy"><img src="yybg.png" width="400" height="150" alt=""/>
  <div class="yyproduct"><img src="psamsung-13.jpg" width="70" height="130" alt=""/></div>
  <div class="yyproduct1"><img src="psamsung-12.jpg" width="70" height="130" alt=""/></div>
  <div class="yyproduct2"><img src="psamsung-14.jpg" width="70" height="130" alt=""/></div>
  <div class="yyproduct3"><img src="psamsung-11.jpg" width="70" height="130" alt=""/></div>
  </div>
  <div class="tab2"><img src="barhome.png" width="1000" height="40" alt=""/>
  
  </div>
  <div class="p1">
  <img src="image/notebook/acer-02.jpg" width="250" height="250" alt=""/> </div>
  <div class="p2">
  <img src="image/notebook/asus-03.jpg" width="250" height="250" alt=""/> </div>
  <div class="p3">
  <img src="image/tablet/tacer-04.jpg" width="259" height="250" alt=""/> </div>
  
  <div class="ender">
    <div class="endev"><div class="myfont2" style="18px;">Develop By</div></div>
    <div class="enname"><div class="myfont2" style="18px;">Narin Jongjetdee</div></div>
    <div class="enno"><div class="myfont2" style="18px;">560610546</div></div>
    <div class="enname1"><div class="myfont2" style="18px;">Narumon Kunama</div></div>
    <div class="enno1"><div class="myfont2" style="18px;">560610547</div></div>
    <div class="enname2"><div class="myfont2" style="18px;">Puttisan Komon</div></div>
    <div class="enno2"><div class="myfont2" style="18px;">560610567</div></div>
  </div>
</div>
</div>

</div>
<?PHP
	
	
	
		
	if (isset($_GET['show'])) {
    echo '<div class="Profile" ><a href="CostumerDetail.php">profile</a></div>';
	
	echo '<div class="Profile2" ><div class="myfont2" style="font-size:17px;">
	
    <form  method="post" action="Homepage.php">
    
    <input type="submit" name="logout" id="logout" Value="Log out"/>
  </form></div>
</div>';
	}
	
  
?>



</div>

</body>
</html>
