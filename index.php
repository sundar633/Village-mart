<?php
session_start();
if (!isset($_SESSION['user_name'])) {
  header("Location: login.html");
  exit();
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Online Shopping</title>
</head>
<body>
  <h1>Welcome, <?php echo $_SESSION['user_name']; ?>!</h1>
  <a href="logout.php">Logout</a>
</body>
</html>
