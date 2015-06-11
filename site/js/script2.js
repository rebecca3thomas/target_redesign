 $( function){

    var $cat_box = $(".category_heading"),
        $cat_links = $(".category_heading > ul"),
        $cat_img = $(".category_heading > img"),

        $cat_links.hide();

    $cat_box.on( "mouseenter", function(e){
        $cat_links.show(),
        $cat_img.hide();
    }); 

    $cat_box.on( "mouseleave", function( e ){
        $cat_links.hide(),
        $cat_img.show();
    } );

    $cat_box( "mouseenter", function( e ){

        $( this ).addClass( "subcat" ).find( ".category_heading > ul" ).show();
    } );

    $cat_box( "mouseleave", function( e ){

        $( this ).removeClass( "subcat" ).find( ".category_heading > ul" ).hide();
    } );

});

