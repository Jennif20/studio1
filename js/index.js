// Write your JS here
import {test }from './script2.js';
import {get_database_snapshot, initialize_firebase} from './fireBase.js';
import {displayImage} from './imgList.js';

function initializeAndGrabData() {
    initialize_firebase();
    get_database_snapshot();
}

initializeAndGrabData();

function final_display(){

}




