$("document").ready(function() {
$("#collapse1").css("width",100);
$("#collapse1").css("margin","auto");
$("#collapse1").css("float","left");
$("#image1").css("width",100);


$("#collapse1").css("width",100);
$("#p").css({
    "background": "url('reapeatBackground.png') repeat-y"
});
$("a").css("color,red");
$("#tableDta a").css("color","green");
$("em + a").css("color","orange");
$("p>em").css("color","green");
$("#olistIndentli:nth-child(3)").css("color","red")
$("#li[name]").html("'and the Goblet of fire'");
$("input[type='text']#yourName").val("Derek");
$("a[href*='google']").css("font-weight", "bolder");
$("img[alt^='NTT']").css ({
    "border-color": "black",
    "border-width": "1px",
    "border-style": "solid"
});
$("#tableData tr:even").css("background-color", "#FFFDD0");
$("#tableData tr:even").css("background-color");
$("tableData tr:first").css ({
    "background-color": "#001A57",
    "color" : "white"
 });
 $("#oListTypes li:not(:contains(and))").css("color", "red");
 $("#after_p").click(function() {
     $(this).remove();
     $("#before_p").click(function() {
         $(this).replaceWith('<p>I\'m the new paragraph</p>');
     });
     $("#logo2").mouseover(function() {
        $("#logo2").mouseout(function(){
            $("#logo2").attr("src", "ntt-logo.png");
        });
        $("#logo2").mouseout(function(){
            $("#logo2").attr("src", "ntt-logo.png");
            
        })
     });

 });
 


});











arr = [];
  if (typeof(obj[key])=='object') {
    for (var a in obj[key]) {
        arr.push(Math.pow(obj[key][a], 2));
    }
  }
  return arr;

}