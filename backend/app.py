from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# Mock user database
users = {
    "user@example.com": {
        "password": "password123",
        "name": "John Doe",
        "subscription": "premium"
    }
}

# Mock movie database
movies_data = {
    "trending": [
        {
            "id": 1,
            "title": "Stranger Things",
            "description": "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Stranger+Things",
            "rating": "TV-14",
            "year": 2022,
            "genre": "Sci-Fi",
            "match_percentage": 98
        },
        {
            "id": 2,
            "title": "The Crown",
            "description": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Crown",
            "rating": "TV-MA",
            "year": 2022,
            "genre": "Drama",
            "match_percentage": 95
        },
        {
            "id": 3,
            "title": "Wednesday",
            "description": "Intelligent, sarcastic and a bit dead inside, Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Wednesday",
            "rating": "TV-14",
            "year": 2022,
            "genre": "Comedy",
            "match_percentage": 92
        }
    ],
    "recent": [
        {
            "id": 4,
            "title": "Bridgerton",
            "description": "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Bridgerton",
            "rating": "TV-MA",
            "year": 2022,
            "genre": "Romance",
            "match_percentage": 89
        },
        {
            "id": 5,
            "title": "The Witcher",
            "description": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Witcher",
            "rating": "TV-MA",
            "year": 2021,
            "genre": "Fantasy",
            "match_percentage": 87
        }
    ],
    "popular": [
        {
            "id": 6,
            "title": "Money Heist",
            "description": "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Money+Heist",
            "rating": "TV-MA",
            "year": 2021,
            "genre": "Crime",
            "match_percentage": 94
        },
        {
            "id": 7,
            "title": "Dark",
            "description": "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
            "image": "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Dark",
            "rating": "TV-MA",
            "year": 2020,
            "genre": "Thriller",
            "match_percentage": 91
        }
    ]
}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email in users and users[email]['password'] == password:
        return jsonify({
            'success': True,
            'user': {
                'email': email,
                'name': users[email]['name'],
                'subscription': users[email]['subscription']
            }
        })
    else:
        return jsonify({
            'success': False,
            'message': 'Invalid email or password'
        }), 401

@app.route('/api/movies', methods=['GET'])
def get_movies():
    category = request.args.get('category', 'trending')
    
    if category in movies_data:
        return jsonify({
            'success': True,
            'movies': movies_data[category]
        })
    else:
        return jsonify({
            'success': False,
            'message': 'Category not found'
        }), 404

@app.route('/api/movies/all', methods=['GET'])
def get_all_movies():
    return jsonify({
        'success': True,
        'movies': movies_data
    })

@app.route('/api/search', methods=['GET'])
def search_movies():
    query = request.args.get('q', '').lower()
    
    if not query:
        return jsonify({
            'success': True,
            'movies': []
        })
    
    results = []
    for category, movies in movies_data.items():
        for movie in movies:
            if query in movie['title'].lower() or query in movie['description'].lower():
                results.append(movie)
    
    return jsonify({
        'success': True,
        'movies': results
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 