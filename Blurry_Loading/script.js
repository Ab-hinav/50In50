document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    
  }
};


var counter = 0;
    var intervalId = setInterval(function () {
      counter++;
      document.getElementById("counter").innerHTML = counter + "%";
      document.getElementById("counter").style.opacity = 
      scale(counter,0,100,1,0);
      document.querySelector('.container').style.filter = `blur(${scale(counter,0,100,30,0)}px)`;

      if (counter === 100) {
        clearInterval(intervalId);
        document.getElementById("counter").style.display = "none";
      }
    }, 9);

const scale = (num, in_min, in_max, out_min, out_max) => {

    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

}
