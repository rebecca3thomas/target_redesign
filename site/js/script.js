$( function(){

    var $menu_button = $( ".mega_nav_container" ),
        $nav         = $( ".mega_nav_dropdown" ),
        $lev1_nav    = $( ".mega_nav_dropdown > li" ),
        $lev2_nav    = $( ".mega_subcategories" );

        $nav.hide();
        $lev2_nav.hide();

    $menu_button.on( "mouseenter", function( e ){
        $nav.show();
    } );

    $menu_button.on( "mouseleave", function( e ){
        $nav.hide();
    } );

    $lev1_nav.on( "mouseenter", function( e ){

        $( this ).addClass( "active" ).find( ".mega_subcategories" ).show();
    } );

    $lev1_nav.on( "mouseleave", function( e ){

        $( this ).removeClass( "active" ).find( ".mega_subcategories" ).hide();
    } );

} );

// $( function){

//        var $cat_box = $(".category_heading"),
//         $cat_links = $(".category_heading > ul"),
//         $cat_img = $(".category_heading > img"),

//         $cat_links.hide();

//     $cat_box.on( "mouseenter", function(e){
//         $cat_links.show(),
//         $cat_img.hide();
//     });

//     $cat_box.on( "mouseleave", function( e ){
//         $cat_links.hide(),
//         $cat_img.show();
//     } );

//     $cat_box( "mouseenter", function( e ){

//         $( this ).addClass( "subcat" ).find( ".category_heading > ul" ).show();
//     } );

//     $cat_box( "mouseleave", function( e ){

//         $( this ).removeClass( "subcat" ).find( ".category_heading > ul" ).hide();
//     } );

// });

