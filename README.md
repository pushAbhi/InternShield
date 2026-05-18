# ListClean 🛡️

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

# 🚀 Installation & Local Development

## Prerequisites :
 - Google Chrome, Brave, or any Chromium-based browser.

## Steps to Load Locally
- Clone or download this repository to your local development environment.
- Launch your browser and navigate to the Extensions management terminal (chrome://extensions).
- Toggle the Developer mode switch located in the upper right-hand corner of the page.
- Click the Load unpacked button visible in the top-left toolbar area.
- Select the root PRODUCT directory containing the manifest.json configuration file.
- The extension is now actively loaded into your browser context and ready for operational execution.
