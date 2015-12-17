
<?php
	session_start();
	// Create connection to Oracle
	$conn = oci_connect("system", "Got0895889227", "//localhost/XE");
	if (!$conn) {
		$m = oci_error();
		echo $m['message'], "\n";
		exit;
	} 
?>

<?php 
   function showasus()
   {
    $conn = oci_connect("system", "Got0895889227", "//localhost/XE");
	$query = "select PATH,ID_PIC From CPE_SHOP_PIC_PRODUCT where BRAND = 'asus' and PRODUCT_TYPE = 'tablet'";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PIC_PRODUCT']=array();
	$_SESSION['PIC_ID']=array();
	  $temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PIC_PRODUCT'][$temp] = $row['PATH'];
		$_SESSION['PIC_ID'][$temp] = $row['ID_PIC'];
		$temp++;
		}
  	oci_close($conn);
   }
  
   function showlenovo()
   {
    $conn = oci_connect("system", "Got0895889227", "//localhost/XE");
	$query = "select PATH,ID_PIC From CPE_SHOP_PIC_PRODUCT where BRAND = 'lenovo' and PRODUCT_TYPE = 'tablet' ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PIC_PRODUCT']=array();
	$_SESSION['PIC_ID']=array();
	  $temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PIC_PRODUCT'][$temp] = $row['PATH'];
		$_SESSION['PIC_ID'][$temp] = $row['ID_PIC'];
		$temp++;
		}
  	oci_close($conn);
   }
   
   function showacer()
   {
    $conn = oci_connect("system", "Got0895889227", "//localhost/XE");
	$query = "select PATH,ID_PIC From CPE_SHOP_PIC_PRODUCT where BRAND = 'acer' and PRODUCT_TYPE = 'tablet'";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PIC_PRODUCT']=array();
	$_SESSION['PIC_ID']=array();
	  $temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PIC_PRODUCT'][$temp] = $row['PATH'];
		$_SESSION['PIC_ID'][$temp] = $row['ID_PIC'];
		$temp++;
		}
  	oci_close($conn);
   }
   
   function showsamsung()
   {
    $conn = oci_connect("system", "Got0895889227", "//localhost/XE");
	$query = "select PATH,ID_PIC From CPE_SHOP_PIC_PRODUCT where BRAND = 'samsung' and PRODUCT_TYPE = 'tablet'";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PIC_PRODUCT']=array();
	$_SESSION['PIC_ID']=array();
	  $temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PIC_PRODUCT'][$temp] = $row['PATH'];
		$_SESSION['PIC_ID'][$temp] = $row['ID_PIC'];
		$temp++;
		}
  	oci_close($conn);
   }
   if (isset($_GET['show_product_asus'])) {
    showasus();
   }
  if (isset($_GET['show_product_lenovo'])) {
    showlenovo();
  }
  if (isset($_GET['show_product_acer'])) {
    showacer();
  }
  if (isset($_GET['show_product_samsung'])) {
    showsamsung();
  }
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="ShowProduct.css" rel="stylesheet" type="text/css" />
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

<body bgcolor="#F1F1F1" onload="MM_preloadImages('acer1.png','samsung1.png','lenovo1.png','asus1.png','menubarPC1.jpg','menubarLAP2.jpg')">
<div class="test">
<div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onclick="<?php session_destroy();?>" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php" onclick="<?php session_destroy();?>" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image3','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image3" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php" onclick="<?php session_destroy();?>" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" /></a></div>
  <div class="tabmen4"><a href="Smartphonepage.php" onclick="<?php session_destroy();?>" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php"><img src="menubarTAP1.jpg" width="165" height="40" alt=""/></a></div>
  <div class="tabmen6"><a href="#" onclick="<?php session_destroy();?>" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  </div>

<div class="SearchBox">
<form id="form1" name="form1" method="post" action="">
  <div id="tfheader">
		<form id="tfnewsearch" method="get" action="http://www.google.com">
		        <input type="text" class="tftextinput" name="q" size="58" maxlength="120"><input type="submit" value="search" class="tfbutton">
		</form>
	<div class="tfclear"></div>
  </div>
</form>
</div>
<div class="tabmenu1"><a href="Tapletpage.php?show_product_samsung=true" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image2','','samsung1.png',1)"><img src="samsung.png" alt="" width="184" height="63" id="Image2" /></a></div>

<div class="tabmenu2"><a href="Tapletpage.php?show_product_acer=true" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image12','','acer3.png',1)"><img src="acer2.png" alt="" width="184" height="63" id="Image12" /></a></div>

<div class="tabmenu3"><a href='Tapletpage.php?show_product_lenovo=true' onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image8','','lenovo1.png',1)"><img src="lenovo.png" alt="" width="195" height="80" id="Image8" /></a></div>
<div class="tabmenu4" ><a href='Tapletpage.php?show_product_asus=true' onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image11','','asus1.png',1)" ><img src="asus.png" alt="" width="184" height="63" id="Image11" /></a></div>

<?php
$temp2=0;
while($_SESSION['PIC_PRODUCT'][$temp2] != null){
echo '<div class="Product';echo $temp2+1;echo '"><a href ="ProductDetail.php?';echo $_SESSION['PIC_ID'][$temp2];echo '" /><img src="';echo $_SESSION['PIC_PRODUCT'][$temp2];echo '" width="200" height="200"/></div>';
}
?>

<div class="ShowProduct1">
<div class="AProduct1"></div>
<div class="PositionName"></div>
<div class="PositionPrice"></div>
<div class="PositionDetail">
  <form id="form1" name="form1" method="post" action="">
    <input type="submit" name="1" id="1" value="Submit" />
  </form>
</div>
</div>

<div class="ShowProduct2">
<div class="AProduct2"></div>
<div class="PositionName2"></div>
<div class="PositionPrice2"></div>
<div class="PositionDetail2">
  <form id="form2" name="form2" method="post" action="">
    <input type="submit" name="2" id="2" value="Submit" />
  </form>
</div>
</div>

<div class="ShowProduct3">
<div class="AProduct3"></div>
<div class="PositionName3"></div>
<div class="PositionPrice3"></div>
<div class="PositionDetail3">
  <form id="form3" name="form3" method="post" action="">
    <input type="submit" name="3" id="3" value="Submit" />
  </form>
</div>
</div>

<div class="ShowProduct4">
<div class="AProduct4"></div>
<div class="PositionName4"></div>
<div class="PositionPrice4"></div>
<div class="PositionDetail4">
  <form id="form4" name="form4" method="post" action="">
    <input type="submit" name="4" id="4" value="Submit" />
  </form>
</div>
</div>

<div class="ShowProduct5">
<div class="AProduct5"></div>
<div class="PositionName5"></div>
<div class="PositionPrice5"></div>
<div class="PositionDetail5">
  <form id="form5" name="form5" method="post" action="">
    <input type="submit" name="5" id="5" value="Submit" />
  </form>
</div>
</div>

<div class="ShowProduct6">
<div class="AProduct6"></div>
<div class="PositionName6"></div>
<div class="PositionPrice6"></div>
<div class="PositionDetail6">
  <form id="form6" name="form6" method="post" action="">
    <input type="submit" name="6" id="6" value="Submit" />
  </form>
</div>
</div>
<div class="ShowProduct7">
<div class="AProduct7"></div>
<div class="PositionName7"></div>
<div class="PositionPrice7"></div>
<div class="PositionDetail7">
  <form id="form7" name="form7" method="post" action="">
    <input type="submit" name="7" id="7" value="Submit" />
  </form>
</div>
</div>

</div>

</body>
</html>
