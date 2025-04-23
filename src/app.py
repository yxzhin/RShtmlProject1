

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

    @app.route("/ukratko.html")
    def ukratko():
        return render_template("ukratko.html")

    @app.route("/poznateLicnosti.html")
    def poznateLicnosti():
        return render_template("poznateLicnosti.html")

    @app.route("/kontakt.html")
    def kontakt():
        return render_template("kontakt.html")

    @app.route("/galerija.html")
    def galerija():
        return render_template("galerija.html")

    @app.route("/slika.html")
    def slika():
        return render_template("slika.html")

    @app.route("/memoryGame.html")
    def memoryGame():
        return render_template("memoryGame.html")

    app.run(
        host=conf.server.HOST,
        port=conf.server.PORT,
        debug=True,
    )


if __name__ == "__main__":
    main()
