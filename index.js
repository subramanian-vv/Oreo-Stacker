var oreo = document.getElementById('oreo');
var input = document.getElementById('inputString');

function addLayer() {
    var imageId, leftPos, topPos = 0;

    while (oreo.firstChild)
        oreo.removeChild(oreo.firstChild);

    input.value = input.value.replace(/[^ore&]/gi, '');
    const strings = input.value.toUpperCase().match(/o|re|&/gi);

    for(var i = 0; i < strings.length; i++) {
        const image = document.createElement('img');
        var currentLayer = strings[i];
        console.log(currentLayer);
        if(i !== 0 && i === strings.length - 1 && currentLayer === 'O') {
            imageId = 'bottom';
            leftPos = 0;
            if(strings[i-1] == 'RE')
                topPos -= 5;
            else
                topPos +=20;
        }
        else if(currentLayer == 'O') {
            imageId = 'top';
            leftPos = 0;
            if(strings[i-1] == 'RE')
                topPos -= 5;
            else
                topPos +=20;
        }
        else if (currentLayer == '&') {
            topPos += 60;
            continue;
        }
        else {
            imageId = 'middle';
            leftPos = 10;
            if(strings[i-1] === 'RE')
                topPos += 10;
            else
                topPos += 30;
        }
        image.setAttribute('src', `./Images/${imageId}.png`);
        image.style['z-index'] = strings.length - i;
        image.style.left = `${leftPos}px`;
        image.style.top = `${topPos}px`;
        image.classList.add('oreoLayer');
        oreo.appendChild(image);
    }
}

input.addEventListener("keyup", addLayer);