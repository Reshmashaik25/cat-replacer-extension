document.getElementById('replaceBtn' ).addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab.url.startsWith('chrome://')) return;

    // 1. Fetch the cat image URL INSIDE the popup (where it's allowed)
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search" );
        const data = await response.json();
        const catUrl = data[0].url;

        // 2. Inject a script to replace images with this SPECIFIC URL
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (url) => {
                const images = document.getElementsByTagName("img");
                for (let img of images) {
                    img.src = url;
                    img.srcset = url;
                }
            },
            args: [catUrl] // Pass the URL we fetched into the script
        });
    } catch (error) {
        console.error("Popup fetch error:", error);
        alert("Meow! Something went wrong with the Cat API.");
    }
});

