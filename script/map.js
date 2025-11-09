
     const regions = {
  "Béni Mellal-Khénifra": {
    name: "Béni Mellal-Khénifra",
    img: "images/Beni-Mellal-Khénifra.jpg",
    text: "La région de Béni Mellal-Khénifra est située au centre du Maroc, connue pour ses montagnes, ses plaines fertiles et ses cascades."
  },
  "Casablanca-Settat": {
    name: "Casablanca-Settat",
    img: "images/Casablanca-Settat.jpg",
    text: "La région Casablanca-Settat abrite la plus grande ville du Maroc, Casablanca, centre économique et industriel du pays."
  },
  "Dakhla-Oued Ed-Dahab": {
    name: "Dakhla-Oued Ed-Dahab",
    img: "images/Dakhla-Oued Ed-Dahab.jpg",
    text: "La région Dakhla-Oued Ed-Dahab se trouve dans le sud du Maroc, célèbre pour ses plages et ses activités de sports nautiques."
  },
  "Drâa-Tafilalet": {
    name: "Drâa-Tafilalet",
    img: "images/Drâa-Tafilalet.jpg",
    text: "La région Drâa-Tafilalet est connue pour ses oasis, ses ksour, et le désert du Sahara à proximité."
  },
  "Fès-Meknès": {
    name: "Fès-Meknès",
    img: "images/Fès-Meknès.jpg",
    text: "La région Fès-Meknès est riche en histoire et en patrimoine, abritant les villes impériales Fès et Meknès."
  },
  "Guelmim-Oued Noun": {
    name: "Guelmim-Oued Noun",
    img: "images/Guelmim-Oued Noun.png",
    text: "La région Guelmim-Oued Noun est située au sud-ouest et est connue comme la porte du Sahara et pour ses traditions nomades."
  },
  "Laâyoune-Sakia El Hamra": {
    name: "Laâyoune-Sakia El Hamra",
    img: "images/Laâyoune-Sakia El Hamra.png",
    text: "La région de Laâyoune-Sakia El Hamra se trouve au sud du Maroc, connue pour son vaste désert et ses paysages magnifiques."
  },
  "Marrakech-Safi": {
    name: "Marrakech-Safi",
    img: "images/Marrakech-Safi.webp",
    text: "La région de Marrakech-Safi est célèbre pour sa culture, son artisanat, et la ville rouge de Marrakech."
  },
  "Oriental": {
    name: "Oriental",
    img: "images/Oriental.jpg",
    text: "La région de l’Oriental est située à l’est du Maroc, bordée par l’Algérie, et connue pour sa diversité culturelle et ses plaines fertiles."
  },
  "Rabat-Salé-Kénitra": {
    name: "Rabat-Salé-Kénitra",
    img: "images/Rabat-Salé-Kénitra.jpg",
    text: "La région Rabat-Salé-Kénitra est située au nord-ouest du Maroc. Elle abrite la capitale Rabat et de nombreuses institutions."
  },
  "Souss-Massa": {
    name: "Souss-Massa",
    img: "images/Souss-Massa.png",
    text: "La région Souss-Massa est connue pour sa côte atlantique, Agadir et ses plages touristiques, ainsi que ses montagnes de l’Anti-Atlas."
  },
  "Tanger-Tétouan-Al Hoceima": {
    name: "Tanger-Tétouan-Al Hoceima",
    img: "images/Tanger-Tétouan-Al Hoceima.jpg",
    text: "La région Tanger-Tétouan-Al Hoceima se situe au nord du Maroc, célèbre pour son littoral méditerranéen et ses montagnes du Rif."
  }
};
  const paths = document.querySelectorAll(".highcharts-point");
  const tooltip = document.getElementById("tooltip");
  const info = document.getElementById("regionInfo");
  const infoImg = document.getElementById("regionImg");

  paths.forEach(path => {
    // HOVER TOOLTIP
    path.addEventListener("mouseover", (e) => {
      tooltip.style.display = "block";
      tooltip.textContent = path.getAttribute("data_tooltip"); // <-- use getAttribute
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY - 30 + "px";
    });

    path.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY - 30 + "px";
    });

    path.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    // CLICK TO SHOW REGION INFO
    path.addEventListener("click", () => {
      const region = regions[path.id]; // <-- make sure path.id matches exactly the key in regions
      if (region) {
        infoImg.src = region.img;
        info.querySelector("h2").textContent = region.name;
        info.querySelector("p").textContent = region.text;
      }
    });
  });