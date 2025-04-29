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
  }


];

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

