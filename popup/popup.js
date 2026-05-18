
function removeInternships() {
    let removed_internships_array = []
    let remove_internship_array = ["Across The Globe", "Zdminds", "She Can Foundation"]
    console.log("theS")
    
    for (let i=0; i<50; i++)
    {
        let x = document.querySelector(".individual_internship")
        if (x.innerHTML.includes(remove_internship_array)) {
            removed_internships_array.push(x)
            x.remove()
            console.log("Got 1")
        }
        else {
            console.log("Na")
        }
    }
}

document.getElementById("removeInternshipBtn").addEventListener("click", removeInternships)