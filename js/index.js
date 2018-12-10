// Write your JS here
// import {test }from './script2.js';
import {get_database_snapshot, initialize_firebase, store_data, read_data, create_img} from './fireBase.js';

function initializeAndGrabData() {
    initialize_firebase();
    // console.log(get_database_snapshot());
    read_data();
}

initializeAndGrabData();

function final_display(){

}

$("#button1").click(function(){
    var img_url = $("#image_input").val();
    store_data( img_url);
    create_img(img_url);
    $("#image_input").val("");
});



