const activeCheckbox = document.getElementById("activeCheckBox");
const activeText = document.getElementById("active-state-text");
const overlayWarning = document.getElementById("site-warning-overlay");
const overlayWarningReason = document.getElementById("overlay-warning-reason");
const inputKeyword = document.getElementById("input-keyword");
const blockedKeywordsList = document.getElementById("blocked-keywords");
const addBtn = document.getElementById("add-btn");
const blockedTermsCountEl = document.getElementById("blocked-terms-count");

let BlockedListDefault = ["InAmigos Foundation", "Unpaid", "Fundraising"];
let BlockedList = [];

async function getBlockedListLocal() {
    if (!chrome.runtime?.id) return;
    let result = await chrome.storage.local.get("BlockedList");
    let BlockedListLocal = result.BlockedList || BlockedListDefault;
    return BlockedListLocal;
}

async function init() {
    BlockedList = await getBlockedListLocal();

    BlockedList.BlockedList.forEach((element) => {
        addKeywordUI(element);
    });
}

init();
updateBlockedCount();

// adds array to chrome
async function updateBlockedListLocal() {
    chrome.storage.local.set({ BlockedList: BlockedList });
    console.log(BlockedList);
}

function addjob(event) {
    event.preventDefault();
    console.log("Works");
}

// extension OFF
function extensionToggleOff() {
    console.log(BlockedList);

    // change Text
    overlayWarning.classList.add("hidden");
    activeText.innerText = "ACTIVE";

    // change color
    activeText.classList.remove("red-activeText");
    activeText.classList.add("blue-activeText");
}

// Extension ON
function extensionToggleOn() {
    // change Text
    overlayWarning.classList.remove("hidden");
    activeText.innerText = "INACTIVE";

    // change color
    activeText.classList.add("red-activeText");
    activeText.classList.remove("blue-activeText");
}

function updateBlockedCount() {
    blockedTermsCountEl.innerText = blockedKeywordsList.childElementCount;
}

// DELETE BUTTON
blockedKeywordsList.addEventListener("click", function (event) {
    const deletebtn = event.target.closest(".delete-btn");
    if (!deletebtn) return;

    const deleteValue = deletebtn.parentNode.querySelector("span").innerText;
    BlockedList = BlockedList.filter((item) => item != deleteValue);
    updateBlockedListLocal();

    deletebtn.closest(".keyword-item").remove();
    updateBlockedCount();
});

// input -> Enter and Plus Button function
inputKeyword.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verifyKeywordAndAdd();
    }
});

// event listener for plus + button next to input
addBtn.addEventListener("click", function () {
    verifyKeywordAndAdd();
});

function verifyKeywordAndAdd() {
    const keyValue = inputKeyword.value.trim();
    if (keyValue !== "") {
        addKeywordUI(keyValue);
        addKeywordLocal(keyValue);
        inputKeyword.value = "";
    }
}

// ADDS STUFF TO KEYWORD LIST
function addKeywordUI(keyword) {
    let newli = `<li class="keyword-item">
                        <span class="keyword-item-title">${keyword}</span>
                        <button class="delete-btn" aria-label="Delete">
                            <svg class="delete-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" />
                            </svg>
                        </button>
                    </li>`;
    blockedKeywordsList.insertAdjacentHTML("afterbegin", newli);
    // BlockedList.push(keyword)
    updateBlockedCount();
    // updateBlockedListLocal()
}

function addKeywordLocal(keyword) {
    BlockedList.push(keyword);
    updateBlockedListLocal();
}

// overlay blur warning
activeCheckbox.addEventListener("change", function () {
    if (activeCheckbox.checked) {
        extensionToggleOff();
    } else {
        extensionToggleOn();
    }
    overlayWarningReason.innerText = "Extension OFF!";
});
