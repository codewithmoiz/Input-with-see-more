var btn = document.getElementById("button");
var see_button = document.getElementById("see-button");
var inputField = document.getElementById("user-input");
var blank = "";
var showPara;

function func() {
    var getText = inputField.value;

    if (getText !== "") {
        blank = getText;
        if(blank.length > 50){
            see_button.style.display = 'inline';
        }
        else{
            see_button.style.display = 'none';
        }
        var copiedText = blank.slice(0, 50);
        
        if (blank.length > 50) {
            showPara = document.createElement('p');
            showPara.innerText = copiedText;
            document.body.appendChild(showPara);
        } else {
            showPara = document.createElement('p');
            showPara.innerText = blank;
            document.body.appendChild(showPara);
        }
    }
}

function seeText() {
    if (see_button.innerText === "See more") {
        showPara.innerText = blank;
        see_button.innerText = "See less";
    } else {
        showPara.innerText = blank.slice(0, 50);
        see_button.innerText = "See more";
    }
}
