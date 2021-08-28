 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBRVoDNTX2mtRGlsjbIcWmfy3_1PCuzW1A",
  authDomain: "contact-form-84793.firebaseapp.com",
  projectId: "contact-form-84793",
  storageBucket: "contact-form-84793.appspot.com",
  messagingSenderId: "653335199419",
  appId: "1:653335199419:web:0792b6fcc86ea7f873339e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  // Reference messages collection
    var messagesRef = firebase.database().ref('messages');
    
  // Listen for form submit
    document.getElementById('book-form').addEventListener('submit', submitForm);
    
  // Submit form
    function submitForm(e){
      e.preventDefault();
    
      // Get values
      var email = getInputVal('email');
      var title = getInputVal('title');
      var author  = getInputVal('author');
      var about = getInputVal('about');
    
      // Save message
      saveMessage(email, title, author, about);
    
      // Show alert
      document.querySelector('.alert').style.display = 'block';
    
      // Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      // Clear form
      document.getElementById('book-form').reset();
    }
    
    // Function to get get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(email, title, author, about){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        email:email,
        title: title,
        author:author,
        about:about
      });
    }