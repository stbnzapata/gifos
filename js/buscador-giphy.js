const d = document; 
const shows1 = d.getElementById('shows1');
const shows2 = d.getElementById('shows2');
const shows3 = d.getElementById('shows3');
const gif = d.querySelector('#gif');
const gif1 = d.querySelector('#gif1');
const gif2 = d.querySelector('#gif2');
const gif3 = d.querySelector('#gif3');
const gif4 = d.querySelector('#gif4');
const gif5 = d.querySelector('#gif5');
const gif6 = d.querySelector('#gif6');
const gif7 = d.querySelector('#gif7');
const gif8 = d.querySelector('#gif8');
const gif9 = d.querySelector('#gif9');
const gif10 = d.querySelector('#gif10');
const gif11 = d.querySelector('#gif11');
const tituloBusqueda = d.querySelector('#tituloBusqueda');
const sugerencia = d.querySelector('#sugerencia');
const sugerencia1 = d.querySelector('#sugerencia1');
const sugerencia2 = d.querySelector('#sugerencia2');
const sugerencia3 = d.querySelector('#sugerencia3');
const btnTimes = d.querySelector('#btnTimes');
const search = d.querySelector('#search');
const suge = d.querySelector('#suge');
const suge1 = d.querySelector('#suge1');
const suge2 = d.querySelector('#suge2');
const suge3 = d.querySelector('#suge3');
const iconsuge = d.querySelector('#iconsuge');
const iconsuge1 = d.querySelector('#iconsuge1');
const iconsuge2 = d.querySelector('#iconsuge2');
const iconsuge3 = d.querySelector('#iconsuge3');
const vermas = d.querySelector('#vermas');
const show = d.querySelector('#show');
let offset = 0;

d.getElementById('vermas').style.display='none';

