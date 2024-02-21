
//Handles logic related to adding and restarting the progress bar - Top
function progressBarButtons() {
    const progressBar = document.getElementById('progress-bar');
    const addMoreButton = document.querySelector('.add-button');
    const restartButton = document.querySelector('.restart-button');

    function addProgress() {
        let currentValue = parseFloat(progressBar.value);
        let newValue = currentValue + 5;

        newValue = Math.min(newValue, parseFloat(progressBar.max));

        //Update the value
        progressBar.value = newValue;
    }

    function restartProgress() {

        //Restart Progress
        progressBar.value = 0;
    }

    addMoreButton.addEventListener('click', addProgress);
    restartButton.addEventListener('click', restartProgress);
}

//Handles toggling the information section - Left
function informationIcon() {
    const informationStruct = document.querySelector('.info-structure');
    const informationSection = document.querySelector('.info-section');

    function toggleInformationIcon() {
        informationSection.classList.toggle('hidden');
    }

    informationStruct.addEventListener('mouseover', toggleInformationIcon);
    informationStruct.addEventListener('mouseout', toggleInformationIcon);
}

//Handles toggling side panel sections - Left
function initializeSidePanelToggles() {
    const unityEngineLabel = document.querySelector('.unity-engine-label');
    const unityEditorLabel = document.querySelector('.unity-editor-label');
    const unityLabel = document.querySelector('.unity-label');
    const unityEngineSubmenu = document.querySelector('.unity-engine-submenu');
    const unityEditorSubmenu = document.querySelector('.unity-editor-submenu');
    const unitySubmenu = document.querySelector('.unity-submenu');

    function toggleUnityEngine() {
        unityEngineSubmenu.classList.toggle('hidden');
    }
    
    function toggleUnityEditor() {
        unityEditorSubmenu.classList.toggle('hidden');
    }
    
    function toggleUnity() {
        unitySubmenu.classList.toggle('hidden');
    }

    unityEngineLabel.addEventListener('click', toggleUnityEngine);
    unityEditorLabel.addEventListener('click', toggleUnityEditor);
    unityLabel.addEventListener('click', toggleUnity);
}

//Handles toggling inner layer inside side panel labels and click for information - Left
function initializeInnerLayers() {
    const unityEngineSublayerAI = document.querySelector('.unity-sublayer-ai');
    const unityEngineSublayerAnim = document.querySelector('.unity-sublayer-animation');
    const unityEngineSublayerAssert = document.querySelector('.unity-sublayer-assertion')

    function toggleNamespaces(event) {
        if (event.target.classList.contains('unity-namespace-ai')) {
            unityEngineSublayerAI.classList.toggle('hidden');
        } else if (event.target.classList.contains('unity-namespace-animation')) {
            unityEngineSublayerAnim.classList.toggle('hidden');
        } else if (event.target.classList.contains('unity-namespace-assertion')) {
            unityEngineSublayerAssert.classList.toggle('hidden');
        } 
    }

    document.addEventListener('click', toggleNamespaces);
}

//Handles Card Toggling - Middle Left
function cardToggle() {
    const unityEngineCardHeader = document.querySelector('.angle-button');
    const unityEngineCardImage = document.querySelector('.image-card-content');
    const unityEngineCardHeaderTwo = document.querySelector('.template-bar');
    const unityEngineCardImageTwo = document.querySelector('.card-content-template');

        unityEngineCardHeader.addEventListener('click', function () {
            unityEngineCardImage.classList.toggle('hidden');
        });
    
        unityEngineCardHeaderTwo.addEventListener('click', function () {
            unityEngineCardImageTwo.classList.toggle('hidden');
        });  
}

