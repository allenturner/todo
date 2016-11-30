var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("/home/aturne003c/code/angularjs/todo/public_html"));
app.listen(5000);
