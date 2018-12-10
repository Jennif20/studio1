export function displayImage(){
    $("#button1").click(function(){
    var img_url = $("#image_input").val();
    console.log(img_url);
    return img_url;
});
}
//console.log(displayImage);