//Handles Searching Tiles - Middle & Left
function handleSearchBar() {
    const searchInput = document.getElementById('searchInput');
    const tiles = document.querySelectorAll('[data-search-term]');
    const tileContainer = document.getElementById('tileContainer');
    const mainButton = document.querySelector('.main-button');
    const originalOrder = Array.from(tiles);

    // Remove the 'hidden' class from all tiles initially
    tiles.forEach(function(tile) {
        tile.classList.remove('hidden-middle-tile');
    });

    function arrangeTiles(visibleTiles) {
        // Delay clearing the layout to allow CSS transitions to complete
        setTimeout(function() {
            // Clear existing grid layout
            tileContainer.innerHTML = '';
    
            // Append visible tiles to the tile container in their original order
            visibleTiles.forEach(function(tile) {
                tileContainer.appendChild(tile);
            });
        }, 200); // Adjust the delay time as needed
    }
    

    function toggleTilesSearch() {
        const inputValue = searchInput.value.trim().toLowerCase();

        // Filter tiles based on search term
        const visibleTiles = originalOrder.filter(function(tile) {
            const searchTerm = tile.getAttribute('data-search-term').toLowerCase();
            const match = searchTerm.includes(inputValue);
            return inputValue === '' || match;
        });

        // Toggle visibility of tiles
        tiles.forEach(function(tile) {
            const searchTerm = tile.getAttribute('data-search-term').toLowerCase();
            const match = searchTerm.includes(inputValue);
            tile.classList.toggle('hidden-middle-tile', inputValue !== '' && !match);
        });

        // Arrange tiles after toggling visibility
        arrangeTiles(visibleTiles);
    }

    function toggleMain() {
        // Clear existing grid layout
        tileContainer.innerHTML = '';

        // Append visible tiles to the tile container in their original order
        originalOrder.forEach(function(tile) {
            tileContainer.appendChild(tile);
            tile.classList.remove('hidden');
            tile.classList.remove('hidden-middle-tile');
        });

        searchInput.value = '';
    }

    // Initial arrangement of tiles
    arrangeTiles(originalOrder);

    searchInput.addEventListener('input', toggleTilesSearch);
    mainButton.addEventListener('click', toggleMain);
}

//Handle clicking a tile and showing information - Middle
function handleIndividualTile() {
    const addAssetUnity = document.getElementById('add-asset-unity');
    const allTiles = document.querySelectorAll('.tile-middle');

    function showTileInformation() {
        allTiles.forEach(function(tile) {
            tile.classList.toggle('hidden-middle-tile');
            setTimeout(() => {
                tile.classList.replace('hidden-middle-tile', 'hidden');
            }, 450); // Adjust the delay as needed
        })
        addAssetUnity.classList.remove('hidden-middle-tile');
    }

    addAssetUnity.addEventListener('click', showTileInformation);

}

//Handles switching active green when clicking one of the list words
function switchActiveList() {
 
     // Remove the is-active class from all
     document.querySelectorAll('.panel-block').forEach(function (panelblock) {
         panelblock.classList.remove('is-active')
     });
 
    function switchActive(event) {
        const target = event.target;
        const panelBlocks = document.querySelectorAll('.panel-block');
        
         if (event.target.classList.contains('panel-block')) {
             
            panelBlocks.forEach(function (panelblock) {
                 panelblock.classList.remove('is-active')
             });
             target.classList.add('is-active');
         }
    }
 
    function resetActiveList() {
         if (switchRightPanels()) {
             document.querySelectorAll('.panel-block').forEach(function (panelblock) {
                 panelblock.classList.remove('is-active')
             });
         }
    }
    resetActiveList() 
    document.addEventListener('click', switchActive);
 
 }




