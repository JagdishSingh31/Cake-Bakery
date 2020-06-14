//------ReadMore function------//
function readmore(){
    var dot=document.getElementById("dots");
    var moreText=document.getElementById("read-more");
    var btn=document.getElementById("btn-more");
    
var ImageTop=document.getElementById("slide-img");

    if(dot.style.display==="inline"){
     moreText.style.display="inline";
     dot.style.display="none";
     btn.innerHTML="Close";
 ImageTop.style.top="-350px";
    } 
  else{
  dot.style.display="inline";
      moreText.style.display="none";
      btn.innerHTML="Explore";
     ImageTop.style.top="-253px";
      
  }
   
    
        
    
}
//------ReadMore close--------//

//-------About section-------//
var img_list=["sweets-3.jpeg","sweets-2.jpeg","sweets-1.jpeg","doughnut-3.jpeg","doughnut-2.jpeg","doughnut-1.jpeg","cupcake-3.jpeg","cupcake-2.jpeg","cupcake-1.jpeg",
"cake-2.jpeg",
"cake-3.jpeg",
"cake-1.jpeg"]

var img_position=0;

var image=document.createElement('img');
var span =document.getElementById('slide-img');
span.appendChild(image);
var i;
    image.src="image/"+img_list[img_position];
  function mySlide(){  
  setInterval(function(){
  
    image.src="image/"+img_list[img_position];
    img_position++;
    if(img_position>=12){
    img_position=0
        mySlide();
        
    }
   },5000)
 }

mySlide()



//-------------cart-items-----//
function cart_bar(){
    var items=document.getElementById("cart");
    //alert(items);
    var icon_bar=document.getElementById("fa-bar")
    
    
    items.style.transform="translateY(0)";
    icon_bar.style.display="none";
}

function close_cart(){
       var items =document.getElementById("cart")
       items.style.transform="translateY(-120%)";
       var icon_bar=document.getElementById("fa-bar")
    icon_bar.style.display="inline"
}


//-----------AddCart----------//
    
    var cartDataBase={
    "0":{"img":"image/cake-1.jpeg", "name":"Chocolate Cake","price":'50$',"Add":false },
   "1":{ "img":"image/cake-2.jpeg","name":"Vanilla Cake","price":'40$',"Add":false},
   "2":{ "img":"image/cake-3.jpeg","name":"strawberry Cake", "price":'60$',"Add":false},
    
    "11":{"img":"image/cupcake-1.jpeg", "name":"Banana Cupcake","price":'15$',"Add":false},
    "10":{ "img":"image/cupcake-2.jpeg","name":"Chocolate Cupcake","price":'18$',"Add":false },
   "9":{ "img":"image/cupcake-3.jpeg","name":"blueberry cupcake", "price":'22$',"Add":false},
    
    
   "8":{"img":"image/sweets-3.jpeg", "name":"chocolate","price":'20$',"Add":false },
   "7":{ "img":"image/sweets-2.jpeg","name":"crunch Cake","price":'25$',"Add":false },
   "6":{ "img":"image/sweets-1.jpeg","name":"Burger Cake", "price":'$22',"Add":false},
    
    
    "3":{"img":"image/doughnut-3.jpeg", "name":"chocolate Donut","price":'28$',"Add":false },
    "4":{ "img":"image/doughnut-2.jpeg","name":" Doughnut Mix","price":'30$',"Add":false },
   "5":{ "img":"image/doughnut-1.jpeg","name":"Creamy Doughnut", "price":'$25',"Add":false},
    
 }
 
var div=document.getElementById("items");
 
 
 //-----cartFunction----//
 
function AddCart(cartAdd){
    index=cartAdd.id
var image=cartDataBase[index].img;
  var name=cartDataBase[index].name;
  var price=cartDataBase[index].price;
var add=cartDataBase[index].Add
  
 if(add==false){
   alert(name+" added")
   
  var img=document.createElement('img');
  var h3=document.createElement('h3');
  var h2=document.createElement('h2');
 
 img.src=image;
 h2.innerHTML=name;
 h3.innerHTML=price;
 div.appendChild(img);
 div.appendChild(h2);
 div.appendChild(h3)
  h2.style.top="-100px";
  h2.style.left="50px";
  h3.style.top="-115px";
  h3.style.left="180px";
 

   }else{
       alert("Already added in your cart");
   } 
  add=cartDataBase[index].Add=true;
    
}