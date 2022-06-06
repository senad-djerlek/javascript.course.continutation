let paragraphElement = document.querySelector("p");

function changeParagraphText () {
    paragraphElement.textContent = "Clicked!"
    console.log("Paragraph clicked");
}

paragraphElement.addEventListener("click",changeParagraphText);



let inputElement = document.querySelector("input");

function retrieveUserInput(event){
    //let enteredText = inputElement.value
    let enteredText = event.target.value;// gets the value
    // let enteredText = event.data;
    console.log(enteredText);
    // console.log(event);
}

inputElement.addEventListener("input",retrieveUserInput);