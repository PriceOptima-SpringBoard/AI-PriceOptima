from flask import Flask
from flask_cors import CORS
from routes import api_bp

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    # Register Blueprints
    app.register_blueprint(api_bp, url_prefix='/api')

    @app.route('/')
    def index():
        return "Dynamic Pricing API is running!"

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
