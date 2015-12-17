<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Untitled Document</title>

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

<script language="JavaScript"> 
	function fncShow(ctrl){ // ฟังก์ชั่นสำหรับ แสดง (Show) ส่งค่า id ของ DIV หรือ Table TD TR
		document.getElementById(ctrl).style.display = ''; //สั่งให้แสดง
		document.getElementById('embed_button').innerHTML ='<input type="submit" name="Submit" value="Hide Embed" onClick="JavaScript:fncHide(\'embed_div\');">'; // หลังจากสั่งให้แสดงเสร็จ ก็ทำการเปลี่ยนสถานะของปุ่มเป็น "ซ่อน"
	}
 
	function fncHide(ctrl){ // ฟังก์ชั่นสำหรับ ซ่อน ส่งค่า id ของ DIV หรือ Table TD TR
		document.getElementById(ctrl).style.display = 'none'; //สั่งให้แสดง
		document.getElementById('embed_button').innerHTML ='<input type="submit" name="Submit" value="Show Embed" onClick="JavaScript:fncShow(\'embed_div\');">';  // หลังจากสั่งให้ซ่อนแล้ว ก็ทำการเปลี่ยนสถานะของปุ่มเป็น "แสดง"
	}
</script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body bgcolor="#F1F1F1">
<div class="test">
<div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image2','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image2" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" ></a></div>
  <div class="tabmen4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></a></div>
  <div class="tabmen5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmen6"><a href="Sign_in.php"><img src="menubarSign up1.jpg" width="170" height="40" alt=""/></a></div>
  </div>
<div class="Tlogin"><div class="myfont1" style="font-size:40px">SING  IN</div> </div>
<div class="Username"><div class="myfont2" style="font-size:20px">Username</div></div>
<div class="Password"><div class="myfont2" style="font-size:20px">Password</div></div>
<form  method="post" action="Login.php">
<div class="BUsername"><input name="username" type="text" class="fill" style="height:25px; width:250px"/></div>
<div class="BPassword"><input name="pass" type="password" class="fill" style="height:25px; width:250px"/></div>
<div class="ButtonLogin">
  <button name="submit" type="submit" class="btn btn-default"><div class="myfont1" style="font-size:15px">SING IN</div></button>
</div>
</form>

<?PHP
	if(isset($_POST['submit'])){
		$username = trim($_POST['username']);
		$password = trim($_POST['pass']);
		$status = 'admin';
		$status2 = '(null)';
		
		$query1 = "SELECT * FROM AUSER WHERE USERNAME='$username' and PASS='$password'";
		$parseRequest1 = oci_parse($conn, $query1);
		oci_execute($parseRequest1);
		// Fetch each row in an associative array
		$row = oci_fetch_array($parseRequest1, OCI_RETURN_NULLS+OCI_ASSOC);
		if($row and $status = $row['STATUS']){
			$_SESSION['username'] = $row['USERNAME'];
			$_SESSION['pass'] = $row['PASS'];
				echo '<script>window.location = "Admin-stockpage.php";</script>';
		}else if($row and $row['STATUS'] = $status2){
			$_SESSION['username'] = $row['USERNAME'];
			$_SESSION['pass'] = $row['PASS'];
			    echo '<script>window.location = "Homepage.php";</script>';
				
		}
		else{ 
		
		echo '<div class="ButtonLogin2"><h2>Log in Fail</h2></div>';}
		
	};
	oci_close($conn);
?>
 


</div>
</body>
</html>
