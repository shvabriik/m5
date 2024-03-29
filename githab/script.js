let searchValue = document.getElementById("searchValue");
let searchBtn = document.getElementById("searchBtn");
let card = document.getElementById("card");
let load = document.getElementById("load");

let dataCard;
 searchBtn.addEventListener("click",getCard)
card.classList.add("d-none");
load.classList.add("d-none");

async function getCard() {
  card.classList.add("d-none");
  load.classList.remove("d-none");

  let response = await fetch(
    `https://api.github.com/users/${searchValue.value}`
  );

  if (response.ok) {
    dataCard = await response.json();
    console.log(dataCard);
    generateCard();
  } else {
    load.classList.add("d-none");
  }
}

function generateCard() {
  card.innerHTML = `
    <img src="${dataCard.avatar_url}" />
    <h1>${dataCard.login}</h1>
    <p>${dataCard.bio}</p>
    <nav>
        <div>
        <i class="far fa-location-circle"></i>
            <span>${dataCard.location}</span>
        </div>
        <div>
        <i class="fas fa-heart-circle"></i>
            <span>${dataCard.followers}</span>
        </div>
        <div>
        <i class="fad fa-star-exclamation"></i>
            <span>${dataCard.following}</span>
        </div>
        <div>
        <i class="fas fa-books"></i>
            <span>${dataCard.public_repos}</span>
            </div>
    </nav>`;
  card.classList.remove("d-none");
  load.classList.add("d-none"); 
}
