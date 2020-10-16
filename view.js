

Forme.prototype.clear = function(ctx) {
    canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.paint = function (ctx) {
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle=this.color;
};


Rectangle.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX() - this.getInitX(), this.getFinalY()- this.getInitY());
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


function updateShapeList() {
    //TODO
}
