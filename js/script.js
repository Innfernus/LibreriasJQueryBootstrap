$(document).ready(function() {
    // Forma del inicio de sesión
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Previene que el formulario se envíe de manera tradicional
        
        // Obtiene los valores de los campos
        var username = $('#username').val();
        var password = $('#password').val();
        
        // Aquí puedes añadir lógica para verificar las credenciales, por ejemplo, hacer una petición AJAX
        if (username === "admin" && password === "admin123") {
            window.location.href = "dashboard.html"
        } else {
            alert("Credenciales incorrectas, intenta de nuevo.");
        }
    });

    // Genero
    $(document).ready(function() {
        $('#gender').change(function() {
            if($(this).val() === 'Otro') {
                $('#otherGender').show()
            } else {
                $('#otherGender').hide()
                $('#otherGender').val('')
            }
        })
    })

    // Forma del registro
    $('#registerForm').on('submit', function(event) {
        event.preventDefault()

        valid = true

        let username = $('#username').val()
        let name = $('#name').val()
        let lastName = $('#lastName').val()
        let BOD = $('#BOD').val()
        let email = $('#email').val()
        let password = $('#password').val()
        let confirmPassword = $('#confirmPassword').val()

        if (username === "" || name === "" || BOD === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Por favor, llena todos los campos.")
            return
        }

        // Validación de email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if($('#email').val() && !emailPattern.test($('#email').val())) {
            $('#emailError').text('Por favor, ingresa un correo electrónico válido.');
            valid = false;
        }

        // Validación de edad mínima de 18 años
        const birthDate = new Date($('#BOD').val());
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if ($('#BOD').val() && age < 18) {
            $('#BODError').text('Debes tener al menos 18 años para registrarte.');
            valid = false;
        }

        // Validar contraseñas.
        if ($('#password').val() && $('#confirmPassword').val() && $('#password').val() !== $('#confirmPassword').val()) {
            $('#confirmPasswordError').text('Las contraseñas no coinciden.');
            valid = false;
        }

        if(valid) {
            alert('Registro exitoso!')
        }


    })
});
