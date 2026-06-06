# InternShield 🛡️

A sleek, lightweight, and privacy-focused Chrome Extension that automatically cleanses your web feeds by hiding posts containing user-specified blocked keywords, phrases, or companies. Say goodbye to low-quality content, unwanted spam, and zero-value posts.

---

## ✨ Features

- **Real-time Content Filtering:** Dynamically scans and hides matching posts across your active browsing sessions instantly.
- **Granular Customization:** Easily add or remove custom keywords, phrases, or specific company names via a streamlined interface.
- **Optimized UI/UX:** Built with a clean, functional, minimalist aesthetic featuring a responsive dashboard, custom scrollbars, and fluid visual interactions.
- **Privacy-First Architecture:** Operates entirely locally within your browser context. No external APIs, no cloud tracking, and zero data leakage.

---

## 📂 Project Architecture

```text
PRODUCT/
├── images/
│   ├── icon/
│   │   ├── 16.png          # Extension menu favicon context
│   │   ├── 32.png          # New tab page display context
│   │   ├── 48.png          # Extensions management view
│   │   └── 128.png         # Web Store installation asset
│   ├── delete.svg          # Contextual list action control
│   ├── icon.png            # Source artwork asset
│   ├── logo.svg            # UI header branding asset
│   ├── search.svg          # Input context structural icon
│   └── settings.svg        # Sub-panel configuration control
├── popup/
│   ├── blocklist.json      # Hardcoded structural configuration definitions
│   ├── popup.css           # Precise styling rules, custom scrollbars, & component states
│   ├── popup.html          # Semantic layout container utilizing modern layout elements
│   └── popup.js            # Frontend interactive state orchestration
├── scripts/
│   └── content.js          # Independent DOM-injected background MutationObserver runtime
├── manifest.json           # Extension foundational configuration manifest (v3)
└── README.md               # Product documentation manual
```

## 🚀 Installation

### 1. Download the Extension

Clone this repository or download it as a ZIP:
```
git clone https://github.com/pushAbhi/InternShield.git
```
Or click Code → Download ZIP and extract it.

### 2. Open Chrome Extensions

Open your browser and go to:
```
chrome://extensions
```
Works on Google Chrome, Brave, Edge, and other Chromium browsers.

### 3. Enable Developer Mode

Turn on Developer mode using the toggle in the top-right corner.

### 4. Load the Extension

Click Load unpacked and select the project folder containing:
manifest.json

### 5. Done 🎉

InternShield is now installed and ready to filter unwanted internship posts.
Click the extension icon in your browser toolbar to manage your blocked keywords or companies.

### Prerequisites :
 - Google Chrome, Brave, or any Chromium-based browser.
