var request = prompt('Как вас зовут?', "Имя");
var newRequest = '';
var count = 0;
function Example(){
    for(var i=0; i < request.length; i++){
        if(request[i] >= '0' && request[i] <= '9'){
            count++;
            break;
        }
    }
    if(count>0){
        for(var j=0; j<request.length;j++){
            if(request[j] > request[j].toUpperCase())
                newRequest += request[j].toUpperCase();
            else
                newRequest += request[j].toLowerCase();
        }
        alert("Ваше имя: " + newRequest);
    }
    else{
        for(var j= request.length-1;j >=0; j--)
            newRequest+=request.charAt(j);
        alert("Ваше имя: " + request +", а наоборот: " +newRequest);
    }
    
}
Example();