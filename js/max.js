const gifMax = document.querySelector('#gifMax');

async function traerImagen() {
    await fetch('https://api.giphy.com/v1/gifs/trending?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&limit=25&rating=g')
        .then(res => res.json())
        .then(data => {

            let verificar = window.location.search;
            console.log(verificar)

            function downloader100() {

                const imagen0 = data.data['0']['images']['original']['url']
                fetch(imagen0)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['0']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader101() {

                const imagen1 = data.data['1']['images']['original']['url']
                fetch(imagen1)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['1']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader102() {

                const imagen2 = data.data['2']['images']['original']['url']
                fetch(imagen2)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['2']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader103() {

                const imagen3 = data.data['3']['images']['original']['url']
                fetch(imagen3)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['3']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader104() {

                const imagen4 = data.data['4']['images']['original']['url']
                fetch(imagen4)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['4']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader105() {

                const imagen5 = data.data['5']['images']['original']['url']
                fetch(imagen5)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['5']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader106() {

                const imagen6 = data.data['6']['images']['original']['url']
                fetch(imagen6)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['6']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }


            function downloader107() {

                const imagen7 = data.data['7']['images']['original']['url']
                fetch(imagen7)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['7']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader108() {

                const imagen8 = data.data['8']['images']['original']['url']
                fetch(imagen8)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['8']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }


            function downloader109() {

                const imagen9 = data.data['9']['images']['original']['url']
                fetch(imagen9)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['9']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader110() {

                const imagen110 = data.data['10']['images']['original']['url']
                fetch(imagen110)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['10']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader111() {

                const imagen11 = data.data['11']['images']['original']['url']
                fetch(imagen11)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['11']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader112() {

                const imagen12 = data.data['12']['images']['original']['url']
                fetch(imagen12)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['12']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader113() {

                const imagen13 = data.data['13']['images']['original']['url']
                fetch(imagen13)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['13']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader114() {

                const imagen14 = data.data['14']['images']['original']['url']
                fetch(imagen14)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['14']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader115() {

                const imagen15 = data.data['15']['images']['original']['url']
                fetch(imagen15)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['15']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader116() {

                const imagen16 = data.data['16']['images']['original']['url']
                fetch(imagen16)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['16']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader117() {

                const imagen17 = data.data['17']['images']['original']['url']
                fetch(imagen17)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['17']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader118() {

                const imagen18 = data.data['18']['images']['original']['url']
                fetch(imagen18)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['18']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            if (verificar === "?0") {
                downloader100()
            } else {
                if (verificar === "?1") {
                    downloader101()
                } else {
                    if (verificar === "?2") {
                        downloader102()
                    } else {
                        if (verificar === "?3") {
                            downloader103()
                        } else {
                            if (verificar === "?4") {
                                downloader104()
                            } else {
                                if (verificar === "?5") {
                                    downloader105()
                                } else {
                                    if (verificar === "?6") {
                                        downloader106()
                                    } else {
                                        if (verificar === "?7") {
                                            downloader107()
                                        } else {
                                            if (verificar === "?8") {
                                                downloader108()
                                            } else {
                                                if (verificar === "?9") {
                                                    downloader109()
                                                } else {
                                                    if (verificar === "?10") {
                                                        downloader110()
                                                    } else {
                                                        if (verificar === "?11") {
                                                            downloader111()
                                                        } else {
                                                            if (verificar === "?12") {
                                                                downloader112()
                                                            } else {
                                                                if (verificar === "?13") {
                                                                    downloader113()
                                                                } else {
                                                                    if (verificar === "?14") {
                                                                        downloader114()
                                                                    } else {
                                                                        if (verificar === "?15") {
                                                                            downloader115()
                                                                        } else {
                                                                            if (verificar === "?16") {
                                                                                downloader116()
                                                                            } else {
                                                                                if (verificar === "?17") {
                                                                                    downloader117()
                                                                                } else {
                                                                                    if (verificar === "?18") {
                                                                                        downloader118()
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

}

traerImagen()

async function traerImagen1() {
    const keyword = window.location.search;
    const mk = keyword.slice(0, -3)
    const md = mk.slice(1)
    
    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&q=${md}&limit=25&offset=0&rating=g&lang=en`)
        .then(res => res.json())
        .then(data => {

            let verificar = window.location.search;


            console.log(verificar)

            function downloader100() {

                const imagen0 = data.data['0']['images']['original']['url']
                fetch(imagen0)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['0']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader101() {

                const imagen1 = data.data['1']['images']['original']['url']
                fetch(imagen1)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['1']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader102() {

                const imagen2 = data.data['2']['images']['original']['url']
                fetch(imagen2)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['2']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader103() {

                const imagen3 = data.data['3']['images']['original']['url']
                fetch(imagen3)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['3']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader104() {

                const imagen4 = data.data['4']['images']['original']['url']
                fetch(imagen4)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['4']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader105() {

                const imagen5 = data.data['5']['images']['original']['url']
                fetch(imagen5)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['5']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader106() {

                const imagen6 = data.data['6']['images']['original']['url']
                fetch(imagen6)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['6']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader107() {

                const imagen7 = data.data['7']['images']['original']['url']
                fetch(imagen7)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['7']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader108() {

                const imagen8 = data.data['8']['images']['original']['url']
                fetch(imagen8)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['8']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader109() {

                const imagen9 = data.data['9']['images']['original']['url']
                fetch(imagen9)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['9']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader110() {

                const imagen10 = data.data['10']['images']['original']['url']
                fetch(imagen10)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['10']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader111() {

                const imagen11 = data.data['11']['images']['original']['url']
                fetch(imagen11)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['11']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            if (verificar === `?${md}%19`) {
                downloader100()
            } else {
                if (verificar === `?${md}%20`) {
                    downloader101()
                } else {
                    if (verificar === `?${md}%21`) {
                        downloader102()
                    } else {
                        if (verificar === `?${md}%22`) {
                            downloader103()
                        } else {
                            if (verificar === `?${md}%23`) {
                                downloader104()
                            } else {
                                if (verificar === `?${md}%24`) {
                                    downloader105()
                                } else {
                                    if (verificar === `?${md}%25`) {
                                        downloader106()
                                    } else {
                                        if (verificar === `?${md}%26`) {
                                            downloader107()
                                        } else {
                                            if (verificar === `?${md}%27`) {
                                                downloader108()
                                            } else {
                                                if (verificar === `?${md}%28`) {
                                                    downloader109()
                                                } else {
                                                    if (verificar === `?${md}%29`) {
                                                        downloader110()
                                                    } else {
                                                        if (verificar === `?${md}%30`) {
                                                            downloader111()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
}

traerImagen1()

async function traerImagen2() {
    const keyword = window.location.search;
    const mk = keyword.slice(0, -6)
    const md = mk.slice(1)
    const contar = keyword.length - 2
    const offset = keyword.slice(contar)
    const giphy = fetch(`https://api.giphy.com/v1/gifs/search?api_key=M2imEf1Dl7VF5mk2PciIWnuNhYZUVRwY&q=${md}&limit=12&offset=${offset}&rating=g&lang=en`)
        .then(response => response.json())
        .then(data => {

            let verificar = window.location.search;
            console.log(verificar)

            function downloader131() {

                const imagen0 = data.data['0']['images']['original']['url']
                fetch(imagen0)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['0']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader132() {

                const imagen1 = data.data['1']['images']['original']['url']
                fetch(imagen1)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['1']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader133() {

                const imagen2 = data.data['2']['images']['original']['url']
                fetch(imagen2)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['2']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader134() {

                const imagen3 = data.data['3']['images']['original']['url']
                fetch(imagen3)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['3']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader135() {

                const imagen4 = data.data['4']['images']['original']['url']
                fetch(imagen4)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['4']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }
            
            function downloader136() {

                const imagen5 = data.data['5']['images']['original']['url']
                fetch(imagen5)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['5']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader137() {

                const imagen6 = data.data['6']['images']['original']['url']
                fetch(imagen6)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['6']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader138() {

                const imagen7 = data.data['7']['images']['original']['url']
                fetch(imagen7)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['7']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader139() {

                const imagen8 = data.data['8']['images']['original']['url']
                fetch(imagen8)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['8']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader140() {

                const imagen9 = data.data['9']['images']['original']['url']
                fetch(imagen9)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['9']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader141() {

                const imagen10 = data.data['10']['images']['original']['url']
                fetch(imagen10)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['10']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            function downloader142() {

                const imagen11 = data.data['11']['images']['original']['url']
                fetch(imagen11)
                    .then((res) => res.blob())
                    .then(function (myBlob) {
                        const objectURL = URL.createObjectURL(myBlob)
                        gifMax.innerHTML = `<img class="img-gif" src="${data.data['11']['images']['original']['url']}" alt="Cargando..." width="318" height="245" />
            <div class="img-btn">
            <a href="#" id="imgFav"> <img class="icons img-fav" src="./img/icon-fav.svg" alt=""></a>
            <a href="${objectURL}" download="img.gif"><img class="icons img-dow" src="./img/icon-download.svg" alt=""></a>
            </div>`

                    });

            }

            if (verificar === `?${md}?31%${offset}`) {
                downloader131()
            } else {
                if (verificar === `?${md}?32%${offset}`) {
                    downloader132()
                } else {
                    if (verificar === `?${md}?33%${offset}`) {
                        downloader133()
                    } else {
                        if (verificar === `?${md}?34%${offset}`) {
                            downloader134()
                        } else {
                            if (verificar === `?${md}?35%${offset}`) {
                                downloader135()
                            } else {
                                if (verificar === `?${md}?36%${offset}`) {
                                    downloader136()
                                } else {
                                    if (verificar === `?${md}?37%${offset}`) {
                                        downloader137()
                                    } else {
                                        if (verificar === `?${md}?38%${offset}`) {
                                            downloader138()
                                        } else {
                                            if (verificar === `?${md}?39%${offset}`) {
                                                downloader139()
                                            } else {
                                                if (verificar === `?${md}?40%${offset}`) {
                                                    downloader140()
                                                } else {
                                                    if (verificar === `?${md}?41%${offset}`) {
                                                        downloader141()
                                                    } else {
                                                        if (verificar === `?${md}?42%${offset}`) {
                                                            downloader142()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        });
}

traerImagen2()