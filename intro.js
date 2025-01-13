document.getElementById('formulario-div').addEventListener('submit', async (event) => {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Enviar los datos al backend
    const response = await fetch('/api/v1-insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Datos insertados correctamente.');
    } else {
        alert('Hubo un error al insertar los datos.');
    }
});