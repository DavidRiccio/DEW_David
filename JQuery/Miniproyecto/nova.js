$(document).ready(function() {
    $.getJSON('/JQuery/Miniproyecto/productos.json', function(data) {
        // Event listener for beverages
        $('#bebidas').on('click', function() {
            $('.sub-menu').html(`
                <button class="bebida" data-type="refrescos">Refrescos</button>
                <button class="bebida" data-type="calientes">Calientes</button>
                <button class="bebida" data-type="alcoholicas">Alcoholicas</button>
            `);
        });

        // Event listener for first plate
        $('.primer-plato').on('click', function() {
            $('.sub-menu').html(`
                <button class="plato" data-type="sopa">Sopa</button>
                <button class="plato" data-type="ensalada">Ensalada</button>
            `);
        });

        // Event listener for second plate
        $('.segundo').on('click', function() {
            $('.sub-menu').html(`
                <button class="plato" data-type="carne">Carne</button>
                <button class="plato" data-type="pescado">Pescado</button>
                <button class="plato" data-type="vegetariano">Vegetariano</button>
            `);
        });

        // Event listener for desserts
        $('.postre').on('click', function() {
            $('.sub-menu').html(`
                <button class="plato" data-type="fruta">Fruta</button>
                <button class="plato" data-type="dulces">Dulces</button>
            `);
        });

        // Event delegation for beverages
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

        // Event delegation for plates (first, second, and desserts)
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
            } else if (type === 'carne') {
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
            } else if (type === 'fruta') {
                data.Frutas.forEach(cal => {
                    $('.product-list').append(`<p>${cal.nombre}</p>`);
                });
            } else if (type === 'dulces') {
                data.Dulces.forEach (cal => {
                    $('.product-list').append(`<p>${cal.nombre}</p>`);
                });
            }}
        )}
    )   
})