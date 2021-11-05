document.getElementById('formulariocomentarios').addEventListener('submit',crear);

function crear(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let comentario = document.getElementById('comentario').value;
    let redsocial = document.getElementById('redsocial').value;

    let stock = {
        nombre,
        comentario,
        redsocial
    }

    if(localStorage.getItem('stocks') === null){

        let stocks = [];
        stocks.push(stock)
        localStorage.setItem('stocks', JSON.stringify(stocks))
    }else {
        let stocks = JSON.parse(localStorage.getItem('stocks'))
        stocks.push(stock)
        localStorage.setItem('stocks', JSON.stringify(stocks))
    }
    lenceria();
    document.getElementById('formulariocomentarios').reset();

}

function lenceria(){

    let stocks = JSON.parse(localStorage.getItem('stocks'));

    document.getElementById('tbody').innerHTML = "";

    for (let i = 0; i < stocks.length; i++) {
        
        let nombre = stocks[i].nombre;
        let comentario = stocks[i].comentario;
        let redsocial = stocks[i].redsocial;

        document.getElementById('tbody').innerHTML += 
        `
        <tr>
            <td>${nombre}</td>
            <td>${comentario}</td>
            <td>${redsocial}</td>
        </tr>
        `
    }
}
lenceria();