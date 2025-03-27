

def main():

    from flask import Flask, render_template
    from os.path import realpath, dirname
    import conf.server

    app = Flask(__name__)
    app.template_folder = dirname(realpath(__file__))
    app.static_folder = dirname(realpath(__file__))+fr"\static"

    @app.route("/")
    @app.route("/index.html")
    def index():
        return render_template("index.html")

    app.run(
        host=conf.server.HOST,
        port=7373,
        debug=True,
    )


if __name__ == "__main__":
    main()
