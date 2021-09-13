// Header with js
let head=document.querySelector('header');
window.onscroll=showup
function showup()
{
    if(scrollY>1500)
    {
        head.style="opacity:1";
    }
    else
    {
        head.style="opacity:0";
    }
    if(scrollY>1100)
    {
        btnup.style="opacity:1";
    }
    else
    {
        btnup.style="opacity:0";
    }
}

// Btn Up with js
let btnup=document.querySelector('.upI');
// window.onscroll=pageup
// function pageup()
// {
//     if(scrollY>800)
//     {
//         btnup.style="opacity:1";
//     }
//     else
//     {
//         btnup.style="opacity:0";
//     }
// }

// section-1 with js
let backg=document.querySelector('.sec1');
let Heads=document.querySelector('.heading');
let icons=document.querySelector('.icons');
let imgs=
[
    "url('images/zach-lezniewicz-6BhaILEQSls-unsplash.jpg')",
    "url('images/oleg-guijinsky-2CRgKZAyPXg-unsplash.jpg')",
    "url('images/oriento-0Te1I0WRlvU-unsplash.jpg')"

];
let heads_list=
[
    "<h1>Crafted from premium quality ingredients</h1>",
    "<h1>Hygiene and Customers Safety is our priority at kiosks</h1>",
    "<h1>The richness of Irani Chai at your convenenience</h1>"
]
let counter=0;
function changeBG()
{
    backg.style=`background: ${imgs[counter]}; background-size: 100% 100%; transition: 3s all;`;
    Heads.innerHTML=`${heads_list[counter]}`;
    counter++;
    if(counter==2)
    {
        icons.style="display:flex; justify-content:space-around; flex-wrap:wrap";
    }
    else
    {
        icons.style="display:none;";
    }
    if(imgs.length==counter)
    {
        counter=0;
    }
}
setInterval(changeBG,'3000');
