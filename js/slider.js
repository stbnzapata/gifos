const slider = $('.slider');
const siguiente = $('.boton-der');
const anterior = $('.boton-izq');

function moverD(){
    slider.animate({marginRight:0},500,function(){
        $('.slider section:first').insertAfter('.slider section:last')
        slider.css('margin-right', '+'+0+'%');
    });
}

function moverI(){
    slider.animate({marginLeft:0},500,function(){
        $('.slider section:last').insertBefore('.slider section:first')
        slider.css('margin-left', '-'+0+'%');
    });
}

siguiente.on('click', function(){
    moverD();
})

anterior.on('click', function(){
    moverI();
})