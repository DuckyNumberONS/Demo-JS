// ------------Full Name--------
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
// -----------------------------
let age = document.getElementById("patient-age")
let nickname = document.getElementById("nick-name")
let gender = document.getElementById("patient-gender")
let phone = document.getElementById("phone")
let spoucename = document.getElementById("spouce-name")
let live = document.getElementById("live")
let statuss = document.getElementsByName('status')
// --------------------
let instatuss = document.getElementById('input-status')
let statusother = document.getElementById("status-other")
// --------------------
let occupation = document.getElementById("occupation")
let inretired = document.getElementById('input-retired')
let retired = document.getElementsByName('retired')
// --------------------
let date = document.getElementById('date-hide')
let indisability = document.getElementById('input-disability')
let disability = document.getElementsByName('disability')
// --------------------
let doctor = document.getElementById('doctor')
let doctorlocated = document.getElementById('doctor-located')
let phonedoctor = document.getElementById('phone-doctor')
let sex = document.getElementsByName('sex')
let smoke = document.getElementsByName('smoke')
let stop = document.getElementById('stop')
let alcohol = document.getElementById('alcohol')
let personal = document.getElementById('personal')
let submit = document.getElementById("button-submit")
// -------------------------TEXT ERROR-------------------------
let texterror1 = document.getElementById("text-error1")
let texterror2 = document.getElementById("text-error2")
let texterror3 = document.getElementById("text-error3")
let texterror4 = document.getElementById("text-error4")
let texterror5 = document.getElementById("text-error5")
let texterror6 = document.getElementById("text-error6")
let texterror7 = document.getElementById("text-error7")
// -------------------------Check-value-input-radio
let checkValueRetired = '';
let checkValueDisability = '';
let checkValueStatus = '';
let checkValueSex = '';
let checkValueSmoke = '';

