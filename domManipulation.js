// -->😎Dom->Document Object Model 
// ---Represent structure of web page (Using Tree like structure)
// ----Each element - node in tree 
// ---These nodes can be accessed, modified, and manipulated using programming languages like JavaScript


// -->Pillers Of DOM (4)
// ----1.Selection of the elements
// -----querySelector 
// ------document.querySelector("#id_name/.class_name/element") ; //select only fist 
// ------document.querySelectorAll("#id_name/.class_name/element") ; //select many element and return nodeList
// -------we need to use forEach method get access of each element of nodeList(set Of Many Element) ;
// --------elem.forEach(function(e){ //logic }) ; 

// -----idSelector
// ------document.getElementById("id_name") ; // don't use (#)

// -----classSelector
// ------document.getElementsByClassName("class_name") ; // don't use (.)


// ----2.Changing HTML
// ------elem.innerHTML  = "kuchh bhi" ;  // will change original content 


// ----3.Changing CSS 
// ------elem.style.property = "value" ;  // use camelCase for property -(backgroundColor , color )


// ----4. Event Listener
// -----elem.addEventListener("event" ,function(){ // changing css/HTML   }) ;
// -----events ->  Mouse Events:click, dblclick, mousedown, mouseup, contextmenu,mouseout, mousewheel, mouseover
//                 Touch Events:touchstart, touchend, touchmove, touchcancel
//                 Keyboard Events:keydown, keyup, keypress
//                 Form Events: focus, blur, change, submit
//                 Window Events: resize, scroll, load, unload, hashchange