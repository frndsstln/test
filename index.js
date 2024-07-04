<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" >
	<link rel="manifest" href="manifest.webmanifest">
	<!-- <script src='script.js'/> -->
	<title>Закрытие смены</title>
</head>
<body>
	<div style='display: flex; justify-content: space-between;'>
		<text style='font-size: 30px;' id='date'>Data</text>
		<text style='font-size: 30px;' id='weekday'>Weekday</text>
	</div>
	<div style='display: flex; justify-content: space-between;'>
		<text style='font-size: 30px;' id='date'>План:</text>
		<text style='font-size: 30px;' id='plan'>0 ₽</text>
	</div>
	<div style='display:flex; font-size: 22px;'>
		<div style='width: 50%; background-color: aqua;'>15</div>
		<div style='width: 50%; background-color: burlywood;'>11</div>
	</div>
	<script>
		let months = ["января", " февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
		let weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
		let date = new Date()
		let day = date.getDate()
		let month = months[date.getMonth()]
		let weekday = weekdays[date.getDay()]
		let year = date.getFullYear()
		let dateVar = document.getElementById("date")
		let weekdayVar = document.getElementById("weekday")
		let planVar = document.getElementById("plan")
		dateVar.innerText = day + " " + month + " " + year
		weekdayVar.innerText = weekday
		// let planVar2 = day == 0 || day == 6 ? "40" : "70" 
		// planVar.innerText = (day == 0 || day == 6 ? "40.000" : "70.000") + " ₽"
	</script>
</body>
</html>
