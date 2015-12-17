<?php
	 session_start();
	 //if(empty($_SESSION['search'])){
	//	echo '<script>window.alert("error,Please input Data");</script>';
	//	echo '<script>window.location = "PCpage.php";</script>';
   	//}
		//echo '<script>window.location = "search.php?search";</script>';
	//echo '<script>window.alert("'.$_SESSION['search'].'");</script>';

   // session_destroy();
?>

<?php 
   function showasus()
   {
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
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
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
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
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
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
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
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
   
   
    function tapmaxmin(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'tablet' order by PRICE_SELL desc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'tablet' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   function tapminmax(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'tablet' order by PRICE_SELL asc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'tablet' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   
    function phonemaxmin(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'phone' order by PRICE_SELL desc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'phone' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   function phoneminmax(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'phone' order by PRICE_SELL asc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'phone' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   
   
   
   function notebookmaxmin(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'notebook' order by PRICE_SELL desc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'notebook' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   function notebookminmax(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'notebook' order by PRICE_SELL asc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'notebook' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   
   function PCminmax(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'pc' order by PRICE_SELL asc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'pc' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   
   function PCmaxmin()
   {
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_TYPE = 'pc' order by PRICE_SELL desc ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'pc' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
   }
   
   function searchPC(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_NAME like '%".$_SESSION['search']."%'  ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'pc' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
	   
   }
   function searchLaptop(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_NAME like '%".$_SESSION['search']."%'  ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'notebook' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
	   
	   
   }
   function searchPhone(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_NAME like '%".$_SESSION['search']."%'  ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'phone' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
		$temp++;
		}
  	oci_close($conn);
	   
	   
   }
   function searchTaplet(){
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PRODUCT where PRODUCT_NAME like '%".$_SESSION['search']."%'  ";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$_SESSION['PRODUCT_ID']=array();
	$_SESSION['PRODUCT_NAME']=array();
	$_SESSION['PIC_ID']=array();
	$_SESSION['PRICE']=array();
	$_SESSION['PATH_PIC']=array();
	$temp = 0;
	while($row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC)){
		$_SESSION['PRODUCT_ID'][$temp] = $row['PRODUCT_ID'];
		$_SESSION['PRODUCT_NAME'][$temp] = $row['PRODUCT_NAME'];
		$_SESSION['PRICE'][$temp] = $row['PRICE_SELL'];
		$_SESSION['PIC_ID'][$temp] = $row['PIC_ID'];
		$test = $_SESSION['PIC_ID'][$temp];
		$query2 = "select * From CPE_SHOP_PIC_PRODUCT where PRODUCT_TYPE = 'tablet' and ID_PIC = $test ";
		$parseRequest2 = oci_parse($conn, $query2);
	    oci_execute($parseRequest2);
		$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
		$_SESSION['PATH_PIC'][$temp]=$row2['PATH'];
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
  if (isset($_GET['PCmax-min'])) {
    PCmaxmin();
  }
  if (isset($_GET['PCmin-max'])) {
    PCminmax();
  }
  if (isset($_GET['notebookmax-min'])) {
    notebookmaxmin();
  }
  if (isset($_GET['notebookmin-max'])) {
    notebookminmax();
  }
  if (isset($_GET['phonemax-min'])) {
    phonemaxmin();
  }
  if (isset($_GET['phonemin-max'])) {
    phoneminmax();
  }
  if (isset($_GET['tapmax-min'])) {
    tapmaxmin();
  }
  if (isset($_GET['tapmin-max'])) {
    tapminmax();
  }
  if (isset($_GET['searchPC'])){
	searchPC();
  }
   if (isset($_GET['searchLaptop'])){
	searchLaptop();
  }
   if (isset($_GET['searchPhone'])){
	searchPhone();
  }
   if (isset($_GET['searchTaplet'])){
	searchTaplet();
  }
   if (isset($_POST['submit'])) {
   $_SESSION['searchPC']= trim($_POST['search']);
   echo '<script>window.location = "search.php?searchPC"</script>';
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
  <div class="tabmen"><a href="Homepage.php"  onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php"  onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image3','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image3" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php"  onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" /></a></div>
 <div class="tabmen4"><a href="Smartphonepage.php"  onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php"  onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
 <div class="tabmen6"><a href="Sign_in.php"  onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  </div>

<div class="SearchBox">
<form id="form1" name="form1" method="post" >
  <div id="tfheader">
		<form id="tfnewsearch" method="post" action="search.php">
		        <input type="input" class="tftextinput" name="search" size="50" maxlength="100"><input name ="submit" type="submit" value="search" class="tfbutton">
		</form>
	<div class="tfclear"></div>
  </div>
</form>
</div>
<!--
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

-->


<div class="ShowProduct1">
<div class="AProduct1"><img src="<?PHP if($_SESSION['PATH_PIC'][0]!=null){echo $_SESSION['PATH_PIC'][0];}?>" width="200" height="200"/></div>
<div class="PositionName1"><?PHP if($_SESSION['PATH_PIC'][0]!=null){echo $_SESSION['PRODUCT_NAME'][0];} ?></div>
<div class="PositionPrice1"><?PHP if($_SESSION['PATH_PIC'][0]!=null){echo $_SESSION['PRICE'][0];} ?></div>
<div class="PositionDetail1">
  <form id="form1" name="form1" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][0];?>">
    <input type="submit" name="1" id="1" value="detail"/>
  </form>
</div>
</div>


<div class="ShowProduct2">
<div class="AProduct2"><img src="<?PHP if($_SESSION['PATH_PIC'][1]!=null){ echo $_SESSION['PATH_PIC'][1];}?>" width="200" height="200"/></div>
<div class="PositionName2"><?PHP if($_SESSION['PATH_PIC'][1]!=null){echo $_SESSION['PRODUCT_NAME'][1]; }?></div>
<div class="PositionPrice2"><?PHP if($_SESSION['PATH_PIC'][1]!=null){echo $_SESSION['PRICE'][1];} ?></div>
<div class="PositionDetail2">
  <form id="form2" name="form2" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][1];?>">
    <input type="submit" name="2" id="2" value="detail" href = "ProductDetail.php?<?PHP $_SESSION['PIC_ID']?>" />
  </form>
</div>
</div>

<div class="ShowProduct3">
<div class="AProduct3"><img src="<?PHP if($_SESSION['PATH_PIC'][2]!=null){ echo $_SESSION['PATH_PIC'][2];}?>" width="200" height="200"/></div>
<div class="PositionName3"><?PHP if($_SESSION['PATH_PIC'][2]!=null){ echo $_SESSION['PRODUCT_NAME'][2];} ?></div>
<div class="PositionPrice3"><?PHP if($_SESSION['PATH_PIC'][2]!=null){ echo $_SESSION['PRICE'][2];} ?></div>
<div class="PositionDetail3">
  <form id="form3" name="form3" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][2];?>">
    <input type="submit" name="3" id="3" value="detail" href = "ProductDetail.php?<?PHP $_SESSION['PIC_ID']?>" />
  </form>
</div>
</div>

<div class="ShowProduct4">
<div class="AProduct4"><img src="<?PHP if($_SESSION['PATH_PIC'][3]!=null){ echo $_SESSION['PATH_PIC'][3];}?>" width="200" height="200"/></div>
<div class="PositionName4"><?PHP if($_SESSION['PATH_PIC'][3]!=null){ echo $_SESSION['PRODUCT_NAME'][3];} ?></div>
<div class="PositionPrice4"><?PHP if($_SESSION['PATH_PIC'][3]!=null){echo $_SESSION['PRICE'][3];}?></div>
<div class="PositionDetail4">
  <form id="form4" name="form4" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][3];?>">
    <input type="submit" name="4" id="4" value="detail" href = "ProductDetail.php?<?PHP $_SESSION['PIC_ID']?>" />
  </form>
</div>
</div>

<div class="ShowProduct5">
<div class="AProduct5"><img src="<?PHP if($_SESSION['PATH_PIC'][4]!=null){echo $_SESSION['PATH_PIC'][4];}?>" width="200" height="200"/></div>
<div class="PositionName5"><?PHP if($_SESSION['PATH_PIC'][4]!=null){ echo $_SESSION['PRODUCT_NAME'][4];} ?></div>
<div class="PositionPrice5"><?PHP if($_SESSION['PATH_PIC'][4]!=null){echo $_SESSION['PRICE'][4];} ?></div>
<div class="PositionDetail5">
  <form id="form5" name="form5" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][4];?>">
    <input type="submit" name="5" id="5" value="detail" href = "ProductDetail.php?<?PHP $_SESSION['PIC_ID']?>"/>
  </form>
</div>
</div>

<div class="ShowProduct6">
<div class="AProduct6"><img src="<?PHP if($_SESSION['PATH_PIC'][5]!=null){ echo $_SESSION['PATH_PIC'][5];}?>" width="200" height="200"/></div>
<div class="PositionName6"><?PHP if($_SESSION['PATH_PIC'][5]!=null){ echo $_SESSION['PRODUCT_NAME'][5]; }?></div>
<div class="PositionPrice6"><?PHP if($_SESSION['PATH_PIC'][5]!=null){echo $_SESSION['PRICE'][5];} ?></div>
<div class="PositionDetail6">
  <form id="form6" name="form6" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][5];?>">
    <input type="submit" name="6" id="6" value="detail" href = "ProductDetail.php?<?PHP $_SESSION['PIC_ID']?>"/>
  </form>
</div>
</div>
<div class="ShowProduct7">
<div class="AProduct7"><img src="<?PHP if($_SESSION['PATH_PIC'][4]!=null){ echo $_SESSION['PATH_PIC'][6];}?>" width="200" height="200"/></div>
<div class="PositionName7"><?PHP if($_SESSION['PATH_PIC'][4]!=null){echo $_SESSION['PRODUCT_NAME'][6]; }?></div>
<div class="PositionPrice7"><?PHP if($_SESSION['PATH_PIC'][4]!=null){ echo $_SESSION['PRICE'][6]; } ?></div>
<div class="PositionDetail7">
  <form id="form7" name="form7" method="post" action="ProductDetail.php?<?PHP echo $_SESSION['PIC_ID'][6];?>">
    <input type="submit" name="7" id="7" value="detail" href = "ProductDetail.php?<?PHP $_SESSION['PIC_ID']?>" />
  </form>
</div>
</div>

</div>

</body>
</html>
