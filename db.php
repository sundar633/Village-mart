<?php
$host = 'ep-autumn-darkness-adltnaoc-pooler.c-2.us-east-1.aws.neon.tech';
$db   = 'neondb';
$user = 'neondb_owner';
$pass = 'npg_klBz3v1yVagi';
$port = 5432;

$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $conn = new PDO(
    "pgsql:host=$host;port=$port;dbname=$db;sslmode=require",
    $user,
    $pass,
    $options
  );
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
?>
