// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "annie collier",
    job: "sperm gargler",
    img:
      "https://images.unsplash.com/photo-1542131596-91a634bfc5e7?   ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&  auto=format&fit=crop&w=1050&q=80",
    text: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit repellat quasi unde vitae placeat voluptatibus inventore quibusdam enim fugit explicabo aliquam, animi hic eligendi perferendis dicta laborum excepturi porro."
  },  
  {
    id: 6,
    name: "shanikwa jubuntu",
    job: "sperm gargler",
    img:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    text: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit repellat quasi unde vitae placeat voluptatibus inventore quibusdam enim fugit explicabo aliquam, animi hic eligendi perferendis dicta laborum excepturi porro."
  },
  {
    id: 7,
    name: "kravin dong",
    job: "anal bead tester",
    img:
      "https://images.unsplash.com/photo-1579420593648-0deba81fd762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    text: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit repellat quasi unde vitae placeat voluptatibus inventore quibusdam enim fugit explicabo aliquam, animi hic eligendi perferendis dicta laborum excepturi porro."
  },
  {
    id: 8,
    name: "phil mccoochi",
    job: "anal bead qa",
    img:
      "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?  ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1& auto=format&fit=crop&w=1050&q=80",
    text: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit repellat quasi unde vitae placeat voluptatibus inventore quibusdam enim fugit explicabo aliquam, animi hic eligendi perferendis dicta laborum excepturi porro."
  },
  {
    id: 9,
    name: "adam eden",
    job: "the man",
    img:
      "https://images.unsplash.com/photo-1619401006062-8cd4e8811ddb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNtaWxpbmclMjBoZWFkc2hvdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit repellat quasi unde vitae placeat voluptatibus inventore quibusdam enim fugit explicabo aliquam, animi hic eligendi perferendis dicta laborum excepturi porro."
  },
  {
    id: 10,
    name: "dwayne johnsons johnson",
    job: "the rocks penis",
    img:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHNtaWxpbmclMjBoZWFkc2hvdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: 
      "Most of my time is spent just hanging around. Sometimes I do push-ups until I throw up. One time I peed in Bautistas bum. Can you smell what I've been cooking? It's sausage! Jason Stratham alwas has me at attention."
  }        

];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
