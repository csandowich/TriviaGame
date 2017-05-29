
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var questions = ["Who was Ash Ketchums first pokemon?", "What is Ash's town/city of origin?", "What team likes to steal pokemon?", "What does Charmeleon evolve into?" ];
var questionOptions = ["Charmander"," Squirtle", " Pikachu"," Zapdos "];
var questionOptions2 = ["Pallet Town", "Viridian City", "Pewter City", "Saffron City"];
var questionOptions3 = ["Team Banana", "Team Rocket", "Team Fire", "Team Steal Pokemon"];
var questionOptions4 = ["Charmander", "Charizard", "Flareon", "Magmar"];
var answers = ["Pikachu", "Pallet Town", "Team Rocket" ,"Charizard"];
var countDown = 30;

console.log(questions);



$(document).ready(function(){

	$("#startButton").on("click", function(){
		$("#startButton").html("Start Game Click Here!");			
		setTimeout(function(){
			$("#q1").html(questions[0])
			var answers = questionOptions.map(function(question) {
				var answer = $('<div id="answer">' + question + '</div>')
				answer.on('click', function(event) {
					console.log(event);
					if (answer === answers[2]){
						$("#q1").html("You Answered Correctly!");
					}else{
						$("#q1").html("You Answered Incorrecty!");
					}
				})
				return answer
			})
			$("#q1").append(answers)
		}, 1000);
		console.log(answers);
		
		recallTimer();
	

	setTimeout(function(){
			$("#q2").html(questions[1])
			var answers = questionOptions2.map(function(question) {
				var answer = $('<div id="answer">' + question + '</div>')
				answer.on('click', function(event) {
					console.log(event);
					if (answer === answers[0]){
						$("#q2").html("You Answered Correctly!");
					}else{
						$("#q2").html("You Answered Incorrecty!");
					}
					recallTimer();
				})
				return answer
			})
			$("#q2").append(answers)
		}, 1000);
		console.log(answers);
		
		
	


		setTimeout(function(){
			$("#q3").html(questions[2])
			var answers = questionOptions3.map(function(question) {
				var answer = $('<div id="answer">' + question + '</div>')
				answer.on('click', function(event) {
					console.log(event);
					if (answer === answers[1]){
						$("#q3").html("You Answered Correctly!");
					}else{
						$("#q3").html("You Answered Incorrecty!");
					}
					recallTimer();
				})
				return answer
			})
			$("#q3").append(answers)
		}, 1000);
		console.log(answers);
		
		
	
		setTimeout(function(){
			$("#q4").html(questions[3])
			var answers = questionOptions4.map(function(question) {
				var answer = $('<div id="answer">' + question + '</div>')
				answer.on('click', function(event) {
					console.log(event);
					if (answer === answers[1]){
						$("#q4").html("You Answered Correctly!");
					}else{
						$("#q4").html("You Answered Incorrecty!");
					}
					recallTimer();
				})
				return answer
			})
			$("#q4").append(answers)
		}, 1000);
		console.log(answers);
	});	
		



	

		function recallTimer(){
			var timer = setInterval(timeDown,1000)
			function timeDown(){
			countDown--;
			$("#timer").html("Time Remaining: " + countDown);
			if (countDown === 0){
				clearInterval(timer);
				}
			};
			};
		

		
	
	

});

