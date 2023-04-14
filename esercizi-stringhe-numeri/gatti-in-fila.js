var cats = 44
var inLine = 2

var numLines = Math.ceil(cats/inLine);
var missing =(inLine*numLines)-cats

console.log ('${cats} gatti in fila per ${inLine} si unirono compatti in ${numLines} file. Nell ultima fila rimasero ${missing} posti gatto disponibili.');
