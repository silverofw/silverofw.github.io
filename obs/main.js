$(function(){
  $('#BackTop').click(function(){ 
    $('html,body').animate({scrollTop:0}, 333);
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300 ){
      $('#BackTop').fadeIn(222);
    } else {
      $('#BackTop').stop().fadeOut(222);
    }
  }).scroll();
});

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

      var cardBgCss = "\"effect_card_bg\"";
      var cardBgCss1 = "\"effect_card_bg1\"";
      var cardBgCss2 = "\"effect_card_bg2\"";
      switch(jo.data[i].card_type)
      {
        case "效果怪獸":
          cardBgCss = "\"effect_card_bg\"";
          cardBgCss1 = "\"effect_card_bg1\"";
          break;
        case "通常魔法":
        case "儀式魔法":
        case "速攻魔法":
        case "永續魔法":
        case "裝備魔法":
        case "場地魔法":
          cardBgCss = "\"spell_card_bg\"";
          cardBgCss1 = "\"spell_card_bg1\"";
          break;
        case "通常陷阱":
        case "永續陷阱":
        case "反擊陷阱":
          cardBgCss = "\"trap_card_bg\"";
          cardBgCss1 = "\"trap_card_bg1\"";
          break;
        default:
          cardBgCss = "\"effect_card_bg\"";
          cardBgCss1 = "\"effect_card_bg1\"";
      }


      document.getElementById("demo").innerHTML += 
        "<div id = \"card_bg\">" + 
          "<div id =" + cardBgCss + ">" + 
            jo.data[i].id + "&nbsp" +
            " [ " + jo.data[i].name_cn + " ]&nbsp" + 
            jo.data[i].card_type + "</br>" + 
          " </div>" + 
          "<div id=" + cardBgCss1 +">" +    
            "<div id="+cardBgCss2+">" +
              jo.data[i].card_text_cn + "</br>" + 
            "</div>" + 
          "</div>" + 
        "</div>";
    }
  });
}

function OnOver(x)
{
  x.style.color = "red";
}

function OnOut(x)
{
  x.style.color = "black";
}

function OpenUrl(url)
{
  location.href = url;
}
