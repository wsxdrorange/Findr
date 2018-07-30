from flask import Flask, render_template, make_response, url_for, request
import json

app = Flask(__name__)

@app.route("/")
def home():
    r = make_response(render_template("home.html"))
    r.headers['Access-Control-Allow-Origin'] = "*"
    r.headers['Access-Control-Allow-Methods'] = "POST, GET, OPTIONS, PUT, DELETE, PATCH"
    r.headers['Access-Control-Allow-Headers'] = "Access-Control-Allow-Origin, origin, content-type, accept, x-requested-with"
    return r

if __name__ == "__main__":
    app.run()
