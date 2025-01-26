// ! URL deki arama parametresine (search param) erişme

// urldeki parametreleri yönetmemizi sağlaycak bir nesne oluşturduk
const params = new URLSearchParams(window.location.search);

// parametreler arasından isteğimizi çağırdık

const paramId = params.get('id');

// !  sayfanın yüklenmesini izle
document.addEventListener('DOMContentLoaded', async () => {
    // 1) api'dan veirleri al
    const res = await fetch('../db.json');
    const data = await res.json();
  
    // 2) veriler arasında url'deki id'ye denk gelen veriyi al
    const product = data.menu.find((item) => item.id == paramId);
  
    // 3) sayfa içeriği elimizdeki veriye göre değiştir
    renderPage(product);
  });

  const outlet = document.getElementById("outlet")

  function renderPage(product) {


    outlet.innerHTML = ` <div class="d-flex justify-content-between fs-5">
      <a href="/">
        <img width="40px" src="/images/home.png" />
      </a>

      <p>anasayfa / ${
          product.category
        } / ${product.title.toLowerCase()}</p>
    </div>


    <h1 class="text-center my-3">${product.title}</h1>

    <img
      src="${product.img}"
      class="rounded object-fit-cover shadow"
      alt="oreo"
    />

    <h3 class="mt-4">
      <span>Ürünün Kategorisi:</span>
      <span class="text-success">${product.category}</span>
    </h3>

    <h3 class="mt-4">
      <span>Ürünün Fiyatı:</span>
      <span class="text-success">${(product.price * 30).toFixed(
        2
      )}₺</span>
    </h3>

    <p class="lead">
  ${product.desc}
    </p>  `
  }
  