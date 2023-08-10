function login() {
    var user = document.querySelector('#user').value
    var pass = document.querySelector('#password').value
    var controle = false

    // Array
    var usuarios = [
        'Eduardo',
        'admin',
        'rodrigo'
    ]

    var senhas = [
        '123456',
        'adminstr',
        'singed'
    ]

    // minusculo
    // var usuario = user.toLowerCase()

    if (user == '' || pass == '') {
        alert('Usuário ou senha em branco!')
    } else {
        for (i = 0; i < usuarios.length; i++) {
            if (user == usuarios[i] && pass == senhas[i]) {
                controle = true
                location.href=('paginainicial.html')
            }
        } if (controle == false) {
            alert('Usuário ou senha incorretos!')
        }
    }
}
