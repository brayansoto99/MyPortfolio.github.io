 var arrLang = {
            'en' :{
                'inicio': 'Home',
                'acerca' : 'About us',
                'nuestrospro' : 'Products',
                'clients' : 'Our Clients',
                'contacts' : 'Contact Us',
                'idioma' : 'Lenguaje'
            },
            'es' :{
                'inicio': 'Inicio',
                'acerca' : 'Acerca de Plasin',
                'nuestrospro' : 'NuestrosProductos',
                'clients' : 'Nuestros Clientes',
                'contacts' : 'Contáctanos',
                'idioma' : 'Language'
            }  
        };
        
        
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
                
        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});