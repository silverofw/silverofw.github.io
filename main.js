jQuery(function(){
    jQuery('#loadPage').click(function(){
        jQuery('#pagecontainer').load('main.html', 
                function(){alert('Content Successfully Loaded.')} 
        );
    });
})

$(document).ready(function(){
    //$('#bar').load('main.html', function(){alert('Content Successfully Loaded.')});
})