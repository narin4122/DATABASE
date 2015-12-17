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
   
   if(isset($_GET['1'])) {
 show(1);
}
if (isset($_GET['2'])) {
 show(2);
}
if (isset($_GET['3'])) {
 show(3);
}
if (isset($_GET['4'])) {
 show(4);
}
if (isset($_GET['5'])) {
 show(5);
}
if (isset($_GET['6'])) {
 show(6);
}
if (isset($_GET['7'])) {
 show(7);
}
if (isset($_GET['8'])) {
 show(8);
}
if (isset($_GET['9'])) {
 show(9);
}
if (isset($_GET['10'])) {
 show(10);
}
if (isset($_GET['11'])) {
 show(11);
}
if (isset($_GET['12'])) {
 show(12);
}
if (isset($_GET['13'])) {
 show(13);
}
if (isset($_GET['14'])) {
 show(14);
}
if (isset($_GET['15'])) {
 show(15);
}
if (isset($_GET['16'])) {
 show(16);
}
if (isset($_GET['17'])) {
 show(17);
}
if (isset($_GET['18'])) {
 show(18);
}
if (isset($_GET['19'])) {
 show(19);
}
if (isset($_GET['20'])) {
 show(20);
}
if (isset($_GET['21'])) {
 show(21);
}
if (isset($_GET['22'])) {
 show(22);
}
if (isset($_GET['23'])) {
 show(23);
}
if (isset($_GET['24'])) {
 show(24);
}
if (isset($_GET['25'])) {
 show(25);
}
if (isset($_GET['26'])) {
 show(26);
}
if (isset($_GET['27'])) {
 show(27);
}
if (isset($_GET['28'])) {
 show(28);
}
if (isset($_GET['29'])) {
 show(29);
}
if (isset($_GET['30'])) {
 show(30);
}
if (isset($_GET['31'])) {
 show(31);
}
if (isset($_GET['32'])) {
 show(32);
}
if (isset($_GET['33'])) {
 show(33);
}
if (isset($_GET['34'])) {
 show(34);
}
if (isset($_GET['35'])) {
 show(35);
}
if (isset($_GET['36'])) {
 show(36);
}
if (isset($_GET['37'])) {
 show(37);
}
if (isset($_GET['38'])) {
 show(38);
}
if (isset($_GET['39'])) {
 show(39);
}
if (isset($_GET['40'])) {
 show(40);
}
if (isset($_GET['41'])) {
 show(41);
}
if (isset($_GET['42'])) {
 show(42);
}
if (isset($_GET['43'])) {
 show(43);
}
if (isset($_GET['44'])) {
 show(44);
}
if (isset($_GET['45'])) {
 show(45);
}
if (isset($_GET['46'])) {
 show(46);
}
if (isset($_GET['47'])) {
 show(47);
}
if (isset($_GET['48'])) {
 show(48);
}
if (isset($_GET['49'])) {
 show(49);
}
if (isset($_GET['50'])) {
 show(50);
}
if (isset($_GET['51'])) {
 show(51);
}
if (isset($_GET['52'])) {
 show(52);
}
if (isset($_GET['53'])) {
 show(53);
}
if (isset($_GET['54'])) {
 show(54);
}
if (isset($_GET['55'])) {
 show(55);
}
if (isset($_GET['56'])) {
 show(56);
}
if (isset($_GET['57'])) {
 show(57);
}
if (isset($_GET['58'])) {
 show(58);
}
if (isset($_GET['59'])) {
 show(59);
}
if (isset($_GET['60'])) {
 show(60);
}
if (isset($_GET['61'])) {
 show(61);
}
if (isset($_GET['62'])) {
 show(62);
}
if (isset($_GET['63'])) {
 show(63);
}
if (isset($_GET['64'])) {
 show(64);
}
if (isset($_GET['65'])) {
 show(65);
}
if (isset($_GET['66'])) {
 show(66);
}
if (isset($_GET['67'])) {
 show(67);
}
if (isset($_GET['68'])) {
 show(68);
}
if (isset($_GET['69'])) {
 show(69);
}
if (isset($_GET['70'])) {
 show(70);
}
if (isset($_GET['71'])) {
 show(71);
}
if (isset($_GET['72'])) {
 show(72);
}
if (isset($_GET['73'])) {
 show(73);
}
if (isset($_GET['74'])) {
 show(74);
}
if (isset($_GET['75'])) {
 show(75);
}
if (isset($_GET['76'])) {
 show(76);
}
if (isset($_GET['77'])) {
 show(77);
}
if (isset($_GET['78'])) {
 show(78);
}
if (isset($_GET['79'])) {
 show(79);
}
if (isset($_GET['80'])) {
 show(80);
}
if (isset($_GET['81'])) {
 show(81);
}
if (isset($_GET['82'])) {
 show(82);
}
if (isset($_GET['83'])) {
 show(83);
}
if (isset($_GET['84'])) {
 show(84);
}
if (isset($_GET['85'])) {
 show(85);
}
if (isset($_GET['86'])) {
 show(86);
}
if (isset($_GET['87'])) {
 show(87);
}
if (isset($_GET['88'])) {
 show(88);
}

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Untitled Document</title>
<link href="ConfirmOrder.css" rel="stylesheet" type="text/css" />
<link href="Login.css" rel="stylesheet" type="text/css" />
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />

