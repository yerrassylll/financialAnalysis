<?php 

if (isset($_POST['submitRegistrtion'])) {

	$username = $_POST['usernameRegistration'];
	$userEmail = $_POST['usernameEmailRegistration'];

	echo "Регистрация прошла успешна! Ваше имя: $username Ваша почта: $userEmail";

}

?>