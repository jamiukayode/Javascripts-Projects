const colors = ["green", "grey", "aqua", "brown", "darkblue", "orange","rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")
const fonts = ["Arial", "sans-serif",  "roman", "roboto", "calibri", "Verdana", "Geneva", "Tahoma",]


btn.addEventListener("click", function(){
//get random color between 0- 6
const randomColor = getRandomColor();
document.body.style.backgroundColor =colors[randomColor]; //get random background color
document.body.style.color =colors[randomColor]; //get random color for texts
});

function getRandomColor(){
    return Math.floor(Math.random() * colors.length); 
}


//get random fonts between 0 -7
btn.addEventListener("click", function(){
const randomFonts = getRandomFonts();
document.body.style.fontFamily = fonts[randomFonts];
});

function getRandomFonts(){
    return Math.floor(Math.random() * fonts.length)
}