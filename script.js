document.getElementById('analyzeButton').addEventListener('click', function() {
    let text = document.getElementById('inputText').value.toLowerCase();

    // Arrays of sentiment-related keywords
    const positiveWords = ['happy', 'great', 'excellent', 'good', 'wonderful', 'amazing', 'awesome', 'love', 'fantastic', 'joyful'];
    const negativeWords = ['sad', 'bad', 'terrible', 'horrible', 'hate', 'awful', 'worst', 'depressing', 'angry', 'upset'];
    const neutralWords = ['okay', 'fine', 'alright', 'neutral', 'mediocre', 'so-so', 'average', 'indifferent', 'normal', 'standard'];
    let result = 'Neutral 😐'; // Default to Neutral

    // Check for positive sentiment
    for (let word of positiveWords) {
        if (text.includes(word)) {
            result = 'Positive 😊';
            break;
        }
    }

    // Check for negative sentiment
    for (let word of negativeWords) {
        if (text.includes(word)) {
            result = 'Negative 😞';
            break;
        }
    }

    document.getElementById('result').innerText = result;
});