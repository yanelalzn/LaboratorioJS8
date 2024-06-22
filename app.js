const productos = [
    {
    nombre: 'Producto 1',
    precio: 100,
    imagen: 'https://ih1.redbubble.net/image.2141290934.1326/aldr,x1440,front-c,168,326,600,600-bg,f8f8f8.jpg'
    },
    {
    nombre: 'Producto 2',
    precio: 150,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    nombre: 'Producto 3',
    precio: 200,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    nombre: 'Producto 4',
    precio: 250,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    nombre: 'Producto 5',
    precio: 250,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    nombre: 'Producto 6',
    precio: 250,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    nombre: 'Producto 7',
    precio: 250,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    nombre: 'Producto 8',
    precio: 250,
    imagen: 'https://via.placeholder.com/150'
    }
    ];
    function pintarProductos(productos){
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    
    productos.forEach( producto =>{
    //generar un elemento nuevo
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    
    productoDiv.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>Precio: ${producto.precio}</p>
    `;
    
    contenedor.appendChild(productoDiv);
    } );
    }
    
    pintarProductos(productos);