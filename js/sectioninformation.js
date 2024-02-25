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
    const tileInfoSection = document.getElementById('tile-info-section');
    const tileOne = document.getElementById('T1');
    const tileTwo = document.getElementById('T2');
    const tileThree = document.getElementById('T3');

    tileInfoSection.style.display = 'none';
    

    function switchInformation(event) {
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
        } else if (event.target.id === 'T3') {
            setTimeout(() => {
                const t3AddAssetSpawning = [
                    {'title': "Add Asset Spawning", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/AssetSpawnFull.gif"},
                ]
    
                tileThree.innerHTML = `
                ${t3AddAssetSpawning.map(category => `
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

    function showInfoAddAsset() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'T1' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    function showInfoAddAssetImport() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'T2' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    function showInfoAddAssetSpawn() {
        if (this) {
            // Create a dummy event object to pass to switchInformation
            const X = { target: { id: 'T3' } };
            tileInfoSection.style.display = 'block';
            // Call switchInformation function with the dummy event
            switchInformation(X);
        }
    }

    addAssetUnity.addEventListener('click', showInfoAddAsset);
    addAssetImport.addEventListener('click', showInfoAddAssetImport);
    addAssetSpawn.addEventListener('click', showInfoAddAssetSpawn);
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
    const listLevels = document.getElementById('levels');
    const listFolders = document.getElementById('folders');
    const tileContainer = document.getElementById('tileContainer');
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
        if (event.target.id === 'T41-Levels') {
            setTimeout(() => {
                const t21Levels = [
                    {'title': "Levels Management", 'subtitleone': "Drag and drop", 'describeone': "From folder to Window", 'subtitletwo': "Blender to Unity", 'describetwo': "Settings Before Export: FBX - Selected Object, Mesh,", 'describethree': "Apply Transform, Apply Modifiers, Save Preset(Top)", 'image': "/images/AddAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${t21Levels.map(category => `
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
        } else if (event.target.id === 'T42-Folder') {
            setTimeout(() => {
                const t22FolderTypes = [
                    {'title': "Add Asset Import", 'subtitleone': "Assets Tab", 'describeone': "Click Assets Tab(Top)", 'subtitletwo': "Go to Import New Asset", 'describetwo': "Search and Select in folder,", 'describethree': "Find in Projects Tab in Assets Folder", 'image': "/images/ImportAssetFull.gif"},
                ]
    
                tileFOne.innerHTML = `
                ${t22FolderTypes.map(category => `
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
            }, 400);
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
    resetlists();
        if (this) {
            setTimeout(() => {
                // Create a dummy event object to pass to switchInformation
                const dummyEvent = { target: { id: 'T41-Levels' } };
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
    resetlists();
        if (this) {
            setTimeout(() => {
                // Create a dummy event object to pass to switchInformation
                const X = { target: { id: 'T42-Folder' } };
                tileInfoRight.style.display = 'block';
                hideTiles()
                hideGridSection();
                // Call switchInformation function with the dummy event
                switchRightInformation(X);
            }, 200);
        }
    }

    listLevels.addEventListener('click', showInfoLevels);
    listFolders.addEventListener('click', showInfoFolders);
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
    hideShowGrid();
});