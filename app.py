import random
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

songs = {
    "happy": [
        {"name": "Kala Chashma", "link": "https://www.youtube.com/watch?v=k4yXQkG2s1E"},
        {"name": "Kar Gayi Chull", "link": "https://www.youtube.com/watch?v=lbCRtrrMvSw"}
    ],
    "sad": [
        {"name": "Channa Mereya", "link": "https://www.youtube.com/watch?v=284Ov7ysmfA"},
        {"name": "Agar Tum Saath Ho", "link": "https://www.youtube.com/watch?v=sK7riqg2mr4"}
    ],
    "chill": [
        {"name": "Ilahi", "link": "https://www.youtube.com/watch?v=fdubeMFwuGs"},
        {"name": "Kho Gaye Hum Kahan", "link": "https://www.youtube.com/watch?v=vjY3y9YJjJ4"}
    ],
    "energetic": [
        {"name": "Malhari", "link": "https://www.youtube.com/watch?v=l_MyUGq7pgs"},
        {"name": "Zinda", "link": "https://www.youtube.com/watch?v=Ax0G_P2dSBw"}
    ]
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    mood = data.get("mood").lower()

    # 🤖 AI-like: random + smart pick
    # selected = random.sample(songs[mood], k=1)
    selected = random.sample(songs[mood], k=min(2, len(songs[mood])))

    return jsonify({
    "message": f"AI recommends for your {mood} mood 🎧",
    "songs": selected
})

if __name__ == "__main__":
    app.run(debug=True)