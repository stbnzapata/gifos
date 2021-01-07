const d = document, shows = d.getElementById('shows');
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

async function pedido(){
    // shows.innerHTML = `<img class="loader" src="../img/loader.svg" alt="Cargando..." style="display: block;
    // margin: auto; margin-top:2%; width:54px; height:54px;">`;
    const keyword = d.getElementById('search').value; 
    tituloBusqueda.innerHTML = `<h2  class="titulo-img-busqueda">${keyword}</h2>`   
    const giphy = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(data => { 
        gif.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['0']['images']['original']['url']}" alt="cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif1.innerHTML = `<img class="img-buscar img-buscar2" src="${data.data['1']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif2.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['2']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif3.innerHTML = `<img class="img-buscar img-buscar2" src="${data.data['3']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif4.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['4']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif5.innerHTML = `<img class="img-buscar img-buscar2" src="${data.data['5']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif6.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['6']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif7.innerHTML = `<img class="img-buscar img-buscar2" src="${data.data['7']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif8.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['8']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif9.innerHTML = `<img class="img-buscar img-buscar2" src="${data.data['9']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif10.innerHTML = `<img class="img-buscar img-buscar1" src="${data.data['10']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
        gif11.innerHTML = `<img class="img-buscar img-buscar2" src="${data.data['11']['images']['original']['url']}" alt="Cargando..." width="156" height="120" style="margin-top: 25px" />`
    });    
}

async function sugerir(){
    
    const keyword = d.getElementById('search').value;
      
    const buscarSuge = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(data => { 
        sugerencia.innerHTML = `<label class="list list1"><i class="fas fa-search icon-search"></i>${data.data['0']['title']} </label>`
        sugerencia1.innerHTML = `<label class="list list1"><i class="fas fa-search icon-search"></i>${data.data['1']['title']}</label>`
        sugerencia2.innerHTML = `<label class="list list1"><i class="fas fa-search icon-search"></i>${data.data['2']['title']}</label>`
        sugerencia3.innerHTML = `<label class="list list4"><i class="fas fa-search icon-search"></i>${data.data['3']['title']}</label>`
    });    
}
   
function borrar(){

    
    d.getElementById("search").value = '';    
   
    sugerencia.innerHTML = `<label id='suge' class="list list1"><i   id="iconSuge" class="fas fa-search icon-search"></i>${[]} </label>`    
    sugerencia1.innerHTML = `<label id='suge1' class="list list1"><i id="iconSuge1" class="fas fa-search icon-search"></i>${[]}</label>`
    sugerencia2.innerHTML = `<label id='suge2' class="list list1"><i id="iconSuge2" class="fas fa-search icon-search"></i>${[]}</label>`
    sugerencia3.innerHTML = `<label id='suge3' class="list list4"><i id="iconSuge3" class="fas fa-search icon-search"></i>${[]}</label>`
    
    d.getElementById('btnTimes').style.display='none';
    d.getElementById('btnSearch').style.marginRight='15px';
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

d.getElementById('btnSearch').addEventListener('click',function(){    
    pedido();
});

d.getElementById('search').addEventListener('keyup', function(e){

    d.getElementById('btnTimes').style.display='initial';
    d.getElementById('btnSearch').style.marginRight='285px';
    d.getElementById('search').style.borderBottomLeftRadius='0';
    d.getElementById('search').style.borderBottomRightRadius='0';
    d.getElementById('search').style.borderBottom='0';
    
    sugerir();

    if (e.key === 'Enter') {
        e.preventDefault();
        pedido();
    }

});

d.getElementById('btnTimes').addEventListener('click',function(){    
    borrar();
},false);






