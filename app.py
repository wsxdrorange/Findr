from flask import Flask, render_template, url_for, request
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

if __name__ == "__main__":
    app.run()
