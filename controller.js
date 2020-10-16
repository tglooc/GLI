
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	this.currLineWidth = document.getElementById("spinnerWidth").value;
	this.currColour = document.getElementById("colour").value;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if (document.getElementById("butRect").checked) {
			this.currentShape = new Rectangle(document.getElementById("colour").value, document.getElementById("spinnerWidth").value, dnd.posBeg, dnd.posBeg);
		}else if (document.getElementById("butLine").checked){
			this.currentShape = new Line(document.getElementById("colour").value, document.getElementById("spinnerWidth").value, dnd.posBeg, dnd.posBeg);
		}
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		this.currentShape.clear(ctx);
		this.currentShape.update(dnd.posEnd);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		drawing.addForme(this.currentShape);
		drawing.paint(ctx);
	}.bind(this);
};


