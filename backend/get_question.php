<?php
include 'db_config.php';

$question_id = isset($_GET['id']) ? intval($_GET['id']) : 1;

$sql = "SELECT id, question, option_a, option_b, option_c, option_d FROM questions WHERE id = $question_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(['message' => 'No question found']);
}

$conn->close();
?>
