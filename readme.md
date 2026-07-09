# Cat Replacer: A Manifest V3 Chrome Extension

Cat Replacer is a browser-based utility designed to programmatically identify and replace image elements across various web domains with dynamically fetched content from a third-party API. The project demonstrates the practical application of DOM manipulation, asynchronous API integration, and the modern Chrome Extension architecture.

## Technical Implementation

The extension is built using the **Chrome Manifest V3** standard, ensuring high performance and adherence to modern browser security protocols.

### 1. Automated Content Transformation
The core logic resides in a content script that executes upon the `DOMContentLoaded` event. It performs an initial scan of the Document Object Model (DOM) to identify all `<img>` tags and updates their source attributes. To handle modern single-page applications (SPAs) and infinite-scrolling interfaces, a `MutationObserver` is implemented to detect and process dynamically injected elements in real-time.

### 2. Asynchronous API Integration
Image content is sourced from **The Cat API** via asynchronous GET requests. To bypass Cross-Origin Resource Sharing (CORS) restrictions often enforced by host websites, the primary fetching logic is centralized within the extension's popup context, utilizing the `chrome.scripting` API to inject the resolved assets into the active tab.

### 3. User Interface and Control
The extension provides a dedicated popup interface developed with HTML5 and CSS3. This interface allows users to manually trigger a global refresh of the image assets on the current page through targeted script injection.

## System Architecture

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Core Standard** | Manifest V3 | Modern extension framework for security and performance. |
| **Logic** | JavaScript (ES6+) | Handles asynchronous requests and DOM manipulation. |
| **Styling** | CSS3 | Provides a responsive and clean user interface. |
| **Data Source** | The Cat API | RESTful API providing dynamic image endpoints. |
| **Version Control** | Git / GitHub | Managed via Git for comprehensive change tracking. |

## Installation and Deployment

To deploy this extension in a local development environment:

1. Clone or download the repository to your local machine.
2. Navigate to `chrome://extensions/` in the Google Chrome browser.
3. Enable **Developer mode** via the toggle in the upper right corner.
4. Select **Load unpacked** and choose the project root directory.

## Demonstration
A comprehensive video demonstration of the extension's functionality can be accessed via the following link:
[Project Demonstration Video](https://drive.google.com/file/d/1kPb6CThzX924BNilkg9cRZPHbCKu7Rvq/view?usp=sharing)

---
**Developer:** Reshmashaik25

