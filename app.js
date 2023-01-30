const courses = [
    {
        url:"#",
        PansyMfs:"Money basis",
        thumbnails:"images/p2.jpeg",
        division: "Money" ,
        maelezo: "learn to live by yourself and avoid simping you mf",
        price: "400.09",
        duration: "12",
    },
    {
        url:"#",
        PansyMfs:"Drawing essentials",
        thumbnails:"images/p.jpeg",
        division: "Respect" ,
        maelezo: "as always mf dont forget to pray mf",
        price: "",
        duration: "12",
    },
    {
        url:"#",
        PansyMfs:"Pray Mf",
        thumbnails:"images/p3.jpeg",
        division: "No-simping" ,
        maelezo: "Dont be a simp in this life motherfucker",
        price: "233.45",
        duration: "12",
    },
    {
        url:"#",
        PansyMfs:"Pray Mf",
        thumbnails:"images/p1.jpeg",
        division: "Time" ,
        maelezo: "Time is everything in serching for money. Never waste even a single",
        price: "107.76",
        duration: "12",
    },
];

const cashContainer = document.querySelector(".cash-containe");

const displayCourse = (uValue,pvalue,tValue,dValue,mValue,prValue,duValue)=>{
    const pesa = document.createElement("div");
    pesa.classList.add("pesa");


    const a = document.createElement("a");
    a.setAttribute("href",uValue);

    const division = document.createElement("div");
    division.classList.add("division");
    division.innerHTML = dValue;

    const img = document.createElement("img");
    img.setAttribute("src", tValue);

    const PansyMfs = document.createElement("h2");
    PansyMfs.classList.add("PansyMfs");
    PansyMfs.innerHTML = tValue;

    const maelezo = document.createElement("div");
    maelezo.classList.add("maelezo");
    maelezo.innerHTML = mValue;

    const price = document.createElement("div");
    price.classList.add("price");
    price.innerHTML = prValue;

    const duration = document.createElement("div");
    duration.classList.add("duration");


    const timeIcon = document.createElement("div");
    timeIcon.classList.add("time-icon");
    timeIcon.innerHTML = 
    `<svg 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>`;


 const unit = unit.document.createElement("div");
 unit.classList.add("unit");
 unit.innerHTML = duValue;

 //appending elements
 cashContainer.appendChild(pesa);
 pesa.appendChild(a);
 a.appendChild(division);
 a.appendChild(img);
 a.appendChild(PansyMfs);
 a.appendChild(maelezo);
 a.appendChild(info);

 info.appendChild(price);
 info.appendChild(duration);

 duration.appendChild(timeIcon);
 duration.appendChild(unit);
};

//calling the function in the array

const generateCoureseData=()=>{
    courses.forEach((c)=>{
        displayCourse(
            c.PansyMfs,
            c.division,
            c.duration,
            c.maelezo,
            c.price,
            c.thumbnails,
            c.url
        );
    });
};

generateCoureseData();