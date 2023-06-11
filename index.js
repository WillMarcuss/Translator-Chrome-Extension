const apiKey = 'YOUR_KEY';

function translate(){
    const text = document.getElementById("first").value
    const sourceLang = document.getElementById("TF").value;
    const targetLang = document.getElementById("TO").value;
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data.translations[0].translatedText);
            document.getElementById("translated").value = data.data.translations[0].translatedText
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("button").addEventListener('click',translate)
})