$(function() {

	// Adds script to body. Can be seen via inspector
	/*var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   = "zen_textarea.min.js";
	//document.body.appendChild(script);
*/
	var baseExtensionURL = chrome.extension.getURL("js/js.js");
	var HTMLIFrame = $("iframe.html")[0].contentDocument;
	var CSSIFrame = $("iframe.css")[0].contentDocument;
	var JSIFrame = $("iframe.js")[0].contentDocument;
	var RESULTIFrame = $("iframe[name='result']")[0].contentDocument;
	$(HTMLIFrame.body).append('<p>Hi!</p>');
	$(CSSIFrame.body).append('<p>Justice</p>');
	$(JSIFrame.body).append('<p>Woot!</p>');
	console.log(RESULTIFrame);
	$(RESULTIFrame.body).append('<p>It works!</p>');
	
	console.log(HTMLIFrame);
	console.log(CSSIFrame);
	console.log(JSIFrame);
	console.log(RESULTIFrame);
	console.log(baseExtensionURL);
});