//Handle Right Side Panel Categories showing active category - Right
function activeCategoryAndList() {
    const mainCommonSection = document.querySelector('.main-common-section');
    const mainReminderSection = document.querySelector('.main-reminder-section');
    const animationSetList = document.querySelector('.animation-set-list');
    const assetSetList = document.querySelector('.asset-set-list');
    const physicsSetList = document.querySelector('.physics-set-list');
    const locationSetList = document.querySelector('.location-set-list');
    const particalSetList = document.querySelector('.particle-set-list');
    const uiSetList = document.querySelector('.ui-set-list');
    const audioCategorySetList = document.querySelector('.audio-set-list');
    const networkingSetList = document.querySelector('.networking-set-list');

    const keywordsSetList = document.querySelector('.keywords-set-list');
    const variablesSetList = document.querySelector('.variables-set-list');
    const methodsSetList = document.querySelector('.methods-set-list');
    const classSetList = document.querySelector('.class-set-list');
    const usingMethodsSetList = document.querySelector('.using-methods-list');
    const partialClassSetList = document.querySelector('.partial-class-list');
    const editorSetList = document.querySelector('.editor-set-list');
    const gameSetList = document.querySelector('.game-set-list');

    // Remove the is-active class from all
    document.querySelectorAll('.categories').forEach(function (category) {
        category.classList.remove('is-active')
    });

    function switchCategoryList(event) {
        if (event.target.classList.contains('anim-category')) {
            const animCategories = [
                { "name": "Animation Clips", "id": "animation-clips" },
                { "name": "Animator Controller", "id": "animator-controller" },
                { "name": "Animation Events", "id": "animation-events" },
                { "name": "Blend Trees", "id": "blend-trees" },
                { "name": "Animation Curves", "id": "animation-curves" },
                { "name": "Animation Rigging", "id": "animation-rigging" },
                { "name": "Mecanim", "id": "mecanim" },
                { "name": "Animation Layers", "id": "animation-layers" },
                { "name": "State Machines", "id": "state-machines" },
                { "name": "Keyframe Animation", "id": "keyframe-animation" },
                { "name": "Scripted Animation", "id": "scripted-animation" },
                { "name": "Physics-based Animation", "id": "physics-based-animation" },
                { "name": "Particle Systems", "id": "particle-systems" },
                { "name": "Timeline", "id": "timeline" },
                { "name": "2D Animation", "id": "2d-animation" },
                { "name": "Procedural Animation", "id": "procedural-animation" },
                { "name": "Animation Blending", "id": "animation-blending" }
            ];
    
            animationSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${animCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } else if (event.target.classList.contains('asset-category')) {
            const assetCategories = [
                { "name": "Asset Bundles", "id": "asset-bundles" },
                { "name": "Resource Management", "id": "resource-management" },
                { "name": "Asset Store Integration", "id": "asset-store-integration" },
                { "name": "Prefab Variants", "id": "prefab-variants" },
                { "name": "Scriptable Objects", "id": "scriptable-objects" },
                { "name": "Asset Pipeline", "id": "asset-pipeline" },
                { "name": "Asset Serialization", "id": "asset-serialization" },
                { "name": "Asset Importing", "id": "asset-importing" },
                { "name": "Asset Management Systems", "id": "asset-management-systems" },
                { "name": "Asset Catalogs", "id": "asset-catalogs" },
                { "name": "Texture Packing", "id": "texture-packing" },
                { "name": "Model Optimization", "id": "model-optimization" },
                { "name": "Asset Prefabs", "id": "asset-prefabs" },
                { "name": "Mesh Generation", "id": "mesh-generation" },
                { "name": "Audio Importing and Management", "id": "audio-importing-management" }
            ];
    
            assetSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } else if (event.target.classList.contains('physics-category')) {
            const physicsCategories = [
                { "name": "Rigidbody", "id": "rigidbody" },
                { "name": "Collider", "id": "collider" },
                { "name": "Physics Material", "id": "physics-material" },
                { "name": "Raycasting", "id": "raycasting" },
                { "name": "Collision Detection", "id": "collision-detection" },
                { "name": "Trigger Events", "id": "trigger-events" },
                { "name": "Forces", "id": "forces" },
                { "name": "Constraints", "id": "constraints" },
                { "name": "Joints", "id": "joints" },
                { "name": "Character Controller", "id": "character-controller" },
                { "name": "Physics Layers", "id": "physics-layers" },
                { "name": "Kinematic Bodies", "id": "kinematic-bodies" },
                { "name": "Interpolation", "id": "interpolation" },
                { "name": "Continuous Collision Detection", "id": "continuous-collision-detection" },
                { "name": "Physics Queries", "id": "physics-queries" }
            ];
    
            physicsSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${physicsCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('location-category')) {
            const locationCategories = [
                { "name": "Transform", "id": "transform" },
                { "name": "Position", "id": "position" },
                { "name": "Rotation", "id": "rotation" },
                { "name": "Velocity", "id": "velocity" },
                { "name": "Acceleration", "id": "acceleration" },
                { "name": "Speed", "id": "speed" },
                { "name": "Movement", "id": "movement" },
                { "name": "Pathfinding", "id": "pathfinding" },
                { "name": "NavMesh", "id": "navmesh" },
                { "name": "Waypoints", "id": "waypoints" },
                { "name": "Destination", "id": "destination" },
                { "name": "Destination Reached", "id": "destination-reached" },
                { "name": "Lerp", "id": "lerp" },
                { "name": "Slerp", "id": "slerp" },
                { "name": "Interpolation", "id": "interpolation" }
            ];
    
            locationSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${locationCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('partical-category')) {
            const assetCategories = [
                { "name": "Particle System", "id": "particle-system" },
                { "name": "Emission", "id": "emission" },
                { "name": "Lifetime", "id": "lifetime" },
                { "name": "Speed", "id": "speed" },
                { "name": "Size Over Lifetime", "id": "size-over-lifetime" },
                { "name": "Color Over Lifetime", "id": "color-over-lifetime" },
                { "name": "Rotation Over Lifetime", "id": "rotation-over-lifetime" },
                { "name": "Force Over Lifetime", "id": "force-over-lifetime" },
                { "name": "Collision", "id": "collision" },
                { "name": "Triggers", "id": "triggers" },
                { "name": "Sub Emitters", "id": "sub-emitters" },
                { "name": "Texture Sheet Animation", "id": "texture-sheet-animation" },
                { "name": "Custom Shaders", "id": "custom-shaders" },
                { "name": "GPU Simulation", "id": "gpu-simulation" },
                { "name": "Scripting API", "id": "scripting-api" }
            ];
    
            particalSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('ui-category')) {
            const assetCategories = [
                { "name": "Canvas", "id": "canvas" },
                { "name": "UI Elements", "id": "ui-elements" },
                { "name": "RectTransform", "id": "rect-transform" },
                { "name": "Layout Group", "id": "layout-group" },
                { "name": "Text", "id": "text" },
                { "name": "Images", "id": "images" },
                { "name": "Buttons", "id": "buttons" },
                { "name": "Input Fields", "id": "input-fields" },
                { "name": "Dropdowns", "id": "dropdowns" },
                { "name": "Scroll Views", "id": "scroll-views" },
                { "name": "Event System", "id": "event-system" },
                { "name": "UI Animation", "id": "ui-animation" },
                { "name": "UI Navigation", "id": "ui-navigation" },
                { "name": "UI Interactivity", "id": "ui-interactivity" },
                { "name": "UI Scaling", "id": "ui-scaling" }
            ];
    
            uiSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('audio-category')) {
            const assetCategories = [
                { "name": "Audio Source", "id": "audio-source" },
                { "name": "Audio Clip", "id": "audio-clip" },
                { "name": "Audio Listener", "id": "audio-listener" },
                { "name": "Volume Control", "id": "volume-control" },
                { "name": "Pitch Control", "id": "pitch-control" },
                { "name": "Spatial Audio", "id": "spatial-audio" },
                { "name": "3D Sound", "id": "3d-sound" },
                { "name": "Background Music", "id": "background-music" },
                { "name": "Sound Effects", "id": "sound-effects" },
                { "name": "Play One Shot", "id": "play-one-shot" },
                { "name": "Looping Audio", "id": "looping-audio" },
                { "name": "Audio Mixer", "id": "audio-mixer" },
                { "name": "Audio Groups", "id": "audio-groups" },
                { "name": "Doppler Effect", "id": "doppler-effect" },
                { "name": "Spatialization", "id": "spatialization" }
            ];
    
            audioCategorySetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('network-category')) {
            const assetCategories = [
                { "name": "NetworkManager", "id": "network-manager" },
                { "name": "NetworkServer", "id": "network-server" },
                { "name": "NetworkClient", "id": "network-client" },
                { "name": "NetworkBehaviour", "id": "network-behaviour" },
                { "name": "NetworkIdentity", "id": "network-identity" },
                { "name": "SyncVars", "id": "sync-vars" },
                { "name": "RPCs (Remote Procedure Calls)", "id": "rpcs" },
                { "name": "Networking Messages", "id": "networking-messages" },
                { "name": "Server Authority", "id": "server-authority" },
                { "name": "Client Prediction", "id": "client-prediction" },
                { "name": "Server Reconciliation", "id": "server-reconciliation" },
                { "name": "Network Transform", "id": "network-transform" },
                { "name": "Lobby System", "id": "lobby-system" },
                { "name": "Matchmaking", "id": "matchmaking" },
                { "name": "Networked Prefabs", "id": "networked-prefabs" }
            ];
    
            networkingSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('keywords-category')) {              //Reminder Panel
            const assetCategories = [
                { "name": "GameObject", "id": "game-object" },
                { "name": "Transform", "id": "transform" },
                { "name": "MonoBehaviour", "id": "mono-behaviour" },
                { "name": "Start", "id": "start" },
                { "name": "Update", "id": "update" },
                { "name": "FixedUpdate", "id": "fixed-update" },
                { "name": "Coroutine", "id": "coroutine" },
                { "name": "Instantiate", "id": "instantiate" },
                { "name": "Destroy", "id": "destroy" },
                { "name": "SetActive", "id": "set-active" },
                { "name": "GetComponent", "id": "get-component" },
                { "name": "Transform.position", "id": "transform-position" },
                { "name": "Quaternion", "id": "quaternion" },
                { "name": "Vector3", "id": "vector3" },
                { "name": "Raycast", "id": "raycast" }
            ];
    
            keywordsSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('variables-category')) {
            const assetCategories = [
                { "name": "Variable Declaration", "id": "variable-declaration" },
                { "name": "var", "id": "var" },
                { "name": "let", "id": "let" },
                { "name": "const", "id": "const" },
                { "name": "Data Types", "id": "data-types" },
                { "name": "Primitive Types", "id": "primitive-types" },
                { "name": "Reference Types", "id": "reference-types" },
                { "name": "int", "id": "int" },
                { "name": "float", "id": "float" },
                { "name": "string", "id": "string" },
                { "name": "bool", "id": "bool" },
                { "name": "Arrays", "id": "arrays" },
                { "name": "Lists", "id": "lists" },
                { "name": "Dictionaries", "id": "dictionaries" },
                { "name": "Public Variables", "id": "public-variables" },
                { "name": "Private Variables", "id": "private-variables" },
                { "name": "Static Variables", "id": "static-variables" },
                { "name": "Instance Variables", "id": "instance-variables" }
            ];
    
            variablesSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('methods-category')) {
            const assetCategories = [
                { "name": "Method Declaration", "id": "method-declaration" },
                { "name": "Void Methods", "id": "void-methods" },
                { "name": "Return Types", "id": "return-types" },
                { "name": "Parameterized Methods", "id": "parameterized-methods" },
                { "name": "Overloading Methods", "id": "overloading-methods" },
                { "name": "Access Modifiers", "id": "access-modifiers" },
                { "name": "Public Methods", "id": "public-methods" },
                { "name": "Private Methods", "id": "private-methods" },
                { "name": "Static Methods", "id": "static-methods" },
                { "name": "Instance Methods", "id": "instance-methods" },
                { "name": "Built-in Methods", "id": "built-in-methods" },
                { "name": "Importing Methods", "id": "importing-methods" },
                { "name": "Coroutine Methods", "id": "coroutine-methods" },
                { "name": "Extension Methods", "id": "extension-methods" },
                { "name": "Event Handling Methods", "id": "event-handling-methods" }
            ];
    
            methodsSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('class-category')) {
            const assetCategories = [
                { "name": "Class Declaration", "id": "class-declaration" },
                { "name": "Constructor", "id": "constructor" },
                { "name": "Properties", "id": "properties" },
                { "name": "Fields", "id": "fields" },
                { "name": "Methods", "id": "methods" },
                { "name": "Inheritance", "id": "inheritance" },
                { "name": "Polymorphism", "id": "polymorphism" },
                { "name": "Encapsulation", "id": "encapsulation" },
                { "name": "Abstraction", "id": "abstraction" },
                { "name": "Static Classes", "id": "static-classes" },
                { "name": "Abstract Classes", "id": "abstract-classes" },
                { "name": "Interfaces", "id": "interfaces" },
                { "name": "Generic Classes", "id": "generic-classes" },
                { "name": "Nested Classes", "id": "nested-classes" },
                { "name": "Partial Classes", "id": "partial-classes" }
            ];
    
            classSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('use-method-category')) {
            const assetCategories = [
                { "name": "Awake", "id": "awake" },
                { "name": "Start", "id": "start" },
                { "name": "Update", "id": "update" },
                { "name": "FixedUpdate", "id": "fixed-update" },
                { "name": "LateUpdate", "id": "late-update" },
                { "name": "OnEnable", "id": "on-enable" },
                { "name": "OnDisable", "id": "on-disable" },
                { "name": "OnDestroy", "id": "on-destroy" },
                { "name": "OnValidate", "id": "on-validate" },
                { "name": "OnTriggerEnter", "id": "on-trigger-enter" },
                { "name": "OnTriggerExit", "id": "on-trigger-exit" },
                { "name": "OnCollisionEnter", "id": "on-collision-enter" },
                { "name": "OnCollisionExit", "id": "on-collision-exit" },
                { "name": "OnMouseEnter", "id": "on-mouse-enter" },
                { "name": "OnMouseExit", "id": "on-mouse-exit" },
                { "name": "OnMouseDown", "id": "on-mouse-down" },
                { "name": "OnMouseUp", "id": "on-mouse-up" },
                { "name": "OnGUI", "id": "on-gui" },
                { "name": "OnMouseOver", "id": "on-mouse-over" },
                { "name": "OnMouseDrag", "id": "on-mouse-drag" },
                { "name": "OnControllerColliderHit", "id": "on-controller-collider-hit" },
                { "name": "OnApplicationQuit", "id": "on-application-quit" },
                { "name": "OnApplicationPause", "id": "on-application-pause" },
                { "name": "OnApplicationFocus", "id": "on-application-focus" },
                { "name": "Extras", "id": "extra-used" },
            ];
    
            usingMethodsSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('partial-category')) {
            const assetCategories = [
                { "name": "Partial Classes", "id": "partial-classes" },
                { "name": "Modular Scripting", "id": "modular-scripting" },
                { "name": "Script Organization", "id": "script-organization" },
                { "name": "Script Communication", "id": "script-communication" },
                { "name": "Script Reusability", "id": "script-reusability" },
                { "name": "Component-Based Architecture", "id": "component-based-architecture" },
                { "name": "Scriptable Objects", "id": "scriptable-objects" },
                { "name": "MonoBehaviour Extension", "id": "monobehaviour-extension" },
                { "name": "Interfaces", "id": "interfaces" },
                { "name": "Events and Delegates", "id": "events-and-delegates" },
                { "name": "Dependency Injection", "id": "dependency-injection" },
                { "name": "UnityEvent", "id": "unity-event" },
                { "name": "Singleton Pattern", "id": "singleton-pattern" },
                { "name": "Custom Editor Scripts", "id": "custom-editor-scripts" },
                { "name": "Code Organization", "id": "code-organization" }
            ];
    
            partialClassSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('editor-category')) {
            const assetCategories = [
                { "name": "Editor Scripting", "id": "editor-scripting" },
                { "name": "Custom Inspectors", "id": "custom-inspectors" },
                { "name": "Editor Windows", "id": "editor-windows" },
                { "name": "Editor Tools", "id": "editor-tools" },
                { "name": "Editor GUI", "id": "editor-gui" },
                { "name": "Editor Extensions", "id": "editor-extensions" },
                { "name": "Editor Script Execution Order", "id": "editor-script-execution-order" },
                { "name": "SerializedObject", "id": "serialized-object" },
                { "name": "Editor Utility Classes", "id": "editor-utility-classes" },
                { "name": "Custom Attributes", "id": "custom-attributes" },
                { "name": "Inspector GUI", "id": "inspector-gui" },
                { "name": "Property Drawers", "id": "property-drawers" },
                { "name": "Editor Coroutines", "id": "editor-coroutines" },
                { "name": "Scene Gizmos", "id": "scene-gizmos" },
                { "name": "Editor Preferences", "id": "editor-preferences" }
            ];
    
            editorSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
        else if (event.target.classList.contains('game-category')) {
            const assetCategories = [
                { "name": "Scene Management", "id": "scene-management" },
                { "name": "Game Initialization", "id": "game-initialization" },
                { "name": "Object Spawning", "id": "object-spawning" },
                { "name": "Physics Simulation", "id": "physics-simulation" },
                { "name": "Basic Movement Mechanics", "id": "basic-movement-mechanics" },
                { "name": "Advanced Movement Mechanics", "id": "advanced-movement-mechanics" },
                { "name": "Navigation and Pathfinding", "id": "navigation-and-pathfinding" },
                { "name": "User Input Handling", "id": "user-input-handling" },
                { "name": "Audio Management", "id": "audio-management" },
                { "name": "UI Management", "id": "ui-management" },
                { "name": "Rendering Settings", "id": "rendering-settings" },
                { "name": "Post-Processing Effects", "id": "post-processing-effects" },
                { "name": "Scene Transitions", "id": "scene-transitions" },
                { "name": "Game Conclusion", "id": "game-conclusion" },
                { "name": "End-Game Screen", "id": "end-game-screen" }
            ];
    
            gameSetList.innerHTML = `
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-success" type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="">
                    ${assetCategories.map(category => `
                        <a id="${category.id}" class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            ${category.name}
                        </a>`).join('')}
                </div>
            `;
        } 
    }
    

    function checkClicked(event) {
        const switchP1Category = document.querySelector('.switchP1-category');
        const animCategory = document.querySelector('.anim-category');
        const assetCategory = document.querySelector('.asset-category');
        const physicsCategory = document.querySelector('.physics-category');
        const locationCategory = document.querySelector('.location-category');
        const particalCategory = document.querySelector('.partical-category');
        const uiCategory = document.querySelector('.ui-category');
        const audioCategory = document.querySelector('.audio-category');
        const networkCategory = document.querySelector('.network-category');

        const switchP2Category = document.querySelector('.switchP2-category');
        const keywordsCategory = document.querySelector('.keywords-category');
        const variablesCategory = document.querySelector('.variables-category');
        const methodsCategory = document.querySelector('.methods-category');
        const classCategory = document.querySelector('.class-category');
        const useMethodCategory = document.querySelector('.use-method-category');
        const partialCategory = document.querySelector('.partial-category');
        const editorCategory = document.querySelector('.editor-category');
        const gameCategory = document.querySelector('.game-category');

        // Check if the clicked element has the class 'anim-category'
        if (event.target.classList.contains('switchP1-category')) {     //First Right Panel Common

            document.querySelectorAll('.categories').forEach(function (category) { 
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });;

            // If yes, add is-active to show highlight
            mainReminderSection.classList.replace('hidden','main-reminder-section');
            switchP1Category.classList.add('is-active');
            switchActiveList();
        } else if (event.target.classList.contains('anim-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });;

            animationSetList.classList.toggle('hidden');
            animCategory.classList.add('is-active')
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('asset-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });;
            assetSetList.classList.toggle('hidden');
            assetCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('physics-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });;

            physicsSetList.classList.toggle('hidden');
            physicsCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('location-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            locationSetList.classList.toggle('hidden');
            locationCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('partical-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            particalSetList.classList.toggle('hidden');
            particalCategory.classList.add('is-active')
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('ui-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            uiSetList.classList.toggle('hidden');
            uiCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('audio-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            audioCategorySetList.classList.toggle('hidden');
            audioCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('network-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            networkingSetList.classList.toggle('hidden');
            networkCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('switchP2-category')) {          //Second Right Panel Reminder

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });;

            // If yes, add is-active to show highlight
            mainCommonSection.classList.replace('hidden','main-common-section');
            switchP2Category.classList.add('is-active');
            switchActiveList();
        } else if (event.target.classList.contains('keywords-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            keywordsSetList.classList.toggle('hidden');
            keywordsCategory.classList.add('is-active')
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('variables-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            variablesSetList.classList.toggle('hidden');
            variablesCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('methods-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            methodsSetList.classList.toggle('hidden');
            methodsCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('class-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            classSetList.classList.toggle('hidden');
            classCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('use-method-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            usingMethodsSetList.classList.toggle('hidden');
            useMethodCategory.classList.add('is-active')
            switchCategoryList(event)
            switchActiveList();
        } else if (event.target.classList.contains('partial-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            partialClassSetList.classList.toggle('hidden');
            partialCategory.classList.add('is-active')
            switchCategoryList(event) 
            switchActiveList();
        } else if (event.target.classList.contains('editor-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            editorSetList.classList.toggle('hidden');
            editorCategory.classList.add('is-active')
            switchCategoryList(event) 
            switchActiveList();
        } else if (event.target.classList.contains('game-category')) {

            document.querySelectorAll('.categories').forEach(function (category) {
                category.classList.remove('is-active')
            });
            document.querySelectorAll('.list-section').forEach(function (category) {
                category.classList.add('hidden')
            });

            gameSetList.classList.toggle('hidden');
            gameCategory.classList.add('is-active') 
            switchCategoryList(event)
            switchActiveList();
        }
        if (event.target.classList.contains('categories')) {
            const clickedCategoryId = event.target.id;
            localStorage.setItem('activeCategory', clickedCategoryId);
            console.log('Stored active category in localStorage:', clickedCategoryId);
        } 
    }

    document.addEventListener('click', checkClicked);
}

//Toggle switch panel one and two - Right
function switchRightPanels() {
    const rightPanelP1 = document.querySelector('.switchP1-category');
    const rightPanelCommon = document.querySelector('.right-panel-common');
    const rightPanelP2 = document.querySelector('.switchP2-category');
    const rightPanelReminder = document.querySelector('.right-panel-reminder');

    rightPanelCommon.classList.remove('hidden-right-panel');

    function toggleP1Panel() {
        rightPanelCommon.style.display = 'none';
        rightPanelReminder.style.display = 'block';
        rightPanelReminder.classList.remove('hidden-right-panel');
    }

    function toggleP2Panel() {
        rightPanelReminder.style.display = 'none';
        rightPanelCommon.style.display = 'block';
        rightPanelCommon.classList.remove('hidden-right-panel');
    }

    rightPanelP1.addEventListener('click', toggleP1Panel);
    rightPanelP2.addEventListener('click', toggleP2Panel);
}





document.addEventListener('DOMContentLoaded', () => {
    progressBarButtons();
    informationIcon();
    initializeSidePanelToggles();
    initializeInnerLayers();
    cardToggle();
    handleSearchBar();
    handleIndividualTile();
    activeCategoryAndList()
    switchRightPanels();
    switchActiveList();
});

