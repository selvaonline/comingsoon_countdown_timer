const countdown = document.querySelector('.countdown');

//Set Launch Date (in milliseconds)

const launchDate = new Date('Dec 31,2018 13:00:00');

//update every second (in milliseconds)
//1000 Millseconds is equal to one second.
const intvl = setInterval(()=> {
    //Get today's date and time
    const now = new Date().getTime();
    const distance = launchDate - now;
    console.log(distance);

    // Time Calculations
    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const mins = Math.floor((distance%(1000*60*60))/(1000*60));
    const secs = Math.floor((distance%(1000*60))/(1000));
    //Display Result
    countdown.innerHTML=`
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Seconds</span></div>
    `;
    //if launch passed
    if(distance<0)
    {
      //stop countdown
      clearInterval(intvl);
      countdown.style.color = '#17a2b8';
      countdown.innerHTML="Launched !!!"
    }
},1000);



