const img = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
];

const choosenImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${choosenImg}`;

document.body.appendChild(bgImg);