// <!--CHECKBLUR  AGE -->
function checkblur1() {
  if (age.value === '' || age.value == 0) {
    texterror1.setAttribute('style', 'display:block');
    age.setAttribute('style', 'border-color:red ');
  } else {
    texterror1.setAttribute('style', 'display:none');
    age.setAttribute('style', 'border-color:none');
  }
}
// <!--CHECKBLUR  Patient Gender -->
function checkblur2() {
  if (gender.value == '- Select -') {
    texterror2.setAttribute('style', 'display:block');
    gender.setAttribute('style', 'border-color:red ');
  } else if (gender.value == 'Male') {
    texterror2.setAttribute('style', 'display:none');
    gender.setAttribute('style', 'border-color:none');
  } else if (gender.value == 'Female') {
    texterror2.setAttribute('style', 'display:none');
    gender.setAttribute('style', 'border-color:none');
  } else if (gender.value == 'Others') {
    texterror2.setAttribute('style', 'display:none');
    gender.setAttribute('style', 'border-color:none');
  }
}
// <!--CHECKBLUR Phone no. -->
function checkblur3() {
  if (phone.value === '' || phone.value == 0) {
    texterror3.setAttribute('style', 'display:block');

    phone.setAttribute('style', 'border-color:red ');
  } else {
    texterror3.setAttribute('style', 'display:none');
    phone.setAttribute('style', 'border-color:none');
  }
}
// <!--CHECKBLUR  Marital status(other) -->
function checkblur4() {
  if (statusother.value === '' || statusother.value == 0) {
    texterror4.setAttribute('style', 'display:block');
    statusother.setAttribute('style', 'border-color:red ');
  } else {
    texterror4.setAttribute('style', 'display:none');
    statusother.setAttribute('style', 'border-color:none');
  }
}
// <!--ONCLICK Marital Status -->
document.getElementById('itemstatus1').onclick = function () {
  itemstatus1.setAttribute('style', 'color:none');
  itemstatus2.setAttribute('style', 'color:none');
  itemstatus3.setAttribute('style', 'color:none');
  instatuss.setAttribute('style', 'color:none');
  texterror5.setAttribute('style', 'display:none');
}
document.getElementById('itemstatus2').onclick = function () {
  itemstatus1.setAttribute('style', 'color:none');
  itemstatus2.setAttribute('style', 'color:none');
  itemstatus3.setAttribute('style', 'color:none');
  instatuss.setAttribute('style', 'color:none');
  texterror5.setAttribute('style', 'display:none');
}
document.getElementById('itemstatus3').onclick = function () {
  itemstatus1.setAttribute('style', 'color:none');
  itemstatus2.setAttribute('style', 'color:none');
  itemstatus3.setAttribute('style', 'color:none');
  instatuss.setAttribute('style', 'color:none');
  texterror5.setAttribute('style', 'display:none');
}
// <!--ONCLICK Retired? -->
document.getElementById('yes').onclick = function () {
  yes.setAttribute('style', 'color:none');
  no.setAttribute('style', 'color:none');
  // SHOWDATE
  date.setAttribute('style', 'display:block');
  // ---------
  inretired.setAttribute('style', 'color:none');
  texterror6.setAttribute('style', 'display:none');
}
document.getElementById('no').onclick = function () {
  yes.setAttribute('style', 'color:none');
  no.setAttribute('style', 'color:none');
  // HIDE DATE 
  date.setAttribute('style', 'display:none');
  // ---------
  inretired.setAttribute('style', 'color:none');
  texterror6.setAttribute('style', 'display:none');
}
// <!--ONCLICK Disability  -->
document.getElementById('yes1').onclick = function () {
  yes1.setAttribute('style', 'color:none');
  no1.setAttribute('style', 'color:none');
  indisability.setAttribute('style', 'color:none');
  texterror7.setAttribute('style', 'display:none');
}
document.getElementById('no1').onclick = function () {
  yes1.setAttribute('style', 'color:none');
  no1.setAttribute('style', 'color:none');
  indisability.setAttribute('style', 'color:none');
  texterror7.setAttribute('style', 'display:none');
}
// --------------------SUBMIT--------------------
submit.addEventListener('click', function (e) {
  // -------------------check age 
  if (age.value === '' || age.value == 0) {
    texterror1.setAttribute('style', 'display:block');
    age.setAttribute('style', 'border-color:red ');
    age.focus();
  } else {
    texterror1.setAttribute('style', 'display:none');
    age.setAttribute('style', 'border-color:none');
  }

  // --------------------gender s
  if (gender.value == '- Select -') {
    texterror2.setAttribute('style', 'display:block');
    gender.setAttribute('style', 'border-color:red ');
    gender.focus();
  } else if (gender.value == 'Male') {
    texterror2.setAttribute('style', 'display:none');
    gender.setAttribute('style', 'border-color:none');
  } else if (gender.value == 'Female') {
    texterror2.setAttribute('style', 'display:none');
    gender.setAttribute('style', 'border-color:none');
  } else if (gender.value == 'Others') {
    texterror2.setAttribute('style', 'display:none');
    gender.setAttribute('style', 'border-color:none');
  }

  // --------------------Phone no. 
  if (phone.value === '' || phone.value == 0) {
    texterror3.setAttribute('style', 'display:block');
    phone.setAttribute('style', 'border-color:red ');
    phone.focus();
  } else {
    texterror3.setAttribute('style', 'display:none');
    phone.setAttribute('style', 'border-color:none');
  }

  // --------------------Marital Status 
  if (!statuss[0].checked && !statuss[1].checked && !statuss[2].checked) {
    instatuss.setAttribute('style', 'color:red');
    texterror5.setAttribute('style', 'display:block');
    document.getElementById('itemstatus1').focus();
  } else if (statuss[0].checked) {
    instatuss.setAttribute('style', 'color:none');
    texterror5.setAttribute('style', 'display:none');
    checkValueStatus = 'Married';
  } else if (statuss[1].checked) {
    instatuss.setAttribute('style', 'color:none');
    texterror5.setAttribute('style', 'display:none');
    checkValueStatus = 'Unmarried';
  } else if (statuss[2].checked) {
    instatuss.setAttribute('style', 'color:none');
    texterror5.setAttribute('style', 'display:none');
    checkValueStatus = 'other';
  }
  // --------------------Marital status(other)
  if (statusother.value === '' || statusother.value == 0) {
    texterror4.setAttribute('style', 'display:block');
    statusother.setAttribute('style', 'border-color:red ');
    statusother.focus();
  } else {
    texterror4.setAttribute('style', 'display:none');
    statusother.setAttribute('style', 'border-color:none');
  }
  // --------------------Retired? 
  if (!retired[0].checked && !retired[1].checked) {
    inretired.setAttribute('style', 'color:red');
    texterror6.setAttribute('style', 'display:block');
    document.getElementById('yes').focus();
    // yes 
  } else if (retired[0].checked) {
    checkValueRetired = 'yes';
    inretired.setAttribute('style', 'color:none');
    texterror6.setAttribute('style', 'display:none');
    // no 
  } else if (retired[1].checked) {
    checkValueRetired = 'no';
    inretired.setAttribute('style', 'color:none');
    texterror6.setAttribute('style', 'display:none');
  }
  // --------------------Disability?
  if (!disability[0].checked && !disability[1].checked) {
    indisability.setAttribute('style', 'color:red');
    texterror7.setAttribute('style', 'display:block');
    document.getElementById('yes1').focus();
  } else if (disability[0].checked) {
    checkValueDisability = 'yes';
    indisability.setAttribute('style', 'color:none');
    texterror7.setAttribute('style', 'display:none');
  } else if (disability[1].checked) {
    checkValueDisability = 'no';
    indisability.setAttribute('style', 'color:none');
    texterror7.setAttribute('style', 'display:none');
  }
  // --------------------allergic to any medications
  if (sex[0].checked) {
    checkValueSex = 'yes';
  } else if (sex[1].checked) {
    checkValueSex = 'no';
  }
  // -------------------- Do you smoke?
  if (smoke[0].checked) {
    checkValueSmoke = 'yes';
  } else if (smoke[1].checked) {
    checkValueSmoke = 'no';
  }
})
// ------------DATA API-----------\
var URLAPI = 'https://62e9f8cd01787ec7121f13ae.mockapi.io/Hospital';

