  

// Adding new textarea for education field
function addNewEduButton(){

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('education')
    newNode.classList.add('mt-1')
    newNode.setAttribute("rows", 3)

    let eduOb = document.getElementById("edu")
    let eduButtonOb = document.getElementById("eduButton")

    eduOb.insertBefore(newNode, eduButtonOb)

}

// Adding new textarea for work experiences field
function addNewWeButton(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('workExp')
    newNode.classList.add('mt-1')
    newNode.setAttribute("rows", 3)

    let weOb = document.getElementById("we")
    let workExpButtonOb = document.getElementById("workExpButton")

    weOb.insertBefore(newNode, workExpButtonOb)
}

// Adding new textarea for skills field
function addNewSkillsButton(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skills')
    newNode.classList.add('mt-1')
    newNode.setAttribute("rows", 1)

    let skOb = document.getElementById("sk")
    let skillsButtonOb = document.getElementById("skillsButton")

    skOb.insertBefore(newNode, skillsButtonOb)
}

// Adding new textarea for projects field
function addNewProjectsButton(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('projects')
    newNode.classList.add('mt-1')
    newNode.setAttribute("rows", 3)

    let projOb = document.getElementById("proj")
    let projectsButtonOb = document.getElementById("projectsButton")

    projOb.insertBefore(newNode, projectsButtonOb)
}

// Generating the preview of resume
function generateResume(){
    // Name
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value

    let name = document.getElementById("nameTemp")

    name.innerHTML = firstName + " " + lastName

    // Phone
    document.getElementById("phoneTemp").innerHTML = document.getElementById("phone").value

    // Email
    document.getElementById("emailTemp").innerHTML =  document.getElementById("email").value

    // Address - City, Country, PIN
    // document .getElementById("city").innerHTML = document.getElementById("cityTemp")

    // Social Links
    document.getElementById("linkedTemp").innerHTML = document.getElementById("linkedIn").value
    document.getElementById("gitTemp").innerHTML = document.getElementById("gitHub").value

    // Education
    let edu = document.getElementsByClassName("education")
    let strEdu = ''
    for(let e of edu){
        strEdu = strEdu + `<p> ${e.value} </p>`
    }
    document.getElementById("eduTemp").innerHTML =  strEdu

    // Work Experiences
    let we = document.getElementsByClassName("workExp")
    let strWe = ''
    for(let e of we){
        strWe = strWe + `<p> ${e.value} </p>`
    }
    document.getElementById("weTemp").innerHTML = strWe

    // Skills
    let sk = document.getElementsByClassName("skills")
    let strSk = ''
    for(let e of sk){
        // document.getElementById("skillsField").addEventListener('keypress', (e)=>{
        //     if(e === "Enter"){
        //         e.preventDefault()
        //         let skText = document.getElementById("skillsField")
        //         skText.value +="\n"
        //     }
        // })
        strSk = strSk + `<p> ${e.value} </p>`
    }
    document.getElementById("skillsTemp").innerHTML = strSk

    // Projects
    let proj = document.getElementsByClassName("projects")
    let strProj = ''
    for(let e of proj){
        strProj = strProj + `<p> ${e.value} </p>`
    }
    document.getElementById("projectTemp").innerHTML = strProj

    document.getElementById("resume-form").style.display = "none"
    document.getElementById("resume-template").style.display = "block"
    document.getElementById("title").style.display = "none"
}

//Download resume
function downloadResume(){
    window.print()
}