from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')

    if not text.strip():
        return jsonify({'sentiment': 'Neutral 😐'})

    # Basic sentiment analysis logic
    positive_words = ['happy', 'great', 'excellent', 'good', 'wonderful', 'amazing', 'awesome', 'love', 'fantastic', 'joyful']
    negative_words = ['sad', 'bad', 'terrible', 'horrible', 'hate', 'awful', 'worst', 'depressing', 'angry', 'upset']

    sentiment = "Neutral 😐"  # Default sentiment
    for word in positive_words:
        if word in text.lower():
            sentiment = "Positive 😊"
            break
    for word in negative_words:
        if word in text.lower():
            sentiment = "Negative 😞"
            break

    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
