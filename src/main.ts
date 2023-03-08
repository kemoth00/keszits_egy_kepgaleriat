import "./style/index.css";

class Gallery {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: string,
    public img: string
  ) {}
}

let gallery: Gallery[] = [
  new Gallery(1, "Title 1", "Description 1", "2020.01.01", "assets/kep_1.jpg"),
  new Gallery(2, "Title 2", "Description 2", "2020.01.02", "assets/kep_2.jpg"),
  new Gallery(3, "Title 3", "Description 3", "2020.01.03", "assets/kep_3.jpg"),
  new Gallery(4, "Title 4", "Description 4", "2020.01.04", "assets/kep_4.jpg"),
  new Gallery(5, "Title 5", "Description 5", "2020.01.05", "assets/kep_5.jpg"),
];

function displayGallery() {
  let galleryContainer = document.querySelector(".gallery-container");
  let galleryHTML = "";

  if (galleryContainer?.innerHTML === "") {
    gallery.forEach((item, index) => {
      galleryHTML += `
      <div class=" cursor-pointer hover:opacity-80 transition-all duration-200 ${
        index === 2 ? "border-4 border-green-600" : ""
      }">
        <img class="gallery-item h-24 object-cover" src="${item.img}" alt="${
        item.title
      }">
      </div>
    `;
    });

    galleryContainer!.innerHTML = galleryHTML;
  } else {
    let galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item, index) => {
      (<HTMLImageElement>item).src = gallery[index].img;
      (<HTMLImageElement>item).alt = gallery[index].title;
    });
  }
}

function scroll(direction: string) {
  if (direction === "prev") {
    gallery.unshift(gallery.pop()!);
  } else {
    gallery.push(gallery.shift()!);
  }

  displayGallery();

  (<HTMLImageElement>document.querySelector("#selectedImage")).src =
    gallery[2].img;
  (<HTMLImageElement>document.querySelector("#selectedImage")).alt =
    gallery[2].img;
}

displayGallery();

document.getElementById("prevSvg")!.addEventListener("click", () => {
  scroll("prev");
});

document.getElementById("nextSvg")!.addEventListener("click", () => {
  scroll("next");
});
