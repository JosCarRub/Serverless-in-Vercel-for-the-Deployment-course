document.getElementById('loadDataButton').addEventListener('click', async () => {

    const response = await fetch('/api/v1-get'); 
    
    if (response.ok) {
        const data = await response.json();
        
        
        if (data.success) {
            
            const container = document.getElementById('dataContainer');
            container.innerHTML = ''; 
            
            data.data.forEach(item => {
                const p = document.createElement('p');
                p.textContent = `Nombre: ${item.name}, Correo: ${item.email}`;
                container.appendChild(p);
            });
        } else {
            alert('No se pudo cargar los datos');
        }
    } else {
        alert('Error al conectar con la base de datos.');
    }
});