document.getElementById('analyzeButton').addEventListener('click', async function () {
    const text = document.getElementById('inputText').value;

    if (!text.trim()) {
        document.getElementById('result').innerText = "Please enter some text!";
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        });
        

        const data = await response.json();
        document.getElementById('result').innerText = data.sentiment;
    } catch (error) {
        document.getElementById('result').innerText = "Error analyzing sentiment!";
        console.error(error);
    }
});
