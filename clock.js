function realTimeClock(){
       const date = new Date();

       var hours = date.getHours();
       var minutes = date.getMinutes();
       var seconds = date.getSeconds();
       let periodOfTheDay;

       //var time = hours+":"+minutes+":"+seconds;

       if(hours > 0 && hours < 12){
              periodOfTheDay = "AM";
       }else if (hours == 12) {
              periodOfTheDay = "NN"
       }else if (hours > 12 && hours < 25){
              periodOfTheDay = "PM"
       } else {
              console.log("periodOfTheDay : Out of Bounds")
       }
       
       if(hours > 12){
              hours-=12;
       }
              
       minutes = ("0" + minutes).slice(-2);
       seconds = ("0" + seconds).slice(-2);

       document.getElementById('clock').innerHTML = 
              hours + " : " + minutes + " : " + seconds + " " + periodOfTheDay;
              var time = setTimeout(realTimeClock, 500);
}
