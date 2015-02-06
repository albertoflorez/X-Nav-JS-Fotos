function changer (id, newValue) {
    var element = document.getElementById(id);
    element.innerHTML = newValue;
}

function giveMePhoto(){
    var imagen = 
    [
        'http://upload.wikimedia.org/wikipedia/commons/6/6c/A15_Underpass_near_Elsham_Hill_-_geograph.org.uk_-_1779762.jpg',
        'http://upload.wikimedia.org/wikipedia/commons/2/26/Rottweiler_standing_facing_left.jpg',
        'http://upload.wikimedia.org/wikipedia/commons/2/2c/Christopher_Columbus_monument_Madrid.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/4/42/Plaza_de_Cibeles_%28Madrid%29_10.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/d/d6/Plaza_mayor%2CMadrid.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/3/32/Arco_plaza_mayor_madrid.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/5/5d/Plaza_Mayor%2C_Madrid_5.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/9/92/La_agricultura._J._Alcoverro_y_Amor%C3%B3s._El_Retiro%2C_Madrid._-_panoramio.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/6/66/Puerta_de_Alcal%C3%A1_%28Madrid%29_04.jpg?uselang=es',
        'http://upload.wikimedia.org/wikipedia/commons/f/ff/El_Piruli_close_view.jpg?uselang=es',
    ];
    var indice = Math.floor(Math.random() * 10);
    var newValue ="<img src=" + imagen[indice] + " height='500' width='500' >";
    changer("change",newValue);
}
