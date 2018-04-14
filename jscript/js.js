

var form = document.getElementById("c"),
    menu= document.getElementById("down-menu"),
    show_menu=document.getElementsByClassName("reg");
;

$(document).ready(function(){
        $(form).hide();
});


function a(){
$(document).ready(function(){
    $("#show-payment-form").click(function(){
       // $(form).show(1000);
       $(form).slideDown(1000);
    });
});
    
};

var x = document.getElementById("sub-form");
x.onclick = function(){
    alert("  ايفون اكس خلصنة اذا تريد اكو صرصور اخذة وجفيني شرك^-^ ");
}


var exitlink = document.getElementById("exit-link");

exitlink.onclick=function(){
    $(form).slideUp(1000);
}


$(document).ready(function(){
    $(menu).hide();
});


function show_down(){
    $(document).ready(function(){
        'use strict';
            $(menu).slideDown(1000);
    });
    };
    
function show_up(){
    $(document).ready(function(){
        'use strict';
            $(menu).slideUp(1000);    
    });
    };

