var sketch = function (p) {

    function tail(ypos, units, angle) {
        p.push();
        p.translate(0, ypos);
        for (i = units * 3; i > 0; i--) {
            p.strokeWeight(i * 1.5);
            p.line(0, 0, 10, 0);
            p.translate(10, 0);
            p.rotate(angle);
        }
        p.pop();
    }

    p.inc = 0.0;
    p.ypos, p.angle, p.units, p.i, p.n;

    p.setup = function () {
        p.createCanvas(100, p.windowHeight);
        p.stroke('#2B0E33');
    }

    p.draw = function () {
        p.angle = p.sin(p.inc) / 50.0 + p.sin(p.inc) / 20.0;
        p.clear();
        for (p.n = p.windowHeight; p.n > 130; p.n -= 60) {
            tail(p.n, 3, p.angle * 1.4);
        }
        for (p.n = p.windowHeight + 20; p.n > 130; p.n -= 60) {
            tail(p.n, 2.5, p.angle);
        }
        for (p.n = p.windowHeight + 40; p.n > 130; p.n -= 60) {
            tail(p.n, 2, p.angle / 1.2);
        }
        p.inc += 0.01;
    }
    p.windowResized = function () {
		p.resizeCanvas(100, this.windowHeight);
	}
}

var myp5_1 = new p5(sketch, 'holderG');
myp5_1.inc = 0.6;
var myp5_2 = new p5(sketch, 'holderD');
