$(document).ready(function() {
    $.getJSON('/JQuery/Miniproyecto/productos.json', function(data) {
        const bebidas = [data.Alcoholicas, data.Calientes, data.Refrescos];

        $('#bebidas').on('click', function() {
            $('.sub-menu').html(`
                <button class="bebida" data-type="refrescos">Refrescos</button>
                <button class="bebida" data-type="calientes">Calientes</button>
                <button class="bebida" data-type="alcoholicas">Alcoholicas</button>
            `);
        });

        $('.primer-plato').on('click', function() {
            $('.sub-menu').html(`
                <button class="plato" data-type="sopa">Sopa</button>
                <button class="plato" data-type="ensalada">Ensalada</button>
            `);
        });

        $('.segundo').on('click', function() {
            $('.sub-menu').html(`
                <button class="plato" data-type="carne">Carne</button>
                <button class="plato" data-type="pescado">Pescado</button>
                <button class="plato" data-type="vegetariano">Vegetariano</button>
            `);
        });

        $('.postre').on('click', function() {
            $('.sub-menu').html(`
                <button class="plato primer" data-type="fruta">Fruta</button>
                <button class="plato" data-type="dulces">Dulces</button>
            `);
        });

        
        $('.sub-menu').on('click', '.bebida', function() {
            const type = $(this).data('type');
            $('.product-list').empty(); 
            if (type === 'calientes') {
                data.Calientes.forEach(cal => {
                    $('.product-list').append(`<p>${cal.nombre}</p>`);
                });
            } else if (type === 'refrescos') {
                data.Refrescos.forEach(ref => {
                    $('.product-list').append(`<p>${ref.nombre}</p>`);
                });
            } else if (type === 'alcoholicas') {
                data.Alcoholicas.forEach(al => {
                    $('.product-list').append(`<p>${al.nombre}</p>`);
                });
            }
        });
        // PRIMER PLATO

        $('.sub-menu').on('click', '.plato', function() {
            const type = $(this).data('type');
            $('.product-list').empty(); 
            if (type === 'sopa') {
                data.Sopa.forEach(cal => {
                    $('.product-list').append(`<p>${cal.nombre}</p>`);
                });
            } else if (type === 'ensalada') {
                data.Ensalada.forEach(ref => {
                    $('.product-list').append(`<p>${ref.nombre}</p>`);
                });
            }
        });
        $('.sub-menu').on('click', '.plato', function() {
            const type = $(this).data('type');
            $('.product-list').empty(); 
            if (type === 'carne') {
                data.Carne.forEach(cal => {
                    $('.product-list').append(`<p>${cal.nombre}</p>`);
                });
            } else if (type === 'pescado') {
                data.Pescado.forEach(ref => {
                    $('.product-list').append(`<p>${ref.nombre}</p>`);
                });
            } else if (type === 'vegetariano') {
                data.Vegetariano.forEach(al => {
                    $('.product-list').append(`<p>${al.nombre}</p>`);
                });
            }
        });

        $('.sub-menu').on('click', '.plato', function() {
            const type = $(this).data('type');
            $('.product-list').empty(); 
            if (type === 'fruta') {
                data.Frutas.forEach(cal => {
                    $('.product-list').append(`<p>${cal.nombre}</p>`);
                });
            } else if (type === 'dulces') {
                data.Dulces.forEach(ref => {
                    $('.product-list').append(`<p>${ref.nombre}</p>`);
                });
            } 
        });


        });
    });