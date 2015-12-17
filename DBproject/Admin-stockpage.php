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
 $_SESSION['bool'] = false ;
 $_SESSION['check'] = false ;
 if(isset($_POST['add_Stock'])){
	 $stockid = trim($_POST['stockid']);
	 $BuyData = trim($_POST['BuyData']);
	 $Amoung = trim($_POST['Amoung']);
	 $Sumprice = trim($_POST['Sumprice']);
     
	 $query = "INSERT INTO CPE_SHOP_STOCK(STOCK_ID,BUY_DATE,AMONUT,SUM_PRICE) VALUES('$stockid','$BuyData','$Amoung','$Sumprice')";
	 $parseRequest = oci_parse($conn, $query);
	 oci_execute($parseRequest);
	 //$row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC);
	 
	 if($stockid!=null){
	 $_SESSION['stockID'] = $stockid;
	 $_SESSION['bool'] = true ;
	 }
 }
	 
if(isset($_POST['addproduct'])){
	 $ProductID = trim($_POST['ProductID']);
	 $ProductName = trim($_POST['ProductName']);
	 $ProductType = trim($_POST['ProductType']);
	 $ProductBrand = trim($_POST['ProductBrand']);
     $pricebuy = trim($_POST['pricebuy']);
	 $pricesell = trim($_POST['pricesell']);
	 $PIC_ID = trim($_POST['PIC_ID']);
	 $Detail = trim($_POST['Detail']);
	 
	 $query = "INSERT INTO CPE_SHOP_PRODUCT(PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) VALUES('$ProductID','$ProductName','$ProductType','$pricebuy','$pricesell','$ProductBrand','$PIC_ID','".$_SESSION['stockID']."','$Detail')";
	 $parseRequest = oci_parse($conn, $query);
	 oci_execute($parseRequest);
	 //$row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC);
	 
}
	
