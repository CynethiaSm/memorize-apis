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
2. Toggle Information Section near Unity API
------------------------------------------------------------------------------------------------------------------------
*/
document.addEventListener('DOMContentLoaded' , function () {
    const informationStruct = document.querySelector('.info-structure');
    const informationSection = document.querySelector('.info-section');

    informationStruct.addEventListener('mouseover', function () {
        informationSection.classList.toggle('hidden');
    });

    informationStruct.addEventListener('mouseout', function () {
        informationSection.classList.toggle('hidden');
    });
});

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
5. Show and Hide Right Panel
------------------------------------------------------------------------------------------------------------------------
*/
document.addEventListener('DOMContentLoaded', function () {
    const unityEngineCardHeader = document.querySelector('.angle-button');
    const unityEngineCardImage = document.querySelector('.image-card-content');

    unityEngineCardHeader.addEventListener('click', function () {
        unityEngineCardImage.classList.toggle('hidden');
    });
});

/* 
------------------------------------------------------------------------------------------------------------------------
6. Use the Search bar to find tiles
------------------------------------------------------------------------------------------------------------------------
*/
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const tiles = document.querySelectorAll('[data-search-term]');

     // Remove the 'hidden' class from all tiles initially
     tiles.forEach(function(tile) {
        tile.classList.remove('hidden-middle-tile');
    });

    searchInput.addEventListener('input', function () {
        const inputValue = searchInput.value.toLowerCase();

        tiles.forEach(function(tile) {
            const searchTerm = tile.getAttribute('data-search-term').toLowerCase();
            const match = searchTerm.includes(inputValue);

            // Toggle visibility based on whether the search term matches the input value
            tile.classList.toggle('hidden-middle-tile', !match);
        });

        arrangeTiles();
    });
});


