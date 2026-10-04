// 📄 api.js のイメージ
(async () => {
    const scriptSrc = document.currentScript.src;
    const urlParams = new URL(scriptSrc).searchParams;
    const query = urlParams.get('q');
    if (!query) return;

    try {
        const apiURL = `./allvideo.json`;
        const response = await fetch(apiURL);
        const data = await response.json();

        // 💡 ここでメイン側にデータを渡すために window オブジェクトに入れる
        // (※実際はここで query を使ってデータを絞り込むなどの処理を挟むと便利です)
        window.videoData = data; 
    } catch (e) {
        console.error(e);
        window.videoData = [];
    }
})();