async function pedido(){
    d.getElementById('show').style.display="flex";
    d.getElementById('show').style.flexWrap="wrap";
    d.getElementById('show').style.justifyContent="center";
    d.getElementById('shows2').style.display="none";
    d.getElementById('shows3').style.display="none";
    d.getElementById('vermas').style.display='flex';
    shows1.innerHTML = `<img class="loader" src="../img/loader.svg" alt="Cargando..." style="display: block;
    margin: auto; margin-top:2%; width:54px; height:54px;">`;
    const keyword = d.getElementById('search').value; 
    tituloBusqueda.innerHTML = `<h2  class="titulo-img-busqueda">${keyword}</h2>`   
    const giphy = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(data => {
        
        function downloaderBuscar(){

            const imagenBuscada0 = data.data['0']['images']['original']['url'] 
            fetch(imagenBuscada0)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg = URL.createObjectURL(myBlob)
            gif.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['0']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar1(){

            const imagenBuscada1 = data.data['1']['images']['original']['url'] 
            fetch(imagenBuscada1)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg1 = URL.createObjectURL(myBlob)
            gif1.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['1']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg1}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar2(){

            const imagenBuscada2 = data.data['2']['images']['original']['url'] 
            fetch(imagenBuscada2)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg2 = URL.createObjectURL(myBlob)
            gif2.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['2']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg2}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar3(){

            const imagenBuscada3 = data.data['3']['images']['original']['url'] 
            fetch(imagenBuscada3)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg3 = URL.createObjectURL(myBlob)
            gif3.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['3']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg3}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar4(){

            const imagenBuscada4 = data.data['4']['images']['original']['url'] 
            fetch(imagenBuscada4)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg4 = URL.createObjectURL(myBlob)
            gif4.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['4']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg4}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar5(){

            const imagenBuscada5 = data.data['5']['images']['original']['url'] 
            fetch(imagenBuscada5)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg5 = URL.createObjectURL(myBlob)
            gif5.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['5']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg5}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar6(){

            const imagenBuscada6 = data.data['6']['images']['original']['url'] 
            fetch(imagenBuscada6)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg6 = URL.createObjectURL(myBlob)
            gif6.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['6']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg6}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar7(){

            const imagenBuscada7 = data.data['7']['images']['original']['url'] 
            fetch(imagenBuscada7)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg7 = URL.createObjectURL(myBlob)
            gif7.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['7']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg7}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar8(){

            const imagenBuscada8 = data.data['8']['images']['original']['url'] 
            fetch(imagenBuscada8)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg8 = URL.createObjectURL(myBlob)
            gif8.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['8']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg8}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar9(){

            const imagenBuscada9 = data.data['9']['images']['original']['url'] 
            fetch(imagenBuscada9)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg9= URL.createObjectURL(myBlob)
            gif9.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['9']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg9}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar10(){

            const imagenBuscada10 = data.data['10']['images']['original']['url'] 
            fetch(imagenBuscada10)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg10= URL.createObjectURL(myBlob)
            gif10.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['10']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg10}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar11(){

            const imagenBuscada11 = data.data['11']['images']['original']['url'] 
            fetch(imagenBuscada11)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg11= URL.createObjectURL(myBlob)
            gif11.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['11']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg11}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        downloaderBuscar()
        downloaderBuscar1()
        downloaderBuscar2()
        downloaderBuscar3()
        downloaderBuscar4()
        downloaderBuscar5()
        downloaderBuscar6()
        downloaderBuscar7()
        downloaderBuscar8()
        downloaderBuscar9()
        downloaderBuscar10()
        downloaderBuscar11()

    })
    .catch(error => console.error(
        d.getElementById('shows2').style.display="initial",
        d.getElementById('shows3').style.display="initial",
        d.getElementById('vermas').style.display='none',
        d.getElementById('show').style.display="none",
        shows2.innerHTML = `<img class="sinresultado" src="../img/icon-busqueda-sin-resultado.svg" alt="Cargando..." style="display: block;
        margin: auto; margin-top:2%; width:150px; height:150px;">`,
        shows3.innerHTML = `<p class="txt-resul" style="color:#50E3C2; font-size:22px; text-align:center; font-family: "Montserrat"; line-height: 25px;">intenta con otra busqueda</>`
    ));
    borrar()
    offset = 0
   
}

async function sugerir(){
    
    const keyword = d.getElementById('search').value;
     
    const buscarSuge = await fetch(`https://api.giphy.com/v1/tags/related/&q=${keyword}?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&limit=4&lang=es`)
    .then(response => response.json())
    .then(data => { 
        sugerencia.innerHTML = `<label class="list list1"><i class="fas fa-search icon-search"></i>${data.data['0']['name']} </label>`
        sugerencia1.innerHTML = `<label class="list list1"><i class="fas fa-search icon-search"></i>${data.data['1']['name']}</label>`
        sugerencia2.innerHTML = `<label class="list list1"><i class="fas fa-search icon-search"></i>${data.data['2']['name']}</label>`
        sugerencia3.innerHTML = `<label class="list list4"><i class="fas fa-search icon-search"></i>${data.data['3']['name']}</label>`
    });    
}
   
function borrar(){    
   
    sugerencia.innerHTML = `<label id='suge' class="list list1"><i   id="iconSuge" class="fas fa-search icon-search"></i>${[]} </label>`    
    sugerencia1.innerHTML = `<label id='suge1' class="list list1"><i id="iconSuge1" class="fas fa-search icon-search"></i>${[]}</label>`
    sugerencia2.innerHTML = `<label id='suge2' class="list list1"><i id="iconSuge2" class="fas fa-search icon-search"></i>${[]}</label>`
    sugerencia3.innerHTML = `<label id='suge3' class="list list4"><i id="iconSuge3" class="fas fa-search icon-search"></i>${[]}</label>`
    
    d.getElementById('btnTimes').style.display='none';
    d.getElementById('btnSearch').style.marginRight='15px';
    d.getElementById('btnSearch2').style.marginRight='15px';
    d.getElementById('search').style.borderBottomLeftRadius='27px';
    d.getElementById('search').style.borderBottomRightRadius='27px';
    d.getElementById('search').style.borderBottom='1px solid #572EE5';

    d.getElementById('suge').style.background= 'none';
    d.getElementById('suge1').style.background= 'none';
    d.getElementById('suge2').style.background= 'none';
    d.getElementById('suge3').style.background= 'none';
    d.getElementById('suge').style.borderRight= '0';
    d.getElementById('suge').style.borderLeft= '0';
    d.getElementById('suge1').style.borderRight= '0';
    d.getElementById('suge1').style.borderLeft= '0';
    d.getElementById('suge2').style.borderRight= '0';
    d.getElementById('suge2').style.borderLeft= '0';
    d.getElementById('suge3').style.borderRight= '0';
    d.getElementById('suge3').style.borderLeft= '0';
    d.getElementById('suge3').style.borderBottom= '0';
    d.getElementById('iconSuge').style.display="none";
    d.getElementById('iconSuge1').style.display="none";
    d.getElementById('iconSuge2').style.display="none";
    d.getElementById('iconSuge3').style.display="none";
    
    shows1.innerHTML = `<img class="loader" src="../img/loader.svg" alt="Cargando..." style="display: none;">`;
}

d.getElementById('btnSearch').addEventListener('click',function(){    
    pedido();
});

d.getElementById('search').addEventListener('keypress', function(e){

    d.getElementById('btnTimes').style.display='initial';
    d.getElementById('btnSearch').style.marginRight='285px';
    d.getElementById('btnSearch2').style.marginRight='495px';
    d.getElementById('search').style.borderBottomLeftRadius='0';
    d.getElementById('search').style.borderBottomRightRadius='0';
    d.getElementById('search').style.borderBottom='0';
    
    if (e.key === 'Enter') {
        e.preventDefault();
        pedido();
    }else{
        sugerir();
    }    

});

d.getElementById('btnTimes').addEventListener('click',function(){
    d.getElementById("search").value = '';       
    borrar();
},false);

function borrar2(){
    sugerencia.innerHTML = `<label id='suge' class="list list1"><i   id="iconSuge" class="fas fa-search icon-search"></i>${[]} </label>`    
    sugerencia1.innerHTML = `<label id='suge1' class="list list1"><i id="iconSuge1" class="fas fa-search icon-search"></i>${[]}</label>`
    sugerencia2.innerHTML = `<label id='suge2' class="list list1"><i id="iconSuge2" class="fas fa-search icon-search"></i>${[]}</label>`
    sugerencia3.innerHTML = `<label id='suge3' class="list list4"><i id="iconSuge3" class="fas fa-search icon-search"></i>${[]}</label>`
    
    d.getElementById('btnTimes').style.display='none';
    d.getElementById('btnSearch').style.marginRight='15px';
    d.getElementById('btnSearch2').style.marginRight='15px';
    d.getElementById('search').style.borderBottomLeftRadius='27px';
    d.getElementById('search').style.borderBottomRightRadius='27px';
    d.getElementById('search').style.borderBottom='1px solid #572EE5';

    d.getElementById('suge').style.background= 'none';
    d.getElementById('suge1').style.background= 'none';
    d.getElementById('suge2').style.background= 'none';
    d.getElementById('suge3').style.background= 'none';
    d.getElementById('suge').style.borderRight= '0';
    d.getElementById('suge').style.borderLeft= '0';
    d.getElementById('suge1').style.borderRight= '0';
    d.getElementById('suge1').style.borderLeft= '0';
    d.getElementById('suge2').style.borderRight= '0';
    d.getElementById('suge2').style.borderLeft= '0';
    d.getElementById('suge3').style.borderRight= '0';
    d.getElementById('suge3').style.borderLeft= '0';
    d.getElementById('suge3').style.borderBottom= '0';
    d.getElementById('iconSuge').style.display="none";
    d.getElementById('iconSuge1').style.display="none";
    d.getElementById('iconSuge2').style.display="none";
    d.getElementById('iconSuge3').style.display="none";
}

d.getElementById('sugerencia').addEventListener('click', function(){
    d.getElementById("search").value = sugerencia.innerText;       
    borrar2();
    d.getElementById("search").focus();
    pedido();
});

d.getElementById('sugerencia1').addEventListener('click', function(){
    d.getElementById("search").value = sugerencia1.innerText;       
    borrar2();
    d.getElementById("search").focus();
    pedido();
});

d.getElementById('sugerencia2').addEventListener('click', function(){
    d.getElementById("search").value = sugerencia2.innerText;       
    borrar2();
    d.getElementById("search").focus();
    pedido();
});

d.getElementById('sugerencia3').addEventListener('click', function(){
    d.getElementById("search").value = sugerencia3.innerText;       
    borrar2();
    d.getElementById("search").focus();
    pedido();
});

d.getElementById('vermas').addEventListener('click', function(){
    offset = offset + 12; 
    const keyword = d.getElementById('search').value; 
    const giphy = fetch(`https://api.giphy.com/v1/gifs/search?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&q=${keyword}&limit=12&offset=${offset}&rating=g&lang=en`)
    .then(response => response.json())
    .then(data => { 
        function downloaderBuscar(){

            const imagenBuscada0 = data.data['0']['images']['original']['url'] 
            fetch(imagenBuscada0)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg = URL.createObjectURL(myBlob)
            gif.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['0']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar1(){

            const imagenBuscada1 = data.data['1']['images']['original']['url'] 
            fetch(imagenBuscada1)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg1 = URL.createObjectURL(myBlob)
            gif1.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['1']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg1}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar2(){

            const imagenBuscada2 = data.data['2']['images']['original']['url'] 
            fetch(imagenBuscada2)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg2 = URL.createObjectURL(myBlob)
            gif2.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['2']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg2}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar3(){

            const imagenBuscada3 = data.data['3']['images']['original']['url'] 
            fetch(imagenBuscada3)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg3 = URL.createObjectURL(myBlob)
            gif3.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['3']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg3}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar4(){

            const imagenBuscada4 = data.data['4']['images']['original']['url'] 
            fetch(imagenBuscada4)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg4 = URL.createObjectURL(myBlob)
            gif4.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['4']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg4}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar5(){

            const imagenBuscada5 = data.data['5']['images']['original']['url'] 
            fetch(imagenBuscada5)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg5 = URL.createObjectURL(myBlob)
            gif5.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['5']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg5}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar6(){

            const imagenBuscada6 = data.data['6']['images']['original']['url'] 
            fetch(imagenBuscada6)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg6 = URL.createObjectURL(myBlob)
            gif6.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['6']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg6}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar7(){

            const imagenBuscada7 = data.data['7']['images']['original']['url'] 
            fetch(imagenBuscada7)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg7 = URL.createObjectURL(myBlob)
            gif7.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['7']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg7}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar8(){

            const imagenBuscada8 = data.data['8']['images']['original']['url'] 
            fetch(imagenBuscada8)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg8 = URL.createObjectURL(myBlob)
            gif8.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['8']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg8}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar9(){

            const imagenBuscada9 = data.data['9']['images']['original']['url'] 
            fetch(imagenBuscada9)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg9= URL.createObjectURL(myBlob)
            gif9.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['9']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg9}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar10(){

            const imagenBuscada10 = data.data['10']['images']['original']['url'] 
            fetch(imagenBuscada10)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg10= URL.createObjectURL(myBlob)
            gif10.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['10']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg10}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        function downloaderBuscar11(){

            const imagenBuscada11 = data.data['11']['images']['original']['url'] 
            fetch(imagenBuscada11)
            .then((res) => res.blob())
            .then(function (myBlob) {
            const objectURLimg11= URL.createObjectURL(myBlob)
            gif11.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['11']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />
            <div class="enlaces-img">
                <img class="icons img-fav" src="./img/icon-fav.svg" alt="">
                <a href="${objectURLimg11}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
                <img class="icons img-max" src="./img/icon-max-normal.svg" alt="">
            </div>`

            });

        }

        downloaderBuscar()
        downloaderBuscar1()
        downloaderBuscar2()
        downloaderBuscar3()
        downloaderBuscar4()
        downloaderBuscar5()
        downloaderBuscar6()
        downloaderBuscar7()
        downloaderBuscar8()
        downloaderBuscar9()
        downloaderBuscar10()
        downloaderBuscar11()
    });
    if(offset >= 100){
        d.getElementById('vermas').style.display='none';
    }
});


