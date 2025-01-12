document.getElementById('formulario-div').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Enviar los datos al backend
    const response = await fetch('/api/insert-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Datos insertados correctamente.');
    } else {
        alert('Hubo un error al insertar los datos.');
    }
});