function login(){

Player_1 = document.getElementById("Player_1_input").value;
Player_2 = document.getElementById("Player_2_input").value;

localStorage.setItem('Player 1', Player_1);
localStorage.setItem('Player 2', Player_2);

window.location = "game_page.html";

}