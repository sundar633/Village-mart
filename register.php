<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $mobile = $_POST['mobile'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

  try {
    $stmt = $conn->prepare("INSERT INTO users (name, mobile, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $mobile, $password]);
    echo "<script>alert('Signup successful! Please login.'); window.location.href='login.html';</script>";
  } catch (PDOException $e) {
    echo "<script>alert('Error: " . $e->getMessage() . "'); window.location.href='signup.html';</script>";
  }
}
?>
