// Custom JavaScript for Salguero Home Improvement

(function($) {
    "use strict";
    
    // Variables
    var $navToggler = $('.navbar-toggler');
    var $navMenu = $('#nav');
    var menuVisible = false;
    
    // Inicialización - Asegurarse que el menú esté oculto en móvil al cargar
    $(document).ready(function() {
        if ($(window).width() < 992) {
            $navMenu.hide();
        }
    });
    
    // Función para mostrar el menú
    function showMenu() {
        $navMenu.slideDown(300);
        $navToggler.addClass('menu-opened');
        menuVisible = true;
    }
    
    // Función para ocultar el menú
    function hideMenu() {
        $navMenu.slideUp(200);
        $navToggler.removeClass('menu-opened');
        menuVisible = false;
    }
    
    // Toggle del menú al hacer clic en el botón hamburguesa
    $navToggler.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (menuVisible) {
            hideMenu();
        } else {
            showMenu();
        }
    });
    
    // Cerrar menú al hacer clic en un elemento del menú
    $navMenu.find('a').on('click', function() {
        if ($(window).width() < 992) {
            hideMenu();
        }
    });
    
    // Cerrar menú al hacer clic fuera del menú
    $(document).on('click', function(e) {
        if (menuVisible && !$(e.target).closest('#nav').length && !$(e.target).closest('.navbar-toggler').length) {
            hideMenu();
        }
    });
    
    // Prevenir cierre al hacer clic dentro del menú
    $navMenu.on('click', function(e) {
        e.stopPropagation();
    });
    
    // Ajustar menú en cambio de tamaño de ventana
    $(window).on('resize', function() {
        if ($(window).width() >= 992) {
            $navMenu.css('display', '');
            $navToggler.removeClass('menu-opened');
            menuVisible = false;
        } else {
            // Si el menú estaba visible y cambiamos a móvil, ocultarlo
            if (!menuVisible) {
                $navMenu.hide();
            }
        }
    });
    
    // Smooth scroll para enlaces de anclaje
    $('a[href^="#"]:not([href="#"])').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
})(jQuery);
