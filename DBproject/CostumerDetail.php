<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Untitled Document</title>
<link href="CostumerDetail.css" rel="stylesheet" type="text/css" />
<link href="Login.css" rel="stylesheet" type="text/css" />

<?PHP
	session_start();
	// Create connection to Oracle
	$conn = oci_connect("system", "tickey31862", "//localhost/XE");
	if (!$conn) {
		$m = oci_error();
		echo $m['message'], "\n";
		exit;
	} 
?>
<?php
  
  function show($PIC_ID)
   {
	$_SESSION['ID'] = $PIC_ID;
    $conn = oci_connect("system", "tickey31862", "//localhost/XE");
	$query = "select * From CPE_SHOP_PIC_PRODUCT where ID_PIC = $PIC_ID	";
	$parseRequest = oci_parse($conn, $query);
	oci_execute($parseRequest);
	$row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC);
	$_SESSION['NAME'] =$row['PIC_NAME'];
	$_SESSION['PATH'] =$row['PATH'];
	$_SESSION['BRAND'] = $row['BRAND']; 
	$query2 = "select * From CPE_SHOP_PRODUCT where PIC_ID = $PIC_ID	";
	$parseRequest2 = oci_parse($conn, $query2);
	oci_execute($parseRequest2);
	$row2 = oci_fetch_array($parseRequest2, OCI_RETURN_NULLS+OCI_ASSOC);
	$_SESSION['Price'] =$row2['PRICE_SELL'];
	$_SESSION['detail'] = $row2['DETAIL'];
  	oci_close($conn);
   }


?>
<?PHP		
        $user = $_SESSION['username'];
		$pass = $_SESSION['pass'];  
		$query = "SELECT * FROM AUSER WHERE USERNAME='$user' and PASS='$pass'";
		$parseRequest = oci_parse($conn, $query);
		oci_execute($parseRequest);
		// Fetch each row in an associative array
		$row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC);
		
	oci_close($conn);
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
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body bgcolor="#F1F1F1" onload="MM_preloadImages('menubarSign up1.jpg')">

<div class="test">
  <div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image2','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image2" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" ></a></div>
  <div class="tabmen4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmen6"><a href="Sign_in.php"></a><a href="#" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  </div>


<div class="Cname"><div class="myfont2" style="font-size:20px;">Username :</div></div>
<div class="Uname"><textarea readonly><?php echo $row['USERNAME']; ?></textarea></div>
<div class="name"><div class="myfont2" style="font-size:20px;">Name :</div></div>
<div class="Birthday"><div class="myfont2" style="font-size:20px;">Birthday :</div></div>
<div class="Address"><div class="myfont2" style="font-size:20px;">Address :</div></div>
<div class="Email"><div class="myfont2" style="font-size:20px;">E-mail :</div></div>
<div class="Tel"><div class="myfont2" style="font-size:20px;">Tel. :</div>
</div>
<div class="Pname"><textarea readonly> <?php echo $row['NAME']; ?></textarea ></div>
<div class="PBirthday"><textarea readonly><?php echo $row['BIRTHDAY']; ?></textarea></div>
<div  class="PAddress"><textarea readonly><?php echo $row['ADDRESS']; ?> </textarea></div>
<div  class="PEmail"><textarea readonly><?php echo $row['EMAIL']; ?></textarea></div>
<div  class="PTel"><textarea readonly><?php echo $row['TEL']; ?></textarea></div>
<form action='CostumerDetail.php' method='post'>
<div class="edit">
  <input name="submit" type="submit" value="Edit" />
</div>
</form>
<?PHP
	if(isset($_POST['submit'])){
		echo '<script>window.location = "CostumerDetailEdit.php";</script>';
		}
?>	



<div class="CHistory"><div class="myfont1" style="font-size:20px;">ODERED</div></div>
<div class="CBoxHistory">
<div class="OrderPic"><img src="<?PHP echo $_SESSION['PATH'] ?>" height="200" width="200"  /></div>
<div class="OrderName"><?PHP echo $_SESSION['NAME'] ?></div>
<div class="OrderPrice"><?PHP echo $_SESSION['Price'] ?></div>
</div>






</div>
</body>
</html>
