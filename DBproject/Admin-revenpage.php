<?php
	session_start();
	// Create connection to Oracle
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	if (!$conn) {
		$m = oci_error();
		echo $m['message'], "\n";
		exit;
	} 
?>
<?PHP  
 
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
    $query = "select a1.C_PRODUCT,count(a1.C_PRODUCT) as count,sum(a1.C_PRICE) as amonut from CPE_ORDER a1,CPE_SHOP_PRODUCT a2 where a1.PRODUCT_ID=a2.PRODUCT_ID  group by C_PRODUCT,a2.PRODUCT_TYPE ";
	$parseRequest = oci_parse($conn, $query);
	 oci_execute($parseRequest);
	 $temp =0 ;
	 $_SESSION['C_PRODUCT'] = array();
	 $_SESSION['coutC_PRODUCT'] = array();
	 $_SESSION['sumC_PRODUCTC_PRODUCT'] = array();
	 while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
     $_SESSION['C_PRODUCT'][$temp] = $row['C_PRODUCT'];
	 $_SESSION['coutC_PRODUCT'][$temp] = $row['COUNT'];
	 $_SESSION['sumC_PRODUCTC_PRODUCT'][$temp] = $row['AMONUT'];
	 $temp++;
	}
    
	
	
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="ShowProduct.css" rel="stylesheet" type="text/css" />
<link href="admin.css" rel="stylesheet" type="text/css" />
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

<body bgcolor="#F1F1F1" onload="MM_preloadImages('acer1.png','samsung1.png','lenovo1.png','asus1.png','cont-ad1.png','rev-ad1.png','order-ad1.png','Costu-ad1.png','Sell-ad1.png','Stock-ad1.png','overall1.png','menubarPC1.jpg')">
<div class="test">
<div class="bar"><img src="Tap-ad.png" width="1000" height="100" alt=""/>
<div class="Adname"><div class="myfont3" style="font-size:15px;">Admin name :</div></div>
</div>
<div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image1','','menubarPC1.jpg',1)"><img src="menuPC.jpg" alt="" width="165" height="40" id="Image1" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" ></a></div>
  <div class="tabmen4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmen6"><a href="Sign_in.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  </div>

<div class="tabmenu1"><a href="Admin-orderpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image21','','order-ad1.png',1)"><img src="order-ad.png" alt="" width="120" height="50" id="Image21" /></a></div>

<div class="tabmenu2"><a href="Admin-stockpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image20','','Stock-ad1.png',1)"><img src="Stock-ad.png" alt="" width="120" height="50" id="Image20" /></a></div>

<div class="tabmenu3"><a href="Admin-costpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image19','','Costu-ad1.png',1)"><img src="Costu-ad.png" alt="" width="120" height="50" id="Image19" /></a></div>
<div class="tabmenu4"><a href="Admin-revenpage.php"><img src="rev-ad1.png" width="120" height="50" alt=""/></a></div>

<div class="Detail">
<table style="width:100%;" align="center"border=1;>
<tr bgcolor="#F4F4F4">
 <td><div class="myfont2" style="font-size:15px;">Product</td></div>
 <td><div class="myfont2" style="font-size:15px;">Amoung</td></div>
<td><div class="myfont2" style="font-size:15px;">Selling [฿]</td></div>
<!---
<td><div class="myfont2" style="font-size:15px;">Purches [฿]</td></div>
<td><div class="myfont2" style="font-size:15px;">Income [฿]</td></div> 
--->
</tr>
<?PHP 
$temp2 =0;
while(isset($_SESSION['C_PRODUCT'][$temp2])){
echo '<tr>';
echo '<td><div class="myfont3" style="font-size:20px;">';echo $_SESSION['C_PRODUCT'][$temp2];echo'</td></div>';
echo '<td><div class="myfont3" style="font-size:20px;">';echo $_SESSION['coutC_PRODUCT'][$temp2];echo'</td></div>';
echo '<td><div class="myfont3" style="font-size:20px;">';echo $_SESSION['sumC_PRODUCTC_PRODUCT'][$temp2];echo'</td></div>';
echo '</tr>';
$temp2++;
}
?>
</table>
</div>

</div>

</body>
</html>
