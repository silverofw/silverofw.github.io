var datas = [
    { id: 1, html:"articles/1.html", title:"從零開始的網誌開張啦！", time:"2022/12/28",
        info: "規劃網誌的目標中..." }
];

$(document).ready(function(){
    //alert('Successfully Loaded. Currently ' + datas.length + " articles.")

    datas.forEach(function(value){
      addNewArticle(value);
    });
})

function addNewArticle(data){
    document.getElementById("items").innerHTML += 
    "<div class=\"item\">" +
        "<h3>" + data.title + "</h3>" +
        "<h5>" + data.time + "</h5>" +
        "<h4>" + data.info + "</h4>" +
        "<div><a href=\"" + data.html + "\">more...</a></div>" +
    "</div>";
}