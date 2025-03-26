# YouTube Shorts Comment Blocker

This Chrome extension hides comments on YouTube Shorts and Video from users with comment using unicode pattern.

## Features

Targeted Filtering: Hides comments on YouTube Shorts and Video based on a specific comments pattern.
Dynamic Content Handling: Uses a MutationObserver to monitor and hide new comments loaded dynamically.

## Installation

    1. Download the Extension Files
       Ensure you have the following two files in a single folder:
       manifest.json
       content.js
    2. Load the Extension in Chrome
       Open Google Chrome and navigate to chrome://extensions/.
       Enable Developer Mode by toggling the switch in the upper-right corner.
       Click on the Load unpacked button.
       Select the folder containing the extension files.
    3. Test the Extension
       Navigate to a YouTube Shorts page (URLs starting with https://www.youtube.com/shorts/).
       Verify that comments from users matching the pattern are hidden.

## Troubleshooting

### Comments Not Hidden:

Ensure you are on a YouTube page.
Open Developer Tools (F12) and inspect the DOM to confirm that the username element is being correctly selected.
Update the query selectors in content.js if YouTube's DOM has changed.
Extension Not Working:

Verify that the extension is enabled in chrome://extensions/.
Check the Chrome console for any error messages that might indicate issues.

## License

This project is licensed under the MIT License.
