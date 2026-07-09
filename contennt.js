const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

async function fetchCatImageUrl() {
    try {
        const response = await fetch(CAT_API_URL);
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error("Error fetching cat image:", error);
        return "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"; // Fallback image
    }
}

async function replaceImages() {
    const images = document.getElementsByTagName("img");
    for (let img of images) {
        // Skip if already replaced or too small
        if (img.dataset.catReplaced) continue;
        
        // Add a marker to prevent infinite loops if the new image also triggers mutation
        img.dataset.catReplaced = "true";
        
        fetchCatImageUrl().then(catUrl => {
            img.src = catUrl;
            img.srcset = catUrl;
        });
    }
}

// Initial replacement
replaceImages();

// Watch for dynamically added images
const observer = new MutationObserver((mutations) => {
    let shouldReplace = false;
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            shouldReplace = true;
        }
    });
    if (shouldReplace) {
        replaceImages();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});