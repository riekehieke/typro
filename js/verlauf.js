$(document).on("pageshow", "#verlauf", function(){
    "use strict";
    if (localStorage.getItem("picArray") === null) {
        picArray=[];
        localStorage.setItem("picArray", JSON.stringify(picArray));
    }
    var verlaufArray;
    var verlaufArrayL;
    verlaufArray = JSON.parse(localStorage.getItem("picArray"));
    verlaufArrayL = verlaufArray.length;
    for ( var i=0; i<verlaufArrayL; i++ ) {
        $("#content_verlauf").append('<img class="verlaufPic" src ='+verlaufArray[i]+'>');
    }
});
