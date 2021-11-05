$('#submit').click(function (e) {
    e.preventDefault();
    let inputs = $('#formulario').find(':input[type="text"]')
    let email = $('#formulario').find(':input[type="email"]').val()

     inputs.each(function (contacto, elemento) {
        if ($(elemento).val().length <= 0) {
            $(elemento).css("border", "solid 2px #FA5858")
        } else {
            $(elemento).css('border', 'none')
        }
    })

    let mainform = document.getElementById("mainform")

    if ((email != "")) {
        let plantilla = document.createElement("div")
        plantilla.classList.add("cartelito")
        plantilla.innerHTML = `
        <h1>¡Datos Recibidos!</h1>
        <p class="subtitulo">en breve recibirás una respuesta al siguiente email: ${email}</p>
        `
        mainform.appendChild(plantilla)
    } else {
         console.log ("los campos estan vacíos")   
    }
})