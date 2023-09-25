let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");


let ageEl = document.getElementById("age");
let ageErrMsgEl = document.getElementById("ageErrMsg");

let qualificationEl = document.getElementById("qualification");
let qualificationErrMsgEl = document.getElementById("qualificationErrMsg");

let skillsEl = document.getElementById("skills");
let skillsErrMsgEl = document.getElementById("skillsErrMsg");

let websiteEl = document.getElementById("website");
let websiteErrMsgEl = document.getElementById("websiteErrMsg");

let imageUrlEl = document.getElementById("imageUrl");
let imageUrlErrMsgEl = document.getElementById("imageUrlErrMsg");



let myFormEl = document.getElementById("myForm");
let studentDisplayContainer = document.getElementById("students-container");


let formData = {
    name: "",
    email: "",
    gender: "Male",
    age: "",
    qualification: "",
    skills: "",
    website: "",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/236/236832.png" //"https://res.cloudinary.com/duct1zxxm/image/upload/v1683910690/man-avatar-profile-picture-vector-illustration_268834-538_k4z1cz.avif"
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

ageEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        ageErrMsgEl.textContent = "Required*";
    } else {
        ageErrMsgEl.textContent = "";
    }

    formData.age = event.target.value;
});

qualificationEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        qualificationErrMsgEl.textContent = "Required*";
    } else {
        qualificationErrMsgEl.textContent = "";
    }

    formData.qualification = event.target.value;
});

skillsEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        skillsErrMsgEl.textContent = "Required*";
    } else {
        skillsErrMsgEl.textContent = "";
    }

    formData.skills = event.target.value;
});

websiteEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        websiteErrMsgEl.textContent = "Required*";
    } else {
        websiteErrMsgEl.textContent = "";
    }

    formData.website = event.target.value;
});

imageUrlEl.addEventListener("change", function(event) {
    // if (event.target.value === "") {
    //     imageUrlErrMsgEl.textContent = "Required*";
    // } else {
    //     imageUrlErrMsgEl.textContent = "";
    // }

    formData.imageUrl = event.target.value;
});


function updateStudentsList() {
    let {
        name,
        email,
        gender,
        age,
        qualification,
        skills,
        website,
        imageUrl
    } = formData;

    console.log(name, email);
    console.log(gender, age);
    console.log(qualification, skills);

    let studentContainer = document.createElement("div"); //main container for row data
    studentContainer.classList.add("d-flex", "flex-row", "title-container");
    studentDisplayContainer.appendChild(studentContainer);

    let nameDetailsContainer = document.createElement("div");
    nameDetailsContainer.classList.add("student-title");
    studentContainer.appendChild(nameDetailsContainer);

    let studentNameEl = document.createElement("p"); //name
    studentNameEl.textContent = name + " (" + gender[0] + "," + age + ")";
    studentNameEl.classList.add("student-name-inside-style");
    nameDetailsContainer.appendChild(studentNameEl);

    let studentQualificationEl = document.createElement("p"); //qualification
    studentQualificationEl.textContent = qualification;
    studentQualificationEl.classList.add("student-name-inside-style");
    nameDetailsContainer.appendChild(studentQualificationEl);


    let studentSkillsEl = document.createElement("p");
    studentSkillsEl.textContent = skills;
    studentSkillsEl.classList.add("student-name-inside-style");
    nameDetailsContainer.appendChild(studentSkillsEl);

    let studentEmailEl = document.createElement("p");
    studentEmailEl.textContent = email;
    studentEmailEl.classList.add("student-name-inside-style");
    nameDetailsContainer.appendChild(studentEmailEl);


    let studentWebsiteEl = document.createElement("a");
    studentWebsiteEl.textContent = website;
    studentWebsiteEl.href = "https://" + website;
    studentWebsiteEl.target = "_blank";
    studentWebsiteEl.classList.add("student-name-inside-style");
    nameDetailsContainer.appendChild(studentWebsiteEl);


    let imageElContianer = document.createElement("div");
    imageElContianer.classList.add("student-image");
    studentContainer.appendChild(imageElContianer);

    let studentImageEl = document.createElement("img");
    studentImageEl.src = imageUrl;
    studentImageEl.classList.add("student-image-style");
    imageElContianer.appendChild(studentImageEl);



    //clearing the form details after filling the form
    nameEl.value = "";
    emailEl.value = "";
    ageEl.value = "";
    qualificationEl.value = "";
    skillsEl.value = "";
    websiteEl.value = "";
    imageUrlEl.value = "";


}


function validateFormData(formData) {
    let {
        name,
        email,
        age,
        qualification,
        skills,
        website,
        imageUrl
    } = formData;

    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (age === "") {
        ageErrMsgEl.textContent = "Required*";
    }

    if (age !== "") {
        if (age != parseInt(age)) {
            alert("age in number")
        }
    }
    if (qualification === "") {
        qualificationErrMsgEl.textContent = "Required*";
    }
    if (skills === "") {
        skillsErrMsgEl.textContent = "Required*";
    }
    if (website === "") {
        websiteErrMsgEl.textContent = "Required*";
    }
    if (imageUrl === "") {
        imageUrlErrMsgEl.textContent = "Required*";
    }


    if (name !== "" && email !== "" && age !== "" && age == parseInt(age) && qualification !== "" && skills !== "" && website !== "" && imageUrl !== "") {
        updateStudentsList();
    }
}

// function submitFormData(formData) {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
//         },
//         body: JSON.stringify(formData)
//     };

//     let url = "https://gorest.co.in/public-api/users";

//     fetch(url, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(jsonData) {
//             console.log(jsonData);
//             if (jsonData.code === 422) {
//                 if (jsonData.data[0].message === "has already been taken") {
//                     emailErrMsgEl.textContent = "Email Already Exists";
//                 }
//             }
//             updateStudentsList(jsonData);
//         });
// }

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    // updateStudentsList();
    // submitFormData(formData);
});
