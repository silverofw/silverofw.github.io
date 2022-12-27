var datas = [
    { id: 1, html:"articles/1.html", title:"從零開始的網誌開張啦！",
        info: "還在定位這個網誌的目標中，目前有學習筆記，資料分享..." }
];

$(document).ready(function(){
    //alert('Successfully Loaded. Currently ' + datas.length + " articles.")
    $("#bar").load("bar.html"); 
    //setBar();

    datas.forEach(function(value){
      addNewArticle(value);
    });
})

function setBar(){
    document.getElementById("bar").innerHTML += 
    "<div class=\"left\">" +
      "<img class=\"icon\" src=\"https://i.imgur.com/hz1Hltb.gif\" title=\"source: imgur.com\">" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>求知若渴．虛懷若愚</p>" +
      "<p><a href=\"index.html\">首頁</a></p>" +
      "<p><a href=\"index.html\">分類</a></p>" +
      "<p><a href=\"resume.html\">關於我</a></p>" +
      "<p>&nbsp;</p>" +
    "</div>" +
    "<div class=\"right\">" +
      "<p>超絕卡多</p>" +
        "<p><a href=\"https://github.com/silverofw\" target=\"_blank\">GitHub</a></p>" +
        "<p><a href=\"https://www.youtube.com/@cardooo\" target=\"_blank\">YouTube</a></p>" +
        "<p><a href=\"https://www.pixiv.net/member.php?id=955320\" target=\"_blank\">pixiv</a></p>" +
      "<p style=\"text-align:center\">" +
        "<a href=\"https://www.cutercounter.com/traditional-chinese-n/\" target=\"_blank\"><img src=\"https://www.cutercounter.com/hits.php?id=gvcffdk&nd=6&style=1\" border=\"0\" alt=\"網站計數器\"></a>" +
      "</p>" +
    "</div>";
}

function addNewArticle(data){
    document.getElementById("items").innerHTML += 
    "<div class=\"item\">" +
        "<h3>" + data.title + "</h3>" +
        "<h4>" + data.info + "</h4>" +
        "<div><a href=\"" + data.html + "\">more...</a></div>" +
    "</div>";
}