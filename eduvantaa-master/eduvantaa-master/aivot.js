function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = " <table style='width:100%'>"+
        "<tr>"+
          "<th>Firstname</th>"+
          "<th>Lastname</th>"+
          "<th>Age</th>"+
        "</tr>"+
        "<tr>"+
          "<td>Jill</td>"+
          "<td>Smith</td>"+
          "<td>50</td>"+
        "</tr>"+
        "<tr>"+
          "<td>Eve</td>"+
          "<td>Jackson</td>"+
          "<td>94</td>"+
        "</tr>"+
      "</table>";
        // toiminnallisuus puuttuu!
    }
    else if(boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<table style='width:100%'>"+
        "<img src='smiley1.png' alt=''></img>";
        //toiminnallisuus puuttuu!
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
