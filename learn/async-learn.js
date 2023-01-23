async function getWebPage() {
    const result = await fetch('http://speedmathsdrills.com');
    if(result.ok){
        const text = await result.text();
        console.log(text);
    }
}

getWebPage();