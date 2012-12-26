var zenFunctionality = function(){
		var textarea, zen;
	};
	zenFunctionality.prototype.createTextArea = function(id){
		var textArea = document.createElement("textarea");
		textArea.id = 'zenText';
		textArea.style.display = 'none';
	}
	zenFunctionality.prototype.updateTextArea = function(txtArea, string){
			txtArea.value = string;
		}
	zenFunctionality.prototype.getCaretPosition = function(element, zenSet) {
    var range= parent.window.$('iframe.html')[0].contentDocument.getSelection().getRangeAt(0);
    alert('Current position: '+range.startOffset+' inside '+range.startContainer);
    
    return range.startOffset;
}

function showCaretPos() {
    var el = document.getElementById("test");
    var caretPosEl = document.getElementById("caretPos");
    caretPosEl.innerHTML = "Caret position: " + getCaretCharacterOffsetWithin(el);
}
    zenFunctionality.prototype.returnWord = function(text, caretPos) {
        var index = text.indexOf(caretPos);
        var preText = text.substring(0, caretPos);
        if (preText.indexOf(" ") > 0) {
            var words = preText.split(" ");
            return words[words.length - 1]; //return last word
        }
        else {
            return preText;
        }
    }
    zenFunctionality.prototype.alertPrevWord = function(e) {
        var editableDiv = e.target;
        var caretPos = this.getCaretPosition(editableDiv);
        var word = this.returnWord(editableDiv.innerText, caretPos);
        if (word != null) {
            alert(word);
        }
    }

$(function() {

	// Adds script to body. Can be seen via inspector
	/*var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   = "zen_textarea.min.js";
	//document.body.appendChild(script);
*/
	
    var htmlEdit = new zenFunctionality();
    console.log(htmlEdit);
	var baseExtensionURL = chrome.extension.getURL("js/");
	var HTMLIFrame = $("iframe.html")[0].contentDocument;
	var CSSIFrame = $("iframe.css")[0].contentDocument;
	var JSIFrame = $("iframe.js")[0].contentDocument;
	var RESULTIFrame = $("iframe[name='result']")[0].contentDocument;
	var isCtrl = false;
	$('head').append('');
	$(HTMLIFrame.body).keyup(function (e) {
		debugger;
		e.preventDefault();
if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
	debugger;
    if(e.which == 17) isCtrl=true;
    if(e.which == 69 && isCtrl == true) {
        var zenSet="html";
        htmlEdit.alertPrevWord(e, zenSet);
        isCtrl = false;
        e.preventDefault();
 		return false;
 }
});;
	$(CSSIFrame.body).keyup(function (e) {
		e.preventDefault();
if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
    var zenSet = 'css';
	e.preventDefault();
    htmlEdit.alertPrevWord(e, zenSet);
    if(e.which == 17) isCtrl=true;
    if(e.which == 69 && isCtrl == true) {
        var zenSet="css";
        htmlEdit.alertPrevWord(e, zenSet);
        isCtrl = false;
        e.preventDefault();
        return false;
 }
});
$(JSIFrame.body).keyup(function (e) {
	e.preventDefault();
	if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
	e.preventDefault();
    if(e.which == 17) isCtrl=true;
    if(e.which == 69 && isCtrl == true) {
        alert('js');
 	return false;
 }
});;
	$(RESULTIFrame.body).append('herro');
	console.log(HTMLIFrame);
	console.log(CSSIFrame);
	console.log(JSIFrame);
	console.log(RESULTIFrame);
	console.log(baseExtensionURL);
});