<?PHP		
        $user = $_SESSION['username'];
		$pass = $_SESSION['pass'];;  
		$query = "SELECT * FROM AUSER WHERE USERNAME='$user' and PASS='$pass'";
		$parseRequest = oci_parse($conn, $query);
		oci_execute($parseRequest);
		// Fetch each row in an associative array
		$row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC);
		
	oci_close($conn); 
?>


<?PHP		
        $conn = oci_connect("system", "tickey31862", "//localhost/XE");
        if(isset($_POST['confirm'])){
		 $query6 = "SELECT Max(C_ID) as ID FROM CPE_ORDER";
		 $parseRequest6 = oci_parse($conn, $query6);
		 oci_execute($parseRequest6);
		// Fetch each row in an associative array
		$row6 = oci_fetch_array($parseRequest6, OCI_RETURN_NULLS+OCI_ASSOC);
		$temp = $row6['ID'];
		$temp = $temp + 1;
		
        $username = $_SESSION['username'];
		$C_PRODUCT= $_SESSION['NAME'];
		$C_PRICE =  $_SESSION['Price'];
		$C_PATH = $_SESSION['PATH'];
		$C_ID = $temp;
		$PRODUCT_ID = $_SESSION['ID'];
        
		$query5 = "INSERT INTO CPE_ORDER(C_USERNAME,C_PRODUCT,C_PRICE,C_PATH,C_ID,PRODUCT_ID) VALUES('$username','$C_PRODUCT','$C_PRICE','$C_PATH','$C_ID','$PRODUCT_ID')";
  		$parseRequest5 = oci_parse($conn, $query5);
	 oci_execute($parseRequest5);
			//echo '<script>window.alert("'.$PRODUCT_ID.'");</script>';
			echo '<script>window.location = "CostumerDetail.php";</script>';
		
		
		
	oci_close($conn);
		
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
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body bgcolor="#F1F1F1" onload="MM_preloadImages('menubarPC1.jpg')">
<div class="test">
<div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image2','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image2" /></a></div>
  <div class="tabmen3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" ></a></div>
  <div class="tabmen4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmen6"><a href="Sign_in.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  </div>
<div class="CDetail">
  <div class="myfont2" style="font-size:20px"><?php echo $row['USERNAME']; ?></div></div>
<div class="CSupDetail">
	<div class="address"><div class="myfont2" style="font-size:17px ">Address :</div></div>
	 <div class="Tel"><div class="myfont2" style="font-size:17px">E-mail :</div></div>
     <div class="email"><div class="myfont2" style="font-size:17px">Tel :</div></div>
    <div class="send"><div class="myfont2" style="font-size:18px">Type for send :</div></div>
    <div class="Iaddress"><textarea name="textarea" readonly="readonly"><?php echo $row['ADDRESS']; ?></textarea></div>
    <div class="Iemail"><textarea name="textarea" readonly="readonly"><?php echo $row['TEL']; ?></textarea></div>
    <div class="ITel"><span class="Uname">
      <textarea name="textarea" readonly="readonly"><?php echo $row['EMAIL']; ?></textarea>
    </span></div>
    <div class="Isend">
    	<select> 
        <option value="Register">Register   </option>
        <option value="EMS">EMS</option>
        </select>
    </div>
</div>

<div class="COrder"><div class="myfont2" style="font-size:20px">ORDER LIST</div></div>
<div class="CDetailOrder">
<div class="OrderPic"><img src="<?PHP echo $_SESSION['PATH'] ?>" height="200" width="200"  /><span class="OrderName">
  
</span></div>
<div class="OrderName" ><?PHP echo $_SESSION['NAME'] ?></div>
<div class="OrderPrice"><?PHP echo $_SESSION['Price'] ?>
</div>

<div class="Confirm">
  
  <form  method="post" action="ConfirmOrder.php">
    <input type="submit" name="confirm"  value="Confirm" />
  </form>
</div>
</div>
</body>
</html>
