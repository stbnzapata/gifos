const contenido = document.querySelector('#contenido');
const contenido1 = document.querySelector('#contenido1');
const contenido2 = document.querySelector('#contenido2');
const contenido3 = document.querySelector('#contenido3');
const contenido4 = document.querySelector('#contenido4');
const contenido5 = document.querySelector('#contenido5');
const contenido6 = document.querySelector('#contenido6');
const contenido7 = document.querySelector('#contenido7');
const contenido8 = document.querySelector('#contenido8');
const contenido9 = document.querySelector('#contenido9');
const contenido10 = document.querySelector('#contenido10');
const contenido11 = document.querySelector('#contenido11');
const contenido12 = document.querySelector('#contenido12');
const contenido13 = document.querySelector('#contenido13');
const contenido14 = document.querySelector('#contenido14');
const contenido15 = document.querySelector('#contenido15');
const contenido16 = document.querySelector('#contenido16');
const contenido17 = document.querySelector('#contenido17');
const contenido18 = document.querySelector('#contenido18');
async function Traer () {
    
    await fetch('https://api.giphy.com/v1/gifs/trending?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&limit=19&rating=g')
    .then(res => res.json())
    .then(data => {
        console.log(data.data['0']['images']['original']['url'])
        // console.log(data.data['1']['images']['original']['url'])
        // console.log(data.data['2']['images']['original']['url'])
        // console.log(data.data['3']['images']['original']['url'])
        // console.log(data.data['4']['images']['original']['url'])
        // console.log(data.data['5']['images']['original']['url'])
        // console.log(data.data['6']['images']['original']['url'])
        // console.log(data.data['7']['images']['original']['url'])
        // console.log(data.data['8']['images']['original']['url'])
        contenido.innerHTML = `<img class="img-gif" src="${data.data['0']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido1.innerHTML = `<img class="img-gif" src="${data.data['1']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido2.innerHTML = `<img class="img-gif" src="${data.data['2']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido3.innerHTML = `<img class="img-gif" src="${data.data['3']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido4.innerHTML = `<img class="img-gif" src="${data.data['4']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido5.innerHTML = `<img class="img-gif" src="${data.data['5']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido6.innerHTML = `<img class="img-gif" src="${data.data['6']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido7.innerHTML = `<img class="img-gif" src="${data.data['7']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido8.innerHTML = `<img class="img-gif" src="${data.data['8']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido9.innerHTML = `<img class="img-gif" src="${data.data['9']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido10.innerHTML = `<img class="img-gif" src="${data.data['10']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido11.innerHTML = `<img class="img-gif" src="${data.data['11']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido12.innerHTML = `<img class="img-gif" src="${data.data['12']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido13.innerHTML = `<img class="img-gif" src="${data.data['13']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido14.innerHTML = `<img class="img-gif" src="${data.data['14']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido15.innerHTML = `<img class="img-gif" src="${data.data['15']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido16.innerHTML = `<img class="img-gif" src="${data.data['16']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido17.innerHTML = `<img class="img-gif" src="${data.data['17']['images']['original']['url']}" alt="" width="243" height="187" />`
        contenido18.innerHTML = `<img class="img-gif" src="${data.data['18']['images']['original']['url']}" alt="" width="243" height="187" />`
    });
}

Traer()