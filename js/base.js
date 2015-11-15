 window.onload=function(){
     var items=document.getElementsByClassName('item');
     for(var i=0; i<items.length;i++){
         if(Math.random()>0.8){
            items[i].textContent='1';	 
          }else{
        	items[i].textContent='0';
          }
        items[i].onclick=function(){
              this.style.background='white';
              if(this.textContent=='1'){
              	alert('bow!!');
              }
        }
    }
   }
