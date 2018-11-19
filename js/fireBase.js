export function initialize_firebase() {
    firebase.initializeApp(get_firebase_config());
  }
  
  function get_firebase_config() {
    return {
        apiKey: "AIzaSyDgTfeXUYJ-oQMR_Og18GJ__MtwJs8UBqQ",
        authDomain: "nibblers-9f830.firebaseapp.com",
        databaseURL: "https://nibblers-9f830.firebaseio.com",
        projectId: "nibblers-9f830",
        storageBucket: "nibblers-9f830.appspot.com",
        messagingSenderId: "567028766255"
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
