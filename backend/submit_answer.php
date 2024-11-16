<?php
include 'db_config.php';

$question_id = intval($_POST['id']);
$user_answer = $_POST['answer'];

$sql = "SELECT correct_option FROM questions WHERE id = $question_id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$correct_answer = $row['correct_option'];

$response = [
    'correct' => ($user_answer === $correct_answer),
    'correct_answer' => $correct_answer
];

echo json_encode($response);
$conn->close();
?>
