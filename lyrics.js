async function fetchLyrics(artist, title) {
    const endpoint = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  
    try {
        const response = await fetch(endpoint);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();

        const mostrarCancionArtista = document.getElementById('mostrar-cancion-artista');
        const mostrarLetra = document.getElementById('mostrar-letra');
        
        mostrarCancionArtista.textContent = `${artist} - ${title}`;
        mostrarLetra.textContent = data.lyrics;
  
    } catch (error) {
        console.error('Ha hagut un error obtenent les lletras:', error);
        const mostrarCancionArtista = document.getElementById('mostrar-cancion-artista');
        const mostrarLetra = document.getElementById('mostrar-letra');
        
        mostrarCancionArtista.textContent = 'Error';
        mostrarLetra.textContent = 'No se ha pogut obtenir la lletra. Revisa la informació.';
    }
}

    const botonBuscar = document.getElementById('boton-buscar').addEventListener('click', () => {
    const artistaInput = document.querySelector('.buscador1').value;
    const cancionInput = document.querySelector('.buscador2').value;
  
    if (artistaInput && cancionInput) {
        fetchLyrics(artistaInput, cancionInput);
    } else {
        const mostrarCancionArtista = document.getElementById('mostrar-cancion-artista');
        const mostrarLetra = document.getElementById('mostrar-letra');
        
        mostrarCancionArtista.textContent = 'Error';
        mostrarLetra.textContent = 'Per favor, ingresi el nombre del artista y la cançó.';
    }
});