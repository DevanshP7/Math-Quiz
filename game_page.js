Player_1_name=localStorage.getItem("Player_1");
Player_2_name=localStorage.getItem("Player_2");

Player_1_score=0;
Player_2_score=0;

document.getElementById("player_1_name").innerHTML=Player_1_name+" : ";
document.getElementById("player_2_name").innerHTML=Player_2_name+" : ";

document.getElementById("player_1_score").innerHTML=Player_1_score;
document.getElementById("player_2_score").innerHTML=Player_2_score;

document.getElementById("question_turn").innerHTML="Question Turn : "+Player_1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn : "+Player_2_name;

function Send(){

number_1=document.getElementById('number_1_input').value;
number_2=document.getElementById('number_2_input').value;

actual_answer=parseInt(number_1)*parseInt(number_2);

question_display="<h4>"+number_1+" X "+number_2+"</h4>";
input_box=" <br> Answer : <input type='text' id='input_answer'>";
button_check="<br><br><button type='button' class='btn btn-info' onclick='check()'> Check </button>";

row=question_display+input_box+button_check;

document.getElementById("output").innerHTML=row;

document.getElementById("number_1_input").innerHTML="";
document.getElementById("number_2_input").innerHTML="";

}