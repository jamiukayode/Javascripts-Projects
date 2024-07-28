// local reviews data
const reviews = [
    {
        id: 1,
        name: "Robert Andrian",
        job: "cyber security",
        img: "./images/paul.jpg",
        text: `Absolutely phenomenal! From the moment we arrived, we were 
        greeted with warmth and hospitality. The attention to detail in every
         aspect of the dining experience was evident, and the flavors of
         each dish were simply exquisite. A must-visit for anyone who appreciates fine dining!`
    },
    {
        id: 2,
        name: "Samuel Smith",
        job: "Tester Engineer",
        img: "./images/sam.jpg",
        text: `Exceptional dining experience! The ambiance was elegant yet cozy,
         the service was impeccable, and the food was beyond delicious. Each dish was
          carefully crafted with fresh, 
        high-quality ingredients, resulting in a truly memorable meal. Will definitely be back!`
    },
    {
        id: 3,
        name: "Emmanuel",
        job: "Data Analyst",
        img: "images/Aguboss.JPG",
        text: `What a delightful find! This restaurant exceeded all expectations with its warm
         atmosphere, attentive service, and delectable cuisine. 
        Each dish was beautifully presented and bursting with flavor. A true culinary delight!`
    },
    {
        id: 4,
        name: "Opeyemi",
        job: "Graphics Designer",
        img: "./images/Ajoke.JPG",
        text: `A culinary masterpiece! From the presentation to the taste, every aspect 
        of our meal was flawless. The chef's creativity shines through in every dish, and 
        the attentive 
        staff made us feel like VIPs. Can't wait to return for another unforgettable meal.`
    },
    {
        id: 5,
        name: "Jamiu Kayode",
        job: "Software Engineer",
        img: "./images/Kayode.jpg",
        text: `Outstanding service and exceptional cuisine! This restaurant truly knows how to
         deliver an unforgettable dining experience. 
        Each dish was a work of art, and the flavors were simply sensational. Highly recommend!`
    },
    {
        id: 6,
        name: "Sandra Paul",
        job: "Product Designer",
        img: "./images/student.jpg",
        text: `Incredible dining experience from start to finish! The attention to detail was
         impeccable, and every dish was bursting with flavor.
         Can't wait to return and try more of their delicious offerings.`
    },
    {
        id: 7,
        name: "Aderonke",
        job: "Fronted Developer",
        img: "./images/ronke.JPG",
        text: `What a gem! This restaurant exceeded all expectations.
         The ambiance was charming, the food was exceptional, and the cocktails were expertly crafted. 
        A must-visit for anyone looking for a memorable dining experience.`
    },
    {
        id: 8,
        name: "EJike Chukwueze",
        job: "Music Producer",
        img: "./images/ejike.JPG",
        text: `I cannot recommend this place enough! From the moment we walked in,
         we were treated like royalty. 
        The service was impeccable, and the quality of the dishes exceeded all expectations.`
    },
    {
        id: 9,
        name: "Barack Putin",
        job: "DevOps",
        img: "./images/blackdiamond.JPG",
        text: `Absolutely fantastic experience! The staff were incredibly friendly and helpful,
         the atmosphere was delightful, and the food was divine. Definitely coming back!`
    },
    {
        id: 10,
        name: "Aderinto ghadi",
        job: "Business Owner",
        img: "./images/sir aderinto.jpg.jpg",
        text: `undertanding service and exceptional cuisine! This restaurant truly knows how to
        deliver an unforgettable dining experience. 
       Each dish was a work of art, and the flavors were simply sensational.`
    },

]

//  select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const review = document.getElementById("review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set starting items
let currentItem = 0;

//load initial items
window.addEventListener("DOMContentLoaded", () => {
    showPerson();
})

//show person base on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.text;
}

//show next person function
nextBtn.addEventListener("click", function () {
    currentItem++;
    // To avoid getting errors if you reach last reviewer 
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

//show prev person function
prevBtn.addEventListener("click", function () {
    currentItem--;
    // To avoid getting errors if you reach last reviewer 
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

//show random person function
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    currentItem = showPerson();
});
