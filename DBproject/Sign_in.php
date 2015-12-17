<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Untitled Document</title>
<link href="Sign_in.css"  rel="stylesheet" type="text/css" />


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
<?PHP
        if(isset($_POST['submit'])){
		$username = trim($_POST['username']);
		$password = trim($_POST['pass']);
		$name = trim($_POST['name']);
		$address = trim($_POST['address']);
		$email = trim($_POST['email']);
		$birthday = trim($_POST['birthday']);
		$tel = trim($_POST['tel']);
		
		$query1 = "SELECT * FROM AUSER WHERE USERNAME='$username'";
		$parseRequest1 = oci_parse($conn, $query1);
		oci_execute($parseRequest1);
		// Fetch each row in an associative array
		$row = oci_fetch_array($parseRequest1, OCI_RETURN_NULLS+OCI_ASSOC);
		if($row){
			echo"<script language=\"JavaScript\">";
            echo"window.alert('We already have this username')";
            echo"</script>";
		}
		if($username=='' or $password=='' or $name=='' or $address=='' or $email=='' or $birthday ==''or $tel==''){
			 echo"<script language=\"JavaScript\">";
            echo"window.alert('5555555')";
            echo"</script>";
			}
		
		else{	
		$query = "INSERT INTO AUSER(NAME,BIRTHDAY,ADDRESS,EMAIL,TEL,USERNAME,PASS) VALUES('$name','$birthday','$address','$email',$tel,'$username','$password')";
        
		$parseRequest = oci_parse($conn, $query);
		oci_execute($parseRequest);
		echo"<script language=\"JavaScript\">";
            echo"window.alert('5555555')";
            echo"</script>";
			
			echo '<script>window.location = "Login.php";</script>';
		}
		
		};
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

<body onload="MM_preloadImages('menubarPC1.jpg','menubarPHONE1.jpg')">
<div class="test">
<div class="test2"><img src="header2.jpg" width="1000" height="200" alt=""/></div>
<div class="tab">
  <div class="tabmen"><a href="Homepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image','','menuhome.jpg',1)"><img src="menubar.jpg" alt="" width="170" height="40" id="Image" /></a>
  </div>
  <div class="tabmen2"><a href="PCpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image2','','menubarPC1.jpg',1)"><img src="menubarPC.jpg" alt="" width="165" height="40" id="Image2" /></a></div>
  
  <div class="tabmen3"><a href="Laptoppage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image4','','menubarLAP2.jpg',1)"><span class="tabmen4"><a href="Smartphonepage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image5','','menubarPHONE1.jpg',1)"><img src="menubarPHONE.jpg" alt="" width="165" height="40" id="Image5" /></div>
  <div class="tabmen4"><img src="menubarLAP1.jpg" alt="" width="165" height="40" id="Image4" ></div>
  <div class="tabmen5"><a href="Tapletpage.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image6','','menubarTAP1.jpg',1)"><img src="menubarTAP.jpg" alt="" width="165" height="40" id="Image6" /></a></div>
  <div class="tabmen6"><a href="Sign_in.php"><img src="menubarSign up1.jpg" width="170" height="40" alt=""/></a></div>
  </div>
<div class="Sign"><div class="myfont1" style="font-size:40px">SING UP</div> </div>
<div class="name"><div class="myfont2" style="font-size:30px">Name</div></div>
<div class="Birthday"><div class="myfont2" style="font-size:30px">Birth day</div></div>
<div class="Address"><div class="myfont2" style="font-size:30px">Address</div></div>
<div class="Email"><div class="myfont2" style="font-size:30px">E-mail</div></div>
<div class="Tel"><div class="myfont2" style="font-size:30px">Tel.</div></div>
<a href="../../../Users/Apinya_Samabat/Documents/Unnamed Site 2/Login.php">fghjkl;jjj</a>
<form  method="post" action="Sign_in.php">
  <div class="Pname"><input name="name" type="text" class="fill" style="height:30px; width:300px"/></div>
<div class="PBirthday"><input name="birthday" type="text" class="fill" style="height: 30px; width: 300px; "/></div>
<div  class="PAddress"><input name="address"type="text" class="fill" style="height:30px; width:300px"/></div>
<div  class="PEmail"><input name="email"type="text" class="fill" style="height:30px; width:300px"/></div>
<div  class="PTel"><input name="tel"type="text" class="fill" style="height:30px; width:300px"/>
</div>
<div class="Username"><div class="myfont2" style="font-size:30px">Address</div></div>
<div class="PUsrname"><input name="username"type="text" class="fill" style="height:30px; width:300px"/></div>
<div class="Password"><div class="myfont2" style="font-size:30px">Password</div></div>
<div class="PPassword"><input name="pass" type="password" class="fill" style="height: 30px; width: 300px;"/></div>


<div class="Signup">
  <button name="submit"type="submit" class="btn btn-default">Sign Up</button>
 </div>
</form>
<div class="Boxsignin"><button name="submit"type="submit" class="btn btn-default"><a href="Login.php">sign_in</a></button></div>
</div>
</body>
</html>

