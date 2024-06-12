$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Previene que el formulario se envíe de manera tradicional
        
        // Obtiene los valores de los campos
        var username = $('#username').val();
        var password = $('#password').val();
        
        // Aquí puedes añadir lógica para verificar las credenciales, por ejemplo, hacer una petición AJAX
        if (username === "admin" && password === "admin123") {
            alert("Login exitoso!");
        } else {
            alert("Credenciales incorrectas, intenta de nuevo.");
        }
    });
});
