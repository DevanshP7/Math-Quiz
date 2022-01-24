function add_user(){

Player_1 = document.getElementById("Player_1_input").value;
Player_2 = document.getElementById("Player_2_input").value;

localStorage.setItem("player_1", Player_1);
localStorage.setItem("player_2", Player_2);

window.location = "game_page.html";

}