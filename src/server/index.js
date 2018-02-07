const express = require('express');
const app = express();
const fs = require('fs');
const SerialPort = require('serialport');
const Printer = require('thermalprinter');

const logo = `${__dirname}/images/logo.png`;
const ciseaux = `${__dirname}/images/ciseaux.png`;
let count = require('./count.json');

const serialPort = new SerialPort('/dev/ttyUSB0', { baudRate: 19200 });
let printer;

console.log('current count', count);

const updateCount = newCount => {
	const data = JSON.stringify(newCount);
	fs.writeFileSync(`${__dirname}/count.json`, data);
};

const images = ['bricolage', 'carte', 'cochon', 'cool', 'jeu', 'mappeur', 'mappeurMaps', 'vache'];
const pickImage = () => {
	const index = Math.floor(Math.random() * Math.floor(images.length));
	return `${__dirname}/images/${images[index]}.png`;
};

app.get('/api/print', (req, res) => {
	count.count++;
	updateCount(count);
	printer
		.lineFeed(2)
		.printImage(logo)
		.bold(true)
		.big(false)
		.horizontalLine(32)
		.horizontalLine(32)
		.printImage(pickImage())
		.horizontalLine(32)
		.horizontalLine(32)
		.big(true)
		.center()
		.printLine('A conserver')
		.printLine('' + count.count)
		.big(false)
		.lineFeed(1)
		.printImage(ciseaux)
		.lineFeed(1)
		.big(true)
		.printLine("Pour l'urne")
		.printLine('' + count.count)
		.lineFeed(3)
		.print(() => {
			res.status(200).send();
		});
});

serialPort.on('open', () => {
	const opts = { maxPrintingDots: 10, heatingTime: 100, heatingInterval: 3, commandDelay: 3 };
	printer = new Printer(serialPort, opts);
	printer.on('ready', () => {
		app.listen(3000, () => console.log('running on port 3000 ...'));
	});
});
