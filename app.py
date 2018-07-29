from flask import Flask, render_template, url_for, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("home.html")

if __name__ == "__main__":
    app.run()
