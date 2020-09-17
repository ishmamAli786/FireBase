function GoogleLogin(){
    ///// first of all create google provider object
    var provider=new firebase.auth.GoogleAuthProvider();
    //// login with popup window
    firebase.auth().signInWithPopup(provider).then(function(){
        /// code execute after successfull login
        console.log('user logIn Successfully')
    })
    .catch(function(error){
        var errorMessege=error.message;
        alert(errorMessege);
    })
    
}