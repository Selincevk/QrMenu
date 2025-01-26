// ** Diğer dosyalardan alınan veriler
import { renderMenuItems,renderButtons} from "./ui.js";

const buttonsArea = document.getElementById("buttons")

// Datayı global scopeda (herhangi kod bloğunun içinde tanımlanmayan değişkenker) tanımla : avantajı her yerdem erişilir olması (ANA DEĞİŞKEN)
let data;

// ! menü verilerini json dosyasında çeken fonksiyon
async function fetchMenu() {

    // json dosyasından verileri al
  const res = await fetch("./db.json");

   // json verisini jsye çevir
data = await res.json()
}

//! Sayfa Yükleme Olayını İzle
window.addEventListener ("DOMContentLoaded", async () => {
// Ekrana butonları bas 
renderButtons("Hepsi")

// Verileri çeken fonsiyonu çalıştır
    fetchMenu() 
// fonksiyon başarılı olursa ekrana kartları basan fonk çalıştır
    .then(() => renderMenuItems(data.menu))
})

// ! Butonlara tıklanma olayını izle
buttonsArea.addEventListener("click", (e) => {
    // butona tıklanmadıysa fonksiyonu durdur
 if(e.target.id  == "buttons") 
 return

//  active olan butonları belirlemek için için butonları tekrar bas 
renderButtons(e.target.innerText)


// filtrelenilecek kategori ismini belirleme
const selectedCategory = e.target.dataset.id


// ! eğer hepsi seçeneği seçildiyse
if(selectedCategory === "all") {
    // bütün menu elemanlarını filtrelemeden ekrana bas
    renderMenuItems(data.menu)

// ! eğer hepsi seçeneği seçilmediyse 
} else {

// ürünlerin arasından kategori ismi bizim seçtiğimiz kategori isime eşit olanları al 
const filtred = data.menu.filter((item) => item.category === selectedCategory)

//  filtrelenen verileri al
 renderMenuItems(filtred)
}

})




