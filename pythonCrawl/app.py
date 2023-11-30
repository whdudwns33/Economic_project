from flask import Flask
from flask_cors import CORS
from routes.data import get_data
from routes.weather import get_weather
from routes.movie import get_movie
from STOCKPROJECT.stock import perform_web_crawling

app = Flask(__name__)
CORS(app, origins=['*'])

app.add_url_rule('/api/data', 'get_data', get_data, methods=['GET'])
app.add_url_rule('/api/weather', 'get_weather', get_weather, methods=['GET'])
app.add_url_rule('/api/movie', 'get_movie', get_movie, methods=['GET'])
app.add_url_rule('/api/stockTop', 'stockTop', perform_web_crawling, methods=['GET'])
# print(perform_web_crawling())

if __name__ == '__main__':
    app.run(debug=True)


