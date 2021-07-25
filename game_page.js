p1_name = localStorage.getItem("player1");
p2_name = localStorage.getItem("player2");

//score var

p1_score=0;
p2_score=0;

//show score name

document.getElementById("player1_name").innerHTML=p1_name + ":";
document.getElementById("player2_name").innerHTML=p2_name + ":";

//score

document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

//show who is asking\answering question

document.getElementById("player_question").innerHTML="Question turn - " + p1_name;
document.getElementById("player_answer").innerHTML="Answer turn -" + p2_name;

//function send

function send() {
    A1 = document.getElementById("word").value;

    word=A1.toLowerCase();

    pos1=word.charAt(1);

    length1=Math.floor(word.length / 2);

    pos2=word.charAt(length1);

    last=word.length - 1;

    pos3= word.charAt(last);

    word1=word.replace( pos1, "_");

    word2=word1.replace( pos2, "_");
    
    word3=word2.replace( pos3, "_");
    
    first="<h4 id='word_display'>Q." + word3 +  "</h4>";
    
    second="<br> Answer: <input type='text' id='input_check_box'>";
    
     third = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
     
     final=first + second + third;

     document.getElementById("output").innerHTML=final;

     document.getElementById("word").value="";
}

//Q and A var

Ques_turn = "Player1";

Ans_turn = "Player2";

// check fun 
 
function check() {
//var turns

get_ans=document.getElementById("input_check_box").value;

Ans = get_ans.toLowerCase();

// check if
if (Ans == word) {
     
if (Ans_turn == "Player1"){

p1_score= p1_score + 1 ;

document.getElementById("player1_score").innerHTML=p1_score;
}
else{
    p2_score= p2_score + 1 ;

    document.getElementById("player2_score").innerHTML=p2_score;
}



}

//question turn 

if (Ques_turn == "Player1"){

Ques_turn="Player2";

document.getElementById("player_question").innerHTML="Question turn-" + p2_name;

}
 
else {
    
    Ques_turn="Player1";

document.getElementById("player_question").innerHTML="Question turn-" + p1_name  
}

//answer turn 

if (Ans_turn == "Player1"){

Ans_turn="Player2";

document.getElementById("player_answer").innerHTML="Answer turn-" + p2_name;

}
 
else {
    
Ans_turn="Player1";

document.getElementById("player_answer").innerHTML="Answer turn-" + p1_name  
}

document.getElementById("output").innerHTML="";
}