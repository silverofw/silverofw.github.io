function ShowData(list){
  var parameter = {
    url: 'https://docs.google.com/spreadsheets/d/1s0mCs79Rask9VLLUP9_xLMUi_QMM0pw56daoASvqeG0/edit#gid=0',
    name: list,
  };
  $.get('https://script.google.com/macros/s/AKfycbzN13CSaqsqOgD5DEeVfPOTLmRUeV8t7WJpi7ZvaVIpHVGrIs4/exec', parameter, function(data) {
    //console.log(data);
    var jo = data;
    document.getElementById("demo").innerHTML = "";
    for (var i = 0, len = jo.data.length; i < len; i ++) {
      document.getElementById("demo").innerHTML += 
      jo.data[i].id + 
      " " + jo.data[i].card_type + 
      " [ " + jo.data[i].name_cn + " ]</br>";

      document.getElementById("demo").innerHTML += 
      "     " + jo.data[i].card_text_cn + "</br></br>";
    }
  });
}