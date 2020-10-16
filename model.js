
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
Line.prototype = new Forme();
function Drawing() {
    this.formes = new Array();

    this.addForme = function (forme) {
        this.formes.push(forme);
    }.bind(this);

    this.getForms = function(){
        return this.formes;
    }
}


function Forme(color, thickness, coorBeg, coorEnd) {
    this.color = color;
    this.thickness = thickness;
    this.coorBeg = coorBeg;
    this.coorEnd = coorEnd;

    this.getInitX = function () {
        return this.coorBeg.x;
    }.bind(this);

    this.getInitY = function () {
        return this.coorBeg.y;
    }.bind(this);

    this.getFinalX = function () {
        return this.coorEnd.x;
    }.bind(this);
    
    this.getFinalY = function () {
        return this.coorEnd.y;
    }.bind(this);
};

Forme.prototype.update = function (coorEnd) {
    this.coorEnd = coorEnd;
};

function Rectangle(color, thickness, coorBeg, coorEnd) {
    Forme.call(this, color, thickness, coorBeg, coorEnd);
};
Rectangle.prototype = new Forme();

function Line(color, thickness, coorBeg, coorEnd) {
    Forme.call(this, color, thickness, coorBeg, coorEnd);
};

