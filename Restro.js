function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

const menuItems = [
  {
    name: "Mutton Curry",
    description: "Tender mutton pieces slow-cooked with rich spices.",
    price: "₹350.00",
    image: "https://img.clevup.in/272541/1705377175173_SKU-0855_0.jpeg?width=600&format=webp",
    video: "https://www.youtube.com/embed/CUCtn02Juk0?si=v6hR7m8seNBC5H1O"
  },
  {
    name: "Chingri Malaikari",
    description: "Succulent prawns cooked in creamy coconut curry.",
    price: "₹450.00",
    image: "https://hokparty.in/wp-content/uploads/2024/11/chingri-malaikari.png",
    video: "https://www.youtube.com/embed/Posnbi_sch4?si=1MHerLIMweibMaCV"
  },
  {
    name: "Shorshe Ilish",
    description: "Hilsa fish steamed with mustard-mustard sauce.",
    price: "₹400.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawKEoskt0tlOItk1pLB4tosMhvD5L3wwIhg0ngqwEd25Qcp-_AOTbb7tXIzOJqOGTjlY&usqp=CAU",
    video: "https://www.youtube.com/embed/Eaiqu8C8PP8?si=Kz6SXr8JYVHbGFhM"
  },
  {
    name: "Mishti Doi",
    description: "Bengali traditional sweetened yogurt.",
    price: "₹120.00",
    image: "https://www.babsprojects.com/wp-content/uploads/2018/04/Mishti-Doi-square-e1523890989103.jpg",
    video: "https://www.youtube.com/embed/yXiFXIwbbHI?si=7LqMMiMOPpvxWdDu"
  },
  {
    name: "Kolkata Biryani",
    description: "Fragrant rice layered with marinated meat and potato, a royal Mughlai-Bengali fusion.",
    price: "₹175.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s",
    video: "https://www.youtube.com/embed/n8-FOAMSpEI?si=dUTAz2BFdZ8Bz558"
  },


  {
    name: "Chicken Curry",
    description: "Chicken Kosha is a fiery, slow-cooked Bengali masterpiece bursting with bold spices soulful flavors.",
    price: "₹300.00",
    image: "https://img-global.cpcdn.com/recipes/49d18e11bb129208/400x400cq70/photo.jpg",
    video:"https://www.youtube.com/embed/XmL6giKPcWI?si=vy7o5PtiwNrTJQfZ"
  },
  {
    name: "Butter Paneer",
    description: "Butter Paneer is a luscious North Indian delight, where soft paneer cubes swim in a rich, buttery tomato gravy.",
    price: "₹220.00",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
    video:"https://www.youtube.com/embed/bUounn_Bmy4?si=E3cRFA5zxWNXAH5t",
  }
  ,
  {
    name: "Mix-Veg",
    description: "Mix Veg is a colorful medley of seasonal vegetables sautéed in aromatic spices for a wholesome meal.",
    price: "₹140.00",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg",
    video:"https://www.youtube.com/embed/Kizxsb0Vcdw?si=cJPknQ55cGBGsf3T" ,
  },
  {
    name: "Aloo Posto",
    description: "Aloo Posto is a dish made with potatoes cooked in a creamy poppy seed paste, flavored with mustard oil and green chilie.",
    price : "₹80.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEcCvT4xFSKrUW-uFhK8OORQx2rIWH_rhXA&s",
    video:"https://www.youtube.com/embed/BI1v4Y8Td_M?si=_aacdSSXY8OxRdWT" ,
  },
  {
    name: "Fish curry",
    description:"Fish curry is a spicy, flavorful dish made by simmering fish in a rich, aromatic gravy of onions, tomatoes, and traditional spices.",
    price : "₹280.00",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbpWMuml3mYaKnSrTMN1InAijib6XhEia3w&s",
    video:"https://www.youtube.com/embed/70TKVIfv4zc?si=lkvmcYzngibFE_ZP" ,
  },  {
    name: "Crab curry",
    description:"Crab is a delicious, tender-shelled seafood known for its sweet, often enjoyed steamed, curried, or stir-fried in various cuisines",
    price : "₹380.00",
    image:"https://www.seriouseats.com/thmb/qSGnrRY6RTXCmTaLfdxHDZP6lF4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__02__20130224-242112-singapore-chili-crab-edit-e02be72e16974f5da6fef41ec4ca7ea4.jpg",
    video:"https://www.youtube.com/embed/taZCLVCLuh8?si=t5mNP9ozRYwd0sHr"  ,
  },
  {
    name: "Chowmin",
    description:"Chowmein is stir-fried noodle dish made with vegetables, sauces, and optionally meat or eggs, slightly spicy flavor and chewy texture.",
    price : "₹100.00",
    image:"https://thebigmansworld.com/wp-content/uploads/2023/02/chicken-chow-mein-recipe.jpg",
    video:"https://www.youtube.com/embed/VvdY2guPSiM?si=CKCCYkDjaoRNvFfF"  ,
  }
   


];
menuItems.push(
  {
    name: "Beguni",
    description: "Beguni is a Bengali snack made with thinly sliced eggplant dipped in gram flour batter and deep-fried till crispy.",
    price: "₹50.00",
    image: "https://www.scratchingcanvas.com/wp-content/uploads/2018/02/Beguni.2.jpg",
    video: "https://www.youtube.com/embed/4W9JPLkiwS4?si=jqDajOr_JWgGv18r"
  },
  {
    name: "Patishapta",
    description: "Patishapta is a Bengali dessert crepe stuffed with a sweet coconut and jaggery filling, enjoyed especially during winter.",
    price: "₹80.00",
    image: "https://hungryforever.net/wp-content/uploads/2016/10/Featured-image-patishapta-600x315.jpg",
    video: "https://www.youtube.com/embed/b8hAhJW4594?si=3Fe_bEu4nIwC0dsK"
  },
  {
    name: "Ghugni Chaat",
    description: "Ghugni is a spicy curry made with yellow peas, topped with onions, chilies, and tangy chutneys—served as a street food delight.",
    price: "₹60.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeosfES1ns3Sjvt7gDuklDqst4guOdQYcqXw&s",
    video: "https://www.youtube.com/embed/02wSHyN4Nkk?si=r3daLIo7uzePo6Ri"
  }
);


const menuContainer = document.getElementById('menu-items');

menuItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'menu-item';
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p class="price">${item.price}</p>
    <button onclick="openModal('${item.video}')">Watch Video</button>
  `;
  menuContainer.appendChild(div);
});

function openModal(videoURL) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-frame");
  iframe.src = videoURL;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-frame");
  iframe.src = "";
  modal.style.display = "none";
}
function openVideo(videoUrl) {
  window.open(videoUrl, '_blank');
}
document.getElementById('order-button').addEventListener('click', function () {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});
