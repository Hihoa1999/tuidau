document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('h2.hieuung');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 1100){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('zoomIn');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('zoomIn');
            trangthai="duoi300";}
        }
    
    })
})
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('p.hieuung1');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 1100){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('zoomIn');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('zoomIn');
            trangthai="duoi300";}
        }
    
    })
})
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('h2.hieuung2');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 500){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('bounceInRight');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('bounceInRight');
            trangthai="duoi300";}
        }
    
    })
})
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('p.hieuung3');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 600){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('bounceInRight');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('bounceInRight');
            trangthai="duoi300";}
        }
    
    })
})