async function star() {
  let kq = await getCourses();
  renderCourses(kq);
  handleSubmit();
}
star();

async function getCourses() {
  let res = await fetch(URLAPI)
  let kq = await res.json();
  console.log(kq);
  return kq;

}
// -------------RENDER-DATA--------------
function renderCourses(courses) {
  var datalist = document.querySelector('#data');
  var htmls = courses.map(function (course) {
    return `
    <li>
      <h4 class="header-data">DATA</h4>
      <p class="data">Id: ${course.id}</p>
      <p class="data">Frist Name: ${course.FristName}</p>
      <p class="data">Last Name: ${course.LastName}</p>
      <p class="data">Patient Age: ${course.PatientAge}</p>
      <p class="data">Prefered Name: ${course.PreferedName}</p>
      <p class="data">Patient Gender: ${course.PatientGender}</p>
      <p class="data">Spouce Name: ${course.SpouceName}</p>
      <p class="data">With Whome Do You Live: ${course.WithWhomeDoYouLive}</p>
      <p class="data">Marital Status: ${course.MaritalStatus}</p>
      <p class="data">Marital Status Other: ${course.MaritalStatusOther}</p>
      <p class="data">Occupation: ${course.Occupation}</p>
      <p class="data">Retired: ${course.Retired}</p>
      <p class="data">Disability: ${course.Disability}</p>
      <p class="data">WhoIsYour Primary Care Docter: ${course.WhoIsYourPrimaryCareDocter}</p>
      <p class="data">Where Is Your Primary Care Doctor Located: ${course.WhereIsYourPrimaryCareDoctorLocated}</p>
      <p class="data">Phone Number Of Primary Care Doctor: ${course.PhoneNumberOfPrimaryCareDoctor}</p>
      <p class="data">Allergic To Any Medications: ${course.AllergicToAnyMedications}</p>
      <p class="data">Do You Smoke: ${course.DoYouSmoke}</p>
      <p class="data">Stop: ${course.Stop}</p>
      <p class="data">Drink Alcohol: ${course.DrinkAlcohol}</p>
      <p class="data">Personal Opinion: ${course.PersonalOpinion}</p>
    </li>
     `;
  });
  datalist.innerHTML = htmls.join('');
}
// -------------CreateCourse--------------
function createCourse(data, callback) {
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch(URLAPI, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
// -------------Submit-PUSH-DATAAPI--------------
function handleSubmit() {
  submit.onclick = function () {
    var formData = {
      FristName: fname.value,
      LastName: lname.value,
      PatientAge: age.value,
      PreferedName: nickname.value,
      PatientGender: gender.value,
      SpouceName: spoucename.value,
      WithWhomeDoYouLive: live.value,
      MaritalStatus: checkValueStatus,
      MaritalStatusOther: statusother.value,
      Occupation: occupation.value,
      Retired: checkValueRetired,
      Disability: checkValueDisability,
      WhoIsYourPrimaryCareDocter: doctor.value,
      WhereIsYourPrimaryCareDoctorLocated: doctorlocated.value,
      PhoneNumberOfPrimaryCareDoctor: phonedoctor.value,
      AllergicToAnyMedications: checkValueSex,
      DoYouSmoke: checkValueSmoke,
      Stop: stop.value,
      DrinkAlcohol: alcohol.value,
      PersonalOpinion: personal.value,
    };
    createCourse(formData, async function () {
      let kq = await getCourses();
      renderCourses(kq);
    });
  }
}