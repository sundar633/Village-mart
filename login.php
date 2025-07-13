<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $mobile = $_POST['mobile'];
  $password = $_POST['password'];

  $stmt = $conn->prepare("SELECT * FROM users WHERE mobile = ?");
  $stmt->execute([$mobile]);
  $user = $stmt->fetch();

  if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user_name'] = $user['name'];
    header("Location: index.php");
    exit();
  } else {
    echo "<script>alert('Invalid login'); window.location.href='login.html';</script>";
  }
}
?>
