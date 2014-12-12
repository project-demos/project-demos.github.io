(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$( document ).ready(function() {

	new ScrollScene({triggerElement: "#slide1"})
		.setTween(TweenMax.from("#slide1 > img", 1, {top: "-70%", ease: Linear.easeNone}))
		.addTo(controller);

	new ScrollScene({triggerElement: "#slide2"})
		.setTween(TweenMax.from("#slide2 > img", 1, {top: "-70%", ease: Linear.easeNone}))
		.addTo(controller);

});
},{}]},{},[1])