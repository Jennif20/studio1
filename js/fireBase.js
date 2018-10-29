var database = firebase.database();

var databaseRef = database.ref('/');

databaseRef.once('value').then(function(snapshot){
    const databaseValues = snapshot.val();

$('body').append(databaseValues['blurb']);
});