if(isset($_POST['submit-searchSTOCK'])){
	$searchSTOCK = trim($_POST['searchSTOCK']);
	//echo '<script>window.alert("'.$searchSTOCK.'");</script>';
	$query = "select * from CPE_SHOP_STOCK where STOCK_ID = $searchSTOCK";
	 $parseRequest = oci_parse($conn, $query);
	 oci_execute($parseRequest);
	 $row = oci_fetch_array($parseRequest, OCI_RETURN_NULLS+OCI_ASSOC);
     if($row){
	 $_SESSION['Stock-id'] = $row['STOCK_ID'];
	 $_SESSION['Stock-buydate'] = $row['BUY_DATE'];
	 $_SESSION['Stock-amount'] = $row['AMONUT'];
	 $_SESSION['Stock-sum-price'] = $row['SUM_PRICE'];
     $_SESSION['check'] = true ;
     }
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

<body bgcolor="#F1F1F1" onload="MM_preloadImages('acer1.png','samsung1.png','lenovo1.png','asus1.png','cont-ad1.png','rev-ad1.png','order-ad1.png','Costu-ad1.png','Sell-ad1.png','Stock-ad1.png','overall1.png','menubarPC1.jpg','Buttonadd1.png','Buttonsearch1.png')">
<div class="test">
<div class="bar"><img src="Tap-ad.png" width="1000" height="100" alt=""/>
<div class="Adname"><div class="myfont3" style="font-size:15px;">Admin name : <?PHP echo $_SESSION['username']; ?> </div></div>
</div>
<div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php"></a><a href="#" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image1','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image1" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" ></a></div>
  <div class="tabmen4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmen6"><a href="Sign_in.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image7','','menubarSign up1.jpg',1)"><img src="menubarSign up.jpg" alt="" width="170" height="40" id="Image7" /></a></div>
  </div>

<div class="tabmenu1"><a href="Admin-orderpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image21','','order-ad1.png',1)"><img src="order-ad.png" alt="" width="120" height="50" id="Image21" /></a></div>

<div class="tabmenu2"><a href="Admin-stockpage.php"><img src="Stock-ad1.png" width="120" height="50" alt=""/></a></div>

<div class="tabmenu3"><a href="Admin-costpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image19','','Costu-ad1.png',1)"><img src="Costu-ad.png" alt="" width="120" height="50" id="Image19" /></a></div>
<div class="tabmenu4"><a href="Admin-revenpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image18','','rev-ad1.png',1)"><img src="rev-ad.png" alt="" width="120" height="50" id="Image18" /></a></div>


<form action ="Admin-stockpage.php" method='post'>
<div class="Detail">
<div class="Stock">
<div class="stockaddI"><div class="myfont3" style="font-size:15px; color:#D1D1D1;">Add Stock</div></div>
<div class="stockID"><div class="myfont3" style="font-size:15px;">Stock ID :</div></div>
<div class="stockIDI"> 
  <label for="textfield"></label>
  <input type="input" name="stockid" id="textfield" style="height:30px; width:130px"/></div>
<div class="buydate"><div class="myfont3" style="font-size:15px;">Date of buy :</div></div>
<div class="buydateI">
  <label for="DateBuy"></label>
  <input type="input" name="BuyData" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="amoung"><div class="myfont3" style="font-size:15px;">Amoung :</div></div>
<div class="amoungI">
 <label for="textfield"></label>
  <input type="input" name="Amoung" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="Sumprice"><div class="myfont3" style="font-size:15px;">Sum price :</div></div>
<div class="SumpriceI">
<label for="textfield"></label>
  <input type="input" name="Sumprice" id="textfield" style="height:30px; width:130px"/>

</div>
<div class="addID"><input name='add_Stock' type='submit' value='ADD' ></div>
</form>

<!---------------------------------------------------------------------------------------------------->

<form action ="Admin-stockpage.php" method='post'>
<div class="Addproduct"><div class="myfont3" style="font-size:15px; color:#D1D1D1;">Add Product in stock id :<?PHP  if($_SESSION['bool']){echo $_SESSION['stockID'];} ?></div></div>
<div class="productID"><div class="myfont3" style="font-size:15px;">Product ID :</div></div>
<div class="productIDI">
<label for="textfield"></label>
  <input type="input" name="ProductID" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="productname"><div class="myfont3" style="font-size:14px;">Product Name :</div></div>
<div class="productnameI">
  <label for="textfield"></label>
  <input type="input" name="ProductName" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="producttype"><div class="myfont3" style="font-size:14px;">Product Type :</div></div>
<div class="producttypeI">
  <label for="textfield"></label>
  <input type="input" name="ProductType" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="productbrand"><div class="myfont3" style="font-size:14px;">Product Brand :</div></div>
<div class="productbrandI">
 <label for="textfield"></label>
  <input type="input" name="ProductBrand" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="productbuy"><div class="myfont3" style="font-size:15px;">Price Buy :</div></div>
<div class="productbuyI">
<label for="textfield"></label>
  <input type="input" name="pricebuy" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="productsell"><div class="myfont3" style="font-size:15px;">Price Sell :</div></div>
<div class="productsellI">
<label for="textfield"></label>
  <input type="input" name="pricesell" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="productpic"><div class="myfont3" style="font-size:15px;">Picture ID :</div></div>
<div class="productpicI">
<label for="textfield"></label>
  <input type="input" name="PIC_ID" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="productdetail"><div class="myfont3" style="font-size:15px;">Detail :</div></div>
<div class="productdetailI">
<label for="textfield"></label>
  <input type="input" name="Detail" id="textfield" style="height:30px; width:130px"/>
</div>
<div class="addpID"><input name='addproduct' type='submit' value='ADD' ></div>
</form>
</div>


<!---------------------------------------------------------------------------------------------------->
<form action = "Admin-stockpage.php" method='post'>
<div class="Stock1">
<div class="search"><input name='submit-searchSTOCK' type='submit' value='Search' ></div>
<div class="stockaddI">
<label for="textfield"></label>
  <input type="input" name="searchSTOCK" id="textfield" style="height:30px; width:130px"/>
</div>
</form>

<div class="stockID"><div class="myfont3" style="font-size:15px;">Stock ID : <?PHP if($_SESSION['check']){ echo  $_SESSION['Stock-id'];} ?></div></div>
<div class="stockIDI"> 
  <label ></label>
 </div>
<div class="stockname"><div class="myfont3" style="font-size:15px;">Date of buy : <?PHP if($_SESSION['check']){ echo  $_SESSION['Stock-buydate'];} ?></div></div>
<div class="stocknameI">
  <label for="textfield"></label>
  
</div>
<div class="buydate"><div class="myfont3" style="font-size:15px;">Amoung : <?PHP if($_SESSION['check']){echo  $_SESSION['Stock-amount'];} ?></div></div>
<div class="buydateI">
  <label ></label>
</div>
<div class="amoung"><div class="myfont3" style="font-size:15px;">Sum price : <?PHP if($_SESSION['check']){echo  $_SESSION['Stock-sum-price'];} ?></div></div>
<div class="amoungI">
 <label ></label>
  
</div>

</div>
<!------------------------------------------------------------------------------------------------------------------>


</div>

</div>



</div>

</body>
</html>
