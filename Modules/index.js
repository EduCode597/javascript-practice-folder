import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';
console.log(`PI: ${PI}`);

const circumference = getCircumference(10);
console.log(`Circumference of circle with radius 10: ${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`Area of circle with radius 10: ${area.toFixed(2)}cm²`);

const volume = getVolume(10, 5);
console.log(`Volume of cylinder with radius 10 and height 5: ${volume.toFixed(2)}cm³`);