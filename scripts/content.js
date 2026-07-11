async function removeInternships() {
    if (!chrome.runtime?.id) {
        clearInterval(interval);
        return;
    }

    // Remove internships from the page based on the BlockedList stored in chrome.storage.local
    let result = await chrome.storage.local.get("BlockedList");
    let remove_internship_array = result.BlockedList;

    let x = document.querySelectorAll(".individual_internship");
    x.forEach((elem) => {
        if (
            remove_internship_array.some((name) =>
                elem.innerText.includes(name),
            )
        ) {
            elem.remove();
            console.log("removed internship");
        }
    });

    // remove Ads
    let y = document.querySelectorAll(".jos_native_ad");
    y.forEach((elem) => {
        elem.remove();
        // to enable verbose uncomment the line below
        // console.log("removed ad" + elem.innerHTML);
    });

    let z = document.querySelectorAll("[id^='image_ad']");
    z.forEach((elem) => {
        elem.remove();
        // to enable verbose uncomment the line below
        // console.log("removed image ad" + elem.innerHTML);
    });
}

removeInternships();
let interval = setInterval(removeInternships, 3000);
