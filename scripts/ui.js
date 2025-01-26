import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons");

// menü-list divini çağırma
const menuLİst = document.getElementById("menu-list");

// arayüz değişikliği yapan bütün fonksiyonlar
export const renderMenuItems = (data) => {
  // ! data dizisindeki her bir obje için bir tane cart htmli oluştur

  //: Join methodu diziyi metine çevirmeyi sağlar
  const cardsHTML = data
    .map(
      (item) => ` 
     <a
        id="card"
        href="/details.html?id=${item.id}"
        class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
      >
        <img
          class="rounded shadow img-fluid"
          src="${item.img}"
        />

        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
          </div>
          <p class="lead">
            ${item.desc}
          </p>
        </div>
      </a> `
    )
    .join("");

  // oluşturulan kartları #menu-list divinin içerisine akta
  menuLİst.innerHTML = cardsHTML;
};

// ! dizideki her bir eleman için ekran buton basan fonk
export const renderButtons = (activeText) => {
  //**  butonların her biri için adımlar

  // eskiden oluşturulan butonları kaldır
  buttonsArea.innerHTML = "";

  buttonData.forEach((btn) => {
    // i) buton elementini oluştur
    const buttonEle = document.createElement("button");

    // ii) class belirle
    buttonEle.className = "btn btn-outline-dark";

    // iii) data-id değerini tanımla
    buttonEle.setAttribute("data-id", btn.value);

    // iv) içindeki yazıyı belirle
    buttonEle.innerHTML = btn.text;
    // v) eğerki butonun yazısı aktif yazı ile eşleşirse siyah yap
    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    // vi)) butonu dom yani htmle gönder
    buttonsArea.appendChild(buttonEle);
  });
};
