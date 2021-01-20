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
    
    await fetch('https://api.giphy.com/v1/gifs/trending?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&limit=25&rating=g')
    
    .then(res => res.json())    
    .then(data => {

        function downloader(){

            const imagen0 = data.data['0']['images']['original']['url'] 
            fetch(imagen0)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL = URL.createObjectURL(myBlob)
            contenido.innerHTML = `<img class="img-gif" src="${data.data['0']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /> <div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader1(){

            const imagen1 = data.data['1']['images']['original']['url'] 
            fetch(imagen1)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL1 = URL.createObjectURL(myBlob)
            contenido1.innerHTML = `<img class="img-gif" src="${data.data['1']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /> <div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL1}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader2(){

            const imagen2 = data.data['2']['images']['original']['url'] 
            fetch(imagen2)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL2 = URL.createObjectURL(myBlob)
            contenido2.innerHTML = `<img class="img-gif" src="${data.data['2']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL2}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader3(){

            const imagen3 = data.data['3']['images']['original']['url'] 
            fetch(imagen3)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL3 = URL.createObjectURL(myBlob)
            contenido3.innerHTML = `<img class="img-gif" src="${data.data['3']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL3}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader4(){

            const imagen4 = data.data['4']['images']['original']['url'] 
            fetch(imagen4)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL4 = URL.createObjectURL(myBlob)
            contenido4.innerHTML = `<img class="img-gif" src="${data.data['4']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL4}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader5(){

            const imagen5 = data.data['5']['images']['original']['url'] 
            fetch(imagen5)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL5 = URL.createObjectURL(myBlob)
            contenido5.innerHTML = `<img class="img-gif" src="${data.data['5']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL5}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader6(){

            const imagen6 = data.data['6']['images']['original']['url'] 
            fetch(imagen6)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL6 = URL.createObjectURL(myBlob)
            contenido6.innerHTML = `<img class="img-gif" src="${data.data['6']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL6}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader7(){

            const imagen7 = data.data['7']['images']['original']['url'] 
            fetch(imagen7)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL7 = URL.createObjectURL(myBlob)
            contenido7.innerHTML = `<img class="img-gif" src="${data.data['7']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL7}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader8(){

            const imagen8 = data.data['8']['images']['original']['url'] 
            fetch(imagen8)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL8 = URL.createObjectURL(myBlob)
            contenido8.innerHTML = `<img class="img-gif" src="${data.data['8']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL8}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader9(){

            const imagen9 = data.data['9']['images']['original']['url'] 
            fetch(imagen9)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL9 = URL.createObjectURL(myBlob)
            contenido9.innerHTML = `<img class="img-gif" src="${data.data['9']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL9}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader10(){

            const imagen10 = data.data['10']['images']['original']['url'] 
            fetch(imagen10)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL10 = URL.createObjectURL(myBlob)
            contenido10.innerHTML = `<img class="img-gif" src="${data.data['10']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL10}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader11(){

            const imagen11 = data.data['11']['images']['original']['url'] 
            fetch(imagen11)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL11 = URL.createObjectURL(myBlob)
            contenido11.innerHTML = `<img class="img-gif" src="${data.data['11']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL11}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader12(){

            const imagen12 = data.data['12']['images']['original']['url'] 
            fetch(imagen12)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL12 = URL.createObjectURL(myBlob)
            contenido12.innerHTML = `<img class="img-gif" src="${data.data['12']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL12}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader13(){

            const imagen13 = data.data['13']['images']['original']['url'] 
            fetch(imagen13)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL13 = URL.createObjectURL(myBlob)
            contenido13.innerHTML = `<img class="img-gif" src="${data.data['13']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL13}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader14(){

            const imagen14 = data.data['14']['images']['original']['url'] 
            fetch(imagen14)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL14 = URL.createObjectURL(myBlob)
            contenido14.innerHTML = `<img class="img-gif" src="${data.data['14']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL14}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader15(){

            const imagen15 = data.data['15']['images']['original']['url'] 
            fetch(imagen15)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL15 = URL.createObjectURL(myBlob)
            contenido15.innerHTML = `<img class="img-gif" src="${data.data['15']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL15}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader16(){

            const imagen16 = data.data['16']['images']['original']['url'] 
            fetch(imagen16)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL16 = URL.createObjectURL(myBlob)
            contenido16.innerHTML = `<img class="img-gif" src="${data.data['16']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL16}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader17(){

            const imagen17 = data.data['17']['images']['original']['url'] 
            fetch(imagen17)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL17 = URL.createObjectURL(myBlob)
            contenido17.innerHTML = `<img class="img-gif" src="${data.data['17']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL17}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }

        function downloader18(){

            const imagen18 = data.data['18']['images']['original']['url']
            fetch(imagen18)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURL18 = URL.createObjectURL(myBlob)
            contenido18.innerHTML = `<img class="img-gif" src="${data.data['18']['images']['original']['url']}" alt="Cargando..." width="243" height="187" /><div class="enlaces-img">
            <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
            <a href="${objectURL18}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            <img class="icons img-max" src="./img/icon-max-normal.svg" alt=""></div>`

            });

        }
        
        downloader();
        downloader1();
        downloader2();
        downloader3();
        downloader4();
        downloader5();
        downloader6();
        downloader7();
        downloader8();
        downloader9();
        downloader10();
        downloader11();
        downloader12();
        downloader13();
        downloader14();
        downloader15();
        downloader16();
        downloader17();
        downloader18();
        
    });
    
}

Traer()

