/***
 * Name : DivFixed
 * Description : RPP Plugin JQuery, Mantiene fija bloques en relacion a un objetivo
 * Version : 0.1
 * Use : $('#idN').rppDivFixed({ 'target': '#idTarget', 'zIndex': 'N' });
 * Default : { 'target': null, 'zIndex': '3', 'offsetTop' : 0, 'stop': 0, 'maxWidth': 992, 'stopHide': false };
 ***/
;
(function($) {
   $.fn.rppDivFixed = function(obj) {
       'use strict';
       //Variables iniciales
       var _t = this.selector,
       _w = $(window).width(),
       device = navigator.userAgent.toLowerCase(),
       isMovil = device.search(/iphone|ipod|ipad|android|blackberry/) > -1,
       arrT = _t.split(','),
       objDefautl = {
           target: null,
           zIndex: 3,
           offsetTop: 0,
           stop: 0,
           leftWidth:false,
           stopHide: false,
           stopBottom: false,
           maxWidth: 300
       },
       viewport = function(){
           var e = window,
           a = 'inner';
           if ( !( 'innerWidth' in window ) ){
               a = 'client';
               e = document.documentElement || document.body;
           }
           return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
       },
       opt = $.extend(objDefautl, obj);
       if (this.length <= 0 || _w <= opt.maxWidth || isMovil) {
           //No ejecuta
           return false;
       }
       var _offsetLeftInit = $(_t).offset().left;
       if (opt.target === null) {
           console.log('Define un elemento objetivo => target');
           return false;
       }
       //Offset Inicial
       var offsetInicial = $(_t).offset().top,
       offsetTargetInicial = $(opt.target).offset().top;
       //Scroll
       var tFix = 0;
       $(window).on('scroll', function() {
           if (viewport().width <= opt.maxWidth) {
               //Resoluciones menores
               //No ejecuta
               $(_t).removeAttr('style');
           } else {
               //Inicio
               var bScroll = $(window).scrollTop(),
               _div = $(_t),
               _fixTarget = $(opt.target),
               _offsetT = opt.offsetTop;

               //Si el target es mas corto no retorna
               if(_fixTarget.height() + offsetTargetInicial <= offsetInicial ){
                   return false;
               }

               //Condiciones
               if ((bScroll >= (offsetInicial - _offsetT)) && (bScroll <= (_fixTarget.innerHeight() +
               offsetTargetInicial) - $(_t).innerHeight() - _offsetT)) {
                   //tFix = $(_t).offset().top;
                   tFix = 0;
                   //Fijado
                   _div.css({
                       'position': 'fixed',
                       //'left': _div.offset().left + 'px',
                       'left': (opt.leftWidth)?_div.offset().left:'auto',
                       'top': _offsetT + 'px',
                       'bottom': 'auto',
                       'z-index': opt.zIndex,
                       'float': 'none',
                       'overflow': 'visible'
                   });
               } else {
                   if (bScroll < offsetInicial) {
                       //Deteniendo y quitando fijado
                       tFix = 0;
                       _div.removeAttr('style');
                   } else {
                       //tFix = $('#fix_target').offset().top + $('#fix_target').height() - $(_t).height();
                       tFix = $(opt.target).offset().top + $(opt.target).height() - $(_t).height();
                       //Se detiene, supera el alto definido
                       //if (opt.stop) {
                           if (opt.stopBottom) {
                               _div.css({
                                   'position':'absolute',
                                   'bottom': (opt.stopHide) ? '0px' : opt.stop + 'px',
                                   'top': 'auto',
                                   'left': '0px'
                               });
                           }else{
                               _div.css({
                                   'position':'absolute',
                                   'left':'auto',
                                   'top': (opt.stopHide) ? '0px' : (tFix - opt.offsetTop) + 'px'
                               });
                           }
                       //}
                   }
               }

           //Fin
           }
       });
       //Resize
       // $(window).on('resize', function() {
       //     //Resize quitando los carriles
       //     var offsetInicial = $(_t).offset().top,
       //     offsetTargetInicial = $(opt.target).offset().top;
       //     if (viewport().width <= opt.maxWidth) {
       //         //Resoluciones menores
       //         //No ejecuta
       //         $(_t).removeAttr('style');
       //     }else if(opt.leftWidth){
       //         $(_t).removeAttr('style');
       //     }

       // });
   };

})(window.jQuery);


//Init
$(document).ready(function() {
    setTimeout(function() {
        // if ($('#fixt').size() > 0) 
        // {
        //     $('#fixt').rppDivFixed({
        //         'target': 'main',
        //         'offsetTop': 3,
        //         'stopBottom': false,
        //         'maxWidth': 1010
        //     });
        //     console.log('llega');
        // }
        //Detalle
        if ($('.sharedetail-fix').size() > 0) {
            $('.box-detail .sharedetail-fix').rppDivFixed({
                'target': '.box-detail .inner-detail',
                'offsetTop': 0,
                'stopBottom': true,
                'maxWidth': 479,
                'leftWidth': true
            });
        }
        // if ($('.banner_late_left').size() > 0) {
        //     $('.banner_late_left').rppDivFixed({
        //         'target': 'main',
        //         'offsetTop': 3,
        //         'stopBottom': false,
        //         'maxWidth': 479
        //     });
        // }
        // if ($('.banner_late_right').size() > 0) {
        //     $('.banner_late_right').rppDivFixed({
        //         'target': 'main',
        //         'offsetTop': 3,
        //         'stopBottom': false,
        //         'maxWidth': 479,
        //         'leftWidth': true
        //     });
        // }

        if ($('.wrapper-laterales').size() > 0) {
            $('.wrapper-laterales').rppDivFixed({
                'target': 'main',
                'offsetTop': 3,
                'stopBottom': false,
                'maxWidth': 1010
            });
        }
       
    }, 3000);
  setTimeout(function(){
    //Portada
      if ($('#fix_sidebar').size() > 0 ) {
          $('#fix_sidebar').rppDivFixed({
              'target': '.body',
              'offsetTop': 0,
              'stopBottom': false,
              'maxWidth': 767
          });
      }

    }, 10000);
});