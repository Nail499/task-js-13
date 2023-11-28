let navbar =document.createElement("nav");
document.body.appendChild(navbar);
navbar.classList.add("navbar");


let h1 = document.createElement("h1");
navbar.appendChild(h1);


let astart = document.createElement("a");
astart.innerHTML ="Start Bootstrap";
astart.classList.add("text");
h1.appendChild(astart);


let ul = document.createElement("ul");
ul.classList.add("menu");
navbar.appendChild(ul);


let li1 = document.createElement("li");
li1.classList.add("menulist");
li1.innerHTML="Home";
ul.appendChild(li1);


let li2 = document.createElement("li");
li2.classList.add("menulist");
li2.innerHTML="Resume";
ul.appendChild(li2);


let li3 = document.createElement("li");
li3.classList.add("menulist");
li3.innerHTML="Projects";
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.classList.add("menulist");
li4.innerHTML="Contact";
ul.appendChild(li4);

let section =document.createElement("section");
document.body.appendChild(section);
section.classList.add("s1");

let divleft =document.createElement("div");
section.appendChild(divleft);
divleft.classList.add("left");

let divright =document.createElement("div");
section.appendChild(divright);
divright.classList.add("right");

let img =document.createElement("img");
divright.appendChild(img);
img.classList.add("image");
img.setAttribute("src","https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png")

let up =document.createElement("div");
divleft.appendChild(up);
up.classList.add("up");

let textareaa =document.createElement("div");
divleft.appendChild(textareaa);
textareaa.classList.add("textareaa");

let buttons =document.createElement("div");
divleft.appendChild(buttons);
buttons.classList.add("buttons");

let button1 =document.createElement("button");
buttons.appendChild(button1);
button1.classList.add("button1");


let button2 =document.createElement("button");
buttons.appendChild(button2);
button2.classList.add("button2");


