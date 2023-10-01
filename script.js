function validestr(ch){
    for (i in ch ){
        console.log("lettre : ",ch[i]);
        if (!(((ch[i] >='a') && (ch[i]<='z')) ||((ch[i] >='A') && (ch[i]<='Z'))))
        return false;
    }
    return true;
}


function check(){
    let d=Date.parse(document.getElementById("d").value);
    let nom = document.getElementById("n").value;
    let prenom = document.getElementById("p").value;
   console.log("day : ",d);
   console.log("comparaison :",Date.parse("january 01,2024"));
   if(nom.length <1 || !validestr(nom) ){
    document.getElementById("er1").innerHTML="veuillez entrer un nom valide"
   }
   if(nom.length <1 || !validestr(prenom) ){
    document.getElementById("er2").innerHTML="veuillez entrer un prenom valide"
   }

    if((d<Date.parse("january 01,2024") )||(d>Date.parse("December 31,2024"))   ){
        document.getElementById("er4").innerHTML="la date doit etre comprise entre janvier 01 ,2024 et decembre 31 ,2024"
    }
    
    if(document.getElementById("tel").value.length.toString()!= 8){
        document.getElementById("er3").innerHTML="tel incorrecte"

    }
}