var config = {
  apiKey: "AIzaSyCGETuuyifSjRxXjjLJsiXLHPZTvR2hWrA",
  authDomain: "dotslashdb.firebaseapp.com",
  databaseURL: "https://dotslashdb.firebaseio.com",
  projectId: "dotslashdb",
  storageBucket: "dotslashdb.appspot.com",
  messagingSenderId: "868174794203"
};
firebase.initializeApp(config);
let db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

jQuery(document).ready(function($) {
  let alterClass = function() {
  let ww = document.body.clientWidth;
  if (ww < 600) {
      $('.res').removeClass('s6').addClass('s12');
  } else if (ww >= 601) {
      $('.res').removeClass('s12').addClass('s6');
  };
  };
$(window).resize(function(){
    alterClass();
  });
    alterClass();

    $('#form').on('submit', (e) => {
      e.preventDefault();
      let tName = $('#team_name').val() || 'none';
      let collName = $('#coll_name').val() || 'none';
    
      let fname1 = $('#full_name1').val();
      let dob1 = $('#dob1').val() || 'none';
      let sel1 = $('#select1').val() || 'none';
      let email1 = $('#email1').val() || 'none';
      let mob1 = $('#your_mob1').val() || 'none';
      let git1 = $('#git_url1').val() || 'none';
      let link1 = $('#link_url1').val() || 'none';
      let twit1 = $('#twit_url1').val() || 'none';
      let face1 = $('#face_url1').val() || 'none';
    
      let fname2 = $('#full_name2').val() || 'none';
      let dob2 = $('#dob2').val() || 'none';
      let sel2 = $('#select2').val() || 'none';
      let email2 = $('#email2').val() || 'none';
      let mob2 = $('#your_mob2').val() || 'none';
      let git2 = $('#git_url2').val() || 'none';
      let link2 = $('#link_url2').val() || 'none';
      let twit2 = $('#twit_url2').val() || 'none';
      let face2 = $('#face_url2').val() || 'none';
    
      let fname3 = $('#full_name3').val() || 'none';
      let dob3 = $('#dob3').val() || 'none';
      let sel3 = $('#select3').val() || 'none';
      let email3 = $('#email3').val() || 'none';
      let mob3 = $('#your_mob3').val() || 'none';
      let git3 = $('#git_url3').val() || 'none';
      let link3 = $('#link_url3').val() || 'none';
      let twit3 = $('#twit_url3').val() || 'none';
      let face3 = $('#face_url3').val() || 'none';
      let radioval='yes';
      if(document.querySelector('#test1').checked)radioval='yes'
      else if(document.querySelector('#test2').checked)radioval='no';
      else {alert('Please Tell Us whether you are new to hackathons!');return;}
    
      let needs=$('#textarea1').val() || 'none';
      let hearing=$('#textarea2').val() || 'none';
    
      db.collection("users").add({
          tName,
          collName,
          members: [{
              fname1,
              dob1,
              sel1,
              email1,
              mob1,
              git1,
              link1,
              twit1,
              face1
            },
            {
              fname2,
              dob2,
              sel2,
              email2,
              mob2,
              git2,
              link2,
              twit2,
              face2
            },
            {
              fname3,
              dob3,
              sel3,
              email3,
              mob3,
              git3,
              link3,
              twit3,
              face3
            }
          ],
          needs,
          hearing,
          radioval
    
        })
        .then(function (docRef) {
            Swal({
                title: 'Success!',
                text: 'We recieved your form! Thank you for your participation',
                type: 'success',
                confirmButtonText: 'Cool'
              }).then(()=>{
                document.location.href='/';
              })
        })
        .catch(function (error) {
          alert('The Document was not uploaded. Please check your internet or browser console for more information.');
          console.log(error)
          return;
        });
        return;
    })
});



