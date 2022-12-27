const nav = document.querySelector('.bar')
fetch('bar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

var datas = [
    { id: 1, html:"articles/1.html", title:"從零開始的網誌開張啦！",
        info: "還在定位這個網誌的目標中，目前有學習筆記，資料分享..." }
];

$(document).ready(function(){
    //alert('Successfully Loaded. Currently ' + datas.length + " articles.")
    //jQuery('#bar').load('bar.html');    

    datas.forEach(function(value){
      addNewArticle(value);
    });
})

function addNewArticle(data){
    document.getElementById("items").innerHTML += 
    "<div class=\"item\">" +
        "<h3>" + data.title + "</h3>" +
        "<h4>" + data.info + "</h4>" +
        "<div><a href=\"" + data.html + "\">more...</a></div>" +
    "</div>";
}