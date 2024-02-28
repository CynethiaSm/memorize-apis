//Handle creating a section for each Tile - Left
function createInformationLeft() {
    const addAssetUnity = document.getElementById('add-asset-unity');
    const addAssetImport = document.getElementById('add-asset-import');
    const tileInfoLeft = document.getElementById('tile-info-left');
    const tileOne = document.getElementById('T1');
    const tileTwo = document.getElementById('T2');

    tileInfoLeft.style.display = 'none';
    

    /*function switchInformation(event) {
        if (event.target.id === 'T1') {
            setTimeout(() => {
                const t1AddAssetUnity = [
                    {'title': "Add Asset In Unity", 'subtitleone': "Drag and drop", 'describeone': "From folder to Window", 'subtitletwo': "Blender to Unity", 'describetwo': "Settings Before Export: FBX - Selected Object, Mesh,", 'describethree': "Apply Transform, Apply Modifiers, Save Preset(Top)", 'image': "/images/AddAssetFull.gif"},
                ]
    
                tileOne.innerHTML = `
                ${t1AddAssetUnity.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="describe">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="describe">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'T2') {
            setTimeout(() => {
                const t2AddAssetImport = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileTwo.innerHTML = `
                ${t2AddAssetImport.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="describe">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="describe">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        }
    }

    function resetlists() {
        const middleInformationDivs = document.querySelectorAll('.middle-information');
            middleInformationDivs.forEach(div => {
                div.innerHTML = ''; // Reset the innerHTML of each middle-information div
            });
    }

    function showInfoLevels() {
    // Hide tileInfoRight if it's already shown
    if (tileInfoRight.style.display === 'block') {
        tileInfoRight.style.display = 'none';
    }
        if (this) {
            setTimeout(() => {
                resetlists();
                // Create a dummy event object to pass to switchInformation
                const dummyEvent = { target: { id: 'T41' } };
                tileInfoRight.style.display = 'block';
                hideTiles()
                hideGridSection();
                // Call switchInformation function with the dummy event
                switchRightInformation(dummyEvent);
            }, 200);
        }
    }

    function showInfoFolders() {
    // Hide tileInfoRight if it's already shown
    if (tileInfoRight.style.display === 'block') {
        tileInfoRight.style.display = 'none';
    }
        if (this) {
            setTimeout(() => {
                resetlists();
                // Create a dummy event object to pass to switchInformation
                const X = { target: { id: 'T42' } };
                tileInfoRight.style.display = 'block';
                hideTiles()
                hideGridSection();
                // Call switchInformation function with the dummy event
                switchRightInformation(X);
            }, 200);
        }
    }

    addAssetUnity.addEventListener('click', showInfoAddAsset);
    addAssetImport.addEventListener('click', showInfoAddAssetImport);*/
}

