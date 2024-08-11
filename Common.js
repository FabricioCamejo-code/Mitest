// Conexión ajax
// Creamos una función llamada renderPage y le pasamos 3 argumentos url para renderizar data es un objeto para recibir datos adicionales de la pagina
// onLoad es una funcion opcional que se ejecuta despues de el renderizado. Puede ser cualquier cosa dependiendo de lo que se requiera.

function renderPage(url, data = {}, onLoad = null) {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => {
        
        const template = Handlebars.compile(xhr.response);
        document.getElementById('view').innerHTML = template(data);
        onLoad()
        
    });
}


//creamos una function navigate que le pasamos un parametro to que va a recibir la nueva locacion path
//Usamos history que contiene todo el historial de navegacion y le pasamos el metodo pushState
//history.pushState cambia la URL en la barra de direcciones del navegador a la nueva ruta especificada por to
//return routes[location.pathname](); retorna el path
//location es un objeto global en js que contiene metodo como pathname,href,host,search,hash
//location.pathname obtiene la ruta actual (después de la actualización de la URL)

function navigate(to){
    
    history.pushState({}, '', to);
    return routes[location.pathname]();
}
