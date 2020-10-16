
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.posBeg = { x: 0, y: 0 };
  this.posEnd = { x: 0, y: 0 };

  // Developper les 3 fonctions gérant les événements
  this.mouseDown = function (evt) {
    this.posBeg = getMousePosition(canvas, evt);
    this.posEnd = getMousePosition(canvas, evt);
    this.pressed = true;
    interactor.onInteractionStart(this);
  }.bind(this);
  this.mouseUp = function (evt) {
    this.posEnd = getMousePosition(canvas, evt);
    this.pressed = false;
    interactor.onInteractionEnd(this);
  }.bind(this);
  this.mouseMove = function (evt) {
    if (this.pressed) {
      this.posEnd = getMousePosition(canvas, evt);
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};