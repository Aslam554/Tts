// Created by Aslam1 Beg1

window.onload = () => {
    let btn = document.querySelector("button");
  
    let sub = document.querySelector("#submit");
  
    let txt = document.querySelector("textarea");
  
    setTimeout(() => {
      let ic = document.querySelector("#icon");
  
      ic.style.display = "none";
  
      ic.previousElementSibling.style.display = "block";
    }, 6000);
  
    sub.onclick = () => {
      if (sub.previousElementSibling.value == "") {
        sub.previousElementSibling.style.borderBottomColor = "crimson";
  
        responsiveVoice.speak("User name is empty. Try to fill it properly");
      } else {
        sub.parentElement.style.display = "none";
  
        btn.parentElement.style.display = "block";
  
        let hval = `Hi ${sub.previousElementSibling.value}!`;
  
        txt.previousElementSibling.innerHTML = hval;
  
        responsiveVoice.speak(
          hval + " Welcome to Text to Speech program. I will read texts for you"
        );
      }
    };
  
    btn.onclick = () => {
      if (txt.value != undefined) {
        responsiveVoice.speak(txt.value);
      } else {
        alert("Plese fill the text box to speak.");
      }
    };
  };
  