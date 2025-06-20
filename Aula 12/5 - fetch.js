const url = 'https://dog.ceo/api/breeds/image/random';
const img = document.getElementById("image");

fetch(url)
    .then(dogData => {
        if (!dogData.ok) {
            throw new Error(`HTTP erro, status ${dogDataa.status}`);
        }
        return dogData.json();
    })
    .then(data => {
        img.setAttribute("src", data.message);
        img.setAttribute("alt", "Foto de Cachorro");
        // console.log(data.message);
    })
    .catch(error => {
        console.log(error.message);
    });