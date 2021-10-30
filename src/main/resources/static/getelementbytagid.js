function getAllPElements() {
    var allParas = document.getElementsByTagName('p');
    var num = allParas.length;
    alert('Der er ' + num + ' p elementer i det her dokument');
}

function getPElementsFromBlueSquare() {
    var div1 = document.getElementById('div1');
    var div1Paras = div1.getElementsByTagName('p');
    var num = div1Paras.length;
    alert('Der er ' + num + ' p elementer i div1');
}

function getPElementsFromRedSquare() {
    var div2 = document.getElementById('div2');
    var div2Paras = div2.getElementsByTagName('p');
    var num = div2Paras.length;
    alert('Der er ' + num + ' p elementer i div2');
}