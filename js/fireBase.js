export function initialize_firebase() {
    firebase.initializeApp(get_firebase_config());
  }
  
  function get_firebase_config() {
    return {
        apiKey: "AIzaSyCRy8h314-TH5OY_DUqLUsYA8lMjI5-atI",
        authDomain: "blurb-40c0e.firebaseapp.com",
        databaseURL: "https://blurb-40c0e.firebaseio.com",
        projectId: "blurb-40c0e",
        storageBucket: "blurb-40c0e.appspot.com",
        messagingSenderId: "824446831053"    
      };
  }


export function get_database_snapshot() { 
    var database = firebase.database();
    var databaseRef = database.ref('/');

    databaseRef.once('value').then(function(snapshot){
        const databaseValues = snapshot.val();
        console.log(databaseValues);
        return databaseValues;
    });
  }
 export function store_data(imgUrl){
    var database = firebase.database();
    var databaseRef = database.ref('/');
    databaseRef.push({
        "img" : imgUrl
    })
 }
  export function read_data(){
    var database = firebase.database();
    var databaseRef = database.ref('/');

    databaseRef.once("value").then(function(snapshot){
        snapshot.forEach(function(item){
            console.log(item.val());
            var url = item.val()["img"];
            create_img(url);
        
        });
    });
  }

 export function create_img(url){
    var img = $("<img>");
    img.attr('src',url);
    $("#pic").append(img);
  }