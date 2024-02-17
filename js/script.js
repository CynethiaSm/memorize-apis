/* 
------------------------------------------------------------------------------------------------------------------------
1. Add to and Restart progress bar
------------------------------------------------------------------------------------------------------------------------
*/
document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const addMoreButton = document.querySelector('.add-button');

    addMoreButton.addEventListener('click', function () {
         var currentValue = parseFloat(progressBar.value);
         var newValue = currentValue + 5;

         newValue = Math.min(newValue, parseFloat(progressBar.max));
    
         //Update the value
        progressBar.value = newValue
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const restartButton = document.querySelector('.restart-button');

    restartButton.addEventListener('click', function () {
        
        //Restart Progress
        progressBar.value = 0;
    });
});

/* 
------------------------------------------------------------------------------------------------------------------------
2. Add to and Restart progress bar
------------------------------------------------------------------------------------------------------------------------
*/


/* 
------------------------------------------------------------------------------------------------------------------------
3. Show and Hide Left Side Panel - Main Labels
------------------------------------------------------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', function () {
    const unityEngineLabel = document.querySelector('.unity-engine-label1');
    const unityEngineSubmenu = document.querySelector('.unity-engine-submenu1');

    unityEngineLabel.addEventListener('click', function () {
        unityEngineSubmenu.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const unityEngineLabelTwo = document.querySelector('.unity-engine-label2');
    const unityEngineSubmenuTwo = document.querySelector('.unity-engine-submenu2');

    unityEngineLabelTwo.addEventListener('click', function () {
        unityEngineSubmenuTwo.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const unityEngineLabelThree = document.querySelector('.unity-engine-label3');
    const unityEngineSubmenuThree = document.querySelector('.unity-engine-submenu3');

    unityEngineLabelThree.addEventListener('click', function () {
        unityEngineSubmenuThree.classList.toggle('hidden');
    });
});


/* 
------------------------------------------------------------------------------------------------------------------------
4. Show and Hide Left Side Panel - Layer 1 Namespaces
------------------------------------------------------------------------------------------------------------------------
*/
document.addEventListener('DOMContentLoaded', function () {
    const unityEngineNamespaceOne = document.querySelector('.unity-engine-namespace1');
    const unityEngineSublayerOne = document.querySelector('.unity-engine-sublayer1');

    unityEngineNamespaceOne.addEventListener('click', function () {
        unityEngineSublayerOne.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const unityEngineNamespaceTwo = document.querySelector('.unity-engine-namespace2');
    const unityEngineSublayerTwo = document.querySelector('.unity-engine-sublayer2');

    unityEngineNamespaceTwo.addEventListener('click', function () {
        unityEngineSublayerTwo.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const unityEngineNamespaceShareOne = document.querySelectorAll('.unity-engine-nspshare1')
    const unityEngineNamespaceShareTwo = document.querySelectorAll('.unity-engine-nspshare2')

    unityEngineNamespaceShareOne.forEach(function(element) {
        element.addEventListener('click' , function () {
            unityEngineNamespaceShareTwo.forEach(function(element) {
                element.classList.toggle('hidden');
            });
        });
    });
});

/* 
------------------------------------------------------------------------------------------------------------------------
5. Show and Hide Left Side Panel - Layer 2 Class,Enum
------------------------------------------------------------------------------------------------------------------------
*/
