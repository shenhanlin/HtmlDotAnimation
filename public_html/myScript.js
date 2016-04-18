window.onload = start;

function start()
{
    first();
    second();
}
function first()
{
    var myCanvas = document.getElementById("first");
    if (myCanvas && myCanvas.getContext("2d"))
    {
        var context = myCanvas.getContext("2d");
        drawRandomStart(context);
    }
}
function second()
{
    var myCanvas = document.getElementById("second");
    if (myCanvas && myCanvas.getContext("2d"))
    {
        var context = myCanvas.getContext("2d");
        drawStart(context, 50, 50);
        moveStar(context);
    }
}


function drawRandomStart(context) {
    var r = 15;
    setInterval(function()
    {
        context.fillStyle = "#000";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        for (i = 0; i < 10; i++)
        {
            context.beginPath();
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            context.fillStyle = randomColor;
            context.arc(Math.random() * 260, Math.random() * 260, r, 0, 2 * Math.PI);

            context.fill();
        }
    }, 500);
}

function drawStart(context, x, y)
{
    var r = 15;
    context.fillStyle = "#000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.beginPath();
    context.fillStyle = "blue";
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
}

function moveStar(context)
{
    context.canvas.addEventListener("mousedown", function(event)
    {
        context.canvas.addEventListener("mousemove", moving);
    });

    context.canvas.addEventListener("mouseup", function(event)
    {
      context.canvas.removeEventListener("mousemove", moving);
    });
}

function moving()
{
    var myCanvas = document.getElementById("second");
    var context = myCanvas.getContext("2d");
    var mouseX = event.clientX - context.canvas.offsetLeft;
    var mouseY = event.clientY - context.canvas.offsetTop;
    document.getElementById('one').innerHTML = mouseX + " | " + mouseY;
    drawStart(context, mouseX, mouseY);

}
