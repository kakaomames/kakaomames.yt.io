(async () => {
    const scriptSrc = document.currentScript.src;
    const urlParams = new URL(scriptSrc).searchParams;
    const query = urlParams.get('q');
    if (!query) return;
    try {
        const apiURL = `./allvideo.json`;
        const response = await fetch(apiURL);
        const data = await response.json();
        
        // ウィンドウ全体で共有できる場所にセットする
        window.videoData = data; 
    } catch(e) {
        console.error(e);
    }
})();