//Handle creating a section for each Tile - Middle
function createInformation() {
    const addAssetUnity = document.getElementById('add-asset-unity');
    const addAssetImport = document.getElementById('add-asset-import');
    const addAssetSpawn = document.getElementById('add-asset-spawning');
    const destroyAsset = document.getElementById('destroy-asset');
    const playerMovement = document.getElementById('player-movement');
    const physicsInt = document.getElementById('physics-int');
    const animationTriggers = document.getElementById('animation-triggers');
    const cameraMovement = document.getElementById('camera-movement');
    const uiInt = document.getElementById('ui-int');
    const audioManagement = document.getElementById('audio-management');
    const scorekeeping = document.getElementById('scorekeeping');
    const enemyAI = document.getElementById('enemy-ai');
    const inventorySystem = document.getElementById('inventory-system');
    const questSystem = document.getElementById('quest-system');
    const saveSystem = document.getElementById('save-system');
    const multiplayerNetworking = document.getElementById('multiplayer-networking');
    const particleEffects = document.getElementById('particle-effects');
    const terrain = document.getElementById('terrain');
    const localization = document.getElementById('localization');
    const analytics = document.getElementById('analytics');
    const tileInfoSection = document.getElementById('tile-info-section');
    const tileOne = document.getElementById('T1');

    tileInfoSection.style.display = 'none';
    

    function switchInformation(event) {
        if (event.target.id === 'add-asset-unity') {   //1
            setTimeout(() => {
                const t1AddAssetUnity = [
                    {'title': "Add Asset In Unity", 'subtitleone': "Drag and drop", 'describeone': "From folder to Window", 'subtitletwo': "Blender to Unity", 'describetwo': "Settings Before Export: FBX - Selected Object, Mesh,", 'describethree': "Apply Transform, Apply Modifiers, Save Preset(Top)", 'image': "/images/AddAssetFull.gif"},
                ]
    
                tileOne.innerHTML = `
                ${t1AddAssetUnity.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'add-asset-import') {  //2
            setTimeout(() => {
                const t2AddAssetImport = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileOne.innerHTML = `
                ${t2AddAssetImport.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'add-asset-spawning') { //3
            setTimeout(() => {
                const t3AddAssetSpawning = [
                    {'title': "Add Asset Spawning", 'subtitleone': "Spawning", 'describeone': "Spawn at location and create prefabs to spawn", 'subtitletwo': "Code Explained", 'describetwo': "", 'describethree': "", 'classbackground': "code-background", 'code': "public GameObject prefabToSpawn;<br>public Transform spawnPoint;<br>&nbsp<br>public void SpawnObject()<br>{<br>&nbsp&nbsp&nbsp&nbspInstantiate(prefabToSpawn, spawnPoint.position, spawnPoint.rotation);<br>}", 'image': "/images/AssetSpawnFull.gif"},
                    {'title': "Object Pooling", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                ]
    
                tileOne.innerHTML = `
                ${t3AddAssetSpawning.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'destroy-asset') { //3
            setTimeout(() => {
                const t3AddAssetSpawning = [
                    {'title': "Destroy Method", 'subtitleone': "Destroy", 'describeone': "Spawn at location and create prefabs to spawn", 'subtitletwo': "Code Explained", 'describetwo': "", 'describethree': "", 'classbackground': "code-background", 'code': "public GameObject objectToDestroy;<br>&nbsp<br>public void DestroyObject()<br>{<br>&nbsp&nbsp&nbsp&nbspDestroy(objectToDestroy);<br>}", 'image': ""},
                    {'title': "Destroy with Delay", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "public GameObject objectToDestroy;<br>public float delay = 2f;<br>&nbsp<br>public void DestroyObjectWithDelay()<br>{<br>&nbsp&nbsp&nbsp&nbspDestroy(objectToDestroy, delay);<br>}", 'image': ""},
                    {'title': "Destroy by Tag or Name", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "public string tagToDestroy = 'Enemy';<br>&nbsp<br>public void DestroyObjectsByTag()<br>{<br>&nbsp&nbsp&nbsp&nbspGameObject[] objectsToDestroy = GameObject.FindGameObjectsWithTag(tagToDestroy);<br>&nbsp&nbsp&nbsp&nbspforeach (GameObject obj in objectsToDestroy)<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDestroy(obj);<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""},
                    {'title': "Destroy by Collision", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "void OnCollisionEnter(Collision collision)<br>{<br>&nbsp&nbsp&nbsp&nbspif (collision.gameObject.CompareTag('Projectile'))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDestroy(gameObject);<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""},
                ]
    
                tileOne.innerHTML = `
                ${t3AddAssetSpawning.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'ui-int') { //8
            setTimeout(() => {
                const t3UIInt = [
                    {'title': "UI Integration", 'subtitleone': "UI Elements", 'describeone': "Allows users to interact through<br>- Buttons<br>- Sliders<br>- Input Fields", 'subtitletwo': "", 'describetwo': "", 'describethree': "", 'image': "/images/UIFull.gif"},
                    {'title': "UI Buttons", 'subtitleone': "Connect code to Buttons", 'describeone': "1. <b>Create</b> a <b>UI button</b> in your scene hierarchy.<br>2. Select the button and go to the <b>Button component</b> in the <b>Inspector</b>.<br>3. Click the <b>'+' button</b> in the On Click () list.<br>4. Drag the GameObject with the script (made for a object) to the object field.<br>5. <b>Choose the script</b> from the dropdown list.", 'subtitletwo': "", 'describetwo': "", 'describethree': "", 'classbackground': "code-background", 'code': "<br>//Add StartGame() method to button<br>public class MainMenu : MonoBehaviour<br>{<br>&nbsp&nbsppublic void StartGame()<br>&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbspSceneManager.LoadScene('GameplayScene');<br>&nbsp&nbsp}<br>}", 'image': ""},
                ]
    
                tileOne.innerHTML = `
                ${t3UIInt.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        }
    }

    function showInfoAddAsset() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'add-asset-unity' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    function showInfoAddAssetImport() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'add-asset-import' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    function showInfoAddAssetSpawn() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'add-asset-spawning' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    function showInfoDestroyAsset() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'destroy-asset' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    function showInfoUIInt() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'ui-int' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    addAssetUnity.addEventListener('click', showInfoAddAsset);
    addAssetImport.addEventListener('click', showInfoAddAssetImport);
    addAssetSpawn.addEventListener('click', showInfoAddAssetSpawn);
    destroyAsset.addEventListener('click', showInfoDestroyAsset);
    playerMovement.addEventListener('click', showInfoAddAssetSpawn);
    physicsInt.addEventListener('click', showInfoAddAssetSpawn);
    animationTriggers.addEventListener('click', showInfoAddAssetSpawn);
    cameraMovement.addEventListener('click', showInfoAddAssetSpawn);
    uiInt.addEventListener('click', showInfoUIInt);
    audioManagement.addEventListener('click', showInfoAddAssetSpawn);
    scorekeeping.addEventListener('click', showInfoAddAssetSpawn);
    enemyAI.addEventListener('click', showInfoAddAssetSpawn);
    inventorySystem.addEventListener('click', showInfoAddAssetSpawn);
    questSystem.addEventListener('click', showInfoAddAssetSpawn);
    saveSystem.addEventListener('click', showInfoAddAssetSpawn);
    multiplayerNetworking.addEventListener('click', showInfoAddAssetSpawn);
    particleEffects.addEventListener('click', showInfoAddAssetSpawn);
    terrain.addEventListener('click', showInfoAddAssetSpawn);
    localization.addEventListener('click', showInfoAddAssetSpawn);
    analytics.addEventListener('click', showInfoAddAssetSpawn);
}



//Handle clicking and showing Individual Tile - Middle
function handleIndividualTile() {
    const allTiles = document.querySelectorAll('.tile-middle');

    function hideTiles() {
        allTiles.forEach(function(tile) {
            tile.classList.toggle('hidden-middle-tile');
            setTimeout(() => {
                tile.classList.replace('hidden-middle-tile', 'hidden');
            }, 450); // Adjust the delay as needed
        })
    }

    function checkForId(id) {
        setTimeout(() => {
            const idCheck = document.getElementById(id);
            if(idCheck) {
                hideTiles();
                idCheck.classList.remove('hidden-middle-tile');
                idCheck.classList.remove('hidden');
            }
        }, 450);
    }
    
    allTiles.forEach(function(tile) {
        tile.addEventListener('click', function() {
            const tileId = this.id; // Get the ID of the clicked tile
            checkForId(tileId);
        });
    });

}

//Handle creating a section for each Tile - Right
function createInformationRight() {
    const tileContainer = document.getElementById('tileContainer');
    const tileInfoSection = document.getElementById('tile-info-section');
    const allTiles = document.querySelectorAll('.tile-middle');
    const tileInfoRight = document.getElementById('tile-info-right');
    const tileFOne = document.getElementById('T41-Levels');

    tileInfoRight.style.display = 'none';

    function hideTiles() {
        allTiles.forEach(function(tile) {
            tile.classList.toggle('hidden-middle-tile');
            setTimeout(() => {
                tile.classList.replace('hidden-middle-tile', 'hidden');
            }, 450); // Adjust the delay as needed
        })
    }

    //Hides clicked tile when information section shows up
    function hideGridSection() {
        if (tileContainer.style.display === 'grid') {
            setTimeout(() => {
                tileContainer.style.display ='none'
            }, 455);
        }
        
    }
    

    function switchRightInformation(event) {
        if (event.target.id === 'levels') {
            setTimeout(() => {
                const tLevels = [
                    {'title': "Levels Management", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "", 'code': "", 'image': "/images/BuildSettings.png"},
                    {'title': "Loading Levels", 'subtitleone': "using UnityEngine.SceneManagement", 'describeone': "<br>Access Methods from namespace", 'subtitletwo': "SceneManager.LoadScene('Level')", 'describetwo': "Class.Method('Argument')", 'describethree': "<br>*This line will load the scene written inside the quotes'' Also this line is commonly used with a condition", 'classbackground': "code-background", 'code': "<br><b>&nbspusing<b> UnityEngine.SceneManagement:<br><br>&nbsp// Load a scene<br>&nbspSceneManager.LoadScene('Level1');", 'image': ""},
                    {'title': "Check Level Scene<br>(GetActiveScene)", 'subtitleone': "using UnityEngine.SceneManagement", 'describeone': "<br>Access Methods from namespace", 'subtitletwo': "SceneManager.LoadScene(currentLevelIndex + 1);", 'describetwo': "int currentLevelIndex = SceneManager.GetActiveScene().buildIndex;<br>variable = Class.Method.", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                    {'title': "Level Selection", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                    {'title': "Level Triggers/Events", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                    {'title': "Level Player Spawning", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                    {'title': "Level Save/Load", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                    {'title': "Level Completion", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "x", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLevels.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                            <br>
                            <br>
                            <br>
                            <div>&nbsp</div>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'folders') {
            setTimeout(() => {
                const tFolderTypes = [
                    {'title': "Scenes (.unity)", 'subtitleone': "Scene files", 'describeone': "represent different<br> - levels<br>- menus<br>-other sections of your game", 'subtitletwo': "", 'describetwo': "", 'describethree': "", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Scripts (.cs, .js, .boo)", 'subtitleone': "Script files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Prefabs (.prefab)", 'subtitleone': "Prefab files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Textures (.png, .jpg, .tga)", 'subtitleone': "Image files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Materials (.mat)", 'subtitleone': "Material files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Models (.fbx, .obj)", 'subtitleone': "3D model files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Audio Clips (.mp3, .wav)", 'subtitleone': "Sound files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Animations (.anim)", 'subtitleone': "Animation files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Animations Controllers (.controller)", 'subtitleone': "Controller files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Shaders (.shader)", 'subtitleone': "Shader files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Sprites (.png)", 'subtitleone': "Image files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Fonts (.ttf, .otf)", 'subtitleone': "TrueType or OpenType font files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Scriptable Objects (.asset)", 'subtitleone': "Custom asset files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Particle Systems (.prefab)", 'subtitleone': "Prefabs", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Packages (.unitypackage)", 'subtitleone': "Unity package files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Folders and Meta Files (.meta)", 'subtitleone': "Meta files", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tFolderTypes.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'loading') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Loading the Next Scene", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Loading a Selected Scene", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "General Loading", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'saving') {
            setTimeout(() => {
                const tSaving = [
                    {'title': "Saving the Game", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Reloading a Saved Game Where You Left Off", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                    {'title': "Managing Multiple Save Files Without Interference", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tSaving.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'complete-game') {
            setTimeout(() => {
                const tCompleteGame = [
                    {'title': "Build Settings", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tCompleteGame.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'animation-clips') {
            setTimeout(() => {
                const tAnimationClips = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tAnimationClips.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        }
    }

    function resetlists() {
        const middleInformationDivs = document.querySelectorAll('.middle-information');
            middleInformationDivs.forEach(div => {
                div.innerHTML = ''; // Reset the innerHTML of each middle-information div
            });
            tileInfoSection.style.display = 'none';
            if (tileInfoRight.style.display === 'block') {
                tileInfoRight.style.display = 'none';
    }
        }

    function showInformation(targetId) {
        resetlists();
        if (this) {
            setTimeout(() => {
                // Create a dummy event object to pass to switchInformation
                const dummyEvent = { target: { id: targetId } };
                tileInfoRight.style.display = 'block';
                hideTiles()
                hideGridSection();
                // Call switchInformation function with the dummy event
                switchRightInformation(dummyEvent);
            }, 200);
        }
    }

    // Map button IDs to action functions
    const buttonData = {
        'animation-clips': [],         //Animation
        'animator-controller': [],
        'animation-events': [],
        'blend-trees': [],
        'animation-curves': [],
        'animation-rigging': [],
        'mecanim': [],
        'animation-layers': [],
        'state-machines': [],
        'keyframe-animation': [],
        'scripted-animation': [],
        'physics-based-animation': [],
        'particle-systems': [],
        'timeline': [],
        '2d-animation': [],
        'procedural-animation': [],
        'animation-blending': [],
        'asset-bundles': [],            // Asset
        'resource-management': [],
        'asset-store-integration': [],
        'prefab-variants': [],
        'scriptable-objects': [],
        'asset-pipeline': [],
        'asset-serialization': [],
        'asset-importing': [],
        'asset-management-systems': [],
        'asset-catalogs': [],
        'texture-packing': [],
        'model-optimization': [],
        'asset-prefabs': [],
        'mesh-generation': [],
        'audio-importing-management': [],
        'rigidbody': [],                 // Physics
        'collider': [],
        'physics-material': [],
        'raycasting': [],
        'collision-detection': [],
        'trigger-events': [],
        'forces': [],
        'constraints': [],
        'joints': [],
        'character-controller': [],
        'physics-layers': [],
        'kinematic-bodies': [],
        'continuous-collision-detection': [],
        'physics-queries': [],
        'transform': [],               // Location
        'position': [],
        'rotation': [],
        'velocity': [],
        'acceleration': [],
        'speed': [],
        'movement': [],
        'pathfinding': [],
        'navmesh': [],
        'waypoints': [],
        'destination': [],
        'destination-reached': [],
        'lerp': [],
        'slerp': [],
        'interpolation': [],
        'particle-system': [],          // Particle
        'emission': [],
        'lifetime': [],
        'speed': [],
        'size-over-lifetime': [],
        'color-over-lifetime': [],
        'rotation-over-lifetime': [],
        'force-over-lifetime': [],
        'collision': [],
        'triggers': [],
        'sub-emitters': [],
        'texture-sheet-animation': [],
        'custom-shaders': [],
        'gpu-simulation': [],
        'scripting-api': [],
        'canvas': [],                    // UI
        'ui-elements': [],
        'rect-transform': [],
        'layout-group': [],
        'text': [],
        'images': [],
        'buttons': [],
        'input-fields': [],
        'dropdowns': [],
        'scroll-views': [],
        'event-system': [],
        'ui-animation': [],
        'ui-navigation': [],
        'ui-interactivity': [],
        'ui-scaling': [],
        'audio-source': [],               // Audio
        'audio-clip': [],
        'audio-listener': [],
        'volume-control': [],
        'pitch-control': [],
        'spatial-audio': [],
        '3d-sound': [],
        'background-music': [],
        'sound-effects': [],
        'play-one-shot': [],
        'looping-audio': [],
        'audio-mixer': [],
        'audio-groups': [],
        'doppler-effect': [],
        'spatialization': [],
        'network-manager': [],           // Networking
        'network-server': [],
        'network-client': [],
        'network-behaviour': [],
        'network-identity': [],
        'sync-vars': [],
        'rpcs': [],
        'networking-messages': [],
        'server-authority': [],
        'client-prediction': [],
        'server-reconciliation': [],
        'network-transform': [],
        'lobby-system': [],
        'matchmaking': [],
        'networked-prefabs': []
    };
    
    document.addEventListener('click', function(event) {
        const targetId = event.target.id;
        if (targetId in buttonData) {
            showInformation(targetId);
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'levels') {                //P1 list
            showInformation('levels');
        } else if (event.target.id === 'folders') {
            showInformation('folders');
        } else if (event.target.id === 'loading') {
            showInformation('loading');
        } else if (event.target.id === 'saving') {
            showInformation('saving');
        } else if (event.target.id === 'complete-game') {
            showInformation('complete-game');
        } 
    });
}

//Handle creating a section for each Tile - Right
function createInformationRightTwo() {
    const tileContainer = document.getElementById('tileContainer');
    const tileInfoSection = document.getElementById('tile-info-section');
    const allTiles = document.querySelectorAll('.tile-middle');
    const tileInfoRight = document.getElementById('tile-info-right');
    const tileFOne = document.getElementById('T41-Levels');

    tileInfoRight.style.display = 'none';

    function hideTiles() {
        allTiles.forEach(function(tile) {
            tile.classList.toggle('hidden-middle-tile');
            setTimeout(() => {
                tile.classList.replace('hidden-middle-tile', 'hidden');
            }, 450); // Adjust the delay as needed
        })
    }

    //Hides clicked tile when information section shows up
    function hideGridSection() {
        if (tileContainer.style.display === 'grid') {
            setTimeout(() => {
                tileContainer.style.display ='none'
            }, 455);
        }
        
    }
    

    function switchRightInformation(event) {
        if (event.target.id === 'game-object') {          //Keywords
            setTimeout(() => {
                const tLevels = [
                    {'title': "Game Objects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>In Unity, you might create a GameObject to represent a player character", 'subtitletwo': "Code Explained", 'describetwo': "<br>-<b>Game Object</b> is a class in Unity<br>-<b>player</b> is a variable name<br>-<b>new</b> is used to create a new instance of a class<br>-<b>('Player')</b> This is a constructor call that creates a new GameObject with the name 'Player'<br><br>Used to create a new GameObject with the name ('Player')", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject player = new GameObject('Player');", 'image': ""}, 
                    {'title': "Accessing and Modifying Transform Properties", 'subtitleone': "cube.transform.position = new Vector3(0, 0, 0);", 'describeone': "<br>object.component.property<br><br>sets the position of the cube <u>GameObject</u> to the origin point(0,0,0) in the world space<br>", 'subtitletwo': "cube.transform.rotation = Quaternion.identity;", 'describetwo': "<br>Quatenion.identity (static property of the Quaternion struct in Unity) represents no rotation", 'describethree': "<span class='subtitle'>cube.transform.localScale = new Vector3(2, 2, 2);</span><br>sets the scale of the cube GameObject to (2, 2, 2) using all three axes (x, y, and z)<br><br><b>new Vector3(2, 2, 2)</b>; creates a new instance of the Vector3 struct in Unity with specific x, y, and z component values", 'classbackground': "code-background", 'code': "<br>cube.transform.position = new Vector3(0, 0, 0);<br>cube.transform.rotation = Quaternion.identity;<br>cube.transform.localScale = new Vector3(2, 2, 2);", 'image': ""}, 
                    {'title': "Adding Components to GameObjects", 'subtitleone': "cube.AddComponent&ltMeshRenderer&gt();", 'describeone': "<br>object.Method.&ltTypes of Components&gt", 'subtitletwo': "&lt&gt notation to represent a placeholder or variable", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>cube.AddComponent&ltMeshRenderer&gt();<br>cube.AddComponent&ltBoxCollider&gt();", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "public GameObject prefabToInstantiate;", 'describeone': "<br>This line declares a public variable prefabToInstantiate of type GameObject<br><br>In the Unity Editor, you can assign a prefab to this variable by dragging and dropping the prefab onto the corresponding field in the Inspector window.", 'subtitletwo': "void Start()", 'describetwo': "<br>Unity calls the Start() method automatically when the game starts or when the GameObject becomes active in the scene.", 'describethree': "<br>GameObject instantiatedObject = Instantiate(prefabToInstantiate, new Vector3(0, 0, 0), Quaternion.identity);<br><br>This line instantiates a new instance of the prefab referenced by prefabToInstantiate at the position (0, 0, 0) with no rotation<br><br>Instantiate() is a Unity function used to create instances of prefabs or other GameObjects at runtime.<br><br>In summary, when the Start() method is called, it instantiates a new instance of the prefab specified by prefabToInstantiate at the specified position and rotation. <b>This is a common way to create and spawn objects dynamically during gameplay in Unity.</b>", 'classbackground': "code-background", 'code': "<br>public GameObject prefabToInstantiate;<br><br>void Start()<br>{&nbsp&nbspGameObject instantiatedObject = &nbsp&nbspInstantiate(prefabToInstantiate, new &nbsp&nbspVector3(0, 0, 0), Quaternion.identity);<br>}", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "Find", 'describeone': "<br>This finds a GameObject named 'Cube' in the scene by its name. It's useful for accessing GameObjects that are already present in the scene.", 'subtitletwo': "", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "Destroy", 'describeone': "<br>This destroys the GameObject named 'Cube' and removes it from the scene.<br><br> It's commonly used to remove GameObjects when they're no longer needed, such as when an enemy is defeated or an item is collected.", 'subtitletwo': "", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""}, 
                ]
    
                tileFOne.innerHTML = `
                ${tLevels.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                            <br>
                            <div>&nbsp</div>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'transform') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Transform", 'subtitleone': "Transform", 'describeone': "Transform represents the position, rotation, and scale of a GameObject in Unity.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Accessing the position of a GameObject<br>Vector3 position = transform.position;<br>&nbsp<br>// Example 2: Rotating a GameObject<br>transform.Rotate(Vector3.up * Time.deltaTime);", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'mono-behaviour') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Mono Behaviour", 'subtitleone': "Mono Behaviour", 'describeone': "MonoBehaviour is the base class for Unity scripts that allow interaction with GameObjects.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Creating a custom script<br>public class MyScript : MonoBehaviour { }<br>&nbsp<br>// Example 2: Implementing Start method in a script<br>void Start() { /* Initialization code */ }", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'new-keyword') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "new", 'subtitleone': "new", 'describeone': " 'new' is a keyword used to create new instances of classes or structs.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Creating a new instance of a class<br>MyClass newObj = new MyClass();<br>&nbsp<br>// Example 2: Creating a new Vector3 object<br>Vector3 position = new Vector3(0, 0, 0);", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'start') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "start", 'subtitleone': "start", 'describeone': "Start is a Unity event method called once when a GameObject is enabled and the script starts.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Initialization code in Start method<br>void Start() { /* Initialization code */ }<br>&nbsp<br>// Example 2: Starting a coroutine in Start method<br>void Start() { StartCoroutine(MyCoroutine()); }", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'update') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "update", 'subtitleone': "update", 'describeone': "Update is a Unity event method called once per frame.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>/ Example 1: Moving a GameObject in Update method<br>void Update() { transform.Translate(Vector3.forward * Time.deltaTime); }<br>&nbsp<br>// Example 2: Checking input in Update method<br>void Update() { if (Input.GetKeyDown(KeyCode.Space)) { /* Code for space key pressed */ } }", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'coroutine') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Coroutine", 'subtitleone': "Coroutine", 'describeone': "Coroutines allow you to execute code over multiple frames, enabling tasks like animations, delays, or complex behaviors without blocking the main thread.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Delay before performing an action<br>IEnumerator DelayedAction(float delay)<br>{<br>&nbsp&nbsp&nbsp&nbspyield return new WaitForSeconds(delay);<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Action performed after ' + delay + ' seconds.');<br>&nbsp&nbsp&nbsp&nbsp// Perform the action after the delay<br>}<br>&nbsp<br>// Start the coroutine with a 2-second delay<br>StartCoroutine(DelayedAction(2f));", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'instantiate') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Instantiate", 'subtitleone': "Instantiate", 'describeone': "Instantiate creates instances of prefabs or game objects during runtime, allowing dynamic creation of objects.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Instantiate a prefab at a specific position and rotation<br>public GameObject prefabPrefab;<br>Vector3 spawnPosition = new Vector3(0, 0, 0);<br>Quaternion spawnRotation = Quaternion.identity;<br>Instantiate(prefabPrefab, spawnPosition, spawnRotation);<br>&nbsp<br>// Example 2: Create multiple clones of an object in a loop<br>for (int i = 0; i < 5; i++)<br>{<br>&nbsp&nbsp&nbsp&nbspInstantiate(someObjectPrefab, new Vector3(i * 2, 0, 0), Quaternion.identity);<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'destroy') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Destroy", 'subtitleone': "Destroy", 'describeone': "Destroy removes game objects or components from the scene during runtime, enabling object cleanup and management.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Destroy an object after a delay<br>Destroy(gameObject, 3); // Destroy the current game object after 3 seconds<br>&nbsp<br>// Example 2: Destroy all game objects with a specific tag<br>GameObject[] enemies = GameObject.FindGameObjectsWithTag('Enemy');<br>foreach (GameObject enemy in enemies)<br>{<br>&nbsp&nbsp&nbsp&nbspDestroy(enemy);<br>}", 'image': ""}, 
                    {'title': "Destroy Collide", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'set-active') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Set Active", 'subtitleone': "Set Active", 'describeone': "SetActive toggles the active state of game objects, controlling their visibility and behavior in the scene.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Activate or deactivate a game object based on a condition<br>gameObject.SetActive(true); // Activate the current game object<br>gameObject.SetActive(false); // Deactivate the current game object<br>&nbsp<br>// Example 2: Toggle the active state of a UI panel<br>public GameObject panel;<br>panel.SetActive(!panel.activeSelf); // Toggle the active state of the panel", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'get-component') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Get Components", 'subtitleone': "Get Components", 'describeone': "GetComponent retrieves a component attached to a game object, allowing access to its properties and methods.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Access the Rigidbody component of a game object<br>Rigidbody rb = gameObject.GetComponent<Rigidbody>();<br>&nbsp<br>// Example 2: Enable or disable a script component based on a condition<br>MyScript scriptComponent = gameObject.GetComponent<MyScript>();<br>scriptComponent.enabled = true; // Enable the script component", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'transform-position') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Transform Position", 'subtitleone': "Transform Position", 'describeone': "Transform.position represents the position of a game object in 3D space, allowing you to move or manipulate its position.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Set the position of a game object<br>transform.position = new Vector3(1, 2, 3); // Set position to (1, 2, 3)<br>&nbsp<br>// Example 2: Move an object smoothly over time using Lerp<br>Vector3 targetPosition = new Vector3(5, 0, 0);<br>float speed = 2f;<br>transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * speed);", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'quaternion') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Quaternion", 'subtitleone': "Quaternion", 'describeone': "Quaternion represents rotations in Unity, providing a way to rotate game objects without gimbal lock issues.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Rotate a game object around its forward axis<br>transform.rotation = Quaternion.AngleAxis(90, Vector3.forward);<br>&nbsp<br>// Example 2: Smoothly rotate an object towards a target direction<br>Vector3 targetDirection = Vector3.right;<br>float rotationSpeed = 5f;<br>Quaternion targetRotation = Quaternion.LookRotation(targetDirection);<br>transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.deltaTime * rotationSpeed);", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'vector3') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Vector3", 'subtitleone': "Vector3", 'describeone': "Vector3 represents points or directions in 3D space, commonly used for positions, directions, and velocities.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Calculate the distance between two points<br>Vector3 pointA = new Vector3(0, 0, 0);<br>Vector3 pointB = new Vector3(3, 4, 0);<br>float distance = Vector3.Distance(pointA, pointB);<br>&nbsp<br>// Example 2: Normalize a vector to get its direction<br>Vector3 direction = (targetPosition - transform.position).normalized;", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'raycast') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Raycast", 'subtitleone': "Raycast", 'describeone': " Raycast casts a ray into the scene to detect collisions or intersections with other objects, useful for detecting hits, shooting, or interacting with objects", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example 1: Perform a raycast from the mouse position<br>Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);<br>RaycastHit hitInfo;<br>if (Physics.Raycast(ray, out hitInfo))<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Hit object: ' + hitInfo.collider.gameObject.name);<br>&nbsp&nbsp&nbsp&nbsp// Perform actions based on the hit object<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'loading') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Adding Components to GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'variable-declaration') {   //variable
            setTimeout(() => {
                const tLoading = [
                    {'title': "Variable Declaration", 'subtitleone': "Variable Declaration", 'describeone': "Variable declaration is the process of defining a variable's name and type.", 'subtitletwo': "Code Explained", 'describetwo': "<br>The variable assigned to int is saying this variable will hold a integer<br><br>The variable assigned to GameObject will have access to GameObjects properties and methods", 'describethree': "", 'classbackground': "code-background", 'code': "<br>int score; // Declaring an integer variable named 'score'<br><br>GameObject player; // Declaring a GameObject variable named 'player'", 'image': ""}, 
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'variable-initialize') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Variable Initialization", 'subtitleone': "Variable Initialization", 'describeone': "Variable initialization is the process of assigning an initial value to a variable.", 'subtitletwo': "Code Explained", 'describetwo': "<br>Both variables are assigned a type and the value is the type chosen", 'describethree': "", 'classbackground': "code-background", 'code': "<br>int health = 100; // Initializing an integer variable 'health' with the value 100<br><br>string playerName = 'John'; // Initializing a string variable 'playerName' with the value 'John'", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'var') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Var", 'subtitleone': "var", 'describeone': "The var keyword in C# allows you to declare variables without explicitly specifying their data types.<br><br>Instead, the compiler infers the data type based on the assigned value.", 'subtitletwo': "Code Explained", 'describetwo': "var is used next to each variable without declaring the type because it allows the compiler to determine the data type of the variable", 'describethree': "", 'classbackground': "code-background", 'code': "<br>int health = 100; // Initializing an integer variable 'health' with the value 100<br><br>var speed = 5; // Compiler infers speed as an integer<br>var position = new Vector3(0, 0, 0); // Compiler infers position as a Vector3", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'const') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Const", 'subtitleone': "const", 'describeone': "used to declare constants, whose values cannot be changed once initialized.", 'subtitletwo': "Code Explained", 'describetwo': "These variables are assigned the keyoword const and a data type<br><br>A const to make sure the values can not be changed anytime<br><br>Use when needed", 'describethree': "", 'classbackground': "code-background", 'code': "<br>const float Gravity = 9.81f; // Declaring a constant gravity with a value of 9.81<br><br>const string GameTitle = 'My Game'; // Declaring a constant string for the game title", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'data-types') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Data Types", 'subtitleone': "data-types", 'describeone': "<br>Data types define the type of data a variable can hold.", 'subtitletwo': "Code Explained", 'describetwo': "<br>Each variable holds a data type <br>before giving it a value", 'describethree': "", 'classbackground': "code-background", 'code': "<br>int playerScore = 100; // Integer data type<br><br>float playerHealth = 75.5f; // Float data type<br><br>string playerName = 'Player'; // String data type<br><br>bool isGameOver = false; // Boolean data type", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'public-variables') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Public Variables", 'subtitleone': "Public Variables", 'describeone': "Public variables can be accessed and modified from other scripts.", 'subtitletwo': "Code Explained", 'describetwo': "<br>These variables can be accessed from other scripts in your game and seen in your component inside the editor", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public int health = 100;<br><br>public GameObject playerObject;", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'private-variables') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Private Variables", 'subtitleone': "Private Variables", 'describeone': "Private variables are only accessible within the class they are declared in.", 'subtitletwo': "Code Explained", 'describetwo': "<br>These variables that are private will only be accessible inside the class it was created in", 'describethree': "", 'classbackground': "code-background", 'code': "<br>private int score = 0;<br><br>private string playerName = 'Player';", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'static-variables') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Static Variable", 'subtitleone': "Static Variable", 'describeone': "Static variables are associated with the class itself, not with individual instances of the class.<br><br>This means that all instances of the class share the same static variable. ", 'subtitletwo': "Shared Across Instances:", 'describetwo': "Since static variables are associated with the class, their values are shared across all instances of the class.<br><br>If one instance modifies the static variable, the change is visible to all other instances.", 'describethree': "<br><b>Accessed Through the Class Name:</b><br>Static variables are accessed using the class name, rather than through an instance of the class. This is because they don't belong to any particular instance.", 'classbackground': "code-background", 'code': "<br>public class ExampleClass<br>{<br>&nbsp&nbsp&nbsp&nbsppublic static int instanceCount = 0;<br>&nbsp&nbsp&nbsp&nbsp<br>&nbsp&nbsp&nbsp&nbsppublic ExampleClass()<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspinstanceCount++;<br>&nbsp&nbsp&nbsp&nbsp}<br>}<br><br>public class Program<br>{<br>&nbsp&nbsp&nbsp&nbsppublic static void Main(string[] args)<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspExampleClass obj1 = new &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspExampleClass();<br>&nbspConsole.WriteLine('Number of instances created: ' + ExampleClass.instanceCount);<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'instance-variables') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Instance Variables", 'subtitleone': "Instance Variables", 'describeone': "Instance variables are declared within a class but outside of any method, constructor, or block.<br><br>They define the attributes or properties that each object (instance) of the class will possess.", 'subtitletwo': "Unique to Each Instance", 'describetwo': "Each instance of the class has its own set of instance variables.<br><br>This means that changes made to instance variables of one object do not affect the instance variables of other objects.", 'describethree': "<br><b>Accessed through Instances</b><br>Instance variables are accessed using instances (objects) of the class. Each object has its own copy of the instance variables.", 'classbackground': "code-background", 'code': "<br>public class Car<br>{<br> // Instance variables<br>&nbsp&nbsp&nbsp&nbsppublic string make;<br>&nbsp&nbsp&nbsp&nbsppublic string model;<br>&nbsp&nbsp&nbsp&nbsppublic int year;<br>}<br><br>public class Program<br>{<br>&nbsp&nbsp&nbsp&nbsppublic static void Main(string[] args)<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCar car1 = new Car();<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcar1.make = 'Toyota';<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcar1.model = 'Camry';<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcar1.year = 2020;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspConsole.WriteLine('Car 1: ' + car1.make + ' ' + car1.model + ' ' + car1.year);<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'method-declaration') {  //Method
            setTimeout(() => {
                const tLoading = [
                    {'title': "Method Declaration", 'subtitleone': "Method Declaration", 'describeone': "Method declaration defines the signature and implementation of a function.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void MovePlayer() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Implementation of moving the player<br>}<br><br>int CalculateSum(int a, int b) <br>{<br>&nbsp&nbsp&nbsp&nbspreturn a + b;<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'void-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Void Methods", 'subtitleone': "Void Methods", 'describeone': "<br>Void methods do not return any value.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void PrintMessage() <br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Hello, World!');<br>}<br><br>void RotateObject() <br>{<br>&nbsp&nbsp&nbsp&nbsptransform.Rotate(Vector3.up * Time.deltaTime);<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'return-types') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Return Types", 'subtitleone': "Return Types", 'describeone': "Return types specify the type of value returned by the method.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>int CalculateSum(int a, int b) <br>{<br>&nbsp&nbsp&nbsp&nbspreturn a + b;<br>}<br><br>string GetPlayerName() <br>{<br>&nbsp&nbsp&nbsp&nbspreturn playerName;<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'parameterized-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Parameterized Methods", 'subtitleone': "Parameterized Methods", 'describeone': "Parameterized methods allow you to pass values to a method when you call it. These values are called parameters, and they provide information that the method can use to perform its tasks.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void MovePlayer(Vector3 direction) <br>{<br>&nbsp&nbsp&nbsp&nbsptransform.Translate(direction * Time.deltaTime);<br>}<br><br>float CalculateArea(float radius) <br>{<br>&nbsp&nbsp&nbsp&nbspreturn Mathf.PI * radius * radius;<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'overloading-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Overloading Methods", 'subtitleone': "Overloading Methods", 'describeone': "Overloading methods allow defining multiple methods with the same name but different parameters.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void SpawnEnemy() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Implementation for spawning an enemy without parameters<br>}<br><br>void SpawnEnemy(Vector3 position) <br>{<br>&nbsp&nbsp&nbsp&nbsp// Implementation for spawning an enemy at a specific position<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'access-modifiers') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Access Modifiers Public-Private", 'subtitleone': "Access Modifiers", 'describeone': "Access modifiers define the accessibility of methods.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public void PublicMethod() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Public method accessible from anywhere<br>}<br><br>private void PrivateMethod() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Private method accessible only within the class<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'public-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Public Method", 'subtitleone': "Public Method", 'describeone': "Public methods are declared with the public access modifier, making them accessible from any other part of your codebase. ", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// This public method moves the player by a specified direction<br>public void MovePlayer(Vector3 direction) <br>{<br>&nbsp&nbsp&nbsp&nbsptransform.Translate(direction * Time.deltaTime);<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'private-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Private Method", 'subtitleone': "Private Method", 'describeone': "Private methods are declared with the private access modifier, making them accessible only within the same class or script where they are defined.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// This private method calculates the damage dealt to a target<br>private int CalculateDamage(int baseDamage, float damageMultiplier) <br>{<br>&nbsp&nbsp&nbsp&nbspreturn Mathf.RoundToInt(baseDamage * damageMultiplier);<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'static-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Static Method", 'subtitleone': "Static Method", 'describeone': "Static methods are associated with the class itself rather than with instances (objects) of the class. This means that you can call a static method without creating an instance of the class. ", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public static void PrintMessage() <br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Hello, World!');<br>}<br><br>public static float CalculateSpeed(float distance, float time) <br>{<br>&nbsp&nbsp&nbsp&nbspreturn distance / time;<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'instance-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Instance Methods", 'subtitleone': "Instance Methods", 'describeone': "Instance methods are methods that belong to instances (objects) of a class. They operate on the specific instance of the class that calls them and have access to instance variables and other instance methods within the same class.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// This instance method moves the player by a specified direction<br>public void MovePlayer(Vector3 direction) <br>{<br>&nbsp&nbsp&nbsp&nbsptransform.Translate(direction * Time.deltaTime);<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'built-in-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Built In Methods", 'subtitleone': "Built In Methods", 'describeone': "Built-in methods are provided by Unity or C# for common operations.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void Start() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Initialization code goes here<br>}<br><br>void Update() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Per-frame update code goes here<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'importing-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Importing Methods", 'subtitleone': "Importing Methods", 'describeone': "Importing methods involves bringing in functionalities from external libraries or namespaces.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>using UnityEngine; // Importing the UnityEngine namespace for Unity functionalities<br>&nbsp<br>// Importing a custom namespace for additional functionalities<br>using MyNamespace;", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'coroutine-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Coroutine Methods", 'subtitleone': "Coroutine Methods", 'describeone': "Coroutine methods allow for asynchronous execution of code over multiple frames.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example of a coroutine method for delaying an action<br>&nbsp<br>IEnumerator DelayedAction(float delay) <br>{<br>&nbsp&nbsp&nbsp&nbspyield return new WaitForSeconds(delay);<br>&nbsp&nbsp&nbsp&nbsp// Perform delayed action here<br>}<br>&nbsp<br>// Example of starting a coroutine<br>StartCoroutine(DelayedAction(2.0f));", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'extension-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Extension Methods", 'subtitleone': "Extension Methods", 'describeone': "Extension methods allow adding new functionalities to existing classes without modifying their source code.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Extension method to capitalize the first letter of a string<br>&nbsp<br>public static string CapitalizeFirstLetter(this string str) <br>{<br>&nbsp&nbsp&nbsp&nbspif (string.IsNullOrEmpty(str))<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspreturn str;<br>&nbsp&nbsp&nbspreturn char.ToUpper(str[0]) + str.Substring(1);<br>}<br>&nbsp<br>// Using the extension method<br>string greeting = 'hello';<br>string capitalizedGreeting = greeting.CapitalizeFirstLetter();", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'event-handling-methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Event Handling Methods", 'subtitleone': "Event Handling Methods", 'describeone': "Event handling methods respond to events triggered during runtime.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>// Example of an event handling method for collision detection<br>&nbsp<br>void OnCollisionEnter(Collision collision) <br>{<br>&nbsp&nbsp&nbsp&nbsp// Handle collision event here<br>}<br>&nbsp<br>// Example of an event handling method for mouse clicks<br>void OnMouseDown() <br>{<br>&nbsp&nbsp&nbsp&nbsp// Handle mouse down event here<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'class-declaration') {          //Class
            setTimeout(() => {
                const tLevels = [
                    {'title': "Class Declaration", 'subtitleone': "Defining a template for creating objects", 'describeone': "<br>A class declaration includes:<ul><li><b>Class Keyword</b></li><li><b>Class Name</b></li><li><b>Class Body</b></li></ul>", 'subtitletwo': "A class contains", 'describetwo': "Fields ex(Name, Age - member variables)<br><br>Fields <b>represent data or state</b> associated with each instance of the class", 'describethree': "<br>Methods ex(SayHello() - member functions)<br><br>Methods <b>define the behavior or actions</b> that instances of the class can perform", 'classbackground': "code-background", 'code': "<br>public class Person<br>{<br>&nbsp&nbsp&nbsp&nbsp// Fields (member variables)<br>&nbsp&nbsp&nbsp&nbsppublic string Name;<br>&nbsp&nbsp&nbsp&nbsppublic int Age;<br>&nbsp&nbsp&nbsp&nbsp<br>&nbsp&nbsp&nbsp&nbsp// Methods (member functions)<br>&nbsp&nbsp&nbsp&nbsppublic void SayHello()<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbspConsole.WriteLine('Hello, my name is ' + Name);<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                ]
    
                tileFOne.innerHTML = `
                ${tLevels.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                            <br>
                            <div>&nbsp</div>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'class-instance') { 
            setTimeout(() => {
                const tLevels = [
                    {'title': "Class Instance", 'subtitleone': "Objects", 'describeone': "refers to a specific occurrence of a class.", 'subtitletwo': "Car car1 = new Car();", 'describetwo': "Class object = key From Class", 'describethree': "<br><span class='subtitle'>car1.Model = 'Toyota'</span><br>Object.Feild = Argument;", 'classbackground': "code-background", 'code': "<br>public class Car<br>{<br>&nbsp&nbsp&nbsp&nbsppublic string Model;<br>&nbsp&nbsp&nbsp&nbsppublic string Color;<br>&nbsp&nbsp&nbsp&nbsp<br>&nbsp&nbsp&nbsp&nbsppublic void Drive()<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbspConsole.WriteLine('The ' + Color + ' ' + &nbsp&nbsp&nbsp&nbsp&nbspModel + ' is driving.');<br>&nbsp&nbsp&nbsp&nbsp}<br>}<br>Car car1 = new Car();<br>car1.Model = 'Toyota';<br>car1.Color = 'Blue';<br><br>Car car2 = new Car();<br>car2.Model = 'Ford';<br>car2.Color = 'Red';", 'image': ""},
                    
                ]
    
                tileFOne.innerHTML = `
                ${tLevels.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                            <br>
                            <div>&nbsp</div>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'constructor') { 
            setTimeout(() => {
                const tLevels = [
                    {'title': "Class Constructor", 'subtitleone': "Class Constructor", 'describeone': "Constructor initializes objects of a class.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public Player()<br>{<br>&nbsp&nbsp&nbsp&nbsp// Constructor for Player class<br>}<br>&nbsp<br>public Enemy(float health)<br>{<br>&nbsp&nbsp&nbsp&nbsp// Constructor for Enemy class with parameter<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLevels.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                            <br>
                            <div>&nbsp</div>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'properties') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Properties", 'subtitleone': "Properties", 'describeone': "Properties define the attributes of objects.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public class Player<br>{<br>&nbsp&nbsp&nbsp&nbsppublic int Health { get; set; } // Health property<br>}<br><br>public class Enemy<br>{<br>&nbsp&nbsp&nbsp&nbsppublic string Name { get; set; } // Name property<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'fields') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Fields", 'subtitleone': "Fields", 'describeone': "Fields store data within objects.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public class Player<br>{<br>&nbsp&nbsp&nbsp&nbspprivate int score; // Score field<br>}<br><br>public class Enemy<br>{<br>&nbsp&nbsp&nbsp&nbsppublic float speed; // Speed field<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'methods') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Methods", 'subtitleone': "Methods", 'describeone': "Methods define behavior or actions of objects.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public class Player<br>{<br>&nbsp&nbsp&nbsp&nbsppublic void Move() { /* Move logic / } // Move method<br>}<br><br>public class Enemy<br>{<br>&nbsp&nbsp&nbsp&nbsppublic void Attack() { / Attack logic */ } // Attack method<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'inheritance') { //class
            setTimeout(() => {
                const tLoading = [
                    {'title': "Inheritance", 'subtitleone': "Inheritance", 'describeone': "Inheritance allows a class to inherit properties and behavior from another class.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>public class Player : Character<br>{<br>&nbsp&nbsp&nbsp&nbsp// Player inherits from Character<br>}<br><br>public class Enemy : Character<br>{<br>&nbsp&nbsp&nbsp&nbsp// Enemy inherits from Character<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'awake') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Awake()", 'subtitleone': "Awake()", 'describeone': "The Awake method is called when a script instance is being loaded. It's used for initializing variables or setting up references.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void Awake()<br>{<br>&nbsp&nbsp&nbsp&nbspplayer = GameObject.FindWithTag('Player');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'start') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Start()", 'subtitleone': "Start()", 'describeone': "The Start method is called before the first frame update. It's often used for initialization tasks that require all objects to be set up.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "void Start()<br>{<br>&nbsp&nbsp&nbsp&nbsprb = GetComponent<Rigidbody>();<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'update') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Update()", 'subtitleone': "Update()", 'describeone': " The Update method is called once per frame. It's commonly used for regular updates such as input processing or updating game state", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void Update()<br>{<br>&nbsp&nbsp&nbsp&nbspif (Input.GetKeyDown(KeyCode.Space))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspJump();<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'fixed-update') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Fixed Update()", 'subtitleone': "Fixed Update()", 'describeone': "The FixedUpdate method is called at a fixed time interval, typically used for physics-related updates.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void FixedUpdate()<br>{<br>&nbsp&nbsp&nbsp&nbsprb.MovePosition(rb.position + move * moveSpeed * Time.fixedDeltaTime);<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'late-update') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "LateUpdate()", 'subtitleone': "LateUpdate()", 'describeone': "The LateUpdate method is called after all Update functions have been called. It's commonly used for camera manipulation or following objects", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void LateUpdate()<br>{<br>&nbsp&nbsp&nbsp&nbsptransform.position = player.transform.position + offset;<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-enable') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnEnable()", 'subtitleone': "OnEnable()", 'describeone': "The OnEnable method is called when the object becomes enabled and active. It's used for setting up resources or registering listeners.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnEnable()<br>{<br>&nbsp&nbsp&nbsp&nbspEventManager.OnPlayerDeath += RespawnPlayer;<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-disable') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnDisable()", 'subtitleone': "OnDisable()", 'describeone': "The OnDisable method is called when the object becomes disabled or inactive. It's used for cleaning up resources or unregistering listeners", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnDisable()<br>{<br>&nbsp&nbsp&nbsp&nbspEventManager.OnPlayerDeath -= RespawnPlayer;<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-destroy') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnDestroy()", 'subtitleone': "OnDestroy()", 'describeone': "The OnDestroy method is called when the object is being destroyed. It's used for releasing resources or performing cleanup tasks.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnDestroy()<br>{<br>&nbsp&nbsp&nbsp&nbspDestroy(gameObject);<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-validate') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnValidate()", 'subtitleone': "OnValidate()", 'describeone': "The OnValidate method is called whenever the script's properties are modified in the Unity Editor.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnValidate()<br>{<br>&nbsp&nbsp&nbsp&nbsp// Called when any property is modified in the Unity Editor<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Script properties were modified.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-trigger-enter') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnTriggerEnter()", 'subtitleone': "OnTriggerEnter()", 'describeone': "The OnTriggerEnter method is called when another collider enters a trigger collider attached to the same GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnTriggerEnter(Collider other)<br>{<br>&nbsp&nbsp&nbsp&nbspif (other.CompareTag('Player'))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Player entered the trigger zone.');<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-trigger-exit') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnTriggerExit()", 'subtitleone': "OnTriggerExit()", 'describeone': "The OnTriggerExit method is called when another collider exits a trigger collider attached to the same GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnTriggerExit(Collider other)<br>{<br>&nbsp&nbsp&nbsp&nbspif (other.CompareTag('Enemy'))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Enemy exited the trigger zone.');<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-collision-enter') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnCollisionEnter()", 'subtitleone': "OnCollisionEnter()", 'describeone': "The OnCollisionEnter method is called when another collider enters a collision collider attached to the same GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnCollisionEnter(Collision collision)<br>{<br>&nbsp&nbsp&nbsp&nbspif (collision.gameObject.CompareTag('Projectile'))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Projectile collided with the object.'');<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-collision-exit') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnCollisionExit()", 'subtitleone': "OnCollisionExit()", 'describeone': "The OnCollisionExit method is called when another collider exits a collision collider attached to the same GameObject", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnCollisionExit(Collision collision)<br>{<br>&nbsp&nbsp&nbsp&nbspif (collision.gameObject.CompareTag('Player'))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Player exited the collision zone.');<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-mouse-enter') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnMouseEnter()", 'subtitleone': "OnMouseEnter()", 'describeone': "The OnMouseEnter method is called when the mouse pointer enters the collider of the GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnMouseEnter()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Mouse pointer entered the object.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-mouse-exit') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnMouseExit()", 'subtitleone': "OnMouseExit()", 'describeone': "The OnMouseExit method is called when the mouse pointer exits the collider of the GameObject", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnMouseExit()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Mouse pointer exited the object.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-mouse-down') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnMouseDown()", 'subtitleone': "OnMouseDown()", 'describeone': "The OnMouseDown method is called when the user presses the mouse button while over the collider of the GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnMouseDown()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Mouse button was pressed over the object.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-mouse-up') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnMouseUp()", 'subtitleone': "OnMouseUp()", 'describeone': "The OnMouseUp method is called when the user releases the mouse button after clicking over the collider of the GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnMouseUp()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Mouse button was released over the object.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-gui') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnGUI()", 'subtitleone': "OnGUI()", 'describeone': "The OnGUI method is called multiple times per frame to render and handle GUI events.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnGUI()<br>{<br>&nbsp&nbsp&nbsp&nbspGUI.Label(new Rect(10, 10, 100, 20), 'Hello, World!');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-mouse-over') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnMouseOver()", 'subtitleone': "OnMouseOver()", 'describeone': "The OnMouseOver method is called every frame while the mouse pointer is over the collider of the GameObject.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnMouseOver()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Mouse pointer is over the object.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-mouse-drag') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnMouseDrag()", 'subtitleone': "OnMouseDrag()", 'describeone': "The OnMouseDrag method is called when the user drags the mouse over the collider of the GameObject", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnMouseDrag()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Mouse is being dragged over the object.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-controller-collider-hit') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnControllerColliderHit()", 'subtitleone': "OnControllerColliderHit()", 'describeone': "The OnControllerColliderHit method is called when the character controller hits a collider while performing a move", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void Start()<br>{<br>&nbsp&nbsp&nbsp&nbsp// Get a reference to the CharacterController component<br>&nbsp&nbsp&nbsp&nbspcharacterController = GetComponent<CharacterController>();<br>}<br>&nbsp<br>void OnControllerColliderHit(ControllerColliderHit hit)<br>{<br>&nbsp&nbsp&nbsp&nbsp// Check if the collision involves the player character<br>&nbsp&nbsp&nbsp&nbspif (hit.collider.CompareTag('Enemy'))<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Player collided with an enemy!');<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp// Perform actions such as taking damage or triggering an event<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-application-quit') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnApplicationQuit()", 'subtitleone': "OnApplicationQuit()", 'describeone': "The OnApplicationQuit method is called when the application is about to quit", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnApplicationQuit()<br>{<br>&nbsp&nbsp&nbsp&nbspDebug.Log('Application is quitting.');<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-application-pause') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnApplicationPause()", 'subtitleone': "OnApplicationPause()", 'describeone': "The OnApplicationPause method is called when the application is paused or resumed", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnApplicationPause(bool pauseStatus)<br>{<br>&nbsp&nbsp&nbsp&nbspif (pauseStatus)<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Application is paused.');<br>&nbsp&nbsp&nbsp&nbsp}<br>&nbsp&nbsp&nbsp&nbspelse<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Application is resumed.');<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'on-application-focus') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "OnApplicationFocus()", 'subtitleone': "OnApplicationFocus()", 'describeone': "The OnApplicationFocus method is called when the application gains or loses focus.", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>void OnApplicationFocus(bool hasFocus)<br>{<br>&nbsp&nbsp&nbsp&nbspif (hasFocus)<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Application has gained focus.');<br>&nbsp&nbsp&nbsp&nbsp}<br>&nbsp&nbsp&nbsp&nbspelse<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebug.Log('Application has lost focus.');<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'loading') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Adding Components to GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>cube.AddComponent<MeshRenderer>();<br>cube.AddComponent<BoxCollider>();", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'script-communication') {          //partial class
            setTimeout(() => {
                const tLevels = [
                    {'title': "Script Communication", 'subtitleone': "Create a Scenes Folder In Main Assets Folder", 'describeone': "Go to File(top) then New Scene<br>Choose between Empty or (Basic)", 'subtitletwo': "Save Scene To Game File > Build Settings", 'describetwo': "Add Scenes to scenes in build in order", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder<br><br>&nbsp", 'classbackground': "code-background", 'code': "", 'image': ""},
                    {'title': "Public References", 'subtitleone': "Public References", 'describeone': "You can make variables or methods public in one script and then reference or call them from the other script.", 'subtitletwo': "Script1/Script2", 'describetwo': "", 'describethree': "<br>1. Create a <b>public variable</b> in script 1<br><br>2. In script 2 create a <b>private variable refrencing</b> <u>Script 1</u> and variable name<br><br>3. In Start() method use the <b>private variable</b> to find the object in the scene that uses Script1<br><br>4. Create a int variable that uses the refrenced variable that access the variable in Script1", 'classbackground': "code-background", 'code': "<br>//Script 1<br>public class Script1 : MonoBehaviour<br>{<br>&nbsp&nbsppublic int someValue;<br>}<br><br>//Script 2<br>public class Script2 : MonoBehaviour<br>{<br>&nbsp&nbspprivate Script1 script1Reference;<br><br>&nbsp&nbspprivate void Start()<br>&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbspscript1Reference = FindObjectOfType&lt;Script1&gt;();<br>&nbsp&nbsp&nbsp&nbspint valueFromScript1 = &nbsp&nbsp&nbsp&nbspscript1Reference.someValue;<br>&nbsp&nbsp}<br>}", 'image': ""},
                    {'title': "Singleton Pattern", 'subtitleone': "using UnityEngine.SceneManagement", 'describeone': "Access Methods from namespace", 'subtitletwo': "SceneManager.LoadScene('Level')", 'describetwo': "Class.Method('Argument')", 'describethree': "<br>Y<br><br>&nbsp", 'classbackground': "code-background", 'code': "<br><b>&nbspusing<b> UnityEngine.SceneManagement:<br><br>&nbsp// Load a scene<br>&nbspSceneManager.LoadScene('Level1');", 'image': ""},
                    {'title': "References via GameObjects", 'subtitleone': "using UnityEngine.SceneManagement", 'describeone': "<br>Access Methods from namespace", 'subtitletwo': "SceneManager.LoadScene(currentLevelIndex + 1);", 'describetwo': "int currentLevelIndex = SceneManager.GetActiveScene().buildIndex;<br>variable = Class.Method.", 'describethree': "Choose Build when game is complete<br><br>*Can locate all scenes in the Scenes Folder", 'classbackground': "code-background", 'code': "<br>//Script1<br>public class Script1 : MonoBehaviour<br>{<br>&nbsp&nbsp&nbsp&nbsppublic int someValue;<br>}<br><br>//Script2<br>public class Script2 : MonoBehaviour<br>{<br>&nbsp&nbsp&nbsp&nbspprivate void Start()<br>&nbsp&nbsp&nbsp&nbsp{<br>&nbsp&nbsp&nbsp&nbsp&nbspScript1 script1Instance = GameObject.<br>&nbspFind('Script1GameObject').GetComponent<Script1>();<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspint valueFromScript1 = &nbsp&nbsp&nbsp&nbspscript1Instance.someValue;<br>&nbsp&nbsp&nbsp&nbsp}<br>}", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLevels.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                            <br>
                            <div>&nbsp</div>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <span class="dots">. . .</span>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 2000);
        } else if (event.target.id === 'loading') {
            setTimeout(() => {
                const tLoading = [
                    {'title': "Adding Components to GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>cube.AddComponent<MeshRenderer>();<br>cube.AddComponent<BoxCollider>();", 'image': ""}, 
                    {'title': "Instantiating Prefabs", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "", 'image': ""}, 
                    {'title': "Finding GameObjects in the Scene", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>GameObject cube = GameObject.Find('Cube');", 'image': ""}, 
                    {'title': "Destroying GameObjects", 'subtitleone': "A GameObject is a fundamental object in Unity", 'describeone': "<br>", 'subtitletwo': "Code Explained", 'describetwo': "<br>", 'describethree': "", 'classbackground': "code-background", 'code': "<br>Destroy(cube);", 'image': ""},
                ]
    
                tileFOne.innerHTML = `
                ${tLoading.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <div class="${category.classbackground}">
                              <div class= "code-help">
                                ${category.code}
                              </div>
                            </div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'saving') {
            setTimeout(() => {
                const tSaving = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tSaving.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'complete-game') {
            setTimeout(() => {
                const tCompleteGame = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tCompleteGame.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        } else if (event.target.id === 'animation-clips') {
            setTimeout(() => {
                const tAnimationClips = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${tAnimationClips.map(category => `
                   <div class="background-line"></div>
                   <div class="background"></div>
                    <section class="flex-body">
                       <header class="left-info">
                         <p class="title">
                         ${category.title}
                         </p>
                         <div>
                            <span class="subtitle">${category.subtitleone}</span>
                            <br>
                            <br>
                            <div>${category.describeone}</div>
                            <br>
                            <span class="subtitle">${category.subtitletwo}</span>
                            <br>
                            <br>
                            <div>${category.describetwo}</div>
                            <div>${category.describethree}</div>
                            <br>
                         </div>
                       </header>
                       <aside class="right-info">
                         <div class="top-image">
                            <a class="dots">. . .</a>
                         </div>
                         <div>
                            <img class="all-photos" src="${category.image}">
                         </div>
                       </aside>
                    </section>
                  </div>`).join('')}
                </div>
                `;
            }, 400);
        }
    }

    function resetlists() {
        const middleInformationDivs = document.querySelectorAll('.middle-information');
            middleInformationDivs.forEach(div => {
                div.innerHTML = ''; // Reset the innerHTML of each middle-information div
            });
            tileInfoSection.style.display = 'none';
            if (tileInfoRight.style.display === 'block') {
                tileInfoRight.style.display = 'none';
    }
        }

    function showInformation(targetId) {
        resetlists();
        if (this) {
            setTimeout(() => {
                // Create a dummy event object to pass to switchInformation
                const dummyEvent = { target: { id: targetId } };
                tileInfoRight.style.display = 'block';
                hideTiles()
                hideGridSection();
                // Call switchInformation function with the dummy event
                switchRightInformation(dummyEvent);
            }, 200);
        }
    }

    // Map button IDs to action functions
    const buttonData = {
        'game-object': [],    // keywords
        'transform': [],
        'mono-behaviour': [],
        'new-keyword': [],
        'start': [],
        'update': [],
        'fixed-update': [],
        'coroutine': [],
        'instantiate': [],
        'destroy': [],
        'set-active': [],
        'get-component': [],
        'transform-position': [],
        'quaternion': [],
        'vector3': [],
        'raycast': [],
        'variable-declaration': [],    // variables
        'variable-initialize': [], 
        'var': [],
        'const': [],
        'data-types': [],
        'primitive-types': [],
        'reference-types': [],
        'int': [],
        'float': [],
        'string': [],
        'bool': [],
        'arrays': [],
        'lists': [],
        'dictionaries': [],
        'public-variables': [],
        'private-variables': [],
        'static-variables': [],
        'instance-variables': [],
        'method-declaration': [],     //  method information
        'void-methods': [],
        'return-types': [],
        'parameterized-methods': [],
        'overloading-methods': [],
        'access-modifiers': [],
        'public-methods': [],
        'private-methods': [],
        'static-methods': [],
        'instance-methods': [],
        'built-in-methods': [],
        'importing-methods': [],
        'coroutine-methods': [],
        'extension-methods': [],
        'event-handling-methods': [],
        'class-declaration': [],       // class
        'class-instance': [],      
        'constructor': [],
        'properties': [],
        'fields': [],
        'methods': [],
        'inheritance': [],
        'polymorphism': [],
        'encapsulation': [],
        'abstraction': [],
        'static-classes': [],
        'abstract-classes': [],
        'interfaces': [],
        'generic-classes': [],
        'nested-classes': [],
        'partial-classes': [],
        'awake': [],                  //use-method
        'start': [],
        'update': [],
        'fixed-update': [],
        'late-update': [],
        'on-enable': [],
        'on-disable': [],
        'on-destroy': [],
        'on-validate': [],
        'on-trigger-enter': [],
        'on-trigger-exit': [],
        'on-collision-enter': [],
        'on-collision-exit': [],
        'on-mouse-enter': [],
        'on-mouse-exit': [],
        'on-mouse-down': [],
        'on-mouse-up': [],
        'on-gui': [],
        'on-mouse-over': [],
        'on-mouse-drag': [],
        'on-controller-collider-hit': [],
        'on-application-quit': [],
        'on-application-pause': [],
        'on-application-focus': [],
        'extra-used': [],
        'partial-classes': [],             //partial class
        'modular-scripting': [],
        'script-organization': [],
        'script-communication': [],
        'script-reusability': [],
        'component-based-architecture': [],
        'scriptable-objects': [],
        'monobehaviour-extension': [],
        'interfaces': [],
        'events-and-delegates': [],
        'dependency-injection': [],
        'unity-event': [],
        'singleton-pattern': [],
        'custom-editor-scripts': [],
        'code-organization': [],
        'tags': [],                         // unity editor
        'editor-scripting': [],        
        'custom-inspectors': [],
        'editor-windows': [],
        'editor-tools': [],
        'editor-gui': [],
        'editor-extensions': [],
        'editor-script-execution-order': [],
        'serialized-object': [],
        'editor-utility-classes': [],
        'custom-attributes': [],
        'inspector-gui': [],
        'property-drawers': [],
        'editor-coroutines': [],
        'scene-gizmos': [],
        'editor-preferences': [],
        'scene-management': [],              // Game Category 
        'game-initialization': [],
        'object-spawning': [],
        'physics-simulation': [],
        'basic-movement-mechanics': [],
        'advanced-movement-mechanics': [],
        'navigation-and-pathfinding': [],
        'user-input-handling': [],
        'audio-management': [],
        'ui-management': [],
        'rendering-settings': [],
        'post-processing-effects': [],
        'scene-transitions': [],
        'game-conclusion': [],
        'end-game-screen': []
        };
    
    document.addEventListener('click', function(event) {
        const targetId = event.target.id;
        if (targetId in buttonData) {
            showInformation(targetId);
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'procedural-animation') {                //P2 list
            showInformation('procedural-animation');
        } else if (event.target.id === 'procedural-destroy') {
            showInformation('procedural-destroy');
        } else if (event.target.id === 'procedural-generation') {
            showInformation('procedural-generation');
        } else if (event.target.id === 'procedural') {
            showInformation('procedural');
        }
    });
}

//Hides Tile Container whole section when tile is clicked and Main Button Restart To Grid - MiddleMain
function hideShowGrid() {
    const tileContainer = document.getElementById('tileContainer');
    const mainButton = document.querySelector('.main-button');
    const tileMiddle = document.querySelectorAll('.tile-middle');
    const tileInfo = document.getElementById('tile-info');
    const middleInformationDivs = tileInfo.querySelectorAll('.middle-information');
    const tileInfoSection = document.getElementById('tile-info-section');
    const tileInfoRight = document.getElementById('tile-info-right');
    const tileInfoLeft = document.getElementById('tile-info-left');
    

    function mainButtonRestart() { 
        setTimeout(() => {
            tileContainer.style.display = 'grid';
        }, 100);
        setTimeout(() => {
            switchActiveList()
            tileInfoSection.style.display = 'none';
            tileInfoRight.style.display = 'none';
            tileInfoLeft.style.display = 'none';
            middleInformationDivs.forEach(div => {
                div.innerHTML = ''; // Reset the innerHTML of each middle-information div
            });
        }, 100);
    } 
    //Hides clicked tile when information section shows up
    function hideGridSection() {
        if (tileContainer.style.display === 'grid') {
            setTimeout(() => {
                tileContainer.style.display ='none'
            }, 455);
        }
        
    }
    //Shows for each tile if clicked (this) then hide grid of tiles after 1.5 seconds
    tileMiddle.forEach(function(tile) {
        tile.addEventListener('click', function() {
            if (this) {
                setTimeout(() => {
                    hideGridSection();  
                }, 1500);
            }
        });
    });

    mainButton.addEventListener('click', mainButtonRestart);
}

document.addEventListener('DOMContentLoaded', () => {
    createInformationLeft();
    createInformation();
    handleIndividualTile();
    createInformationRight();
    createInformationRightTwo()
    hideShowGrid();
});