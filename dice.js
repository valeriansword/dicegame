function roll(){
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+randomnumber1+".png";
var image1=document.getElementById("img1");
image1.setAttribute("src",randomimage1);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="images/dice"+randomnumber2+".png";
var image2=document.getElementById("img2");
image2.setAttribute("src",randomimage2);

if(randomnumber1>randomnumber2)
{
    document.getElementById("res").innerHTML="Player-1 wins";
}
else if(randomnumber2>randomnumber1){
    document.getElementById("res").innerHTML="Player-2 wins";

}
else{
    document.getElementById("res").innerHTML="Draw";

}
}