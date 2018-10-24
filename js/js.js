second.onclick = function(){
    //    if (content.style.background = "#bcbcbc")
    //         content.style.background = "#2d2d2d";
    //    else if (content.style.backgroundColor = "#2d2d2d")
    //         content.style.backgroundColor = "#bcbcbc";
    content.style.background = "#2d2d2d";


    // var change = document.getElementById("content");
    // if (change.style.background == "#bcbcbc")
    //     change.style.background = "#2d2d2d";
    // else
    //     change.style.background = "#bcbcbc";


    // change.style.background = (change.style.background == "#2d2d2d")?"#bcbcbc":"#2d2d2d";
}

third.onclick = function(){
    body.removeChild(content);
    var div = document.createElement('div');
    div.className = "second-content";
    div.innerHTML = "<div class='block'>Новый блок №1</div><div class='block'>Новый блок №2</div><div class='block'>Новый блок №3</div>";
    body.appendChild(div);
}
