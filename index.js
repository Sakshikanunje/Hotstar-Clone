let movies =[
{
    name: "falcon and the winter soldier",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laboriosam hic nobis a exercitationem officiis odit tempore atque tenetur veniam dolorem quod facere nesciunt perspiciatis ut, cupiditate illum sint eum.",
    image: "images/slider 2.png"
},

{
    name: "Loki",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laboriosam hic nobis a exercitationem officiis odit tempore atque tenetur veniam dolorem quod facere nesciunt perspiciatis ut, cupiditate illum sint eum.",
    image: "images/slider 1.png"
},

{
    name: "Wanda Vision",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laboriosam hic nobis a exercitationem officiis odit tempore atque tenetur veniam dolorem quod facere nesciunt perspiciatis ut, cupiditate illum sint eum.",
    image: "images/slider 2.png"
},

{
    name: "Raya and the Last dragon",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laboriosam hic nobis a exercitationem officiis odit tempore atque tenetur veniam dolorem quod facere nesciunt perspiciatis ut, cupiditate illum sint eum.",
    image: "images/slider 4.png"
},

{
    name: "Luca",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laboriosam hic nobis a exercitationem officiis odit tempore atque tenetur veniam dolorem quod facere nesciunt perspiciatis ut, cupiditate illum sint eum.",
    image: "images/slider 5.png"
}
];


const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; //track current slide

const createSlide = () => {
    if(slideIndex>=movies.length)
    {
        slideIndex=0;
    }

    //create dom elements

    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up immagrs

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elemnts classname
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length-2)
        }px)`;
    }
}

for(let i=0;i<3;i++)
{
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);


//video cards

const videocards=[...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
    item.addEventListener("mouseover",() => 
    {
        let video=item.children[1];
        video.play();

    });
    item.addEventListener("mouseleave",() => 
    {
        let video = item.children[1];
        video.pause();
    });
});


//card slider
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBTns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBTns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

