// var btn = document.getElementById('btn');
// var text = document.getElementById('text');
// var heading = document.getElementById('heading');

// var firebaseHeadingref = firebase.database().ref().child("Heading");

// firebaseHeadingref.on('value', function(datasnapshot){
//     heading.innerText = datasnapshot.val();
// });

// function submit(){
//     var firebaseref = firebase.database().ref();
//     var msg = text.value;

//     firebaseref.child('Name').set(msg);
// }

$(function(){
    var rootName = firebase.database().ref().child('Fast food');

    
// Можно использовать сокрашение snap 
    rootName.on('child_added', function(snapshot){
        var adress = snapshot.child('Adress').val();
        var location = snapshot.child('Location').val();
        var descr = snapshot.child('Description').val();
        var photo = snapshot.child('Photo').val();
        var rate = snapshot.child('Rating').val();
        var reviews = snapshot.child('Reviews').val();

        // alert(adress);
        // alert(location);

        

        $('#first').append('<li>' + adress + '</li>' + '<li>' + location + '</li>'
         + '<li>' + descr + '</li>' + '<li>' + photo + '</li>' + '<li>' + rate + '</li>'
         + '<li>' + reviews + '</li>');
    });
});