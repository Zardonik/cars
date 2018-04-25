function Cars (mark, type, mass, model, numberOfSeats, speed, color, engine, volumeTank, consumption){
	this.mark = mark;
	this.type = type;
	this.mass = mass;
	this.model = model;
	this.numberOfSeats = numberOfSeats;
	this.speed = speed;
	this.color = color;
	this.engine = engine;
	this.volumeTank = volumeTank;
	this.consumption = consumption;
	this.getInfo = function(){
		document.write('Mark: ' + this.mark + '<br/>');
		document.write('Type: ' + this.type + '<br/>');
		document.write('Mass: ' + this.mass + ' kg' + '<br/>');
		document.write('Model: ' + this.model + '<br/>');
		document.write('Number of seats: ' + this.numberOfSeats + '<br/>');
		document.write('Speed: ' + this.speed + ' km/h' + '<br/>');
		document.write('Color: ' + this.color + '<br/>');
		document.write('Engine: ' + this.engine + 'HP' + '<br/>');
		document.write('Volume Tank: ' + this.volumeTank + 'L' + '<br/>');
		document.write('Consumption: ' + this.consumption + ' L/100km');
	}

}

 var BMW = new Cars('BMW','coupe','1520','G-Power','2','300','white','450','50','5.5');
 var Mercedes = new Cars('Mercedes','coupe','1550','SLS AMG Black Series','2','315','Black','407','40','6');
 var Audi = new Cars('Audi','sedan','1975','s8','4','250','grey','520','50','6.5');
 var Lamborhini = new Cars('Lamborhini','jeep','2197','Urus','4','305','yellow','650','70','7');
 var Lotus = new Cars('Lotus','coupe','903','Elise SC','2','241','orange','220','40','5');

BMW.getInfo();
