function realTimeClock(){
       const date = new Date();

       var hours = date.getHours();
       var minutes = date.getMinutes();
       var seconds = date.getSeconds();

       //var time = hours+":"+minutes+":"+seconds;

       
       if(hours > 12){
              hours-=12;
       }

       minutes = ("0" + minutes).slice(-2);
       seconds = ("0" + seconds).slice(-2);

       document.getElementById('clock').innerHTML = 
              hours + " : " + minutes + " : " + seconds;
              var time = setTimeout(realTimeClock, 500);
}
