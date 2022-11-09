let FrontDoor1PositionController;
let FrontDoor2PositionController;
let FrontDoor3PositionController;
let FrontDoor4PositionController;
let FrontWalkinDoor1PositionController;
let FrontDoorWalkin2PositionController;
let FrontDoorWalkin3PositionController;
let FrontDoorWalkin4PositionController;
let BackDoor1PositionController;
let BackDoor2PositionController;
let BackDoor3PositionController;
let BackDoor4PositionController;
let BackDoorWalkin1PositionController;
let BackDoorWalkin2PositionController;
let BackDoorWalkin3PositionController;
let BackDoorWalkin4PositionController;
let LeftDoor1PositionController;
let LeftDoor2PositionController;
let LeftDoor3PositionController;
let LeftDoor4PositionController;
let LeftDoorWalkin1PositionController;
let LeftDoorWalkin2PositionController;
let LeftDoorWalkin3PositionController;
let LeftDoorWalkin4PositionController;
let RightDoor1PositionController;
let RightDoor2PositionController;
let RightDoor3PositionController;
let RightDoor4PositionController;
let RightDoorWalkin1PositionController;
let RightDoorWalkin2PositionController;
let RightDoorWalkin3PositionController;
let RightDoorWalkin4PositionController;

let FrontWindowPosition1Controller;
let FrontWindowPosition2Controller;
let FrontWindowPosition3Controller;
let FrontWindowPosition4Controller;
let FrontWindowPosition5Controller;


let FrontWindowsize1Controller;
let FrontWindowsize2Controller;
let FrontWindowsize3Controller;
let FrontWindowsize4Controller;
let FrontWindowsize5Controller;

let FrontOneWindowSize = 3;
let FrontTwoWindowSize = 3;
let FrontThreeWindowSize = 3;
let FrontFourWindowSize = 3;
let FrontFiveWindowSize = 3;

let BackWindowPosition1Controller;
let BackWindowPosition2Controller;
let BackWindowPosition3Controller;
let BackWindowPosition4Controller;
let BackWindowPosition5Controller;

let BackWindowsize1Controller;
let BackWindowsize2Controller;
let BackWindowsize3Controller;
let BackWindowsize4Controller;
let BackWindowsize5Controller;

let BackOneWindowSize = 3;
let BackTwoWindowSize = 3;
let BackThreeWindowSize = 3;
let BackFourWindowSize = 3;
let BackFiveWindowSize = 3;


let LeftWindowPosition1Controller;
let LeftWindowPosition2Controller;
let LeftWindowPosition3Controller;
let LeftWindowPosition4Controller;
let LeftWindowPosition5Controller;

let LeftWindowsize1Controller;
let LeftWindowsize2Controller;
let LeftWindowsize3Controller;
let LeftWindowsize4Controller;
let LeftWindowsize5Controller;

let LeftOneWindowSize = 3;
let LeftTwoWindowSize = 3;
let LeftThreeWindowSize = 3;
let LeftFourWindowSize = 3;
let LeftFiveWindowSize = 3;

let RightWindowPosition1Controller;
let RightWindowPosition2Controller;
let RightWindowPosition3Controller;
let RightWindowPosition4Controller;
let RightWindowPosition5Controller;

let RightWindowsize1Controller;
let RightWindowsize2Controller;
let RightWindowsize3Controller;
let RightWindowsize4Controller;
let RightWindowsize5Controller;

let RightOneWindowSize = 3;
let RightTwoWindowSize = 3;
let RightThreeWindowSize = 3;
let RightFourWindowSize = 3;
let RightFiveWindowSize = 3;



let scene,
    camera,
    renderer,
    controls,
    light,
    light2,
    model,
    door,
    doorPosition = 0,
    doorTransparent,
    size = 50,
    divisions = 50,
    wallColor,
    FrontbackWallsMaterial_height = 8,
    FrontbackWallsMaterial_width = 8,
    RightleftWallsMaterial_height = 12,
    RightleftWallsMaterial_width = 8,
    RightleftWall3Material_width = 12,
    RightleftWall3Material_height = 10.5,
    FrontBackWall3Material_height = 10,
    FrontBackWall3Material_width = 10,
    rightWallsMaterial_normal2_heigth = 8,
    frontWallsMaterial_normal2_heigth = 12,
    frontWallsMaterial_normal2_width = 8,
    terrainTextureHeight = 5,
    terrainTextureWidth = 4,
    normalMap_heigth = 12,
    normalMap_width = 8,
    TransparentRoofMap_heigth = 12,
    TransparentRoofMap_width = 8,
    displacementMap_heigth = 12,
    displacementMap_width = 8,
    normalMap2_heigth = 12,
    normalMap2_width = 8,
    displacementMap2_heigth = 12,
    displacementMap2_width = 8,
    roof3_heigth = 12,
    roof3_width = 8,
    specMap_heigth2 = 12,
    specMap_width2 = 8,
    roofAngleValue = 0,
    GutterHeigthValue = 3,
    roofThicknessValue = 0,
    wallsThicknessValue = 0,
    leftDoorhidem = true,
    rightDoorhiden = true,
    backDoorhiden = true,
    frontDoorhiden = true,
    leftwalkDoorhiden = true,
    rightwalkDoorhiden = true,
    backwalkDoorhiden = true,
    frontwalkDoorhiden = true,
    leftWindowhiden = true,
    rightWindowhiden = true,
    frontWindowhiden = true,
    backWindowhiden = true,
    ModelWidth = 4,
    BackFrontDoorWidth = 2.5,
    roofHeightValue,
    frontSectionalDoor1 = 'disabled';
frontSectionalDoor2 = 'disabled';
frontSectionalDoor3 = 'disabled';
frontSectionalDoor4 = 'disabled';
BackSectionalDoor1 = 'disabled';
BackSectionalDoor2 = 'disabled';
BackSectionalDoor3 = 'disabled';
BackSectionalDoor4 = 'disabled';
rightSectionalDoor1 = 'disabled';
rightSectionalDoor2 = 'disabled';
rightSectionalDoor3 = 'disabled';
rightSectionalDoor4 = 'disabled';
leftSectionalDoor1 = 'disabled';
leftSectionalDoor2 = 'disabled';
leftSectionalDoor3 = 'disabled';
leftSectionalDoor4 = 'disabled';
frontWalkingDoor1 = 'disabled';
frontWalkingDoor2 = 'disabled';
frontWalkingDoor3 = 'disabled';
frontWalkingDoor4 = 'disabled';
BackWalkingDoor1 = 'disabled';
BackWalkingDoor2 = 'disabled';
BackWalkingDoor3 = 'disabled';
BackWalkingDoor4 = 'disabled';
rightWalkingDoor1 = 'disabled';
rightWalkingDoor2 = 'disabled';
rightWalkingDoor3 = 'disabled';
rightWalkingDoor4 = 'disabled';
leftWalkingDoor1 = 'disabled';
leftWalkingDoor2 = 'disabled';
leftWalkingDoor3 = 'disabled';
leftWalkingDoor4 = 'disabled';
hexcolor = '#293133'; // wall color
hexcolorWall3 = '#ffffff'; // wall color
    w_color = '#293133'; // wall color
    doorHexColor = '#ffffff'; // door color
    door_color = '#ffffff'; 
    WallFrameHexColor = '#ffffff';
    WallFrame = '#ffffff';
    walkingDoorColor = "#293133"; // walking Door Color
    walkingDoorFrameColor = "#293133"; // walking frame Door Color
    sectionalDoorColor = "#293133"; // walking Door Color
    sectionalDoorFrameColor = "#293133"; // walking frame Door Color
    wd_color = "#fff";
    WalkindoorHexColor = "#fff";
    roofhexColor = '#293133'; // roof color
    rooft_color = '#293133';
    RightLeftDoorWidth = 2.5;

const container = document.getElementById("model");

function init() {
    var box = new THREE.Box3();
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 5000);
    camera.position.set(0, 1.5, 20);
    camera.lookAt(0, 0, 0);
    
    // var AmbientLight = new THREE.AmbientLight(0xffffff, 3.00); // soft white light
    // scene.add(AmbientLight);
    // var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight.position.set(5, 10, 7.5);
    // scene.add(directionalLight);
    // var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight2.position.set(-5, 10, -7.5);
    // scene.add(directionalLight2);

		
    const loadingManager = new THREE.LoadingManager(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        loadingScreen.addEventListener('transitionend', onTransitionEnd);
    });
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
    });
    renderer.toneMapping = THREE.ReinhardToneMapping;
    // renderer.toneMappingExposure = 1;
    // renderer.outputEncoding = new THREE.sRGBEncoding;
    renderer.setSize(container.clientWidth, container.clientHeight);
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, 200, 0 );
    scene.add( hemiLight );

    const dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( 0, 100, 200 );
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 180;
    dirLight.shadow.camera.bottom = - 100;
    dirLight.shadow.camera.left = - 120;
    dirLight.shadow.camera.right = 120;
    scene.add( dirLight );

    const dirLight2 = new THREE.DirectionalLight( 0xffffff );
    dirLight2.position.set( 0, 100, -200 );
    dirLight2.castShadow = true;
    dirLight2.shadow.camera.top = 180;
    dirLight2.shadow.camera.bottom = - 100;
    dirLight2.shadow.camera.left = - 120;
    dirLight2.shadow.camera.right = 120;
    scene.add( dirLight2 );

    const dirLight3 = new THREE.DirectionalLight( 0xffffff );
    dirLight3.position.set( 200, 100, 0 );
    dirLight3.castShadow = true;
    dirLight3.shadow.camera.top = 180;
    dirLight3.shadow.camera.bottom = - 100;
    dirLight3.shadow.camera.left = - 120;
    dirLight3.shadow.camera.right = 120;
    scene.add( dirLight3 );
    
    const dirLight4 = new THREE.DirectionalLight( 0xffffff );
    dirLight4.position.set( -200, 100, 0 );
    dirLight4.castShadow = true;
    dirLight4.shadow.camera.top = 180;
    dirLight4.shadow.camera.bottom = - 100;
    dirLight4.shadow.camera.left = - 120;
    dirLight4.shadow.camera.right = 120;
    scene.add( dirLight4 );


    // let light = new THREE.PointLight(0xc4c4c4,10);
    // light.position.set(0,300,500);
    // scene.add(light);

    // let light2 = new THREE.PointLight(0xc4c4c4,10);
    // light2.position.set(500,100,0);
    // scene.add(light2);

    // let light3 = new THREE.PointLight(0xc4c4c4,10);
    // light3.position.set(0,100,-500);
    // scene.add(light3);

    // let light4 = new THREE.PointLight(0xc4c4c4,10);
    // light4.position.set(-500,300,500);
    // scene.add(light4);

    controls.maxPolarAngle = Math.PI * 0.5;
    var FrontbackWallsMaterial_color = new THREE.TextureLoader().load("./house/textures/wall1/wall_color.jpg");
    FrontbackWallsMaterial_color.wrapS = THREE.RepeatWrapping; // height
    FrontbackWallsMaterial_color.wrapT = THREE.RepeatWrapping; // width
    FrontbackWallsMaterial_color.repeat.set(FrontbackWallsMaterial_height, FrontbackWallsMaterial_width);
    FrontbackWallsMaterial_color.center.set(0.5, 0);
    var RightleftWallsMaterial_color = new THREE.TextureLoader().load("./house/textures/wall1/wall_color.jpg");
    RightleftWallsMaterial_color.wrapS = THREE.RepeatWrapping; // height
    RightleftWallsMaterial_color.wrapT = THREE.RepeatWrapping; // width
    RightleftWallsMaterial_color.repeat.set(RightleftWallsMaterial_height, RightleftWallsMaterial_width);
    RightleftWallsMaterial_color.center.set(0.5, 0.5);
    var FrontbackwallsMaterial_normal = new THREE.TextureLoader().load("./house/textures/wall1/wall_normal.jpg");
    FrontbackwallsMaterial_normal.wrapS = THREE.RepeatWrapping; // height
    FrontbackwallsMaterial_normal.wrapT = THREE.RepeatWrapping; // width
    FrontbackwallsMaterial_normal.repeat.set(FrontbackWallsMaterial_height, FrontbackWallsMaterial_height)
    FrontbackwallsMaterial_normal.center.set(0.5, 0.5);
    var RightleftMaterial_normal = new THREE.TextureLoader().load("./house/textures/wall1/wall_normal.jpg");
    RightleftMaterial_normal.wrapS = THREE.RepeatWrapping; // height
    RightleftMaterial_normal.wrapT = THREE.RepeatWrapping; // width
    RightleftMaterial_normal.repeat.set(RightleftWallsMaterial_height, RightleftWallsMaterial_width);
    RightleftMaterial_normal.center.set(0.5, 0.5);
    var FrontbackwallsMaterial_normal2 = new THREE.TextureLoader().load("./house/textures/wall2/wall_normal.jpg");
    FrontbackwallsMaterial_normal2.wrapS = THREE.RepeatWrapping; // height
    FrontbackwallsMaterial_normal2.wrapT = THREE.RepeatWrapping; // width
    FrontbackwallsMaterial_normal2.repeat.set(rightWallsMaterial_normal2_heigth, frontWallsMaterial_normal2_width);
    FrontbackwallsMaterial_normal2.center.set(0.5, 0.5);
    var RightleftMaterial_normal2 = new THREE.TextureLoader().load("./house/textures/wall2/wall_normal.jpg");
    RightleftMaterial_normal2.wrapS = THREE.RepeatWrapping; // height
    RightleftMaterial_normal2.wrapT = THREE.RepeatWrapping; // width
    RightleftMaterial_normal2.repeat.set(frontWallsMaterial_normal2_heigth, frontWallsMaterial_normal2_width);
    RightleftMaterial_normal2.center.set(0.5, 0.5);
    var normalMap = new THREE.TextureLoader().load("./house/textures/roof1/roof_normal.jpg");
    normalMap.wrapS = THREE.RepeatWrapping; // height
    normalMap.wrapT = THREE.RepeatWrapping; // width
    normalMap.flipY = true;
    normalMap.repeat.set(normalMap_heigth, normalMap_width);
    var displacementMap = new THREE.TextureLoader().load("./house/textures/roof1/roof_disp.jpg");
    displacementMap.wrapS = THREE.RepeatWrapping; // height
    displacementMap.wrapT = THREE.RepeatWrapping; // width
    displacementMap.repeat.set(displacementMap_heigth, displacementMap_width);
    var normalMap2 = new THREE.TextureLoader().load("./house/textures/roof2/roof_normal.jpg");
    normalMap2.wrapS = THREE.RepeatWrapping; // height
    normalMap2.wrapT = THREE.RepeatWrapping; // width
    normalMap2.repeat.set(normalMap2_heigth, normalMap2_width);
    var displacementMap2 = new THREE.TextureLoader().load("./house/textures/roof2/roof_disp.jpg");
    displacementMap2.wrapS = THREE.RepeatWrapping; // height
    displacementMap2.wrapT = THREE.RepeatWrapping; // width
    displacementMap2.repeat.set(displacementMap2_heigth, displacementMap2_width);
    var specMap2 = new THREE.TextureLoader().load("./house/textures/roof2/roof_spec.jpg");
    specMap2.wrapS = THREE.RepeatWrapping; // height
    specMap2.wrapT = THREE.RepeatWrapping; // width
    specMap2.repeat.set(specMap_heigth2, specMap_width2);
    var DoorColor = new THREE.TextureLoader().load(
        "./house/textures/door/wall_color.jpg"
    );
    var DoorNormal = new THREE.TextureLoader().load(
        "./house/textures/door/wall_normal.jpg"
    );

    var DoorSpec = new THREE.TextureLoader().load(
        "./house/textures/door/wall_spec.jpg"
    );

    const RightLeftHrWallColorMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_Albedo.jpg"
    );
    RightLeftHrWallColorMap.wrapS = THREE.RepeatWrapping; // height
    RightLeftHrWallColorMap.wrapT = THREE.RepeatWrapping; // width
    RightLeftHrWallColorMap.repeat.set(RightleftWall3Material_height, RightleftWall3Material_width);
    RightLeftHrWallColorMap.center.set(0.5, 0.5);
    const RightLeftHrWallNormalMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_Normal.jpg"
    );
    RightLeftHrWallNormalMap.wrapS = THREE.RepeatWrapping; // height
    RightLeftHrWallNormalMap.wrapT = THREE.RepeatWrapping; // width
    RightLeftHrWallNormalMap.repeat.set(RightleftWall3Material_height, RightleftWall3Material_width);
    RightLeftHrWallNormalMap.center.set(0.5, 0.5);
    const RightLeftHrWallHeightMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_Displacement.jpg"
    );
    RightLeftHrWallHeightMap.wrapS = THREE.RepeatWrapping; // height
    RightLeftHrWallHeightMap.wrapT = THREE.RepeatWrapping; // width
    RightLeftHrWallHeightMap.repeat.set(RightleftWall3Material_height, RightleftWall3Material_width);
    RightLeftHrWallHeightMap.center.set(0.5, 0.5);
    const RightLeftHrWallAOMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_AO.jpg"
    );
    RightLeftHrWallAOMap.wrapS = THREE.RepeatWrapping; // height
    RightLeftHrWallAOMap.wrapT = THREE.RepeatWrapping; // width
    RightLeftHrWallAOMap.repeat.set(RightleftWall3Material_height, RightleftWall3Material_width);
    RightLeftHrWallAOMap.center.set(0.5, 0.5);
    
    const FrontBackHrWallColorMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_Albedo.jpg"
    );
    FrontBackHrWallColorMap.wrapS = THREE.RepeatWrapping; // height
    FrontBackHrWallColorMap.wrapT = THREE.RepeatWrapping; // width
    FrontBackHrWallColorMap.repeat.set(FrontBackWall3Material_height, FrontBackWall3Material_width);
    FrontBackHrWallColorMap.center.set(0.5, 0.5);
    const FrontBackHrWallNormalMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_Normal.jpg"
    );
    FrontBackHrWallNormalMap.wrapS = THREE.RepeatWrapping; // height
    FrontBackHrWallNormalMap.wrapT = THREE.RepeatWrapping; // width
    FrontBackHrWallNormalMap.repeat.set(FrontBackWall3Material_height, FrontBackWall3Material_width);
    FrontBackHrWallNormalMap.center.set(0.5, 0.5);
    const FrontBackHrWallHeightMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_Displacement.jpg"
    );
    FrontBackHrWallHeightMap.wrapS = THREE.RepeatWrapping; // height
    FrontBackHrWallHeightMap.wrapT = THREE.RepeatWrapping; // width
    FrontBackHrWallHeightMap.repeat.set(FrontBackWall3Material_height, FrontBackWall3Material_width);
    FrontBackHrWallHeightMap.center.set(0.5, 0.5);
    const FrontBackHrWallAOMap = new THREE.TextureLoader().load(
        "./house/textures/wall3/udnlfeeg_2K_AO.jpg"
    );
    FrontBackHrWallAOMap.wrapS = THREE.RepeatWrapping; // height
    FrontBackHrWallAOMap.wrapT = THREE.RepeatWrapping; // width
    FrontBackHrWallAOMap.repeat.set(FrontBackWall3Material_height, FrontBackWall3Material_width);
    FrontBackHrWallAOMap.center.set(0.5, 0.5);

    const wall3 = new THREE.MeshPhongMaterial({
        color: hexcolorWall3,
        map: RightLeftHrWallColorMap,
        shininess: 10,
        skinning: true,
        normalMap: RightLeftHrWallNormalMap,
        normalScale: new THREE.Vector2(1, -1),
        displacementMap: RightLeftHrWallHeightMap,
        displacementScale: 0.01,
        aoMap : RightLeftHrWallAOMap,
        side: THREE.FrontSide
    });
    const FrontBackWall3 = new THREE.MeshPhongMaterial({
        color: hexcolorWall3,
        map: FrontBackHrWallColorMap,
        shininess: 10,
        skinning: true,
        normalMap: FrontBackHrWallNormalMap,
        normalScale: new THREE.Vector2(1, -1),
        displacementMap: FrontBackHrWallHeightMap,
        displacementScale: 0.01,
        aoMap : FrontBackHrWallAOMap,
        side: THREE.FrontSide,
        wireframe : false
    });

    var DoorBorderNormal = new THREE.TextureLoader().load("./house/textures/door/normal.jpg");
    var DoorBorderAo = new THREE.TextureLoader().load("./house/textures/door/ao.jpg");
    var terrain = new THREE.TextureLoader().load("./house/textures/ground/grass_diffuse.jpg");
    terrain.wrapS = THREE.RepeatWrapping; // height
    terrain.wrapT = THREE.RepeatWrapping; // width
    terrain.repeat.set(terrainTextureHeight, terrainTextureWidth);
    var terrain_normal = new THREE.TextureLoader().load("./house/textures/ground/grass_normal.jpg");
    terrain_normal.wrapS = THREE.RepeatWrapping; // height
    terrain_normal.wrapT = THREE.RepeatWrapping; // width
    terrain_normal.repeat.set(terrainTextureHeight, terrainTextureWidth);
    var door_border_color = new THREE.TextureLoader().load("./house/textures/door/door_border_color.jpg");

    const newSectionalDoorFrameNormal = new THREE.TextureLoader().load("./house/textures/newDoor/Door2_frame_normal.png");
    const newSectionalDoorNormal = new THREE.TextureLoader().load("./house/textures/newDoor/Door2_door_normal.png");

    const newWalkingDoorNormal = new THREE.TextureLoader().load("./house/textures/newDoor/Door1_normal.png");
    const newWalkingDoorHandleNormal = new THREE.TextureLoader().load("./house/textures/newDoor/Door1_handle_normal.png");

    const newSectionDoorMaterial = new THREE.MeshPhongMaterial({
        color: sectionalDoorColor,
        skinning: true,
        normalMap: newSectionalDoorNormal,
        normalScale: new THREE.Vector2(-2.48, 1.28),
        side: THREE.DoubleSide,
        wireframe : false
    });
    const newSectionDoorFrameMaterial = new THREE.MeshPhongMaterial({
        color: sectionalDoorFrameColor,
        skinning: true,
        normalMap: newSectionalDoorFrameNormal,
        normalScale: new THREE.Vector2(0.44, -1.00),
        side: THREE.DoubleSide,
    });
    const newWalkingDoorHandleMaterial = new THREE.MeshPhongMaterial({
        skinning: true,
        normalMap: newWalkingDoorHandleNormal,
        normalScale: new THREE.Vector2(1, -1),
        side: THREE.DoubleSide,
    });
    const newWalkingDoorBorderMaterial = new THREE.MeshPhongMaterial({
        color: WalkindoorHexColor,
        skinning: true,
        side: THREE.DoubleSide,
    });

    const newWalkingDoorMaterial = new THREE.MeshPhongMaterial({
        color : WalkindoorHexColor,
        skinning: true,
        normalMap: newWalkingDoorNormal,
        normalScale: new THREE.Vector2(1, -1),
        side: THREE.DoubleSide,
    });
    
    const wall2BackFront = new THREE.MeshPhongMaterial({
        color: hexcolor,
        skinning: true,
        normalMap: FrontbackwallsMaterial_normal2,
        normalScale: new THREE.Vector2(2, 2),
        side: THREE.FrontSide,
        shininess: 10
    });
    const wall2Rightleft = new THREE.MeshPhongMaterial({
        color: hexcolor,
        skinning: true,
        normalMap: RightleftMaterial_normal2,
        normalScale: new THREE.Vector2(2, 2),
        side: THREE.FrontSide,
        shininess: 10
    });
    var FrontbackwallsMaterial = new THREE.MeshPhongMaterial({
        map: FrontbackWallsMaterial_color,
        color: hexcolor,
        shininess: 10,
        skinning: true,
        normalMap: FrontbackwallsMaterial_normal,
        normalScale: new THREE.Vector2(2, 1),
        side: THREE.FrontSide
    });
    var RightleftwallsMaterial = new THREE.MeshPhongMaterial({
        map: RightleftWallsMaterial_color,
        color: hexcolor,
        shininess: 10,
        skinning: true,
        normalMap: RightleftMaterial_normal,
        normalScale: new THREE.Vector2(2, 1),
        side: THREE.FrontSide
    });

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
    $('.trapezium').click(function(e) {
        e.preventDefault();
        hexcolor = $(this).css("background-color");
        w_color1 = $(this).css("background-color");
         var colorString = w_color1;
 var colorsOnly1 = colorString.split(")"); //gives "rgba(111,222,333,0.5" at index 0
 var colorsOnly2 = colorsOnly1[0].split("(");   //gives "111,222,333,0.5 at index 1
 var colorsOnly = colorsOnly2[1].split(",");
console.log(colorsOnly[0]);
red = parseInt(colorsOnly[0]);
green = parseInt(colorsOnly[1]);
blue = parseInt(colorsOnly[2]);
 w_color = rgbToHex(red, green, blue);

        wall3.color.set(new THREE.Color(hexcolor));
        FrontBackWall3.color.set(new THREE.Color(hexcolor));
        FrontbackwallsMaterial.color.set(new THREE.Color(hexcolor));
        RightleftwallsMaterial.color.set(new THREE.Color(hexcolor));
        wall2BackFront.color.set(new THREE.Color(hexcolor));
        wall2Rightleft.color.set(new THREE.Color(hexcolor));
        DoorBorderMaterial.color.set(new THREE.Color(hexcolor));
        model.getObjectByName("WallBorder").material.color.set(new THREE.Color(hexcolor));
    });
    $('.doors').click(function(e) {
        e.preventDefault();
        doorHexColor = $(this).css("background-color");
        door_color1 = $(this).css("background-color");

         var colorString = door_color1;
 var colorsOnly1 = colorString.split(")"); //gives "rgba(111,222,333,0.5" at index 0
 var colorsOnly2 = colorsOnly1[0].split("(");   //gives "111,222,333,0.5 at index 1
 var colorsOnly = colorsOnly2[1].split(",");
console.log(colorsOnly[0]);
red = parseInt(colorsOnly[0]);
green = parseInt(colorsOnly[1]);
blue = parseInt(colorsOnly[2]);
 door_color = rgbToHex(red, green, blue);

 newSectionDoorMaterial.color.set(new THREE.Color(doorHexColor));
 newSectionDoorFrameMaterial.color.set(new THREE.Color(doorHexColor));
    })
    $('.WallFrameColor').click(function(e) {
        e.preventDefault();
        WallFrameHexColor = $(this).css("background-color");
        WallFrame = $(this).css("background-color");

         var colorString = WallFrame;
 var colorsOnly1 = colorString.split(")"); //gives "rgba(111,222,333,0.5" at index 0
 var colorsOnly2 = colorsOnly1[0].split("(");   //gives "111,222,333,0.5 at index 1
 var colorsOnly = colorsOnly2[1].split(",");
console.log(colorsOnly[0]);
red = parseInt(colorsOnly[0]);
green = parseInt(colorsOnly[1]);
blue = parseInt(colorsOnly[2]);
WallFrame1 = rgbToHex(red, green, blue);
 model.getObjectByName("WallBorder").material.color.set(new THREE.Color(WallFrame));
    })
    $('.RoofFrameColor').click(function(e) {
        e.preventDefault();
        RoofFrameHexColor = $(this).css("background-color");
        RoofFrame = $(this).css("background-color");

         var colorString = RoofFrame;
 var colorsOnly1 = colorString.split(")"); //gives "rgba(111,222,333,0.5" at index 0
 var colorsOnly2 = colorsOnly1[0].split("(");   //gives "111,222,333,0.5 at index 1
 var colorsOnly = colorsOnly2[1].split(",");
console.log(colorsOnly[0]);
red = parseInt(colorsOnly[0]);
green = parseInt(colorsOnly[1]);
blue = parseInt(colorsOnly[2]);
RoofFrame1 = rgbToHex(red, green, blue);
 model.getObjectByName("RoofBorder").material.color.set(new THREE.Color(RoofFrame));
    })
    $('.walkinDoorsColor').click(function(e) {
        e.preventDefault();
        WalkindoorHexColor = $(this).css("background-color");
        wd_color1 = $(this).css("background-color");

         var colorString = wd_color1;
 var colorsOnly1 = colorString.split(")"); //gives "rgba(111,222,333,0.5" at index 0
 var colorsOnly2 = colorsOnly1[0].split("(");   //gives "111,222,333,0.5 at index 1
 var colorsOnly = colorsOnly2[1].split(",");
console.log(colorsOnly[0]);
red = parseInt(colorsOnly[0]);
green = parseInt(colorsOnly[1]);
blue = parseInt(colorsOnly[2]);
 wd_color = rgbToHex(red, green, blue);
        
 newWalkingDoorMaterial.color.set(new THREE.Color(WalkindoorHexColor));
 newWalkingDoorBorderMaterial.color.set(new THREE.Color(WalkindoorHexColor));
    })
    const roofMaterial = new THREE.MeshPhongMaterial({
        color: roofhexColor,
        skinning: true,
        side: THREE.DoubleSide,
        normalMap: normalMap,
        displacementMap: displacementMap,
        displacementScale: 0.03,
        normalScale: new THREE.Vector2(1, 1),
        shininess: 100,
        visible: true
    });
   
    const roofMaterial2 = new THREE.MeshPhongMaterial({
        color: roofhexColor,
        skinning: true,
        side: THREE.DoubleSide,
        normalMap: normalMap2,
        displacementMap: displacementMap2,
        displacementScale: 0.05,
        //specularMap : specMap2,
        normalScale: new THREE.Vector2(2, 1),
        shininess: 100,
    });

    const roof_border = new THREE.MeshPhongMaterial({
        color: roofhexColor,
        skinning: true,
        side: THREE.DoubleSide,
        shininess: 100,
    });

    $('.roof').click(function(e) {
        e.preventDefault();
        roofhexColor = $(this).css("background-color");
        rooft_color1 = $(this).css("background-color");
        var colorString = rooft_color1;
        var colorsOnly1 = colorString.split(")"); //gives "rgba(111,222,333,0.5" at index 0
        var colorsOnly2 = colorsOnly1[0].split("(");   //gives "111,222,333,0.5 at index 1
        var colorsOnly = colorsOnly2[1].split(",");
        console.log(colorsOnly[0]);
        red = parseInt(colorsOnly[0]);
        green = parseInt(colorsOnly[1]);
        blue = parseInt(colorsOnly[2]);
        rooft_color = rgbToHex(red, green, blue);
        roofMaterial.color.set(new THREE.Color(roofhexColor));
        roofMaterial2.color.set(new THREE.Color(roofhexColor));
        roof_border.color.set(new THREE.Color(roofhexColor));
    });
    $('.changeFavColorRoof').click(function(e) {
        e.preventDefault();
        roofFavColor = $(this).children('span').css("background-color");
        roofMaterial.color.set(new THREE.Color(roofFavColor));
        roofMaterial2.color.set(new THREE.Color(roofFavColor));
        roof_border.color.set(new THREE.Color(roofFavColor));
    });
    DoorMaterial = new THREE.MeshPhongMaterial({
        color: doorHexColor,
        map: DoorColor,
        skinning: true,
        side: THREE.FrontSide,
        normalMap: DoorNormal,
        normalScale: new THREE.Vector2(2, 2),
        specMap: DoorSpec,
        shininess: 100
    });
    DoorBorderMaterial = new THREE.MeshPhongMaterial({
        map: door_border_color,
        color: hexcolor,
        skinning: true,
        normalMap: DoorBorderNormal,
        aoMap: DoorBorderAo,
        side: THREE.FrontSide
    });
    let froontWalkinDoor = new THREE.MeshPhongMaterial({
        color: walkingDoorColor,
        skinning: true
    });
    var loader = new THREE.TextureLoader();
    var map = loader.load('./house/textures/roof3/Roof_Texture.jpg');
    var normalMap = loader.load('./house/textures/roof3/alpha.jpg');
    new THREE.GLTFLoader(loadingManager).load("./house/sceneNewDoor6T.glb", function(object) {
        model = object.scene.children[0];
        // console.log(model);
        model.traverse((n) => {
            if (n.isMesh) {
                n.castShadow = true;
                n.receiveShadow = true;
                if (n.material.map) n.material.map.anisotropy = 1;
                $('#changeWallMat').on('change', function(e) {
                    var target = e.target ? e.target : e.srcElement;
                    if (target.value == 1) {
                        model.getObjectByName("Front_Wall").material = FrontbackwallsMaterial;
                        model.getObjectByName("Back_Wall").material = FrontbackwallsMaterial;
                        model.getObjectByName("Left_Wall").material = RightleftwallsMaterial;
                        model.getObjectByName("RIght_Wall").material = RightleftwallsMaterial;
                    }
                    if (target.value == 2) {
                        model.getObjectByName("Front_Wall").material = wall2BackFront;
                        model.getObjectByName("Back_Wall").material = wall2BackFront;
                        model.getObjectByName("Left_Wall").material = wall2Rightleft;
                        model.getObjectByName("RIght_Wall").material = wall2Rightleft;
                    }
                    if (target.value == 3) {
                        model.getObjectByName("Front_Wall").material = FrontBackWall3;
                        model.getObjectByName("Back_Wall").material = FrontBackWall3;
                        model.getObjectByName("RIght_Wall").material = wall3;
                        model.getObjectByName("Left_Wall").material = wall3;
                    }
                });
                $('#changeRoofMat').on('change', function(e) {
                    var target = e.target ? e.target : e.srcElement;

                    if (target.value == 1) {
                        model.getObjectByName("Roof").material = roofMaterial;
                        // model.getObjectByName("roof_high2").visible = false;
                    }
                    if (target.value == 2) {
                        model.getObjectByName("Roof").material = roofMaterial2;
                        // model.getObjectByName("roof_high2").visible = false;
                    }
                   
                });
                $('#gutterView').on('change', function (e) {
                    var target = e.target ? e.target : e.srcElement;
                    if (target.value == 1) {
                        model.getObjectByName("Gutter").visible = true;
                    }
                    if (target.value == 2) {
                        model.getObjectByName("Gutter").visible = false;
                    }
                })
                model.getObjectByName("Roof").material = roofMaterial;
                // model.getObjectByName("Front_Wall").material = FrontBackWall3;
                // model.getObjectByName("Back_Wall").material = FrontBackWall3;
                // model.getObjectByName("RIght_Wall").material = wall3;
                // model.getObjectByName("Left_Wall").material = wall3;
                
                model.getObjectByName("Front_Wall").material = FrontbackwallsMaterial;
                model.getObjectByName("Back_Wall").material = FrontbackwallsMaterial;
                model.getObjectByName("Left_Wall").material = RightleftwallsMaterial;
                model.getObjectByName("RIght_Wall").material = RightleftwallsMaterial;

               // model.getObjectByName("Proxies").visible = false;
                model.getObjectByName('Front_frame1_01').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Front_Handle1_01').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Front_door1_01').material = newWalkingDoorMaterial;
    
                model.getObjectByName('Front_frame1_02').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Front_Handle1_02').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Front_door1_02').material = newWalkingDoorMaterial;
    
                model.getObjectByName('Front_frame1_03').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Front_Handle1_03').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Front_door1_03').material = newWalkingDoorBorderMaterial;
    
                model.getObjectByName('Front_frame1_04').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Front_Handle1_04').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Front_door1_04').material = newWalkingDoorMaterial;
    
    
    
                model.getObjectByName('Back_frame1_01').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Back_Handle1_01').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Back_door1_01').material = newWalkingDoorMaterial;
    
                model.getObjectByName('Back_frame1_02').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Back_Handle1_02').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Back_door1_02').material = newWalkingDoorMaterial;
    
                model.getObjectByName('Back_frame1_03').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Back_Handle1_03').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Back_door1_03').material = newWalkingDoorMaterial;
    
                model.getObjectByName('Back_frame1_04').material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Back_Handle1_04').material = newWalkingDoorHandleMaterial;
                model.getObjectByName('Back_door1_04').material = newWalkingDoorMaterial;
    
            
                model.getObjectByName('Left_Door1_01', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Left_Door1_01', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Left_Door1_01', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Left_Door1_02', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Left_Door1_02', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Left_Door1_02', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Left_Door1_03', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Left_Door1_03', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Left_Door1_03', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Left_Door1_04', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Left_Door1_04', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Left_Door1_04', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Right_Door1_01', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Right_Door1_01', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Right_Door1_01', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Right_Door1_02', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Right_Door1_02', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Right_Door1_02', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Right_Door1_03', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Right_Door1_03', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Right_Door1_03', true).children[2].material = newWalkingDoorHandleMaterial;
    
                model.getObjectByName('Right_Door1_04', true).children[0].material = newWalkingDoorBorderMaterial;
                model.getObjectByName('Right_Door1_04', true).children[1].material = newWalkingDoorMaterial;
                model.getObjectByName('Right_Door1_04', true).children[2].material = newWalkingDoorHandleMaterial;
          
                
    
                model.getObjectByName('Back_Frame2_01').material = newSectionDoorFrameMaterial;
                model.getObjectByName('Back_Frame2_02').material = newSectionDoorFrameMaterial;
                model.getObjectByName('Back_Frame2_03').material = newSectionDoorFrameMaterial;
                model.getObjectByName('Back_Frame2_04').material = newSectionDoorFrameMaterial;
                
                
    
                model.getObjectByName('Back_Door2_01', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Back_Door2_02', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Back_Door2_03', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Back_Door2_04', true).children[1].material = newSectionDoorMaterial;
                
    
                model.getObjectByName('Front_Door2_01', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Front_Door2_01', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Front_Door2_02', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Front_Door2_02', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Front_Door2_03', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Front_Door2_03', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Front_Door2_04', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Front_Door2_04', true).children[1].material = newSectionDoorMaterial;
    
                model.getObjectByName('Left_Door2_01', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Left_Door2_01', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Left_Door2_02', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Left_Door2_02', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Left_Door2_03', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Left_Door2_03', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Left_Door2_04', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Left_Door2_04', true).children[1].material = newSectionDoorMaterial;
    
                model.getObjectByName('Right_Door2_01', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Right_Door2_01', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Right_Door2_02', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Right_Door2_02', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Right_Door2_03', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Right_Door2_03', true).children[1].material = newSectionDoorMaterial;
                model.getObjectByName('Right_Door2_04', true).children[0].material = newSectionDoorFrameMaterial;
                model.getObjectByName('Right_Door2_04', true).children[1].material = newSectionDoorMaterial;
    
    
                model.getObjectByName('front_door2_front01_1').position.y = 3;
                model.getObjectByName('front_door2_back01_1').position.y = 3;
                
                model.getObjectByName('front_door2_front02_1').position.y = 3;
                model.getObjectByName('front_door2_back02_1').position.y = 3;
                
                model.getObjectByName('front_door2_front03_1').position.y = 3;
                model.getObjectByName('front_door2_back03_1').position.y = 3;
                
                model.getObjectByName('front_door2_front04_1').position.y = 3;
                model.getObjectByName('front_door2_back04_1').position.y = 3;
    
    
                model.getObjectByName('front_door2_back01').position.z = -1.5;
                model.getObjectByName('front_door2_front01').position.z = 1.5;
                
                model.getObjectByName('front_door2_back02').position.z = -1.5;
                model.getObjectByName('front_door2_front02').position.z = 1.5;
                
                model.getObjectByName('front_door2_back03').position.z = -1.5;
                model.getObjectByName('front_door2_front03').position.z = 1.5;
                
                model.getObjectByName('front_door2_back04').position.z = -1.5;
                model.getObjectByName('front_door2_front04').position.z = 1.5;
    
                
                model.getObjectByName('back_door2_front01_1').position.y = 3;
                model.getObjectByName('back_door2_back01_1').position.y = 3;
                
                model.getObjectByName('back_door2_front02_1').position.y = 3;
                model.getObjectByName('back_door2_back02_1').position.y = 3;
                
                model.getObjectByName('back_door2_front03_1').position.y = 3;
                model.getObjectByName('back_door2_back03_1').position.y = 3;
                
                model.getObjectByName('back_door2_front04_1').position.y = 3;
                model.getObjectByName('back_door2_back04_1').position.y = 3;
    
                
                model.getObjectByName('back_door2_back01').position.z = -1.5;
                model.getObjectByName('back_door2_front01').position.z = 1.5;
                
                model.getObjectByName('back_door2_back02').position.z = -1.5;
                model.getObjectByName('back_door2_front02').position.z = 1.5;
                
                model.getObjectByName('back_door2_back03').position.z = -1.5;
                model.getObjectByName('back_door2_front03').position.z = 1.5;
                
                model.getObjectByName('back_door2_back04').position.z = -1.5;
                model.getObjectByName('back_door2_front04').position.z = 1.5;
    
    
    
                model.getObjectByName('left_door2_front01_1').position.y = 3;
                model.getObjectByName('left_door2_back01_1').position.y = 3;
                
                model.getObjectByName('left_door2_front02_1').position.y = 3;
                model.getObjectByName('left_door2_back02_1').position.y = 3;
                
                model.getObjectByName('left_door2_front03_1').position.y = 3;
                model.getObjectByName('left_door2_back03_1').position.y = 3;
                
                model.getObjectByName('left_door2_front04_1').position.y = 3;
                model.getObjectByName('left_door2_back04_1').position.y = 3;
    
                
                model.getObjectByName('left_door2_back01').position.z = -1.5;
                model.getObjectByName('left_door2_front01').position.z = 1.5;
                
                model.getObjectByName('left_door2_back02').position.z = -1.5;
                model.getObjectByName('left_door2_front02').position.z = 1.5;
                
                model.getObjectByName('left_door2_back03').position.z = -1.5;
                model.getObjectByName('left_door2_front03').position.z = 1.5;
                
                model.getObjectByName('left_door2_back04').position.z = -1.5;
                model.getObjectByName('left_door2_front04').position.z = 1.5;
    
    
    
                model.getObjectByName('right_door2_front01_1').position.y = 3;
                model.getObjectByName('right_door2_back01_1').position.y = 3;
                
                model.getObjectByName('right_door2_front02_1').position.y = 3;
                model.getObjectByName('right_door2_back02_1').position.y = 3;
                
                model.getObjectByName('right_door2_front03_1').position.y = 3;
                model.getObjectByName('right_door2_back03_1').position.y = 3;
                
                model.getObjectByName('right_door2_front04_1').position.y = 3;
                model.getObjectByName('right_door2_back04_1').position.y = 3;
    
                
                model.getObjectByName('right_door2_back01').position.z = -1.5;
                model.getObjectByName('right_door2_front01').position.z = 1.5;
                
                model.getObjectByName('right_door2_back02').position.z = -1.5;
                model.getObjectByName('right_door2_front02').position.z = 1.5;
                
                model.getObjectByName('right_door2_back03').position.z = -1.5;
                model.getObjectByName('right_door2_front03').position.z = 1.5;
                
                model.getObjectByName('right_door2_back04').position.z = -1.5;
                model.getObjectByName('right_door2_front04').position.z = 1.5;
    
    
                // model.position.y = 0.19;
                // model.getObjectByName("house_slope_right").position.z = 1.7486537180812447;
                // model.getObjectByName("house_slope_left").position.z = 1.7486537180812447;
                model.getObjectByName("house_slope_right").position.z = 4.865230632619994;
                model.getObjectByName("house_topfront_right").position.z = 3;
                model.getObjectByName("house_topback_right").position.z = 3;
                model.getObjectByName("house_slope_left").position.z = 4.865230632619994;
                model.getObjectByName("house_topfront_left").position.z = 3;
                model.getObjectByName("house_topback_left").position.z = 3;
                model.getObjectByName("WallBorder").material.color.set(new THREE.Color(hexcolor));
                // for Initiz model length
                model.getObjectByName("house_base_right").position.x = 6;
                model.getObjectByName("house_base_left").position.x = -6;
    
                model.getObjectByName("house_basefront").position.y = -4;
                model.getObjectByName("house_baseback").position.y = 4;
    
                model.getObjectByName("house_baseback_right2").position.y = 4;
                model.getObjectByName("house_baseback_left").position.y = 4;
                // model.getObjectByName("house_basefront").position.z = 4;
                model.getObjectByName("house_basefront_left2").position.y = -4;
                model.getObjectByName("house_basefront_right2").position.y = -4;
    
                // //  Roof border material
                model.getObjectByName("RoofBorder").material = roof_border;
    
                model.getObjectByName("Front_Door1_01").visible = false;
                model.getObjectByName("Front_Door1_02").visible = false;
                model.getObjectByName("Front_Door1_03").visible = false;
                model.getObjectByName("Front_Door1_04").visible = false;
                model.getObjectByName("Front_Door2_01").visible = false;
                model.getObjectByName("Front_Door2_02").visible = false;
                model.getObjectByName("Front_Door2_03").visible = false;
                model.getObjectByName("Front_Door2_04").visible = false;
                
                model.getObjectByName("Back_Door1_01").visible = false;
                model.getObjectByName("Back_Door1_02").visible = false;
                model.getObjectByName("Back_Door1_03").visible = false;
                model.getObjectByName("Back_Door1_04").visible = false;
                model.getObjectByName("Back_Door2_01").visible = false;
                model.getObjectByName("Back_Door2_02").visible = false;
                model.getObjectByName("Back_Door2_03").visible = false;
                model.getObjectByName("Back_Door2_04").visible = false;
                
                model.getObjectByName("Left_Door1_01").visible = false;
                model.getObjectByName("Left_Door1_02").visible = false;
                model.getObjectByName("Left_Door1_03").visible = false;
                model.getObjectByName("Left_Door1_04").visible = false;
                model.getObjectByName("Left_Door2_01").visible = false;
                model.getObjectByName("Left_Door2_02").visible = false;
                model.getObjectByName("Left_Door2_03").visible = false;
                model.getObjectByName("Left_Door2_04").visible = false;
                
                model.getObjectByName("Right_Door1_01").visible = false;
                model.getObjectByName("Right_Door1_02").visible = false;
                model.getObjectByName("Right_Door1_03").visible = false;
                model.getObjectByName("Right_Door1_04").visible = false;
                model.getObjectByName("Right_Door2_01").visible = false;
                model.getObjectByName("Right_Door2_02").visible = false;
                model.getObjectByName("Right_Door2_03").visible = false;
                model.getObjectByName("Right_Door2_04").visible = false;
    
    
                model.getObjectByName("Front_Door1_05").visible = false;
                model.getObjectByName("Front_Door2_05").visible = false;
                model.getObjectByName("Back_Door1_05").visible = false;
                model.getObjectByName("Back_Door2_05").visible = false;
                model.getObjectByName("Left_Door1_05").visible = false;
                model.getObjectByName("Left_Door2_05").visible = false;
                model.getObjectByName("Right_Door1_05").visible = false;
                model.getObjectByName("Right_Door2_05").visible = false;
            }

            
            

            // model.getObjectByName("house_baseback").position.z = -4;
            // model.getObjectByName("house_top_right").position.y = 1.7486537180812447;
            // model.getObjectByName("house_top_left").position.y = 1.7486537180812447;
            // model.getObjectByName('left_door_topfront1').position.y = 3;
            // model.getObjectByName('left_door_top_back1').position.y = 3;
            // model.getObjectByName('left_door_baseback1').position.z = -(3 / 2);
            // model.getObjectByName('left_door_basefront1').position.z = 3 / 2;
            // model.getObjectByName('left_door_topfront2').position.y = 3;
            // model.getObjectByName('left_door_top_back2').position.y = 3;
            // model.getObjectByName('left_door_baseback2').position.z = -(3 / 2);
            // model.getObjectByName('left_door_basefront2').position.z = 3 / 2;
            // model.getObjectByName('left_door_topfront3').position.y = 3;
            // model.getObjectByName('left_door_top_back3').position.y = 3;
            // model.getObjectByName('left_door_baseback3').position.z = -(3 / 2);
            // model.getObjectByName('left_door_basefront3').position.z = 3 / 2;
            // model.getObjectByName('left_door_topfront4').position.y = 3;
            // model.getObjectByName('left_door_top_back4').position.y = 3;
            // model.getObjectByName('left_door_baseback4').position.z = -(3 / 2);
            // model.getObjectByName('left_door_basefront4').position.z = 3 / 2;
            // model.getObjectByName('right_door_baseback1').position.z = -(3 / 2);
            // model.getObjectByName('right_door_basefront1').position.z = 3 / 2;
            // model.getObjectByName('right_door_topfront1').position.y = 3;
            // model.getObjectByName('right_door_top_back1').position.y = 3;
            // model.getObjectByName('right_door_baseback2').position.z = -(3 / 2);
            // model.getObjectByName('right_door_basefront2').position.z = 3 / 2;
            // model.getObjectByName('right_door_topfront2').position.y = 3;
            // model.getObjectByName('right_door_top_back2').position.y = 3;
            // model.getObjectByName('right_door_baseback3').position.z = -(3 / 2);
            // model.getObjectByName('right_door_basefront3').position.z = 3 / 2;
            // model.getObjectByName('right_door_topfront3').position.y = 3;
            // model.getObjectByName('right_door_top_back3').position.y = 3;
            // model.getObjectByName('right_door_baseback4').position.z = -(3 / 2);
            // model.getObjectByName('right_door_basefront4').position.z = 3 / 2;
            // model.getObjectByName('right_door_topfront4').position.y = 3;
            // model.getObjectByName('right_door_top_back4').position.y = 3;
            // model.getObjectByName('front_door_topfront1').position.y = 3;
            // model.getObjectByName('front_door_top_back1').position.y = 3;
            // model.getObjectByName('front_door_baseback1').position.z = -(3 / 2);
            // model.getObjectByName('front_door_basefront1').position.z = 3 / 2;
            // model.getObjectByName('front_door_topfront2').position.y = 3;
            // model.getObjectByName('front_door_top_back2').position.y = 3;
            // model.getObjectByName('front_door_baseback2').position.z = -(3 / 2);
            // model.getObjectByName('front_door_basefront2').position.z = 3 / 2;
            // model.getObjectByName('front_door_topfront3').position.y = 3;
            // model.getObjectByName('front_door_top_back3').position.y = 3;
            // model.getObjectByName('front_door_baseback3').position.z = -(3 / 2);
            // model.getObjectByName('front_door_basefront3').position.z = 3 / 2;
            // model.getObjectByName('front_door_topfront4').position.y = 3;
            // model.getObjectByName('front_door_top_back4').position.y = 3;
            // model.getObjectByName('front_door_baseback4').position.z = -(3 / 2);
            // model.getObjectByName('front_door_basefront4').position.z = 3 / 2;
            // model.getObjectByName('back_door_baseback1').position.z = -(3 / 2);
            // model.getObjectByName('back_door_basefront1').position.z = 3 / 2;
            // model.getObjectByName('back_door_topfront1').position.y = 3;
            // model.getObjectByName('back_door_top_back1').position.y = 3;
            // model.getObjectByName('back_door_baseback2').position.z = -(3 / 2);
            // model.getObjectByName('back_door_basefront2').position.z = 3 / 2;
            // model.getObjectByName('back_door_topfront2').position.y = 3;
            // model.getObjectByName('back_door_top_back2').position.y = 3;
            // model.getObjectByName('back_door_baseback3').position.z = -(3 / 2);
            // model.getObjectByName('back_door_basefront3').position.z = 3 / 2;
            // model.getObjectByName('back_door_topfront3').position.y = 3;
            // model.getObjectByName('back_door_top_back3').position.y = 3;
            // model.getObjectByName('back_door_baseback4').position.z = -(3 / 2);
            // model.getObjectByName('back_door_basefront4').position.z = 3 / 2;
            // model.getObjectByName('back_door_topfront4').position.y = 3;
            // model.getObjectByName('back_door_top_back4').position.y = 3;
            // model.getObjectByName('back_window1').position.y = 1.7;
            // model.getObjectByName('back_window2').position.y = 1.7;
            // model.getObjectByName('back_window3').position.y = 1.7;
            // model.getObjectByName('back_window4').position.y = 1.7;
            // model.getObjectByName('back_window5').position.y = 1.7;
            // model.getObjectByName('front_window1').position.y = 1.7;
            // model.getObjectByName('front_window2').position.y = 1.7;
            // model.getObjectByName('front_window3').position.y = 1.7;
            // model.getObjectByName('front_window4').position.y = 1.7;
            // model.getObjectByName('front_window5').position.y = 1.7;
            // model.getObjectByName('left_window1').position.y = 1.7;
            // model.getObjectByName('left_window2').position.y = 1.7;
            // model.getObjectByName('left_window3').position.y = 1.7;
            // model.getObjectByName('left_window4').position.y = 1.7;
            // model.getObjectByName('left_window5').position.y = 1.7;
            // model.getObjectByName('right_window1').position.y = 1.7;
            // model.getObjectByName('right_window2').position.y = 1.7;
            // model.getObjectByName('right_window3').position.y = 1.7;
            // model.getObjectByName('right_window4').position.y = 1.7;
            // model.getObjectByName('right_window5').position.y = 1.7;
            
        });
        scene.add(model);
        animate();
    });
    
    $(".FrontWindowOneSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                FrontOneWindowSize = 1;
                model.getObjectByName('front_window1_part1').visible = true;
                model.getObjectByName('front_window1_part2').visible = false;
                model.getObjectByName('front_window1_part3').visible = false;
                FrontWindowPosition1Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                FrontOneWindowSize = 2
                model.getObjectByName('front_window1_part1').visible = true;
                model.getObjectByName('front_window1_part2').visible = true;
                model.getObjectByName('front_window1_part3').visible = false;
                FrontWindowPosition1Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                FrontOneWindowSize = 3;
                model.getObjectByName('front_window1_part1').visible = true;
                model.getObjectByName('front_window1_part2').visible = true;
                model.getObjectByName('front_window1_part3').visible = true;
                FrontWindowPosition1Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".FrontWindowTwoSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                FrontTwoWindowSize = 1;
                model.getObjectByName('front_window2_part1').visible = true;
                model.getObjectByName('front_window2_part2').visible = false;
                model.getObjectByName('front_window2_part3').visible = false;
                FrontWindowPosition2Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                FrontTwoWindowSize = 2
                model.getObjectByName('front_window2_part1').visible = true;
                model.getObjectByName('front_window2_part2').visible = true;
                model.getObjectByName('front_window2_part3').visible = false;
                FrontWindowPosition2Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                FrontTwoWindowSize = 3;
                model.getObjectByName('front_window2_part1').visible = true;
                model.getObjectByName('front_window2_part2').visible = true;
                model.getObjectByName('front_window2_part3').visible = true;
                FrontWindowPosition2Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".FrontWindowThreeSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                FrontThreeWindowSize = 1;
                model.getObjectByName('front_window3_part1').visible = true;
                model.getObjectByName('front_window3_part2').visible = false;
                model.getObjectByName('front_window3_part3').visible = false;
                FrontWindowPosition3Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                FrontThreeWindowSize = 2
                model.getObjectByName('front_window3_part1').visible = true;
                model.getObjectByName('front_window3_part2').visible = true;
                model.getObjectByName('front_window3_part3').visible = false;
                FrontWindowPosition3Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                FrontThreeWindowSize = 3;
                model.getObjectByName('front_window3_part1').visible = true;
                model.getObjectByName('front_window3_part2').visible = true;
                model.getObjectByName('front_window3_part3').visible = true;
                FrontWindowPosition3Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".FrontWindowFourSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                FrontFourWindowSize = 1;
                model.getObjectByName('front_window4_part1').visible = true;
                model.getObjectByName('front_window4_part2').visible = false;
                model.getObjectByName('front_window4_part3').visible = false;
                FrontWindowPosition4Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                FrontFourWindowSize = 2
                model.getObjectByName('front_window4_part1').visible = true;
                model.getObjectByName('front_window4_part2').visible = true;
                model.getObjectByName('front_window4_part3').visible = false;
                FrontWindowPosition4Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                FrontFourWindowSize = 3;
                model.getObjectByName('front_window4_part1').visible = true;
                model.getObjectByName('front_window4_part2').visible = true;
                model.getObjectByName('front_window4_part3').visible = true;
                FrontWindowPosition4Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".FrontWindowFiveSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                FrontFiveWindowSize = 1;
                model.getObjectByName('front_window5_part1').visible = true;
                model.getObjectByName('front_window5_part2').visible = false;
                model.getObjectByName('front_window5_part3').visible = false;
                FrontWindowPosition5Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                FrontFiveWindowSize = 2
                model.getObjectByName('front_window5_part1').visible = true;
                model.getObjectByName('front_window5_part2').visible = true;
                model.getObjectByName('front_window5_part3').visible = false;
                FrontWindowPosition5Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                FrontFiveWindowSize = 3;
                model.getObjectByName('front_window5_part1').visible = true;
                model.getObjectByName('front_window5_part2').visible = true;
                model.getObjectByName('front_window5_part3').visible = true;
                FrontWindowPosition5Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });

    $(".BackWindowOneSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                BackOneWindowSize = 1;
                model.getObjectByName('back_window1_part1').visible = true;
                model.getObjectByName('back_window1_part2').visible = false;
                model.getObjectByName('back_window1_part3').visible = false;
                BackWindowPosition1Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                BackOneWindowSize = 2
                model.getObjectByName('back_window1_part1').visible = true;
                model.getObjectByName('back_window1_part2').visible = true;
                model.getObjectByName('back_window1_part3').visible = false;
                BackWindowPosition1Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                BackOneWindowSize = 3;
                model.getObjectByName('back_window1_part1').visible = true;
                model.getObjectByName('back_window1_part2').visible = true;
                model.getObjectByName('back_window1_part3').visible = true;
                BackWindowPosition1Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".BackWindowTwoSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                BackTwoWindowSize = 1;
                model.getObjectByName('back_window2_part1').visible = true;
                model.getObjectByName('back_window2_part2').visible = false;
                model.getObjectByName('back_window2_part3').visible = false;
                BackWindowPosition2Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                BackTwoWindowSize = 2
                model.getObjectByName('back_window2_part1').visible = true;
                model.getObjectByName('back_window2_part2').visible = true;
                model.getObjectByName('back_window2_part3').visible = false;
                BackWindowPosition2Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                BackTwoWindowSize = 3;
                model.getObjectByName('back_window2_part1').visible = true;
                model.getObjectByName('back_window2_part2').visible = true;
                model.getObjectByName('back_window2_part3').visible = true;
                BackWindowPosition2Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".BackWindowThreeSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                BackThreeWindowSize = 1;
                model.getObjectByName('back_window3_part1').visible = true;
                model.getObjectByName('back_window3_part2').visible = false;
                model.getObjectByName('back_window3_part3').visible = false;
                BackWindowPosition3Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                BackThreeWindowSize = 2
                model.getObjectByName('back_window3_part1').visible = true;
                model.getObjectByName('back_window3_part2').visible = true;
                model.getObjectByName('back_window3_part3').visible = false;
                BackWindowPosition3Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                BackThreeWindowSize = 3;
                model.getObjectByName('back_window3_part1').visible = true;
                model.getObjectByName('back_window3_part2').visible = true;
                model.getObjectByName('back_window3_part3').visible = true;
                BackWindowPosition3Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".BackWindowFourSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                BackFourWindowSize = 1;
                model.getObjectByName('back_window4_part1').visible = true;
                model.getObjectByName('back_window4_part2').visible = false;
                model.getObjectByName('back_window4_part3').visible = false;
                BackWindowPosition4Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                BackFourWindowSize = 2
                model.getObjectByName('back_window4_part1').visible = true;
                model.getObjectByName('back_window4_part2').visible = true;
                model.getObjectByName('back_window4_part3').visible = false;
                BackWindowPosition4Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                BackFourWindowSize = 3;
                model.getObjectByName('back_window4_part1').visible = true;
                model.getObjectByName('back_window4_part2').visible = true;
                model.getObjectByName('back_window4_part3').visible = true;
                BackWindowPosition4Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".BackWindowFiveSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                BackFiveWindowSize = 1;
                model.getObjectByName('back_window5_part1').visible = true;
                model.getObjectByName('back_window5_part2').visible = false;
                model.getObjectByName('back_window5_part3').visible = false;
                BackWindowPosition5Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                BackFiveWindowSize = 2
                model.getObjectByName('back_window5_part1').visible = true;
                model.getObjectByName('back_window5_part2').visible = true;
                model.getObjectByName('back_window5_part3').visible = false;
                BackWindowPosition5Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                BackFiveWindowSize = 3;
                model.getObjectByName('back_window5_part1').visible = true;
                model.getObjectByName('back_window5_part2').visible = true;
                model.getObjectByName('back_window5_part3').visible = true;
                BackWindowPosition5Controller.update({
                    min: -((document.getElementById('Width').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('Width').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });


    $(".RightWindowOneSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                RightOneWindowSize = 1;
                model.getObjectByName('right_window1_part1').visible = true;
                model.getObjectByName('right_window1_part2').visible = false;
                model.getObjectByName('right_window1_part3').visible = false;
                RightWindowPosition1Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                RightOneWindowSize = 2
                model.getObjectByName('right_window1_part1').visible = true;
                model.getObjectByName('right_window1_part2').visible = true;
                model.getObjectByName('right_window1_part3').visible = false;
                RightWindowPosition1Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                RightOneWindowSize = 3;
                model.getObjectByName('right_window1_part1').visible = true;
                model.getObjectByName('right_window1_part2').visible = true;
                model.getObjectByName('right_window1_part3').visible = true;
                RightWindowPosition1Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".RightWindowTwoSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                RightTwoWindowSize = 1;
                model.getObjectByName('right_window2_part1').visible = true;
                model.getObjectByName('right_window2_part2').visible = false;
                model.getObjectByName('right_window2_part3').visible = false;
                RightWindowPosition2Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                RightTwoWindowSize = 2
                model.getObjectByName('right_window2_part1').visible = true;
                model.getObjectByName('right_window2_part2').visible = true;
                model.getObjectByName('right_window2_part3').visible = false;
                RightWindowPosition2Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                RightTwoWindowSize = 3;
                model.getObjectByName('right_window2_part1').visible = true;
                model.getObjectByName('right_window2_part2').visible = true;
                model.getObjectByName('right_window2_part3').visible = true;
                RightWindowPosition2Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".RightWindowThreeSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                RightThreeWindowSize = 1;
                model.getObjectByName('right_window3_part1').visible = true;
                model.getObjectByName('right_window3_part2').visible = false;
                model.getObjectByName('right_window3_part3').visible = false;
                RightWindowPosition3Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                RightThreeWindowSize = 2
                model.getObjectByName('right_window3_part1').visible = true;
                model.getObjectByName('right_window3_part2').visible = true;
                model.getObjectByName('right_window3_part3').visible = false;
                RightWindowPosition3Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                RightThreeWindowSize = 3;
                model.getObjectByName('right_window3_part1').visible = true;
                model.getObjectByName('right_window3_part2').visible = true;
                model.getObjectByName('right_window3_part3').visible = true;
                RightWindowPosition3Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".RightWindowFourSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                RightFourWindowSize = 1;
                model.getObjectByName('right_window4_part1').visible = true;
                model.getObjectByName('right_window4_part2').visible = false;
                model.getObjectByName('right_window4_part3').visible = false;
                RightWindowPosition4Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                RightFourWindowSize = 2
                model.getObjectByName('right_window4_part1').visible = true;
                model.getObjectByName('right_window4_part2').visible = true;
                model.getObjectByName('right_window4_part3').visible = false;
                RightWindowPosition4Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                RightFourWindowSize = 3;
                model.getObjectByName('right_window4_part1').visible = true;
                model.getObjectByName('right_window4_part2').visible = true;
                model.getObjectByName('right_window4_part3').visible = true;
                RightWindowPosition4Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".RightWindowFiveSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                RightFiveWindowSize = 1;
                model.getObjectByName('right_window5_part1').visible = true;
                model.getObjectByName('right_window5_part2').visible = false;
                model.getObjectByName('right_window5_part3').visible = false;
                RightWindowPosition5Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                RightFiveWindowSize = 2
                model.getObjectByName('right_window5_part1').visible = true;
                model.getObjectByName('right_window5_part2').visible = true;
                model.getObjectByName('right_window5_part3').visible = false;
                RightWindowPosition5Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                RightFiveWindowSize = 3;
                model.getObjectByName('right_window5_part1').visible = true;
                model.getObjectByName('right_window5_part2').visible = true;
                model.getObjectByName('right_window5_part3').visible = true;
                RightWindowPosition5Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".LeftWindowOneSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                LeftOneWindowSize = 1;
                model.getObjectByName('left_window1_part1').visible = true;
                model.getObjectByName('left_window1_part2').visible = false;
                model.getObjectByName('left_window1_part3').visible = false;
                LeftWindowPosition1Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                LeftOneWindowSize = 2
                model.getObjectByName('left_window1_part1').visible = true;
                model.getObjectByName('left_window1_part2').visible = true;
                model.getObjectByName('left_window1_part3').visible = false;
                LeftWindowPosition1Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                LeftOneWindowSize = 3;
                model.getObjectByName('left_window1_part1').visible = true;
                model.getObjectByName('left_window1_part2').visible = true;
                model.getObjectByName('left_window1_part3').visible = true;
                LeftWindowPosition1Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".LeftWindowTwoSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                LeftTwoWindowSize = 1;
                model.getObjectByName('left_window2_part1').visible = true;
                model.getObjectByName('left_window2_part2').visible = false;
                model.getObjectByName('left_window2_part3').visible = false;
                LeftWindowPosition2Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                LeftTwoWindowSize = 2
                model.getObjectByName('left_window2_part1').visible = true;
                model.getObjectByName('left_window2_part2').visible = true;
                model.getObjectByName('left_window2_part3').visible = false;
                LeftWindowPosition2Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                LeftTwoWindowSize = 3;
                model.getObjectByName('left_window2_part1').visible = true;
                model.getObjectByName('left_window2_part2').visible = true;
                model.getObjectByName('left_window2_part3').visible = true;
                LeftWindowPosition2Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".LeftWindowThreeSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                LeftThreeWindowSize = 1;
                model.getObjectByName('left_window3_part1').visible = true;
                model.getObjectByName('left_window3_part2').visible = false;
                model.getObjectByName('left_window3_part3').visible = false;
                LeftWindowPosition3Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                LeftThreeWindowSize = 2
                model.getObjectByName('left_window3_part1').visible = true;
                model.getObjectByName('left_window3_part2').visible = true;
                model.getObjectByName('left_window3_part3').visible = false;
                LeftWindowPosition3Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                LeftThreeWindowSize = 3;
                model.getObjectByName('left_window3_part1').visible = true;
                model.getObjectByName('left_window3_part2').visible = true;
                model.getObjectByName('left_window3_part3').visible = true;
                LeftWindowPosition3Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".LeftWindowFourSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {

            if (data.from == 1) {
                LeftFourWindowSize = 1;
                model.getObjectByName('left_window4_part1').visible = true;
                model.getObjectByName('left_window4_part2').visible = false;
                model.getObjectByName('left_window4_part3').visible = false;
                LeftWindowPosition4Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                LeftFourWindowSize = 2
                model.getObjectByName('left_window4_part1').visible = true;
                model.getObjectByName('left_window4_part2').visible = true;
                model.getObjectByName('left_window4_part3').visible = false;
                LeftWindowPosition4Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                LeftFourWindowSize = 3;
                model.getObjectByName('left_window4_part1').visible = true;
                model.getObjectByName('left_window4_part2').visible = true;
                model.getObjectByName('left_window4_part3').visible = true;
                LeftWindowPosition4Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });
    $(".LeftWindowFiveSize").ionRangeSlider({
        min: 1,
        max: 3,
        step: 1,
        from: 3,
        skin: "round",
        onChange: function(data) {
            if (data.from == 1) {
                LeftFiveWindowSize = 1;
                model.getObjectByName('left_window5_part1').visible = true;
                model.getObjectByName('left_window5_part2').visible = false;
                model.getObjectByName('left_window5_part3').visible = false;
                LeftWindowPosition5Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (1 - 1),
                });
            }
            if (data.from == 2) {
                LeftFiveWindowSize = 2
                model.getObjectByName('left_window5_part1').visible = true;
                model.getObjectByName('left_window5_part2').visible = true;
                model.getObjectByName('left_window5_part3').visible = false;
                LeftWindowPosition5Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (2 - 1),
                });
            }
            if (data.from == 3) {
                LeftFiveWindowSize = 3;
                model.getObjectByName('left_window5_part1').visible = true;
                model.getObjectByName('left_window5_part2').visible = true;
                model.getObjectByName('left_window5_part3').visible = true;
                LeftWindowPosition5Controller.update({
                    min: -((document.getElementById('length').value / 2 - 1 / 2 - 0.05)),
                    max: (document.getElementById('length').value / 2 - 1 / 2 - 0.05) - (3 - 1),
                });
            }
        }
    });


    $(".FrontWindowOnePosition").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_window1").position.z = -(data.from);
            $('#FrontWindowLeftDistance1').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) + data.from);
            $('#FrontWindowRightDistance1').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".FrontWindowTwoPosition").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_window2").position.z = -(data.from);
            $('#FrontWindowLeftDistance2').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) + data.from);
            $('#FrontWindowRightDistance2').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".FrontWindowThreePosition").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_window3").position.z = -(data.from);
            $('#FrontWindowLeftDistance3').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) + data.from);
            $('#FrontWindowRightDistance3').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".FrontWindowFourPosition").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_window4").position.z = -(data.from);
            $('#FrontWindowLeftDistance4').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) + data.from);
            $('#FrontWindowRightDistance4').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".FrontWindowFivePosition").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_window5").position.z = -(data.from);
            $('#FrontWindowLeftDistance5').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) + data.from);
            $('#FrontWindowRightDistance5').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".RightWindowPosition1").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_window1").position.x = -(data.from);
            $('#RightWindowLeftDistance1').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#RightWindowRightDistance1').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });

    $(".RightWindowPosition2").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_window2").position.x = -(data.from);
            $('#RightWindowLeftDistance2').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#RightWindowRightDistance2').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });

    $(".RightWindowPosition3").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_window3").position.x = -(data.from);
            $('#RightWindowLeftDistance3').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#RightWindowRightDistance3').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".RightWindowPosition4").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_window4").position.x = -(data.from);
            $('#RightWindowLeftDistance4').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#RightWindowRightDistance4').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".RightWindowPosition5").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_window5").position.x = -(data.from);
            $('#RightWindowLeftDistance5').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#RightWindowRightDistance5').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".LeftWindowPosition1").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_window1").position.x = (data.from);
            $('#LeftWindowLeftDistance1').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#LeftWindowRightDistance1').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });

    $(".LeftWindowPosition2").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_window2").position.x = (data.from);
            $('#LeftWindowLeftDistance2').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#LeftWindowRightDistance2').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });

    $(".LeftWindowPosition3").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_window3").position.x = (data.from);
            $('#LeftWindowLeftDistance3').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#LeftWindowRightDistance3').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".LeftWindowPosition4").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_window4").position.x = (data.from);
            $('#LeftWindowLeftDistance4').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#LeftWindowRightDistance4').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".LeftWindowPosition5").ionRangeSlider({
        min: -5.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_window5").position.x = (data.from);
            $('#LeftWindowLeftDistance5').prop("value", (document.getElementById("length").value / 2 - 1 / 2) + data.from);
            $('#LeftWindowRightDistance5').prop("value", (document.getElementById("length").value / 2 - 1 / 2) - data.from);
        }
    });
    $(".BackWindowPosition1").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_window1").position.z = (data.from);
            $('#BackWindowLeftDistance1').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) + data.from);
            $('#BackWindowRightDistance1').prop("value", (document.getElementById("Width").value / 2 - 1 / 2) - data.from);
        }
    });

    $(".BackWindowPosition2").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_window2").position.z = (data.from);
            $('#BackWindowLeftDistance2').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWindowRightDistance2').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });

    $(".BackWindowPosition3").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_window3").position.z = (data.from);
            $('#BackWindowLeftDistance3').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWindowRightDistance3').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".BackWindowPosition4").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_window4").position.z = (data.from);
            $('#BackWindowLeftDistance4').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWindowRightDistance4').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".BackWindowPosition5").ionRangeSlider({
        min: -3.45,
        max: 1.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_window5").position.z = (data.from);
            $('#BackWindowLeftDistance5').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWindowRightDistance5').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontWalkinDoorPosition").ionRangeSlider({
        min: -3.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door1_01").position.y = data.from;
            $('#FrontWalkindoorLeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#FrontWalkindoorRightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontWalkinDoorPosition2").ionRangeSlider({
        min: -3.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door1_02").position.y = data.from;
            $('#FrontWalkindoorLeftDistance2').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#FrontWalkindoorRightDistance2').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontWalkinDoorPosition3").ionRangeSlider({
        min: -3.45,
        max: 3,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door1_03").position.y = data.from;
            $('#FrontWalkindoorLeftDistance3').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#FrontWalkindoorRightDistance3').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontWalkinDoorPosition4").ionRangeSlider({
        min: -3.45,
        max: 3,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door1_04").position.y = data.from;
            $('#FrontWalkindoorLeftDistance4').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#FrontWalkindoorRightDistance4').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".BackWalkinDoorPosition1").ionRangeSlider({
        min: -3.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door1_01").position.y = -(data.from);
            $('#BackWalkindoorLeftDistance1').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWalkindoorRightDistance1').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".BackWalkinDoorPosition2").ionRangeSlider({
        min: -3.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door1_02").position.y = -(data.from);
            $('#BackWalkindoorLeftDistance2').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWalkindoorRightDistance2').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".BackWalkinDoorPosition3").ionRangeSlider({
        min: -3.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door1_03").position.y = -(data.from);
            $('#BackWalkindoorLeftDistance3').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWalkindoorRightDistance3').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".BackWalkinDoorPosition4").ionRangeSlider({
        min: -3.45,
        max: 3.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door1_04").position.y = -(data.from);
            $('#BackWalkindoorLeftDistance4').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#BackWalkindoorRightDistance4').prop("value", parseFloat((document.getElementById("Width").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftWalkinDoorPosition1").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door1_01").position.x = (data.from);
            $('#LeftWalkindoorLeftDistance1').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#LeftWalkindoorRightDistance1').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftWalkinDoorPosition2").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door1_02").position.x = (data.from);
            $('#LeftWalkindoorLeftDistance2').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#LeftWalkindoorRightDistance2').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftWalkinDoorPosition3").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door1_03").position.x = (data.from);
            $('#LeftWalkindoorLeftDistance3').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#LeftWalkindoorRightDistance3').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftWalkinDoorPosition4").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door1_04").position.x = (data.from);
            $('#LeftWalkindoorLeftDistance4').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#LeftWalkindoorRightDistance4').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".RightWalkinDoorPosition1").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door1_01").position.x = -(data.from);
            $('#RightWalkindoorLeftDistance1').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#RightWalkindoorRightDistance1').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".RightWalkinDoorPosition2").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door1_02").position.x = -(data.from);
            $('#RightWalkindoorLeftDistance2').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#RightWalkindoorRightDistance2').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".RightWalkinDoorPosition3").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door1_03").position.x = -(data.from);
            $('#RightWalkindoorLeftDistance3').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#RightWalkindoorRightDistance3').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".RightWalkinDoorPosition4").ionRangeSlider({
        min: -5.45,
        max: 5.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door1_04").position.x = -(data.from);
            $('#RightWalkindoorLeftDistance4').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) + data.from).toFixed(2));
            $('#RightWalkindoorRightDistance4').prop("value", parseFloat((document.getElementById("length").value / 2 - 1 / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontDoorPosition").ionRangeSlider({
        
        min: -2.45,
        max: 2.45,
        step: 0.5,
        skin: "round",
        from: 0,
        onChange: function(data) {
            model.getObjectByName("front_door2_01").position.y = data.from;
            
            $('#FrontdoorLeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth').value / 2) + data.from).toFixed(2));
            $('#FrontdoorRightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });

    $(".FrontDoor2Position").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door2_02").position.y = data.from;
            $('#Frontdoor2LeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth2').value / 2) + data.from).toFixed(2));
            $('#Frontdoor2RightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth2').value / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontDoor3Position").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door2_03").position.y = data.from;
            $('#Frontdoor3LeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth3').value / 2) + data.from).toFixed(2));
            $('#Frontdoor3RightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth3').value / 2) - data.from).toFixed(2));
        }
    });
    $(".FrontDoor4Position").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("front_door2_04").position.y = data.from;
            $('#Frontdoor4LeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('FrontDoorWidth4').value / 2) + data.from).toFixed(2));
            $('#Frontdoor4RightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth4').value / 2) - data.from).toFixed(2));
        }
    });
    $(".BackDoorPosition").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door2_01").position.y = -(data.from);
            $('#BackdoorLeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth').value / 2) + data.from).toFixed(2));
            $('#BackdoorRightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".BackDoor2Position").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        step: 0.5,
        skin: "round",
        from: 0,
        onChange: function(data) {
            model.getObjectByName("back_door2_02").position.y = -(data.from);
            $('#Backdoor2LeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth2').value / 2) + data.from).toFixed(2));
            $('#Backdoor2RightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth2').value / 2) - data.from).toFixed(2));
        }
    });
    $(".BackDoor3Position").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door2_03").position.y = -(data.from);
            $('#Backdoor3LeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth3').value / 2) + data.from).toFixed(2));
            $('#Backdoor3RightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth3').value / 2) - data.from).toFixed(2));
        }
    });
    $(".BackDoor4Position").ionRangeSlider({
        min: -2.45,
        max: 2.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("back_door2_04").position.y = -(data.from);
            $('#Backdoor4LeftDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth4').value / 2) + data.from).toFixed(2));
            $('#Backdoor4RightDistance').prop("value", parseFloat((document.getElementById("Width").value / 2 - document.getElementById('BackDoorWidth4').value / 2) - data.from).toFixed(2));
        }
    });
    $(".RightDoorPosition").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door2_01").position.x = -(data.from);
            $('#RightdoorLeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#RightdoorRightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".RightDoor2Position").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door2_02").position.x = -(data.from);
            $('#Rightdoor2LeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#Rightdoor2RightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".RightDoor3Position").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door2_03").position.x = -(data.from);
            $('#Rightdoor3LeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#Rightdoor3RightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".RightDoor4Position").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("right_door2_04").position.x = -(data.from);
            $('#Rightdoor4LeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#Rightdoor4RightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftDoorPosition").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door2_01").position.x = data.from;
            $('#LeftdoorLeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));

            $('#LeftdoorRightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftDoor2Position").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door2_02").position.x = data.from;
            $('#Leftdoor2LeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#Leftdoor2RightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftDoor3Position").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        step: 0.5,
        from: 0,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door2_03").position.x = data.from;
            $('#Leftdoor3LeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#Leftdoor3RightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });
    $(".LeftDoor4Position").ionRangeSlider({
        min: -4.45,
        max: 4.45,
        from: 0,
        step: 0.5,
        skin: "round",
        onChange: function(data) {
            model.getObjectByName("left_door2_04").position.x = data.from;
            $('#Leftdoor4LeftDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) + data.from).toFixed(2));
            $('#Leftdoor4RightDistance').prop("value", parseFloat((document.getElementById("length").value / 2 - document.getElementById('LeftDoorWidth').value / 2) - data.from).toFixed(2));
        }
    });

    FrontDoor1PositionController = $(".FrontDoorPosition").data("ionRangeSlider");
    FrontDoor2PositionController = $(".FrontDoor2Position").data("ionRangeSlider");
    FrontDoor3PositionController = $(".FrontDoor3Position").data("ionRangeSlider");
    FrontDoor4PositionController = $(".FrontDoor4Position").data("ionRangeSlider");

    BackDoor1PositionController = $(".BackDoorPosition").data("ionRangeSlider");
    BackDoor2PositionController = $(".BackDoor2Position").data("ionRangeSlider");
    BackDoor3PositionController = $(".BackDoor3Position").data("ionRangeSlider");
    BackDoor4PositionController = $(".BackDoor4Position").data("ionRangeSlider");

    LeftDoor1PositionController = $(".LeftDoorPosition").data("ionRangeSlider");
    LeftDoor2PositionController = $(".LeftDoor2Position").data("ionRangeSlider");
    LeftDoor3PositionController = $(".LeftDoor3Position").data("ionRangeSlider");
    LeftDoor4PositionController = $(".LeftDoor4Position").data("ionRangeSlider");

    RightDoor1PositionController = $(".RightDoorPosition").data("ionRangeSlider");
    RightDoor2PositionController = $(".RightDoor2Position").data("ionRangeSlider");
    RightDoor3PositionController = $(".RightDoor3Position").data("ionRangeSlider");
    RightDoor4PositionController = $(".RightDoor4Position").data("ionRangeSlider");

    FrontWalkinDoor1PositionController = $(".FrontWalkinDoorPosition").data('ionRangeSlider');
    FrontDoorWalkin2PositionController = $(".FrontWalkinDoorPosition2").data('ionRangeSlider');
    FrontDoorWalkin3PositionController = $(".FrontWalkinDoorPosition3").data('ionRangeSlider');
    FrontDoorWalkin4PositionController = $(".FrontWalkinDoorPosition4").data('ionRangeSlider');

    BackDoorWalkin1PositionController = $(".BackWalkinDoorPosition1").data('ionRangeSlider');
    BackDoorWalkin2PositionController = $(".BackWalkinDoorPosition2").data('ionRangeSlider');
    BackDoorWalkin3PositionController = $(".BackWalkinDoorPosition3").data('ionRangeSlider');
    BackDoorWalkin4PositionController = $(".BackWalkinDoorPosition4").data('ionRangeSlider');

    LeftDoorWalkin1PositionController = $(".LeftWalkinDoorPosition1").data('ionRangeSlider');
    LeftDoorWalkin2PositionController = $(".LeftWalkinDoorPosition2").data('ionRangeSlider');
    LeftDoorWalkin3PositionController = $(".LeftWalkinDoorPosition3").data('ionRangeSlider');
    LeftDoorWalkin4PositionController = $(".LeftWalkinDoorPosition4").data('ionRangeSlider');

    RightDoorWalkin1PositionController = $(".RightWalkinDoorPosition1").data('ionRangeSlider');
    RightDoorWalkin2PositionController = $(".RightWalkinDoorPosition2").data('ionRangeSlider');
    RightDoorWalkin3PositionController = $(".RightWalkinDoorPosition3").data('ionRangeSlider');
    RightDoorWalkin4PositionController = $(".RightWalkinDoorPosition4").data('ionRangeSlider');

    FrontWindowPosition1Controller = $(".FrontWindowOnePosition").data('ionRangeSlider');
    FrontWindowPosition2Controller = $(".FrontWindowTwoPosition").data('ionRangeSlider');
    FrontWindowPosition3Controller = $(".FrontWindowThreePosition").data('ionRangeSlider');
    FrontWindowPosition4Controller = $(".FrontWindowFourPosition").data('ionRangeSlider');
    FrontWindowPosition5Controller = $(".FrontWindowFivePosition").data('ionRangeSlider');

    BackWindowPosition1Controller = $(".BackWindowPosition1").data('ionRangeSlider');
    BackWindowPosition2Controller = $(".BackWindowPosition2").data('ionRangeSlider');
    BackWindowPosition3Controller = $(".BackWindowPosition3").data('ionRangeSlider');
    BackWindowPosition4Controller = $(".BackWindowPosition4").data('ionRangeSlider');
    BackWindowPosition5Controller = $(".BackWindowPosition5").data('ionRangeSlider');


    LeftWindowPosition1Controller = $(".LeftWindowPosition1").data('ionRangeSlider');
    LeftWindowPosition2Controller = $(".LeftWindowPosition2").data('ionRangeSlider');
    LeftWindowPosition3Controller = $(".LeftWindowPosition3").data('ionRangeSlider');
    LeftWindowPosition4Controller = $(".LeftWindowPosition4").data('ionRangeSlider');
    LeftWindowPosition5Controller = $(".LeftWindowPosition5").data('ionRangeSlider');

    RightWindowPosition1Controller = $(".RightWindowPosition1").data('ionRangeSlider');
    RightWindowPosition2Controller = $(".RightWindowPosition2").data('ionRangeSlider');
    RightWindowPosition3Controller = $(".RightWindowPosition3").data('ionRangeSlider');
    RightWindowPosition4Controller = $(".RightWindowPosition4").data('ionRangeSlider');
    RightWindowPosition5Controller = $(".RightWindowPosition5").data('ionRangeSlider');

    FrontWindowSize1Controller = $(".FrontWindowOneSize").data('ionRangeSlider');
    FrontWindowSize2Controller = $(".FrontWindowTwoSize").data('ionRangeSlider');
    FrontWindowSize3Controller = $(".FrontWindowThreeSize").data('ionRangeSlider');
    FrontWindowSize4Controller = $(".FrontWindowFourSize").data('ionRangeSlider');
    FrontWindowSize5Controller = $(".FrontWindowFiveSize").data('ionRangeSlider');

    BackWindowSize1Controller = $(".BackWindowOneSize").data('ionRangeSlider');
    BackWindowSize2Controller = $(".BackWindowTwoSize").data('ionRangeSlider');
    BackWindowSize3Controller = $(".BackWindowThreeSize").data('ionRangeSlider');
    BackWindowSize4Controller = $(".BackWindowFourSize").data('ionRangeSlider');
    BackWindowSize5Controller = $(".BackWindowFiveSize").data('ionRangeSlider');

    LeftWindowSize1Controller = $(".LeftWindowOneSize").data('ionRangeSlider');
    LeftWindowSize2Controller = $(".LeftWindowTwoSize").data('ionRangeSlider');
    LeftWindowSize3Controller = $(".LeftWindowThreeSize").data('ionRangeSlider');
    LeftWindowSize4Controller = $(".LeftWindowFourSize").data('ionRangeSlider');
    LeftWindowSize5Controller = $(".LeftWindowFiveSize").data('ionRangeSlider');

    RightWindowSize1Controller = $(".RightWindowOneSize").data('ionRangeSlider');
    RightWindowSize2Controller = $(".RightWindowTwoSize").data('ionRangeSlider');
    RightWindowSize3Controller = $(".RightWindowThreeSize").data('ionRangeSlider');
    RightWindowSize4Controller = $(".RightWindowFourSize").data('ionRangeSlider');
    RightWindowSize5Controller = $(".RightWindowFiveSize").data('ionRangeSlider');

    var numLenght = document.getElementById("length-val");
    numLenght.addEventListener("input", changeLength);
    var numWidth = document.getElementById("Width-val");
    numWidth.addEventListener("input", changeWidth);
    var numGutter = document.getElementById("Gutter-val");
    numGutter.addEventListener("input", changeGutterHeigth);
    var numRoof = document.getElementById("Slope-val");
    numRoof.addEventListener("input", changeSlapeAngle);
    var sliderLength = document.getElementById("length");
    sliderLength.addEventListener("input", changeLength);

    function changeLength(e) {
        var target = e.target ? e.target : e.srcElement;
        model.getObjectByName("house_base_right").position.x = target.value / 2;
        model.getObjectByName("house_base_left").position.x = -target.value / 2;

                // LeftWindowPosition1Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (LeftOneWindowSize - 1),
        // });
        // LeftWindowPosition2Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (LeftTwoWindowSize - 1),
        // });
        // LeftWindowPosition3Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (LeftThreeWindowSize - 1),
        // });
        // LeftWindowPosition4Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (LeftFourWindowSize - 1),
        // });
        // LeftWindowPosition5Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (LeftFiveWindowSize - 1),
        // });

        // RightWindowPosition1Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (RightOneWindowSize - 1),
        // });
        // RightWindowPosition2Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (RightTwoWindowSize - 1),
        // });
        // RightWindowPosition3Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (RightThreeWindowSize - 1),
        // });
        // RightWindowPosition4Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (RightFourWindowSize - 1),
        // });
        // RightWindowPosition5Controller.update({
        //     min: -((target.value / 2 - 1 / 2 - 0.05)),
        //     max: (target.value / 2 - 1 / 2 - 0.05) - (RightFiveWindowSize - 1),
        // });

        LeftDoorWalkin1PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        LeftDoorWalkin2PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        LeftDoorWalkin3PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        LeftDoorWalkin4PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });

        RightDoorWalkin1PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        RightDoorWalkin2PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        RightDoorWalkin3PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        RightDoorWalkin4PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });




        LeftDoor1PositionController.update({
            min: -((target.value / 2 - document.getElementById('LeftDoorWidth').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('LeftDoorWidth').value / 2 - 0.05),
        });
        LeftDoor2PositionController.update({
            min: -((target.value / 2 - document.getElementById('LeftDoorWidth2').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('LeftDoorWidth2').value / 2 - 0.05),
        });
        LeftDoor3PositionController.update({
            min: -((target.value / 2 - document.getElementById('LeftDoorWidth3').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('LeftDoorWidth3').value / 2 - 0.05),
        });
        LeftDoor4PositionController.update({
            min: -((target.value / 2 - document.getElementById('LeftDoorWidth4').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('LeftDoorWidth4').value / 2 - 0.05),
        });

        RightDoor1PositionController.update({
            min: -((target.value / 2 - document.getElementById('RightDoorWidth').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('RightDoorWidth').value / 2 - 0.05),
        });
        RightDoor2PositionController.update({
            min: -((target.value / 2 - document.getElementById('RightDoorWidth2').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('RightDoorWidth2').value / 2 - 0.05),
        });
        RightDoor3PositionController.update({
            min: -((target.value / 2 - document.getElementById('RightDoorWidth3').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('RightDoorWidth3').value / 2 - 0.05),
        });
        RightDoor4PositionController.update({
            min: -((target.value / 2 - document.getElementById('RightDoorWidth4').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('RightDoorWidth4').value / 2 - 0.05),
        });



        normalMap_heigth = target.value
        normalMap.repeat.set(normalMap_heigth, normalMap_width);
        normalMap.needsUpdate = true;
        displacementMap_heigth = target.value;
        displacementMap.repeat.set(displacementMap_heigth, displacementMap_width);
        displacementMap.needsUpdate = true;
        normalMap2_heigth = target.value;
        normalMap2.repeat.set(normalMap2_heigth, normalMap2_width);
        normalMap2.needsUpdate = true;
        displacementMap2_heigth = target.value;
        displacementMap2.repeat.set(displacementMap2_heigth, displacementMap2_width);
        displacementMap2.needsUpdate = true;
        specMap_heigth2 = target.value;
        specMap2.repeat.set(specMap_heigth2, specMap_width2);
        specMap2.needsUpdate = true;
        RightleftWallsMaterial_height = target.value;
        RightleftWallsMaterial_color.repeat.set(RightleftWallsMaterial_height, RightleftWallsMaterial_width);
        RightleftWallsMaterial_color.needsUpdate = true;
        RightleftMaterial_normal.repeat.set(RightleftWallsMaterial_height, RightleftWallsMaterial_width);
        RightleftMaterial_normal.needsUpdate = true;
        frontWallsMaterial_normal2_heigth = target.value;
        RightleftMaterial_normal2.repeat.set(frontWallsMaterial_normal2_heigth, frontWallsMaterial_normal2_width);
        RightleftMaterial_normal2.needsUpdate = true;

        TransparentRoofMap_heigth = target.value;
        roof3_colorMap.repeat.set(TransparentRoofMap_heigth, TransparentRoofMap_width);
        roof3_colorMap.needsUpdate = true;

        roof3_alphaMap.repeat.set(TransparentRoofMap_heigth, TransparentRoofMap_width);
        roof3_alphaMap.needsUpdate = true;
        

    }
    var sliderWidth = document.getElementById("Width");
    sliderWidth.addEventListener("input", changeWidth);

    function changeWidth(e) {
    //   console.log(document.getElementById('Slope').value);
        var target = e.target ? e.target : e.srcElement;
        ModelWidth = target.value / 2;

        TransparentRoofMap_width = target.value / 2
        
        
        FrontWalkinDoor1PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        FrontDoorWalkin2PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        FrontDoorWalkin3PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        FrontDoorWalkin4PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });

        BackDoorWalkin1PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        BackDoorWalkin2PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        BackDoorWalkin3PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });
        BackDoorWalkin4PositionController.update({
            min: -((target.value / 2 - 1 / 2 - 0.05)),
            max: (target.value / 2 - 1 / 2 - 0.05),
        });

        // FrontWindowPosition1Controller.update({
        //  min: -((target.value /2 - 1/2 - 0.05)),
        //  max: (target.value /2 - 1/2 - 0.05) - (FrontOneWindowSize -1),
        // });
        // FrontWindowPosition2Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (FrontTwoWindowSize -1),
        //     });
        //     FrontWindowPosition3Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (FrontThreeWindowSize -1),
        //     });
        //     FrontWindowPosition4Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (FrontFourWindowSize -1),
        //     });
        //     FrontWindowPosition5Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (FrontFiveWindowSize -1),
        //     });


        //     BackWindowPosition1Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (BackOneWindowSize -1),
        //     });
        //     BackWindowPosition2Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (BackTwoWindowSize -1),
        //     });
        //     BackWindowPosition3Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (BackThreeWindowSize -1),
        //     });
        //     BackWindowPosition4Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (BackFourWindowSize -1),
        //     });
        //     BackWindowPosition5Controller.update({
        //       min: -((target.value /2 - 1/2 - 0.05)),
        //       max: (target.value /2 - 1/2 - 0.05) - (BackFiveWindowSize -1),
        //     });

        FrontDoor1PositionController.update({
            min: -((target.value / 2 - document.getElementById('FrontDoorWidth').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('FrontDoorWidth').value / 2 - 0.05),
        });
        FrontDoor2PositionController.update({
            min: -((target.value / 2 - document.getElementById('FrontDoorWidth2').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('FrontDoorWidth2').value / 2 - 0.05),
        });
        FrontDoor3PositionController.update({
            min: -((target.value / 2 - document.getElementById('FrontDoorWidth3').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('FrontDoorWidth3').value / 2 - 0.05),
        });
        FrontDoor4PositionController.update({
            min: -((target.value / 2 - document.getElementById('FrontDoorWidth4').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('FrontDoorWidth4').value / 2 - 0.05),
        });

        BackDoor1PositionController.update({
            min: -((target.value / 2 - document.getElementById('BackDoorWidth').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('BackDoorWidth').value / 2 - 0.05),
        });
        BackDoor2PositionController.update({
            min: -((target.value / 2 - document.getElementById('BackDoorWidth2').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('BackDoorWidth2').value / 2 - 0.05),
        });
        BackDoor3PositionController.update({
            min: -((target.value / 2 - document.getElementById('BackDoorWidth3').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('BackDoorWidth3').value / 2 - 0.05),
        });
        BackDoor4PositionController.update({
            min: -((target.value / 2 - document.getElementById('BackDoorWidth4').value / 2 - 0.05)),
            max: (target.value / 2 - document.getElementById('BackDoorWidth4').value / 2 - 0.05),
        });
        model.getObjectByName("house_baseback_right2").position.y = target.value / 2;
        model.getObjectByName("house_baseback_left").position.y = target.value / 2;
        // model.getObjectByName("house_basefront").position.y = target.value / 2;
        
        model.getObjectByName("house_basefront").position.y = -target.value / 2;
        model.getObjectByName("house_baseback").position.y = target.value / 2;


        model.getObjectByName("house_basefront_left2").position.y = -target.value / 2;
        model.getObjectByName("house_basefront_right2").position.y = -target.value / 2;
        // model.getObjectByName("house_baseback").position.z = -target.value / 2;
        GutterHeight = document.getElementById('Gutter').value;
        roofHeightValue = Math.tan(document.getElementById('Slope').value * Math.PI / 180) * ModelWidth + Number(GutterHeight);
        document.getElementById('Ridge').value = `${parseFloat(roofHeightValue+Number(GutterHeight)).toFixed(2)}`;
        model.getObjectByName("house_slope_right").position.z = roofHeightValue;
        model.getObjectByName("house_slope_left").position.z = roofHeightValue;
        
        displacementMap_width = target.value;
        displacementMap.repeat.set(displacementMap_heigth, displacementMap_width);
        displacementMap.needsUpdate = true;
        normalMap_width = target.value;
        normalMap.repeat.set(normalMap_heigth, normalMap_width);
        normalMap.needsUpdate = true;
        displacementMap2_heigth = target.value;
        displacementMap2.repeat.set(displacementMap2_heigth, displacementMap2_width);
        displacementMap2.needsUpdate = true;
        normalMap2_heigth = target.value;
        normalMap2.repeat.set(normalMap2_heigth, normalMap2_width);
        normalMap2.needsUpdate = true;
        specMap_width2 = target.value;
        specMap2.repeat.set(specMap_heigth2, specMap_width2);
        specMap2.needsUpdate = true;
        FrontbackWallsMaterial_height = target.value;
        FrontbackWallsMaterial_color.repeat.set(FrontbackWallsMaterial_height, FrontbackWallsMaterial_width);
        FrontbackWallsMaterial_color.needsUpdate = true;
        FrontbackwallsMaterial_normal.repeat.set(FrontbackWallsMaterial_height, FrontbackWallsMaterial_height);
        FrontbackwallsMaterial_normal.needsUpdate = true;
        rightWallsMaterial_normal2_heigth = target.value;
        FrontbackwallsMaterial_normal2.repeat.set(rightWallsMaterial_normal2_heigth, frontWallsMaterial_normal2_width);
        FrontbackwallsMaterial_normal2.needsUpdate = true;
        
        return ModelWidth;
    }
    var leftdoorFirst = document.getElementById('LeftDoorWidth');
    leftdoorFirst.addEventListener('input', changeFirstLeftdoorWidth);

    function changeFirstLeftdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        LeftDoor1PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var leftdoorSecond = document.getElementById('LeftDoorWidth2');
    leftdoorSecond.addEventListener('input', changeSecondLeftdoorWidth);

    function changeSecondLeftdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        LeftDoor2PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var leftdoorThird = document.getElementById('LeftDoorWidth3');
    leftdoorThird.addEventListener('input', changeThirdLeftdoorWidth);

    function changeThirdLeftdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        LeftDoor3PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var leftdoorForth = document.getElementById('LeftDoorWidth4');
    leftdoorForth.addEventListener('input', changeForthLeftdoorWidth);

    function changeForthLeftdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        LeftDoor4PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var RightdoorFirst = document.getElementById('RightDoorWidth');
    RightdoorFirst.addEventListener('input', changeFirstRightdoorWidth);

    function changeFirstRightdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        RightDoor1PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var RightdoorSecond = document.getElementById('RightDoorWidth2');
    RightdoorSecond.addEventListener('input', changeSecondRightdoorWidth);

    function changeSecondRightdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        RightDoor2PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var RightdoorThird = document.getElementById('RightDoorWidth3');
    RightdoorThird.addEventListener('input', changeThirdRightdoorWidth);

    function changeThirdRightdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        RightDoor3PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var RightdoorForth = document.getElementById('RightDoorWidth4');
    RightdoorForth.addEventListener('input', changeForthRightdoorWidth);

    function changeForthRightdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        RightDoor4PositionController.update({
            min: -((document.getElementById('length').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('length').value / 2 - target.value / 2 - 0.05),
        });
    }
    var BackdoorFirst = document.getElementById('BackDoorWidth');
    BackdoorFirst.addEventListener('input', changeFirstBackdoorWidth);

    function changeFirstBackdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        BackDoor1PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var BackdoorSecond = document.getElementById('BackDoorWidth2');
    BackdoorSecond.addEventListener('input', changeSecondBackdoorWidth);

    function changeSecondBackdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        BackDoor2PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var BackdoorThird = document.getElementById('BackDoorWidth3');
    BackdoorThird.addEventListener('input', changeThirdBackdoorWidth);

    function changeThirdBackdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        BackDoor3PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var BackdoorForth = document.getElementById('BackDoorWidth4');
    BackdoorForth.addEventListener('input', changeForthBackdoorWidth);

    function changeForthBackdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        BackDoor4PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var FrontdoorFirst = document.getElementById('FrontDoorWidth');
    FrontdoorFirst.addEventListener('input', changeFirstFrontdoorWidth);

    function changeFirstFrontdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        FrontDoor1PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var FrontdoorSecond = document.getElementById('FrontDoorWidth2');
    FrontdoorSecond.addEventListener('input', changeSecondFrontdoorWidth);

    function changeSecondFrontdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        FrontDoor2PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var FrontdoorThird = document.getElementById('FrontDoorWidth3');
    FrontdoorThird.addEventListener('input', changeThirdFrontdoorWidth);

    function changeThirdFrontdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        FrontDoor3PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var FrontdoorForth = document.getElementById('FrontDoorWidth4');
    FrontdoorForth.addEventListener('input', changeForthFrontdoorWidth);

    function changeForthFrontdoorWidth(e) {
        var target = e.target ? e.target : e.srcElement;
        FrontDoor4PositionController.update({
            min: -((document.getElementById('Width').value / 2 - target.value / 2 - 0.05)),
            max: (document.getElementById('Width').value / 2 - target.value / 2 - 0.05),
        });
    }
    var roofAngle = document.getElementById("Slope");
    roofAngle.addEventListener("input", changeSlapeAngle);

    function changeSlapeAngle(width) {
        width = ModelWidth;
        console.log(this.value);
        GutterHeight = document.getElementById('Gutter').value;
        roofHeightValue = Math.tan(this.value * Math.PI / 180) * width + Number(GutterHeight);
        // roofHeightValue = 0.4190492975027876;
        
        model.getObjectByName("house_slope_right").position.z = roofHeightValue;
        model.getObjectByName("house_slope_left").position.z = roofHeightValue;
        GutterHeight = document.getElementById('Gutter').value;
        document.getElementById('Ridge').value = `${parseFloat(roofHeightValue+Number(GutterHeight)).toFixed(2)}`;
        console.log({
            roofHeightValue
        })
        return roofHeightValue;
    }
    var GutterHeigth = document.getElementById("Gutter");
    GutterHeigth.addEventListener("input", changeGutterHeigth);

    function changeGutterHeigth(e) {
        var target = e.target ? e.target : e.srcElement;
        GutterHeigthValue = target.value;
        console.log(document.getElementById("Slope").value);
        roofHeightValue = Math.tan(document.getElementById("Slope").value * Math.PI / 180) * document.getElementById("Width").value/2 + Number(GutterHeigthValue);
        document.getElementById('Ridge').value = `${parseFloat(roofHeightValue+Number(GutterHeigthValue)).toFixed(2)}`;
        model.getObjectByName("house_slope_right").position.z = roofHeightValue;
        model.getObjectByName("house_topfront_right").position.z = GutterHeigthValue;
        model.getObjectByName("house_topback_right").position.z = GutterHeigthValue;
        model.getObjectByName("house_slope_left").position.z = roofHeightValue;
        model.getObjectByName("house_topfront_left").position.z = GutterHeigthValue;
        model.getObjectByName("house_topback_left").position.z = GutterHeigthValue;
        if (GutterHeigthValue >= 4) {
            document.querySelector('#RightDoorHeight').max = 4;
            document.querySelector('#RightDoorHeight-val').max = 4;
            document.querySelector('#RightDoorHeight2').max = 4;
            document.querySelector('#RightDoorHeight-val2').max = 4;
            document.querySelector('#RightDoorHeight3').max = 4;
            document.querySelector('#RightDoorHeight-val3').max = 4;
            document.querySelector('#RightDoorHeight4').max = 4;
            document.querySelector('#RightDoorHeight-val4').max = 4;
            document.querySelector('#LeftDoorHeight').max = 4;
            document.querySelector('#LeftDoorHeight-val').max = 4;
            document.querySelector('#LeftDoorHeight2').max = 4;
            document.querySelector('#LeftDoorHeight-val2').max = 4;
            document.querySelector('#LeftDoorHeight3').max = 4;
            document.querySelector('#LeftDoorHeight-val3').max = 4;
            document.querySelector('#LeftDoorHeight4').max = 4;
            document.querySelector('#LeftDoorHeight-val4').max = 4;
            document.querySelector('#BackDoorHeight').max = 4;
            document.querySelector('#BackDoorHeight-val').max = 4;
            document.querySelector('#BackDoorHeight2').max = 4;
            document.querySelector('#BackDoorHeight-val2').max = 4;
            document.querySelector('#BackDoorHeight3').max = 4;
            document.querySelector('#BackDoorHeight-val3').max = 4;
            document.querySelector('#BackDoorHeight4').max = 4;
            document.querySelector('#BackDoorHeight-val4').max = 4;
            document.querySelector('#FrontDoorHeight').max = 4;
            document.querySelector('#FrontDoorHeight-val').max = 4;
            document.querySelector('#FrontDoorHeight2').max = 4;
            document.querySelector('#FrontDoorHeight-val2').max = 4;
            document.querySelector('#FrontDoorHeight3').max = 4;
            document.querySelector('#FrontDoorHeight-val3').max = 4;
            document.querySelector('#FrontDoorHeight4').max = 4;
            document.querySelector('#FrontDoorHeight-val4').max = 4;
        } else if (GutterHeigthValue < 3) {
            document.querySelector('#RightDoorHeight').max = target.value;
            document.querySelector('#RightDoorHeight-val').max = target.value;
            document.querySelector('#RightDoorHeight2').max = target.value;
            document.querySelector('#RightDoorHeight-val2').max = target.value;
            document.querySelector('#RightDoorHeight3').max = target.value;
            document.querySelector('#RightDoorHeight-val3').max = target.value;
            document.querySelector('#RightDoorHeight4').max = target.value;
            document.querySelector('#RightDoorHeight-val4').max = target.value;
            document.querySelector('#LeftDoorHeight').max = target.value;
            document.querySelector('#LeftDoorHeight-val').max = target.value;
            document.querySelector('#LeftDoorHeight2').max = target.value;
            document.querySelector('#LeftDoorHeight-val2').max = target.value;
            document.querySelector('#LeftDoorHeight3').max = target.value;
            document.querySelector('#LeftDoorHeight-val3').max = target.value;
            document.querySelector('#LeftDoorHeight4').max = target.value;
            document.querySelector('#LeftDoorHeight-val4').max = target.value;
            document.querySelector('#BackDoorHeight').max = target.value;
            document.querySelector('#BackDoorHeight-val').max = target.value;
            document.querySelector('#BackDoorHeight2').max = target.value;
            document.querySelector('#BackDoorHeight-val2').max = target.value;
            document.querySelector('#BackDoorHeight3').max = target.value;
            document.querySelector('#BackDoorHeight-val3').max = target.value;
            document.querySelector('#BackDoorHeight4').max = target.value;
            document.querySelector('#BackDoorHeight-val4').max = target.value;
            document.querySelector('#FrontDoorHeight').max = target.value;
            document.querySelector('#FrontDoorHeight-val').max = target.value;
            document.querySelector('#FrontDoorHeight2').max = target.value;
            document.querySelector('#FrontDoorHeight-val2').max = target.value;
            document.querySelector('#FrontDoorHeight3').max = target.value;
            document.querySelector('#FrontDoorHeight-val3').max = target.value;
            document.querySelector('#FrontDoorHeight4').max = target.value;
            document.querySelector('#FrontDoorHeight-val4').max = target.value;
            document.querySelector('#RightDoorHeight').value = target.value;
            document.querySelector('#RightDoorHeight-val').value = target.value;
            document.querySelector('#RightDoorHeight2').value = target.value;
            document.querySelector('#RightDoorHeight-val2').value = target.value;
            document.querySelector('#RightDoorHeight3').value = target.value;
            document.querySelector('#RightDoorHeight-val3').value = target.value;
            document.querySelector('#RightDoorHeight4').value = target.value;
            document.querySelector('#RightDoorHeight-val4').value = target.value;
            document.querySelector('#LeftDoorHeight').value = target.value;
            document.querySelector('#LeftDoorHeight-val').value = target.value;
            document.querySelector('#LeftDoorHeight2').value = target.value;
            document.querySelector('#LeftDoorHeight-val2').value = target.value;
            document.querySelector('#LeftDoorHeight3').value = target.value;
            document.querySelector('#LeftDoorHeight-val3').value = target.value;
            document.querySelector('#LeftDoorHeight4').value = target.value;
            document.querySelector('#LeftDoorHeight-val4').value = target.value;
            document.querySelector('#BackDoorHeight').value = target.value;
            document.querySelector('#BackDoorHeight-val').value = target.value;
            document.querySelector('#BackDoorHeight2').value = target.value;
            document.querySelector('#BackDoorHeight-val2').value = target.value;
            document.querySelector('#BackDoorHeight3').value = target.value;
            document.querySelector('#BackDoorHeight-val3').value = target.value;
            document.querySelector('#BackDoorHeight4').value = target.value;
            document.querySelector('#BackDoorHeight-val4').value = target.value;
            document.querySelector('#FrontDoorHeight').value = target.value;
            document.querySelector('#FrontDoorHeight-val').value = target.value;
            document.querySelector('#FrontDoorHeight2').value = target.value;
            document.querySelector('#FrontDoorHeight-val2').value = target.value;
            document.querySelector('#FrontDoorHeight3').value = target.value;
            document.querySelector('#FrontDoorHeight-val3').value = target.value;
            document.querySelector('#FrontDoorHeight4').value = target.value;
            document.querySelector('#FrontDoorHeight-val4').value = target.value;
            model.getObjectByName('front_door_topfront1').position.y = target.value;
            model.getObjectByName('front_door_top_back1').position.y = target.value;
            model.getObjectByName('front_door_topfront2').position.y = target.value;
            model.getObjectByName('front_door_top_back2').position.y = target.value;
            model.getObjectByName('front_door_topfront3').position.y = target.value;
            model.getObjectByName('front_door_top_back3').position.y = target.value;
            model.getObjectByName('front_door_topfront4').position.y = target.value;
            model.getObjectByName('front_door_top_back4').position.y = target.value;
            model.getObjectByName('back_door_topfront1').position.y = target.value;
            model.getObjectByName('back_door_top_back1').position.y = target.value;
            model.getObjectByName('back_door_topfront2').position.y = target.value;
            model.getObjectByName('back_door_top_back2').position.y = target.value;
            model.getObjectByName('back_door_topfront3').position.y = target.value;
            model.getObjectByName('back_door_top_back3').position.y = target.value;
            model.getObjectByName('back_door_topfront4').position.y = target.value;
            model.getObjectByName('back_door_top_back4').position.y = target.value;
            model.getObjectByName('right_door_topfront1').position.y = target.value;
            model.getObjectByName('right_door_top_back1').position.y = target.value;
            model.getObjectByName('right_door_topfront2').position.y = target.value;
            model.getObjectByName('right_door_top_back2').position.y = target.value;
            model.getObjectByName('right_door_topfront3').position.y = target.value;
            model.getObjectByName('right_door_top_back3').position.y = target.value;
            model.getObjectByName('right_door_topfront4').position.y = target.value;
            model.getObjectByName('right_door_top_back4').position.y = target.value;
            model.getObjectByName('left_door_topfront1').position.y = target.value;
            model.getObjectByName('left_door_top_back1').position.y = target.value;
            model.getObjectByName('left_door_topfront2').position.y = target.value;
            model.getObjectByName('left_door_top_back2').position.y = target.value;
            model.getObjectByName('left_door_topfront3').position.y = target.value;
            model.getObjectByName('left_door_top_back3').position.y = target.value;
            model.getObjectByName('left_door_topfront4').position.y = target.value;
            model.getObjectByName('left_door_top_back4').position.y = target.value;
        }
        console.log({
            GutterHeigthValue
        })
        return GutterHeigthValue;
    }
    var roofThickness = document.getElementById("roof");
    roofThickness.addEventListener("input", changeRoofThickness);

    function changeRoofThickness(e) {
        var target = e.target ? e.target : e.srcElement;
        roofThicknessValue = target.value;
        return roofThicknessValue;
    }
    var wallsThickness = document.getElementById("walls");
    wallsThickness.addEventListener("input", changeWallsThickness);

    function changeWallsThickness(e) {
        var target = e.target ? e.target : e.srcElement;
        wallsThicknessValue = target.value;
        return wallsThicknessValue;
    }
}
$("#frontDoorMeas").hide();
$("#backDoorMeas").hide();
$("#rightDoorMeas").hide();
$("#leftDoorMeas").hide();
$("#FrontWalkDoorMess").hide();
$("#BackWalkDoorMess").hide();
$("#LeftWalkDoorMess").hide();
$("#RightWalkDoorMess").hide();
$('#LeftWalkDoor').click(() => {
    if (leftDoorhidem) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 0,
            y: 3,
            z: 25,
            onUpdate: function() {
                controls.update();
            }
        });
        leftDoorhidem = false;
        $('#LeftWalkDoor').addClass('active');
        $("#LeftWalkDoorMess").show(100);
    } else {
        leftDoorhidem = true;
        $('#LeftWalkDoor').removeClass('active');
        $("#LeftWalkDoorMess").hide(100);
    }
});
$('#RightWalkDoor').click(() => {
    if (rightwalkDoorhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 0,
            y: 3,
            z: -25,
            onUpdate: function() {
                controls.update();
            }
        });
        rightwalkDoorhiden = false;
        $('#RightWalkDoor').addClass('active');
        $("#RightWalkDoorMess").show(100);
    } else {
        rightwalkDoorhiden = true;
        $('#RightWalkDoor').removeClass('active');
        $("#RightWalkDoorMess").hide(100);
    }
});
$('#BackWalkDoor').click(() => {
    if (backwalkDoorhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: -20,
            y: 3,
            z: 0,
            onUpdate: function() {
                controls.update();
            }
        });
        backwalkDoorhiden = false;
        $('#BackWalkDoor').addClass('active');
        $("#BackWalkDoorMess").show(100);
    } else {
        backwalkDoorhiden = true;
        $('#BackWalkDoor').removeClass('active');
        $("#BackWalkDoorMess").hide(100);
    }
});
$('#FrontWalkDoor').click(() => {
    if (frontwalkDoorhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 20,
            y: 3,
            z: 0,
            onUpdate: function() {
                controls.update();
            }
        });
        frontwalkDoorhiden = false;
        $('#FrontWalkDoor').addClass('active');
        $("#FrontWalkDoorMess").show(100);
    } else {
        frontwalkDoorhiden = true;
        $('#FrontWalkDoor').removeClass('active');
        $("#FrontWalkDoorMess").hide(100);
    }
});
$('#LeftDoor').click(() => {
    if (leftDoorhidem) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 0,
            y: 3,
            z: 25,
            onUpdate: function() {
                controls.update();
            }
        });
        leftDoorhidem = false;
        $('#LeftDoor').addClass('active');
        $("#leftDoorMeas").show(100);
    } else {
        leftDoorhidem = true;
        $('#LeftDoor').removeClass('active');
        $("#leftDoorMeas").hide(100);
    }
});
$('#FrontDoor').click(() => {
    if (frontDoorhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 20,
            y: 3,
            z: 0,
            onUpdate: function() {
                controls.update();
            }
        });
        frontDoorhiden = false;
        $('#FrontDoor').addClass('active');
        $("#frontDoorMeas").show(100);
    } else {
        frontDoorhiden = true;
        $('#FrontDoor').removeClass('active');
        $("#frontDoorMeas").hide(100);
    }
});
$('#BackDoor').click(() => {
    if (backDoorhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: -20,
            y: 3,
            z: 0,
            onUpdate: function() {
                controls.update();
            }
        });
        backDoorhiden = false;
        $('#BackDoor').addClass('active');
        $("#backDoorMeas").show(100);
    } else {
        backDoorhiden = true;
        $('#BackDoor').removeClass('active');
        $("#backDoorMeas").hide(100);
    }
});
$('#RightDoor').click(() => {

    if (rightDoorhiden) {

        rightDoorhiden = false;
        $('#RightDoor').addClass('active');
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 0,
            y: 3,
            z: -25,
            onUpdate: function() {
                controls.update();
            }
        });
        // model.getObjectByName("right_door").visible = true;
        // model.getObjectByName('right_door_border').visible = true;
        $("#rightDoorMeas").show(100);
    } else {
        rightDoorhiden = true;
        $('#RightDoor').removeClass('active');
        // model.getObjectByName("right_door").visible = false;
        //    model.getObjectByName('right_door_border').visible = false;
        $("#rightDoorMeas").hide(100);
    }
});
$('#frontWindowMess').hide();
$('#FrontWindow').click(() => {
    if (frontWindowhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 20,
            y: 3,
            z: 0,
            onUpdate: function() {
                controls.update();
            }
        });
        frontWindowhiden = false;
        $('#FrontWindow').addClass('active');
        $("#frontWindowMess").show(100);
    } else {
        frontWindowhiden = true;
        $('#FrontWindow').removeClass('active');
        $("#frontWindowMess").hide(100);
    }
});
$('#RightWindowMess').hide();
$('#RightWindow').click(() => {
    if (rightWindowhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 0,
            y: 3,
            z: -25,
            onUpdate: function() {
                controls.update();
            }
        });
        rightWindowhiden = false;
        $('#RightWindow').addClass('active');
        $("#RightWindowMess").show(100);
    } else {
        rightWindowhiden = true;
        $('#RightWindow').removeClass('active');
        $("#RightWindowMess").hide(100);
    }
});
$('#LeftWindowMess').hide();
$('#LeftWindow').click(() => {
    if (leftWindowhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: 0,
            y: 3,
            z: 25,
            onUpdate: function() {
                controls.update();
            }
        });
        leftWindowhiden = false;
        $('#LeftWindow').addClass('active');
        $("#LeftWindowMess").show(100);
    } else {
        leftWindowhiden = true;
        $('#LeftWindow').removeClass('active');
        $("#LeftWindowMess").hide(100);
    }
});
$("#BackWindowMess").hide();
$('#BackWindow').click(() => {
    if (backWindowhiden) {
        gsap.to(camera, {
            duration: 1,
            zoom: 1.5,
            onUpdate: function() {
                camera.updateProjectionMatrix();
            }
        });
        gsap.to(camera.position, {
            duration: 0.8,
            x: -20,
            y: 3,
            z: 0,
            onUpdate: function() {
                controls.update();
            }
        });
        backWindowhiden = false;
        $('#BackWindow').addClass('active');
        // model.getObjectByName("back_door").visible = true;
        // model.getObjectByName('back_door_border').visible = true;
        $("#BackWindowMess").show(100);
    } else {
        backWindowhiden = true;
        $('#BackWindow').removeClass('active');
        // model.getObjectByName("back_door").visible = false;
        // model.getObjectByName('back_door_border').visible = false;
        $("#BackWindowMess").hide(100);
    }
});
$('#wakinDoorcollapse1').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door1_01").visible = false;
    model.getObjectByName("front_door1_01").position.y = 0;
    frontWalkingDoor1 = 'disabled';
    FrontWalkinDoor1PositionController.update({
        from: 0,
    });
    $('#FrontWalkindoorLeftDistance').prop("value", 0);
    $('#FrontWalkindoorRightDistance').prop("value", 0);
});
$('#wakinDoorcollapse1').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door1_01").visible = true;
    frontWalkingDoor1 = 'enabled';
});
$('#wakinDoorcollapse2').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door1_02").visible = false;
    model.getObjectByName("front_door1_02").position.y = 0;
    frontWalkingDoor2 = 'disabled';
    FrontDoorWalkin2PositionController.update({
        from: 0,
    });
    $('#FrontWalkindoorLeftDistance2').prop("value", 0);
    $('#FrontWalkindoorRightDistance2').prop("value", 0);
});
$('#wakinDoorcollapse2').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door1_02").visible = true;
    frontWalkingDoor2 = 'enabled';
});
$('#wakinDoorcollapse3').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door1_03").visible = false;
    model.getObjectByName("front_door1_03").position.y = 0;
    frontWalkingDoor3 = 'disabled';
    FrontDoorWalkin3PositionController.update({
        from: 0,
    });
    $('#FrontWalkindoorLeftDistance3').prop("value", 0);
    $('#FrontWalkindoorRightDistance3').prop("value", 0);
});
$('#wakinDoorcollapse3').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door1_03").visible = true;
    frontWalkingDoor3 = 'enabled';
});
$('#wakinDoorcollapse4').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door1_04").visible = false;
    model.getObjectByName("front_door1_04").position.y = 0;
    frontWalkingDoor3 = 'disabled';
    FrontDoorWalkin4PositionController.update({
        from: 0,
    });
    $('#FrontWalkindoorLeftDistance4').prop("value", 0);
    $('#FrontWalkindoorLeftDistance4').prop("value", 0);
});
$('#wakinDoorcollapse4').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door1_04").visible = true;
    frontWalkingDoor3 = 'enabled';
});
$('#BackwakinDoorcollapse1').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door1_01").visible = false;
    model.getObjectByName("back_door1_01").position.y = 0;
    BackWalkingDoor1 = 'disabled';
    BackDoorWalkin1PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#BackwakinDoorcollapse1').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door1_01").visible = true;
    BackWalkingDoor1 = 'enabled';
});
$('#BackwakinDoorcollapse2').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door1_02").visible = false;
    model.getObjectByName("back_door1_02").position.y = 0;
    BackWalkingDoor2 = 'disabled';
    BackDoorWalkin2PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#BackwakinDoorcollapse2').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door1_02").visible = true;
    BackWalkingDoor2 = 'enabled';
});
$('#BackwakinDoorcollapse3').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door1_03").visible = false;
    model.getObjectByName("back_door1_03").position.y = 0;
    BackWalkingDoor3 = 'disabled';
    BackDoorWalkin3PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#BackwakinDoorcollapse3').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door1_03").visible = true;
    BackWalkingDoor3 = 'enabled';
});

$('#BackwakinDoorcollapse4').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door1_04").visible = false;
    model.getObjectByName("back_door1_04").position.y = 0;
    BackWalkingDoor4 = 'disabled';
    BackDoorWalkin4PositionController.update({
        from: 0,
    });
    $('#RightWalkindoorLeftDistance4').prop("value", 0);
    $('#RightWalkindoorRightDistance4').prop("value", 0);
});
$('#BackwakinDoorcollapse4').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door1_04").visible = true;
    BackWalkingDoor4 = 'enabled';
});
$('#LeftwakinDoorcollapse1').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door1_01").visible = false;
    model.getObjectByName("left_door1_01").position.x = 0;
    leftWalkingDoor1 = 'disabled';
    LeftDoorWalkin1PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#LeftwakinDoorcollapse1').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#LeftwakinDoorcollapse1').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        leftWalkingDoor1 = 'enabled';
        model.getObjectByName("Left_Door1_01").visible = true;
    }
});
$('#LeftwakinDoorcollapse2').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door1_02").visible = false;
    model.getObjectByName("left_door1_02").position.x = 0;
    leftWalkingDoor2 = 'disabled';
    LeftDoorWalkin2PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#LeftwakinDoorcollapse2').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#LeftwakinDoorcollapse2').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        leftWalkingDoor2 = 'enabled';
        model.getObjectByName("Left_Door1_02").visible = true;
    }
});
$('#LeftwakinDoorcollapse3').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door1_03").visible = false;
    model.getObjectByName("left_door1_03").position.x = 0;
    leftWalkingDoor3 = 'disabled';
    LeftDoorWalkin3PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#LeftwakinDoorcollapse3').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#LeftwakinDoorcollapse3').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        leftWalkingDoor3 = 'enabled';
        model.getObjectByName("Left_Door1_03").visible = true;
    }
});
$('#LeftwakinDoorcollapse4').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door1_04").visible = false;
    model.getObjectByName("left_door1_04").position.x = 0;
    leftWalkingDoor4 = 'disabled';
    LeftDoorWalkin4PositionController.update({
        from: 0,
    });
    $('#RightWalkindoorLeftDistance4').prop("value", 0);
    $('#RightWalkindoorRightDistance4').prop("value", 0);
});
$('#LeftwakinDoorcollapse4').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#LeftwakinDoorcollapse4').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        leftWalkingDoor4 = 'enabled';
        model.getObjectByName("Left_Door1_04").visible = true;
    }
});
$('#RightwakinDoorcollapse1').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door1_01").visible = false;
    model.getObjectByName("right_door1_01").position.x = 0;
    rightWalkingDoor1 = 'disabled';
    RightDoorWalkin1PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#RightwakinDoorcollapse1').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#RightwakinDoorcollapse1').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        rightWalkingDoor1 = 'enabled';
        model.getObjectByName("Right_Door1_01").visible = true;
    }
});
$('#RightwakinDoorcollapse2').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door1_02").visible = false;
    model.getObjectByName("right_door1_02").position.x = 0;
    rightWalkingDoor2 = 'disabled';
    RightDoorWalkin2PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#RightwakinDoorcollapse2').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#RightwakinDoorcollapse2').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        rightWalkingDoor2 = 'enabled';
        model.getObjectByName("Right_Door1_02").visible = true;
    }
});
$('#RightwakinDoorcollapse3').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door1_03").visible = false;
    model.getObjectByName("right_door1_03").position.x = 0;
    rightWalkingDoor3 = 'disabled';
    RightDoorWalkin3PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#RightwakinDoorcollapse3').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#RightwakinDoorcollapse3').collapse('hide');
        alert('Please increase gutter height to add door')
    } else {
        rightWalkingDoor3 = 'enabled';
        model.getObjectByName("Right_Door1_03").visible = true;
    }
});
$('#RightwakinDoorcollapse4').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door1_04").visible = false;
    model.getObjectByName("right_door1_04").position.x = 0;
    rightWalkingDoor4 = 'disabled';
    RightDoorWalkin4PositionController.update({
        from: 0,
    });
    $('#RightWalkindoorLeftDistance4').prop("value", 0);
    $('#RightWalkindoorRightDistance4').prop("value", 0);
});
$('#RightwakinDoorcollapse4').on('shown.bs.collapse', function() {
    if ($('#Gutter').val() < 2.2) {
        $('#RightwakinDoorcollapse4').collapse('hide');
        alert('Please increase gutter height to add door');
    } else {
        rightWalkingDoor4 = 'enabled';
        model.getObjectByName("Right_Door1_04").visible = true;
    }
});
$('#collapse1').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door2_01").visible = false;
    //model.getObjectByName('front_door_border1').visible = false;
    model.getObjectByName("front_door2_01").position.z = 0;
    frontSectionalDoor1 = 'disabled';
    FrontDoor1PositionController.update({
        from: 0,
    });
    $('#FrontdoorLeftDistance').prop("value", 0);
    $('#FrontdoorRightDistance').prop("value", 0);
});
$('#collapse1').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door2_01").visible = true;
    // model.getObjectByName('front_door_border1').visible = true;
    frontSectionalDoor1 = 'enabled';
});
$('#collapse2').on('hidden.bs.collapse', function() {
    frontSectionalDoor2 = 'disabled';
    model.getObjectByName("Front_Door2_02").visible = false;
    // model.getObjectByName('front_door_border2').visible = false;
    model.getObjectByName("front_door2_02").position.z = 0;
    FrontDoor2PositionController.update({
        from: 0,
    });
    $('#Frontdoor2LeftDistance').prop("value", 0);
    $('#Frontdoor2RightDistance').prop("value", 0);
});
$('#collapse2').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door2_02").visible = true;
    // model.getObjectByName('front_door_border2').visible = true;
    frontSectionalDoor2 = 'enabled';
});
$('#collapse3').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door2_03").visible = false;
    // model.getObjectByName('front_door_border3').visible = false;
    model.getObjectByName("front_door2_03").position.z = 0;
    frontSectionalDoor3 = 'disabled';
    FrontDoor3PositionController.update({
        from: 0,
    });
    $('#Frontdoor3LeftDistance').prop("value", 0);
    $('#Frontdoor3RightDistance').prop("value", 0);
});
$('#collapse3').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door2_03").visible = true;
    // model.getObjectByName('front_door_border3').visible = true;
    frontSectionalDoor3 = 'enabled';
});
$('#collapse4').on('hidden.bs.collapse', function() {
    model.getObjectByName("Front_Door2_04").visible = false;
    // model.getObjectByName('front_door_border4').visible = false;
    model.getObjectByName("front_door2_04").position.z = 0;
    frontSectionalDoor4 = 'disabled';
    FrontDoor4PositionController.update({
        from: 0,
    });
    $('#Frontdoor4LeftDistance').prop("value", 0);
    $('#Frontdoor4RightDistance').prop("value", 0);
});
$('#collapse4').on('shown.bs.collapse', function() {
    model.getObjectByName("Front_Door2_04").visible = true;
    // model.getObjectByName('front_door_border4').visible = true;
    frontSectionalDoor4 = 'enabled';
});
$('#collapse1back').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door2_01").visible = false;
    model.getObjectByName('back_door_border1').visible = false;
    // model.getObjectByName("back_door2_01").position.z = 0;
    BackSectionalDoor1 = 'disabled';
    BackDoor1PositionController.update({
        from: 0,
    });
    $('#BackdoorLeftDistance').prop("value", 0);
    $('#BackdoorRightDistance').prop("value", 0);
});
$('#collapse1back').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door2_01").visible = true;
    // model.getObjectByName('back_door_border1').visible = true;
    BackSectionalDoor1 = 'enabled';
})

$('#collapse2back').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door2_02").visible = false;
    // model.getObjectByName('back_door_border2').visible = false;
    model.getObjectByName("back_door2_02").position.z = 0;
    BackSectionalDoor2 = 'disabled';
    BackDoor2PositionController.update({
        from: 0,
    });
    $('#Backdoor2LeftDistance').prop("value", 0);
    $('#Backdoor2RightDistance').prop("value", 0);
});
$('#collapse2back').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door2_02").visible = true;
    // model.getObjectByName('back_door_border2').visible = true;
    BackSectionalDoor2 = 'enabled';
});
$('#collapse3back').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door2_03").visible = false;
    // model.getObjectByName('back_door_border3').visible = false;
    model.getObjectByName("back_door2_03").position.z = 0;
    BackSectionalDoor3 = 'disabled';
    BackDoor3PositionController.update({
        from: 0,
    });
    $('#Backdoor3LeftDistance').prop("value", 0);
    $('#Backdoor3RightDistance').prop("value", 0);
});
$('#collapse3back').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door2_03").visible = true;
    model.getObjectByName('back_door1_03').visible = true;
    BackSectionalDoor3 = 'enabled';
});
$('#collapse4back').on('hidden.bs.collapse', function() {
    model.getObjectByName("Back_Door2_04").visible = false;
    // model.getObjectByName('back_door_border4').visible = false;
    model.getObjectByName("back_door2_04").position.z = 0;
    BackSectionalDoor4 = 'disabled';
    BackDoor4PositionController.update({
        from: 0,
    });
    $('#Backdoor4LeftDistance').prop("value", 0);
    $('#Backdoor4RightDistance').prop("value", 0);
});
$('#collapse4back').on('shown.bs.collapse', function() {
    model.getObjectByName("Back_Door2_04").visible = true;
    // model.getObjectByName('back_door_border4').visible = true;
    BackSectionalDoor4 = 'enabled';
});
$('#collapse1left').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door2_01").visible = false;
    // model.getObjectByName('left_door_border1').visible = false;
    model.getObjectByName("left_door2_01").position.x = 0;
    leftSectionalDoor1 = 'disabled';
    LeftDoor1PositionController.update({
        from: 0,
    });
    $('#LeftdoorLeftDistance').prop("value", 0);
    $('#LeftdoorRightDistance').prop("value", 0);
});
$('#collapse1left').on('shown.bs.collapse', function() {
    model.getObjectByName("Left_Door2_01").visible = true;
    // model.getObjectByName('left_door_border1').visible = true;
    leftSectionalDoor1 = 'enabled';
});
$('#collapse2left').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door2_02").visible = false;
    // model.getObjectByName('left_door_border2').visible = false;
    model.getObjectByName("left_door2_02").position.x = 0;
    leftSectionalDoor2 = 'disabled';
    LeftDoor2PositionController.update({
        from: 0,
    });
    $('#Leftdoor2LeftDistance').prop("value", 0);
    $('#Leftdoor2RightDistance').prop("value", 0);
});
$('#collapse2left').on('shown.bs.collapse', function() {
    model.getObjectByName("Left_Door2_02").visible = true;
    model.getObjectByName('left_door2_02').visible = true;
    leftSectionalDoor2 = 'enabled';
});
$('#collapse3left').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door2_03").visible = false;
    // model.getObjectByName('left_door_border3').visible = false;
    model.getObjectByName("left_door2_03").position.x = 0;
    leftSectionalDoor3 = 'disabled';
    LeftDoor3PositionController.update({
        from: 0,
    });
    $('#Leftdoor3LeftDistance').prop("value", 0);
    $('#Leftdoor3RightDistance').prop("value", 0);
});
$('#collapse3left').on('shown.bs.collapse', function() {
    model.getObjectByName("Left_Door2_03").visible = true;
    // model.getObjectByName('left_door_border3').visible = true;
    leftSectionalDoor3 = 'enabled';
});
$('#collapse4left').on('hidden.bs.collapse', function() {
    model.getObjectByName("Left_Door2_04").visible = false;
    // model.getObjectByName('left_door_border4').visible = false;
    model.getObjectByName("left_door2_04").position.x = 0;
    leftSectionalDoor4 = 'disabled';
    LeftDoor4PositionController.update({
        from: 0,
    });
    $('#Leftdoor4LeftDistance').prop("value", 0);
    $('#Leftdoor4RightDistance').prop("value", 0);
});
$('#collapse4left').on('shown.bs.collapse', function() {
    model.getObjectByName("Left_Door2_04").visible = true;
    // model.getObjectByName('left_door_border4').visible = true;
    leftSectionalDoor4 = 'enabled';
});
$('#collapse1right').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door2_01").visible = false;
    // model.getObjectByName('right_door_border1').visible = false;
    model.getObjectByName("right_door2_01").position.x = 0;
    rightSectionalDoor1 = 'disabled';
    RightDoor1PositionController.update({
        from: 0,
    });
    $('#RightdoorLeftDistance').prop("value", 0);
    $('#RightdoorRightDistance').prop("value", 0);
});
$('#collapse1right').on('shown.bs.collapse', function() {
    model.getObjectByName("Right_Door2_01").visible = true;
    // model.getObjectByName('right_door_border1').visible = true;
    rightSectionalDoor1 = 'enabled';
});
$('#collapse2right').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door2_02").visible = false;
    // model.getObjectByName('right_door_border2').visible = false;
    model.getObjectByName("right_door2_02").position.x = 0;
    rightSectionalDoor2 = 'disabled';
    RightDoor2PositionController.update({
        from: 0,
    });
    $('#Rightdoor2LeftDistance').prop("value", 0);
    $('#Rightdoor2RightDistance').prop("value", 0);
});
$('#collapse2right').on('shown.bs.collapse', function() {
    model.getObjectByName("Right_Door2_02").visible = true;
    // model.getObjectByName('right_door_border2').visible = true;
    rightSectionalDoor2 = 'enabled';
});
$('#collapse3right').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door2_03").visible = false;
    // model.getObjectByName('right_door_border3').visible = false;
    model.getObjectByName("right_door2_03").position.x = 0;
    rightSectionalDoor3 = 'disabled';
    RightDoor3PositionController.update({
        from: 0,
    });
    $('#Rightdoor3LeftDistance').prop("value", 0);
    $('#Rightdoor3RightDistance').prop("value", 0);
});
$('#collapse3right').on('shown.bs.collapse', function() {
    model.getObjectByName("Right_Door2_03").visible = true;
    // model.getObjectByName('right_door_border3').visible = true;
    rightSectionalDoor3 = 'enabled';
});
$('#collapse4right').on('hidden.bs.collapse', function() {
    model.getObjectByName("Right_Door2_04").visible = false;
    // model.getObjectByName('right_door_border4').visible = false;
    model.getObjectByName("right_door2_04").position.x = 0;
    rightSectionalDoor4 = 'disabled';
    RightDoor4PositionController.update({
        from: 0,
    });
    $('#Rightdoor4LeftDistance').prop("value", 0);
    $('#Rightdoor4RightDistance').prop("value", 0);
});
$('#collapse4right').on('shown.bs.collapse', function() {
    model.getObjectByName("Right_Door2_04").visible = true;
    // model.getObjectByName('right_door_border4').visible = true;
    rightSectionalDoor4 = 'enabled';
});
$('#FrontWindowToggle').on('hidden.bs.collapse', function() {
    model.getObjectByName('front_window1_part1').visible = false;
    model.getObjectByName('front_window1_part2').visible = false;
    model.getObjectByName('front_window1_part3').visible = false;
});
$('#FrontWindowToggle').on('shown.bs.collapse', function() {
    model.getObjectByName('front_window1_part1').visible = true;
    model.getObjectByName('front_window1_part2').visible = true;
    model.getObjectByName('front_window1_part3').visible = true;
});
$('#FrontWindowToggle2').on('hidden.bs.collapse', function() {
    model.getObjectByName('front_window2_part1').visible = false;
    model.getObjectByName('front_window2_part2').visible = false;
    model.getObjectByName('front_window2_part3').visible = false;
});
$('#FrontWindowToggle2').on('shown.bs.collapse', function() {
    model.getObjectByName('front_window2_part1').visible = true;
    model.getObjectByName('front_window2_part2').visible = true;
    model.getObjectByName('front_window2_part3').visible = true;
});
$('#FrontWindowToggle3').on('hidden.bs.collapse', function() {
    model.getObjectByName('front_window3_part1').visible = false;
    model.getObjectByName('front_window3_part2').visible = false;
    model.getObjectByName('front_window3_part3').visible = false;
});
$('#FrontWindowToggle3').on('shown.bs.collapse', function() {
    model.getObjectByName('front_window3_part1').visible = true;
    model.getObjectByName('front_window3_part2').visible = true;
    model.getObjectByName('front_window3_part3').visible = true;
});
$('#FrontWindowToggle4').on('hidden.bs.collapse', function() {
    model.getObjectByName('front_window4_part1').visible = false;
    model.getObjectByName('front_window4_part2').visible = false;
    model.getObjectByName('front_window4_part3').visible = false;
});
$('#FrontWindowToggle4').on('shown.bs.collapse', function() {
    model.getObjectByName('front_window4_part1').visible = true;
    model.getObjectByName('front_window4_part2').visible = true;
    model.getObjectByName('front_window4_part3').visible = true;
});
$('#FrontWindowToggle5').on('hidden.bs.collapse', function() {
    model.getObjectByName('front_window5_part1').visible = false;
    model.getObjectByName('front_window5_part2').visible = false;
    model.getObjectByName('front_window5_part3').visible = false;
});
$('#FrontWindowToggle5').on('shown.bs.collapse', function() {
    model.getObjectByName('front_window5_part1').visible = true;
    model.getObjectByName('front_window5_part2').visible = true;
    model.getObjectByName('front_window5_part3').visible = true;
});
$('#BackWindowToggle').on('hidden.bs.collapse', function() {
    model.getObjectByName('back_window1_part1').visible = false;
    model.getObjectByName('back_window1_part2').visible = false;
    model.getObjectByName('back_window1_part3').visible = false;
});
$('#BackWindowToggle').on('shown.bs.collapse', function() {
    model.getObjectByName('back_window1_part1').visible = true;
    model.getObjectByName('back_window1_part2').visible = true;
    model.getObjectByName('back_window1_part3').visible = true;
});
$('#BackWindowToggle2').on('hidden.bs.collapse', function() {
    model.getObjectByName('back_window2_part1').visible = false;
    model.getObjectByName('back_window2_part2').visible = false;
    model.getObjectByName('back_window2_part3').visible = false;
});
$('#BackWindowToggle2').on('shown.bs.collapse', function() {
    model.getObjectByName('back_window2_part1').visible = true;
    model.getObjectByName('back_window2_part2').visible = true;
    model.getObjectByName('back_window2_part3').visible = true;
});
$('#BackWindowToggle3').on('hidden.bs.collapse', function() {
    model.getObjectByName('back_window3_part1').visible = false;
    model.getObjectByName('back_window3_part2').visible = false;
    model.getObjectByName('back_window3_part3').visible = false;
});
$('#BackWindowToggle3').on('shown.bs.collapse', function() {
    model.getObjectByName('back_window3_part1').visible = true;
    model.getObjectByName('back_window3_part2').visible = true;
    model.getObjectByName('back_window3_part3').visible = true;
});
$('#BackWindowToggle4').on('hidden.bs.collapse', function() {
    model.getObjectByName('back_window4_part1').visible = false;
    model.getObjectByName('back_window4_part2').visible = false;
    model.getObjectByName('back_window4_part3').visible = false;
});
$('#BackWindowToggle4').on('shown.bs.collapse', function() {
    model.getObjectByName('back_window4_part1').visible = true;
    model.getObjectByName('back_window4_part2').visible = true;
    model.getObjectByName('back_window4_part3').visible = true;
});
$('#BackWindowToggle5').on('hidden.bs.collapse', function() {
    model.getObjectByName('back_window5_part1').visible = false;
    model.getObjectByName('back_window5_part2').visible = false;
    model.getObjectByName('back_window5_part2').visible = false;
});
$('#BackWindowToggle5').on('shown.bs.collapse', function() {
    model.getObjectByName('back_window5_part1').visible = true;
    model.getObjectByName('back_window5_part2').visible = true;
    model.getObjectByName('back_window5_part3').visible = true;
});
$('#LeftWindowToggle').on('hidden.bs.collapse', function() {
    model.getObjectByName('left_window1_part1').visible = false;
    model.getObjectByName('left_window1_part2').visible = false;
    model.getObjectByName('left_window1_part3').visible = false;
});
$('#LeftWindowToggle').on('shown.bs.collapse', function() {
    model.getObjectByName('left_window1_part1').visible = true;
    model.getObjectByName('left_window1_part2').visible = true;
    model.getObjectByName('left_window1_part3').visible = true;
});
$('#LeftWindowToggle2').on('hidden.bs.collapse', function() {
    model.getObjectByName('left_window2_part1').visible = false;
    model.getObjectByName('left_window2_part2').visible = false;
    model.getObjectByName('left_window2_part3').visible = false;
});
$('#LeftWindowToggle2').on('shown.bs.collapse', function() {
    model.getObjectByName('left_window2_part1').visible = true;
    model.getObjectByName('left_window2_part2').visible = true;
    model.getObjectByName('left_window2_part3').visible = true;
});
$('#LeftWindowToggle3').on('hidden.bs.collapse', function() {
    model.getObjectByName('left_window3_part1').visible = false;
    model.getObjectByName('left_window3_part2').visible = false;
    model.getObjectByName('left_window3_part3').visible = false;
});
$('#LeftWindowToggle3').on('shown.bs.collapse', function() {
    model.getObjectByName('left_window3_part1').visible = true;
    model.getObjectByName('left_window3_part2').visible = true;
    model.getObjectByName('left_window3_part3').visible = true;
});
$('#LeftWindowToggle4').on('hidden.bs.collapse', function() {
    model.getObjectByName('left_window4_part1').visible = false;
    model.getObjectByName('left_window4_part2').visible = false;
    model.getObjectByName('left_window4_part3').visible = false;
});
$('#LeftWindowToggle4').on('shown.bs.collapse', function() {
    model.getObjectByName('left_window4_part1').visible = true;
    model.getObjectByName('left_window4_part2').visible = true;
    model.getObjectByName('left_window4_part3').visible = true;
});
$('#LeftWindowToggle5').on('hidden.bs.collapse', function() {
    model.getObjectByName('left_window5_part1').visible = false;
    model.getObjectByName('left_window5_part2').visible = false;
    model.getObjectByName('left_window5_part3').visible = false;
});
$('#LeftWindowToggle5').on('shown.bs.collapse', function() {
    model.getObjectByName('left_window5_part1').visible = true;
    model.getObjectByName('left_window5_part2').visible = true;
    model.getObjectByName('left_window5_part3').visible = true;
});
$('#RightWindowToggle').on('hidden.bs.collapse', function() {
    model.getObjectByName('right_window1_part1').visible = false;
    model.getObjectByName('right_window1_part2').visible = false;
    model.getObjectByName('right_window1_part3').visible = false;
});
$('#RightWindowToggle').on('shown.bs.collapse', function() {
    model.getObjectByName('right_window1_part1').visible = true;
    model.getObjectByName('right_window1_part2').visible = true;
    model.getObjectByName('right_window1_part3').visible = true;
});
$('#RightWindowToggle2').on('hidden.bs.collapse', function() {
    model.getObjectByName('right_window2_part1').visible = false;
    model.getObjectByName('right_window2_part2').visible = false;
    model.getObjectByName('right_window2_part3').visible = false;
});
$('#RightWindowToggle2').on('shown.bs.collapse', function() {
    model.getObjectByName('right_window2_part1').visible = true;
    model.getObjectByName('right_window2_part2').visible = true;
    model.getObjectByName('right_window2_part3').visible = true;
});
$('#RightWindowToggle3').on('hidden.bs.collapse', function() {
    model.getObjectByName('right_window3_part1').visible = false;
    model.getObjectByName('right_window3_part2').visible = false;
    model.getObjectByName('right_window3_part3').visible = false;
});
$('#RightWindowToggle3').on('shown.bs.collapse', function() {
    model.getObjectByName('right_window3_part1').visible = true;
    model.getObjectByName('right_window3_part2').visible = true;
    model.getObjectByName('right_window3_part3').visible = true;
});
$('#RightWindowToggle4').on('hidden.bs.collapse', function() {
    model.getObjectByName('right_window4_part1').visible = false;
    model.getObjectByName('right_window4_part2').visible = false;
    model.getObjectByName('right_window4_part3').visible = false;
});
$('#RightWindowToggle4').on('shown.bs.collapse', function() {
    model.getObjectByName('right_window4_part1').visible = true;
    model.getObjectByName('right_window4_part2').visible = true;
    model.getObjectByName('right_window4_part3').visible = true;
});
$('#RightWindowToggle5').on('hidden.bs.collapse', function() {
    model.getObjectByName('right_window5_part1').visible = false;
    model.getObjectByName('right_window5_part2').visible = false;
    model.getObjectByName('right_window5_part3').visible = false;
});
$('#RightWindowToggle5').on('shown.bs.collapse', function() {
    model.getObjectByName('right_window5_part1').visible = true;
    model.getObjectByName('right_window5_part2').visible = true;
    model.getObjectByName('right_window5_part3').visible = true;
});
$('#FrontDoorHeight').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front01_1').position.y = target.value;
    model.getObjectByName('front_door2_back01_1').position.y = target.value;
});
$('#FrontDoorHeight-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front01_1').position.y = target.value;
    model.getObjectByName('front_door2_back01_1').position.y = target.value;
});
$('#FrontDoorWidth').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('front_door2_front01').position.z = (target.value) / 2;
});
$('#FrontDoorWidth-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('front_door2_front01').position.z = (target.value) / 2;
});
$('#FrontDoorPosition').change((e) => {
    //$('.FrontDoorPosition').val = $('#FrontDoorPosition').val();
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("front_door2_01").position.y = target.value;
});
$('#FrontDoorPosition-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("front_door2_01").position.y = target.value;
});
$('#FrontDoorHeight2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back02_1').position.y = target.value;
    model.getObjectByName('front_door2_front02_1').position.y = target.value;
});
$('#FrontDoorHeight-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back02_1').position.y = target.value;
    model.getObjectByName('front_door2_front02_1').position.y = target.value;
});
$('#FrontDoorWidth2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front02').position.z = (target.value) / 2;
    model.getObjectByName('front_door2_back02').position.z = -(target.value) / 2;
});
$('#FrontDoorWidth-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front02').position.z = (target.value) / 2;
    model.getObjectByName('front_door2_back02').position.z = -(target.value) / 2;
});
$('#FrontDoor2Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("front_door2_02").position.y = target.value;
});


$('#FrontDoorHeight3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front03_1').position.y = target.value;
    model.getObjectByName('front_door2_back03_1').position.y = target.value;
});
$('#FrontDoorHeight-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front03_1').position.y = target.value;
    model.getObjectByName('front_door2_back03_1').position.y = target.value;
});
$('#FrontDoorWidth3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('front_door2_front03').position.z = (target.value) / 2;
});

$('#FrontDoorWidth-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('front_door2_front03').position.z = (target.value) / 2;
});
$('#FrontDoor3Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("front_door2_03").position.y = target.value;
});
$('#FrontDoorHeight4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front04_1').position.y = target.value;
    model.getObjectByName('front_door2_back04_1').position.y = target.value;
});
$('#FrontDoorHeight-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_front04_1').position.y = target.value;
    model.getObjectByName('front_door2_back04_1').position.y = target.value;
});
$('#FrontDoorWidth4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('front_door2_front04').position.z = (target.value) / 2;
});
$('#FrontDoorWidth-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('front_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('front_door2_front04').position.z = (target.value) / 2;
});
$('#FrontDoor4Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("front_door2_04").position.y = target.value;
});

$('#BackDoorWidth-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front01').position.z = (target.value) / 2;
});
$('#BackDoorWidth').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front01').position.z = (target.value) / 2;
});
$('#BackDoorHeight-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front01_1').position.y = target.value;
    model.getObjectByName('back_door2_back01_1').position.y = target.value;
});
$('#BackDoorHeight').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front01_1').position.y = target.value;
    model.getObjectByName('back_door2_back01_1').position.y = target.value;
});
$('#BackDoorPosition').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("back_door2_01").position.y = target.value;
});
$('#BackDoorWidth-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back02').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front02').position.z = (target.value) / 2;
});
$('#BackDoorWidth2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back02').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front02').position.z = (target.value) / 2;
});
$('#BackDoorHeight-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front02_1').position.y = target.value;
    model.getObjectByName('back_door2_back02_1').position.y = target.value;
});
$('#BackDoorHeight2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front02_1').position.y = target.value;
    model.getObjectByName('back_door2_back02_1').position.y = target.value;
});
$('#BackDoor2Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("back_door2_02").position.y = target.value;
});
$('#BackDoorWidth-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front03').position.z = (target.value) / 2;
});
$('#BackDoorWidth3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front03').position.z = (target.value) / 2;

});
$('#BackDoorHeight-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front03_1').position.y = target.value;
    model.getObjectByName('back_door2_back03_1').position.y = target.value;
});
$('#BackDoorHeight3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front03_1').position.y = target.value;
    model.getObjectByName('back_door2_back03_1').position.y = target.value;
});
$('#BackDoor3Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("back_door2_03").position.y = target.value;
});
$('#BackDoorWidth-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front04').position.z = (target.value) / 2;
});
$('#BackDoorWidth4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('back_door2_front04').position.z = (target.value) / 2;
});
$('#BackDoorHeight-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front04_1').position.y = target.value;
    model.getObjectByName('back_door2_back04_1').position.y = target.value;
});
$('#BackDoorHeight4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('back_door2_front04_1').position.y = target.value;
    model.getObjectByName('back_door2_back04_1').position.y = target.value;
});
$('#BackDoor4Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("back_door2_04").position.y = target.value;
});
$('#RightDoorWidth-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front01').position.z = (target.value) / 2;
});
$('#RightDoorWidth').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front01').position.z = (target.value) / 2;
});
$('#RightDoorHeight-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front01_1').position.y = target.value;
    model.getObjectByName('right_door2_back01_1').position.y = target.value;
});
$('#RightDoorHeight').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front01_1').position.y = target.value;
    model.getObjectByName('right_door2_back01_1').position.y = target.value;
});
$('#RightDoorPosition').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("right_door2_01").position.x = target.value / -1;
});
$('#RightDoorWidth-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back02').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front02').position.z = (target.value) / 2;
});
$('#RightDoorWidth2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back02').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front02').position.z = (target.value) / 2;
});
$('#RightDoorHeight-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front02_1').position.y = target.value;
    model.getObjectByName('right_door2_back02_1').position.y = target.value;
});
$('#RightDoorHeight2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front02_1').position.y = target.value;
    model.getObjectByName('right_door2_back02_1').position.y = target.value;
});
$('#RightDoor2Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("right_door2_02").position.x = target.value;
});
$('#RightDoorWidth-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front03').position.z = (target.value) / 2;
});
$('#RightDoorWidth3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front03').position.z = (target.value) / 2;
});
$('#RightDoorHeight-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front03_1').position.y = target.value;
    model.getObjectByName('right_door2_back03_1').position.y = target.value;
});
$('#RightDoorHeight3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front03_1').position.y = target.value;
    model.getObjectByName('right_door2_back03_1').position.y = target.value;
});
$('#RightDoor3Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("right_door2_03").position.x = target.value / -1;
});
$('#RightDoorWidth-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front04').position.z = (target.value) / 2;
});
$('#RightDoorWidth4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('right_door2_front04').position.z = (target.value) / 2;
});
$('#RightDoorHeight-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front04_1').position.y = target.value;
    model.getObjectByName('right_door2_back04_1').position.y = target.value;
});
$('#RightDoorHeight4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('right_door2_front04_1').position.y = target.value;
    model.getObjectByName('right_door2_back04_1').position.y = target.value;
});

$('#RightDoor4Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("right_door2_04").position.x = target.value / -1;
});


$('#LeftDoorHeight-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front01_1').position.y = target.value;
    model.getObjectByName('left_door2_back01_1').position.y = target.value;
});
$('#LeftDoorHeight').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front01_1').position.y = target.value;
    model.getObjectByName('left_door2_back01_1').position.y = target.value;
});
$('#LeftDoorWidth-val').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front01').position.z = (target.value) / 2;
});
$('#LeftDoorWidth').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back01').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front01').position.z = (target.value) / 2;
});
$('#LeftDoorPosition').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("left_door2_01").position.x = target.value;
});
$('#LeftDoorHeight-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front02_1').position.y = target.value;
    model.getObjectByName('left_door2_back02_1').position.y = target.value;
});
$('#LeftDoorHeight2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front02_1').position.y = target.value;
    model.getObjectByName('left_door2_back02_1').position.y = target.value;
});
$('#LeftDoorWidth-val2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back02').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front02').position.z = (target.value) / 2;
});
$('#LeftDoorWidth2').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back02').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front02').position.z = (target.value) / 2;

});
$('#LeftDoor2Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("left_door2_02").position.x = target.value;
});
$('#LeftDoorHeight-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front03_1').position.y = target.value;
    model.getObjectByName('left_door2_back03_1').position.y = target.value;
});
$('#LeftDoorHeight3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front03_1').position.y = target.value;
    model.getObjectByName('left_door2_back03_1').position.y = target.value;
});
$('#LeftDoorWidth-val3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front03').position.z = (target.value) / 2;
});
$('#LeftDoorWidth3').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back03').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front03').position.z = (target.value) / 2;
});
$('#LeftDoor3Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("left_door2_03").position.x = target.value;
});
$('#LeftDoorHeight-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front04_1').position.y = target.value;
    model.getObjectByName('left_door2_back04_1').position.y = target.value;
});
$('#LeftDoorHeight4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_front04_1').position.y = target.value;
    model.getObjectByName('left_door2_back04_1').position.y = target.value;
});
$('#LeftDoorWidth-val4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front04').position.z = (target.value) / 2;
});
$('#LeftDoorWidth4').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName('left_door2_back04').position.z = -(target.value) / 2;
    model.getObjectByName('left_door2_front04').position.z = (target.value) / 2;
});
$('#LeftDoor4Position').change((e) => {
    var target = e.target ? e.target : e.srcElement;
    model.getObjectByName("left_door2_04").position.x = target.value;
});

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();
//let roofSilder = document.getElementById("roof");
//roofSilder.step = 30;
//let roofNum = document.getElementById("roof-val");
//roofNum.step = 30;
//let wallsSilder = document.getElementById("walls");
//wallsSilder.step = 40;
//let wallsNum = document.getElementById("walls-val");
//wallsNum.step = 40;

function updateTextInput(val) {
    document.querySelector("#length-val").value = val;
};

function updateRangeInput(val) {
    document.querySelector("#length").value = val;
};

function updateWidthTextInput(val) {
    document.querySelector("#Width-val").value = val;
};

function updateWidthRangeInput(val) {
    document.querySelector("#Width").value = val;
};

function updateGutterTextInput(val) {
    document.querySelector("#Gutter-val").value = val;
};

function updateGutterRangeInput(val) {
    document.querySelector("#Gutter").value = val;
};

function updateSlopeTextInput(val) {
    document.querySelector("#Slope-val").value = val;
};

function updateSlopeRangeInput(val) {
    document.querySelector("#Slope").value = val;
};

function updateTextInput(val) {
    document.querySelector("#length-val").value = val;
};

function updateFrontDoorWidth(val) {
    document.querySelector("#FrontDoorWidth-val").value = val;
};

function updateFrontDoorWidthNumb(val) {
    document.querySelector("#FrontDoorWidth").value = val;
};

function updateFrontDoorHeight(val) {
    document.querySelector("#FrontDoorHeight-val").value = val;
};

function updateFrontDoorHeightNumb(val) {
    document.querySelector("#FrontDoorHeight").value = val;
};

function updateFrontDoorPosition(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('FrontDoorWidth').value - 0.5) / 2;
    document.querySelector("#FrontdoorLeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#FrontdoorRightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
    document.querySelector(".FrontDoorPosition").value = document.querySelector(".FrontDoorPosition").value;

    
};

function updateFrontDoorWidth2(val) {
    document.querySelector("#FrontDoorWidth-val2").value = val;
};

function updateFrontDoorWidthNumb2(val) {
    document.querySelector("#FrontDoorWidth2").value = val;
};

function updateFrontDoorHeight2(val) {
    document.querySelector("#FrontDoorHeight-val2").value = val;
};

function updateFrontDoorHeightNumb2(val) {
    document.querySelector("#FrontDoorHeight2").value = val;
};

function updateFrontDoor2Position(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('FrontDoorWidth2').value - 0.5) / 2;
    document.querySelector("#Frontdoor2LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Frontdoor2RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateFrontDoorWidth3(val) {
    document.querySelector("#FrontDoorWidth-val3").value = val;
};

function updateFrontDoorWidthNumb3(val) {
    document.querySelector("#FrontDoorWidth3").value = val;
};

function updateFrontDoorHeight3(val) {
    document.querySelector("#FrontDoorHeight-val3").value = val;
};

function updateFrontDoorHeightNumb3(val) {
    document.querySelector("#FrontDoorHeight3").value = val;
};

function updateFrontDoor3Position(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('FrontDoorWidth3').value - 0.5) / 2;
    document.querySelector("#Frontdoor3LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Frontdoor3RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateFrontDoorWidth4(val) {
    document.querySelector("#FrontDoorWidth-val4").value = val;
};

function updateFrontDoorWidthNumb4(val) {
    document.querySelector("#FrontDoorWidth4").value = val;
};

function updateFrontDoorHeight4(val) {
    document.querySelector("#FrontDoorHeight-val4").value = val;
};

function updateFrontDoorHeightNumb4(val) {
    document.querySelector("#FrontDoorHeight4").value = val;
};

function updateFrontDoor4Position(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('FrontDoorWidth4').value - 0.5) / 2;
    document.querySelector("#Frontdoor4LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Frontdoor4RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateBackDoorWidth(val) {
    document.querySelector("#BackDoorWidth-val").value = val;
};

function updateBackDoorWidthNumb(val) {
    document.querySelector("#BackDoorWidth").value = val;
};

function updateBackDoorHeight(val) {
    document.querySelector("#BackDoorHeight-val").value = val;
};

function updateBackDoorHeightNumb(val) {
    document.querySelector("#BackDoorHeight").value = val;
};

function updateBackDoorPosition(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('BackDoorWidth').value - 0.5) / 2;
    document.querySelector("#BackdoorLeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#BackdoorRightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateBackDoorWidth2(val) {
    document.querySelector("#BackDoorWidth-val2").value = val;
};

function updateBackDoorWidthNumb2(val) {
    document.querySelector("#BackDoorWidth2").value = val;
};

function updateBackDoorHeight2(val) {
    document.querySelector("#BackDoorHeight-val2").value = val;
};

function updateBackDoorHeightNumb2(val) {
    document.querySelector("#BackDoorHeight2").value = val;
};

function updateBackDoor2Position(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('BackDoorWidth2').value - 0.5) / 2;
    document.querySelector("#Backdoor2LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Backdoor2RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateBackDoorWidth3(val) {
    document.querySelector("#BackDoorWidth-val3").value = val;
};

function updateBackDoorWidthNumb3(val) {
    document.querySelector("#BackDoorWidth3").value = val;
};

function updateBackDoorHeight3(val) {
    document.querySelector("#BackDoorHeight-val3").value = val;
};

function updateBackDoorHeightNumb3(val) {
    document.querySelector("#BackDoorHeight3").value = val;
};

function updateBackDoor3Position(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('BackDoorWidth3').value - 0.5) / 2;
    document.querySelector("#Backdoor3LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Backdoor3RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateBackDoorWidth4(val) {
    document.querySelector("#BackDoorWidth-val4").value = val;
};

function updateBackDoorWidthNumb4(val) {
    document.querySelector("#BackDoorWidth4").value = val;
};

function updateBackDoorHeight4(val) {
    document.querySelector("#BackDoorHeight-val4").value = val;
};

function updateBackDoorHeightNumb4(val) {
    document.querySelector("#BackDoorHeight4").value = val;
};

function updateBackDoor4Position(val) {
    let widthOfwall = document.getElementById("Width").value / 2;
    let widthOfDoor = (document.getElementById('BackDoorWidth4').value - 0.5) / 2;
    document.querySelector("#Backdoor4LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Backdoor4RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateRightDoorWidth(val) {
    document.querySelector("#RightDoorWidth-val").value = val;
};

function updateRightDoorWidthNumb(val) {
    document.querySelector("#RightDoorWidth").value = val;
};

function updateRightDoorHeight(val) {
    document.querySelector("#RightDoorHeight-val").value = val;
};

function updateRightDoorHeightNumb(val) {
    document.querySelector("#RightDoorHeight").value = val;
};

function updateRightDoorPosition(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('RightDoorWidth').value - 0.5) / 2;
    document.querySelector("#RightdoorLeftDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
    document.querySelector("#RightdoorRightDistance").value = `${(widthOfwall - widthOfDoor /2)-Number(val)}`;
};

function updateRightDoorWidth2(val) {
    document.querySelector("#RightDoorWidth-val2").value = val;
};

function updateRightDoorWidthNumb2(val) {
    document.querySelector("#RightDoorWidth2").value = val;
};

function updateRightDoorHeight2(val) {
    document.querySelector("#RightDoorHeight-val2").value = val;
};

function updateRightDoorHeightNumb2(val) {
    document.querySelector("#RightDoorHeight2").value = val;
};

function updateRightDoor2Position(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('RightDoorWidth2').value - 0.5) / 2;
    document.querySelector("#Rightdoor2LeftDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
    document.querySelector("#Rightdoor2RightDistance").value = `${(widthOfwall - widthOfDoor /2)-Number(val)}`;
};

function updateRightDoorWidth3(val) {
    document.querySelector("#RightDoorWidth-val3").value = val;
};

function updateRightDoorWidthNumb3(val) {
    document.querySelector("#RightDoorWidth3").value = val;
};

function updateRightDoorHeight3(val) {
    document.querySelector("#RightDoorHeight-val3").value = val;
};

function updateRightDoorHeightNumb3(val) {
    document.querySelector("#RightDoorHeight3").value = val;
};

function updateRightDoor3Position(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('RightDoorWidth3').value - 0.5) / 2;
    document.querySelector("#Rightdoor3LeftDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
    document.querySelector("#Rightdoor3RightDistance").value = `${(widthOfwall - widthOfDoor /2)-Number(val)}`;
};

function updateRightDoorWidth4(val) {
    document.querySelector("#RightDoorWidth-val4").value = val;
};

function updateRightDoorWidthNumb4(val) {
    document.querySelector("#RightDoorWidth4").value = val;
};

function updateRightDoorHeight4(val) {
    document.querySelector("#RightDoorHeight-val4").value = val;
};

function updateRightDoorHeightNumb4(val) {
    document.querySelector("#RightDoorHeight4").value = val;
};

function updateRightDoor4Position(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('RightDoorWidth4').value - 0.5) / 2;
    document.querySelector("#Rightdoor4LeftDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
    document.querySelector("#Rightdoor4RightDistance").value = `${(widthOfwall - widthOfDoor /2)-Number(val)}`;
};

function updateLeftDoorWidth(val) {
    document.querySelector("#LeftDoorWidth-val").value = val;
};

function updateLeftDoorWidthNumb(val) {
    document.querySelector("#LeftDoorWidth").value = val;
};

function updateLeftDoorHeight(val) {
    document.querySelector("#LeftDoorHeight-val").value = val;
};

function updateLeftDoorHeightNumb(val) {
    document.querySelector("#LeftDoorHeight").value = val;
};

function updateLeftDoorPosition(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('LeftDoorWidth').value - 0.5) / 2;
    document.querySelector("#LeftdoorLeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#LeftdoorRightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateLeftDoorWidth2(val) {
    document.querySelector("#LeftDoorWidth-val2").value = val;
};

function updateLeftDoorWidthNumb2(val) {
    document.querySelector("#LeftDoorWidth2").value = val;
};

function updateLeftDoorHeight2(val) {
    document.querySelector("#LeftDoorHeight-val2").value = val;
};

function updateLeftDoorHeightNumb2(val) {
    document.querySelector("#LeftDoorHeight2").value = val;
};

function updateLeftDoor2Position(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('LeftDoorWidth2').value - 0.5) / 2;
    document.querySelector("#Leftdoor2LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Leftdoor2RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateLeftDoorWidth3(val) {
    document.querySelector("#LeftDoorWidth-val3").value = val;
};

function updateLeftDoorWidthNumb3(val) {
    document.querySelector("#LeftDoorWidth3").value = val;
};

function updateLeftDoorHeight3(val) {
    document.querySelector("#LeftDoorHeight-val3").value = val;
};

function updateLeftDoorHeightNumb3(val) {
    document.querySelector("#LeftDoorHeight3").value = val;
};

function updateLeftDoor3Position(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('LeftDoorWidth3').value - 0.5) / 2;
    document.querySelector("#Leftdoor3LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Leftdoor3RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateLeftDoorWidth4(val) {
    document.querySelector("#LeftDoorWidth-val4").value = val;
};

function updateLeftDoorWidthNumb4(val) {
    document.querySelector("#LeftDoorWidth4").value = val;
};

function updateLeftDoorHeight4(val) {
    document.querySelector("#LeftDoorHeight-val4").value = val;
};

function updateLeftDoorHeightNumb4(val) {
    document.querySelector("#LeftDoorHeight4").value = val;
};

function updateLeftDoor4Position(val) {
    let widthOfwall = document.getElementById("length").value / 2;
    let widthOfDoor = (document.getElementById('LeftDoorWidth4').value - 0.5) / 2;
    document.querySelector("#Leftdoor4LeftDistance").value = (widthOfwall - widthOfDoor / 2) - val;
    document.querySelector("#Leftdoor4RightDistance").value = `${(widthOfwall - widthOfDoor /2)+Number(val)}`;
};

function updateroofTextInput(val) {
    document.querySelector("#roof-val").value = val;
    if (roofSilder.value == 0) {
        roofSilder.step = 30;
    }
    if (roofSilder.value == 30) {
        roofSilder.step = 10;
    }
    if (roofSilder.value == 40) {
        roofSilder.step = 20;
    }
    if (roofSilder.value == 140) {
        roofSilder.step = 10;
    }
}

function updateroofRangeInput(val) {
    document.querySelector("#roof").value = val;
    if (roofNum.value == 0) {
        roofNum.step = 30;
    }
    if (roofNum.value == 30) {
        roofNum.step = 10;
    }
    if (roofNum.value == 40) {
        roofNum.step = 20;
    }
    if (roofNum.value == 140) {
        roofNum.step = 10;
    }
}

function updatewallsTextInput(val) {
    document.querySelector("#walls-val").value = val;
    if (wallsSilder.value == 0) {
        wallsSilder.step = 40;
    }
    if (wallsSilder.value == 40) {
        wallsSilder.step = 20;
    }
    if (wallsSilder.value == 140) {
        wallsSilder.step = 10;
    }
}

function updatewallsRangeInput(val) {
    document.querySelector("#walls").value = val;
    if (wallsNum.value == 0) {
        wallsNum.step = 40;
    }
    if (wallsNum.value == 40) {
        wallsNum.step = 20;
    }
    if (wallsNum.value == 140) {
        wallsNum.step = 10;
    }
}
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        FrontDoor1PositionController.update({
            from: 0,
        });
        FrontDoor2PositionController.update({
            from: 0,
        });
        FrontDoor3PositionController.update({
            from: 0,
        });
        FrontDoor4PositionController.update({
            from: 0,
        });
        BackDoor1PositionController.update({
            from: 0,
        });
        BackDoor2PositionController.update({
            from: 0,
        });
        BackDoor3PositionController.update({
            from: 0,
        });
        BackDoor4PositionController.update({
            from: 0,
        });

        LeftDoor1PositionController.update({
            from: 0,
        });
        LeftDoor2PositionController.update({
            from: 0,

        });
        LeftDoor3PositionController.update({
            from: 0,
        });
        LeftDoor4PositionController.update({
            from: 0,
        });

        RightDoor1PositionController.update({
            from: 0,
        });
        RightDoor2PositionController.update({
            from: 0,
        });
        RightDoor3PositionController.update({
            from: 0,
        });
        RightDoor4PositionController.update({
            from: 0,
        });
        $('#wakinDoorcollapse1').collapse('hide');
        $('#wakinDoorcollapse2').collapse('hide');
        $('#wakinDoorcollapse3').collapse('hide');
        $('#wakinDoorcollapse4').collapse('hide');
        $('#BackwakinDoorcollapse1').collapse('hide');
        $('#BackwakinDoorcollapse2').collapse('hide');
        $('#BackwakinDoorcollapse3').collapse('hide');
        $('#BackwakinDoorcollapse4').collapse('hide');
        $('#LeftwakinDoorcollapse1').collapse('hide');
        $('#LeftwakinDoorcollapse2').collapse('hide');
        $('#LeftwakinDoorcollapse3').collapse('hide');
        $('#LeftwakinDoorcollapse4').collapse('hide');
        $('#RightwakinDoorcollapse1').collapse('hide');
        $('#RightwakinDoorcollapse2').collapse('hide');
        $('#RightwakinDoorcollapse3').collapse('hide');
        $('#RightwakinDoorcollapse4').collapse('hide');
        $('#collapse1').collapse('hide');
        $('#collapse2').collapse('hide');
        $('#collapse3').collapse('hide');
        $('#collapse4').collapse('hide');
        $('#collapse1back').collapse('hide');
        $('#collapse2back').collapse('hide');
        $('#collapse3back').collapse('hide');
        $('#collapse4back').collapse('hide');
        $('#collapse1left').collapse('hide');
        $('#collapse2left').collapse('hide');
        $('#collapse3left').collapse('hide');
        $('#collapse4left').collapse('hide');
        $('#collapse1right').collapse('hide');
        $('#collapse2right').collapse('hide');
        $('#collapse3right').collapse('hide');
        $('#collapse4right').collapse('hide');
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Toepassen";
    } else {
        document.getElementById("nextBtn").innerHTML = "Volgende";
    }
    fixStepIndicator(n);
};

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        submitInfo();
        return false;
    }
    showTab(currentTab);
};

function fixStepIndicator(n) {
    var i,
        x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
};

function submitInfo() {
    $('#myModal').modal('show')
};
$('#myModal').on('hidden.bs.modal', function(e) {
    location.reload()
})
document.getElementById('forminfo').onsubmit = function(e) {

    e.preventDefault();
    $("#submit").attr("disabled", true);
   // $("#submit").html('Submitted');
    let name = $('#Name').val();
    let Solution = $('#Solution').val();
    let Company = $('#Company').val();
    let Street = $('#Street').val();
    let HouseNumber = $('#HouseNumber').val();
    let Postcode = $('#Postcode').val();
    let Place = $('#Place').val();
    let Phone = $('#Phone').val();
    let email = $('#email').val();
    let hps_coating = $('#hps_coating').is(":checked");
    let dakgoten = $('#dakgoten').is(":checked");
    
    let dakgoten_zijde1 = $('#Dakgoten_zijde1').is(":checked");
    let dakgoten_zijde2 = $('#Dakgoten_zijde2').is(":checked");
    let dakgoten_zijde = dakgoten_zijde1 + ', ' + dakgoten_zijde2;

    let dakgoten_goten1 = $('#Dakgoten_goten1').is(":checked");
    let dakgoten_goten2 = $('#Dakgoten_goten2').is(":checked");
    let dakgoten_goten = dakgoten_goten1 + ', ' + dakgoten_goten2;
    
    let sectionaaldeur = $('#sectionaaldeur').is(":checked");

    let idee = $('#idee').is(":checked");
    let heb = $('#heb').is(":checked");
    let zonder = $('#zonder').is(":checked");
    let aanvraag = $('#aanvraag').is(":checked");
    let vraag = $('#vraag').is(":checked");




    //   let hps_coating = $('#hps_coating').attr("checked") ? 1 : 0;;
    let bigbox = $('#bigbox').val();
    let length = $('#length').val();
    let width = $('#Width').val();
    let Gutter = $('#Gutter').val();
    let Slope = $('#Slope').val();
    let Ridge = $('#Ridge').val();
    let roof = $('#roof').val();
    let walls = $('#walls').val();
    let roofstyle = $('#changeRoofMat').val();
    let wallstyle = $('#changeWallMat').val();
    let construction = $('#construction').val();
    var fd = new FormData();
    fd.append('frontSectionalDoor1is', frontSectionalDoor1);
    fd.append('frontSectionalDoor2is', frontSectionalDoor2);
    fd.append('frontSectionalDoor3is', frontSectionalDoor3);
    fd.append('frontSectionalDoor4is', frontSectionalDoor4);
    fd.append('BackSectionalDoor1is', BackSectionalDoor1);
    fd.append('BackSectionalDoor2is', BackSectionalDoor2);
    fd.append('BackSectionalDoor3is', BackSectionalDoor3);
    fd.append('BackSectionalDoor4is', BackSectionalDoor4);
    fd.append('rightSectionalDoor1is', rightSectionalDoor1);
    fd.append('rightSectionalDoor2is', rightSectionalDoor2);
    fd.append('rightSectionalDoor3is', rightSectionalDoor3);
    fd.append('rightSectionalDoor4is', rightSectionalDoor4);
    fd.append('leftSectionalDoor1is', leftSectionalDoor1);
    fd.append('leftSectionalDoor2is', leftSectionalDoor2);
    fd.append('leftSectionalDoor3is', leftSectionalDoor3);
    fd.append('leftSectionalDoor4is', leftSectionalDoor4);
    fd.append('frontWalkingDoor1is', frontWalkingDoor1);
    fd.append('frontWalkingDoor2is', frontWalkingDoor2);
    fd.append('frontWalkingDoor3is', frontWalkingDoor3);
    fd.append('frontWalkingDoor4is', frontWalkingDoor4);
    fd.append('BackWalkingDoor1is', BackWalkingDoor1);
    fd.append('BackWalkingDoor2is', BackWalkingDoor2);
    fd.append('BackWalkingDoor3is', BackWalkingDoor3);
    fd.append('BackWalkingDoor4is', BackWalkingDoor4);
    fd.append('rightWalkingDoor1is', rightWalkingDoor1);
    fd.append('rightWalkingDoor2is', rightWalkingDoor2);
    fd.append('rightWalkingDoor3is', rightWalkingDoor3);
    fd.append('rightWalkingDoor4is', rightWalkingDoor4);
    fd.append('leftWalkingDoor1is', leftWalkingDoor1);
    fd.append('leftWalkingDoor2is', leftWalkingDoor2);
    fd.append('leftWalkingDoor3is', leftWalkingDoor3);
    fd.append('leftWalkingDoor4is', leftWalkingDoor4);
    fd.append('FrontDoorHeight1', $('#FrontDoorHeight').val());
    fd.append('FrontDoorHeight2', $('#FrontDoorHeight2').val());
    fd.append('FrontDoorHeight3', $('#FrontDoorHeight3').val());
    fd.append('FrontDoorHeight4', $('#FrontDoorHeight4').val());
    fd.append('FrontDoorWidth1', $('#FrontDoorWidth').val());
    fd.append('FrontDoorWidth2', $('#FrontDoorWidth2').val());
    fd.append('FrontDoorWidth3', $('#FrontDoorWidth3').val());
    fd.append('FrontDoorWidth4', $('#FrontDoorWidth4').val());
    fd.append('RightDoorHeight1', $('#RightDoorHeight').val());
    fd.append('RightDoorHeight2', $('#RightDoorHeight2').val());
    fd.append('RightDoorHeight3', $('#RightDoorHeight3').val());
    fd.append('RightDoorHeight4', $('#RightDoorHeight4').val());
    fd.append('RightDoorWidth1', $('#RightDoorWidth').val());
    fd.append('RightDoorWidth2', $('#RightDoorWidth2').val());
    fd.append('RightDoorWidth3', $('#RightDoorWidth3').val());
    fd.append('RightDoorWidth4', $('#RightDoorWidth4').val());
    fd.append('BackDoorHeight1', $('#BackDoorHeight').val());
    fd.append('BackDoorHeight2', $('#BackDoorHeight2').val());
    fd.append('BackDoorHeight3', $('#BackDoorHeight3').val());
    fd.append('BackDoorHeight4', $('#BackDoorHeight4').val());
    fd.append('BackDoorWidth1', $('#BackDoorWidth').val());
    fd.append('BackDoorWidth2', $('#BackDoorWidth2').val());
    fd.append('BackDoorWidth3', $('#BackDoorWidth3').val());
    fd.append('BackDoorWidth4', $('#BackDoorWidth4').val());
    fd.append('LeftDoorHeight1', $('#LeftDoorHeight').val());
    fd.append('LeftDoorHeight2', $('#LeftDoorHeight2').val());
    fd.append('LeftDoorHeight3', $('#LeftDoorHeight3').val());
    fd.append('LeftDoorHeight4', $('#LeftDoorHeight4').val());
    fd.append('LeftDoorWidth1', $('#LeftDoorWidth').val());
    fd.append('LeftDoorWidth2', $('#LeftDoorWidth2').val());
    fd.append('LeftDoorWidth3', $('#LeftDoorWidth3').val());
    fd.append('LeftDoorWidth4', $('#LeftDoorWidth4').val());
    fd.append('FrontDoorPosition1', $('.FrontDoorPosition').val());
    fd.append('FrontDoorPosition2', $('.FrontDoor2Position').val());
    fd.append('FrontDoorPosition3', $('.FrontDoor3Position').val());
    fd.append('FrontDoorPosition4', $('.FrontDoor4Position').val());
    fd.append('BackDoorPosition1', $('.BackDoorPosition').val());
    fd.append('BackDoorPosition2', $('.BackDoor2Position').val());
    fd.append('BackDoorPosition3', $('.BackDoor3Position').val());
    fd.append('BackDoorPosition4', $('.BackDoor4Position').val());
    fd.append('LeftDoorPosition1', $('.LeftDoorPosition').val());
    fd.append('LeftDoorPosition2', $('.LeftDoor2Position').val());
    fd.append('LeftDoorPosition3', $('.LeftDoor3Position').val());
    fd.append('LeftDoorPosition4', $('.LeftDoor4Position').val());
    fd.append('RightDoorPosition1', $('.RightDoorPosition').val());
    fd.append('RightDoorPosition2', $('.RightDoor2Position').val());
    fd.append('RightDoorPosition3', $('.RightDoor3Position').val());
    fd.append('RightDoorPosition4', $('.RightDoor4Position').val());
    fd.append('FrontWalkinDoorPosition1', $('.FrontWalkinDoorPosition').val());
    fd.append('FrontWalkinDoorPosition2', $('.FrontWalkinDoorPosition2').val());
    fd.append('FrontWalkinDoorPosition3', $('.FrontWalkinDoorPosition3').val());
    fd.append('FrontWalkinDoorPosition4', $('.FrontWalkinDoorPosition4').val());
    fd.append('FrontWalkindoorLeftDistance', $('#FrontWalkindoorLeftDistance').val());
    fd.append('FrontWalkindoorLeftDistance2', $('#FrontWalkindoorLeftDistance2').val());
    fd.append('FrontWalkindoorLeftDistance3', $('#FrontWalkindoorLeftDistance3').val());
    fd.append('FrontWalkindoorLeftDistance4', $('#FrontWalkindoorLeftDistance4').val());
    fd.append('FrontWalkindoorRightDistance', $('#FrontWalkindoorRightDistance').val());
    fd.append('FrontWalkindoorRightDistance2', $('#FrontWalkindoorRightDistance2').val());
    fd.append('FrontWalkindoorRightDistance3', $('#FrontWalkindoorRightDistance3').val());
    fd.append('FrontWalkindoorRightDistance4', $('#FrontWalkindoorRightDistance4').val());
    fd.append('RightWalkinDoorPosition1', $('.RightWalkinDoorPosition1').val());
    fd.append('RightWalkinDoorPosition2', $('.RightWalkinDoorPosition2').val());
    fd.append('RightWalkinDoorPosition3', $('.RightWalkinDoorPosition3').val());
    fd.append('RightWalkinDoorPosition4', $('.RightWalkinDoorPosition4').val());
    fd.append('RightWalkindoorLeftDistance1', $('#RightWalkindoorLeftDistance1').val());
    fd.append('RightWalkindoorLeftDistance2', $('#RightWalkindoorLeftDistance2').val());
    fd.append('RightWalkindoorLeftDistance3', $('#RightWalkindoorLeftDistance3').val());
    fd.append('RightWalkindoorLeftDistance4', $('#RightWalkindoorLeftDistance4').val());
    fd.append('RightWalkindoorRightDistance1', $('#RightWalkindoorRightDistance1').val());
    fd.append('RightWalkindoorRightDistance2', $('#RightWalkindoorRightDistance2').val());
    fd.append('RightWalkindoorRightDistance3', $('#RightWalkindoorRightDistance3').val());
    fd.append('RightWalkindoorRightDistance4', $('#RightWalkindoorRightDistance4').val());
    fd.append('BackWalkinDoorPosition1', $('.BackWalkinDoorPosition1').val());
    fd.append('BackWalkinDoorPosition2', $('.BackWalkinDoorPosition2').val());
    fd.append('BackWalkinDoorPosition3', $('.BackWalkinDoorPosition3').val());
    fd.append('BackWalkinDoorPosition4', $('.BackWalkinDoorPosition4').val());
    fd.append('BackWalkindoorLeftDistance1', $('.BackWalkindoorLeftDistance1').val());
    fd.append('BackWalkindoorLeftDistance2', $('.BackWalkindoorLeftDistance2').val());
    fd.append('BackWalkindoorLeftDistance3', $('.BackWalkindoorLeftDistance3').val());
    fd.append('BackWalkindoorLeftDistance4', $('.BackWalkindoorLeftDistance4').val());
    fd.append('BackWalkindoorRightDistance1', $('.BackWalkindoorRightDistance1').val());
    fd.append('BackWalkindoorRightDistance2', $('.BackWalkindoorRightDistance2').val());
    fd.append('BackWalkindoorRightDistance3', $('.BackWalkindoorRightDistance3').val());
    fd.append('BackWalkindoorRightDistance4', $('.BackWalkindoorRightDistance4').val());
    fd.append('LeftWalkinDoorPosition1', $('.LeftWalkinDoorPosition1').val());
    fd.append('LeftWalkinDoorPosition2', $('.LeftWalkinDoorPosition2').val());
    fd.append('LeftWalkinDoorPosition3', $('.LeftWalkinDoorPosition3').val());
    fd.append('LeftWalkinDoorPosition4', $('.LeftWalkinDoorPosition4').val());
    fd.append('LeftWalkindoorLeftDistance1', $('#LeftWalkindoorLeftDistance1').val());
    fd.append('LeftWalkindoorLeftDistance2', $('#LeftWalkindoorLeftDistance2').val());
    fd.append('LeftWalkindoorLeftDistance3', $('#LeftWalkindoorLeftDistance3').val());
    fd.append('LeftWalkindoorLeftDistance4', $('#LeftWalkindoorLeftDistance4').val());
    fd.append('LeftWalkindoorRightDistance1', $('#LeftWalkindoorRightDistance1').val());
    fd.append('LeftWalkindoorRightDistance2', $('#LeftWalkindoorRightDistance2').val());
    fd.append('LeftWalkindoorRightDistance3', $('#LeftWalkindoorRightDistance3').val());
    fd.append('LeftWalkindoorRightDistance4', $('#LeftWalkindoorRightDistance4').val());
    fd.append('FrontdoorRightDistance', $('#FrontdoorRightDistance').val());
    fd.append('Frontdoor2RightDistance', $('#Frontdoor2RightDistance').val());
    fd.append('Frontdoor3RightDistance', $('#Frontdoor3RightDistance').val());
    fd.append('Frontdoor4RightDistance', $('#Frontdoor4RightDistance').val());
    fd.append('BackdoorRightDistance', $('#BackdoorRightDistance').val());
    fd.append('Backdoor2RightDistance', $('#Backdoor2RightDistance').val());
    fd.append('Backdoor3RightDistance', $('#Backdoor3RightDistance').val());
    fd.append('Backdoor4RightDistance', $('#Backdoor4RightDistance').val());
    fd.append('LeftdoorRightDistance', $('#LeftdoorRightDistance').val());
    fd.append('Leftdoor2RightDistance', $('#Leftdoor2RightDistance').val());
    fd.append('Leftdoor3RightDistance', $('#Leftdoor3RightDistance').val());
    fd.append('Leftdoor4RightDistance', $('#Leftdoor4RightDistance').val());
    fd.append('RightdoorRightDistance', $('#RightdoorRightDistance').val());
    fd.append('Rightdoor2RightDistance', $('#Rightdoor2RightDistance').val());
    fd.append('Rightdoor3RightDistance', $('#Rightdoor3RightDistance').val());
    fd.append('Rightdoor4RightDistance', $('#Rightdoor4RightDistance').val());
    fd.append('FrontdoorLeftDistance', $('#FrontdoorLeftDistance').val());
    fd.append('Frontdoor2LeftDistance', $('#Frontdoor2LeftDistance').val());
    fd.append('Frontdoor3LeftDistance', $('#Frontdoor3LeftDistance').val());
    fd.append('Frontdoor4LeftDistance', $('#Frontdoor4LeftDistance').val());
    fd.append('BackdoorLeftDistance', $('#BackdoorLeftDistance').val());
    fd.append('Backdoor2LeftDistance', $('#Backdoor2LeftDistance').val());
    fd.append('Backdoor3LeftDistance', $('#Backdoor3LeftDistance').val());
    fd.append('Backdoor4LeftDistance', $('#Backdoor4LeftDistance').val());
    fd.append('LeftdoorLeftDistance', $('#LeftdoorLeftDistance').val());
    fd.append('Leftdoor2LeftDistance', $('#Leftdoor2LeftDistance').val());
    fd.append('Leftdoor3LeftDistance', $('#Leftdoor3LeftDistance').val());
    fd.append('Leftdoor4LeftDistance', $('#Leftdoor4LeftDistance').val());
    fd.append('RightdoorLeftDistance', $('#RightdoorLeftDistance').val());
    fd.append('Rightdoor2LeftDistance', $('#Rightdoor2LeftDistance').val());
    fd.append('Rightdoor3LeftDistance', $('#Rightdoor3LeftDistance').val());
    fd.append('Rightdoor4LeftDistance', $('#Rightdoor4LeftDistance').val());
    fd.append('name', name);
    fd.append('Solution', Solution);
    fd.append('Street', Street);
    fd.append('HouseNumber', HouseNumber);
    fd.append('Postcode', Postcode);
    fd.append('Place', Place);
    fd.append('Phone', Phone);
    fd.append('email', email);
    fd.append('hps_coating', hps_coating);
    fd.append('dakgoten', dakgoten);
    fd.append('dakgoten_zijde', dakgoten_zijde);
    fd.append('dakgoten_goten', dakgoten_goten);
    fd.append('sectionaaldeur', sectionaaldeur);

    fd.append('idee', idee);
    fd.append('heb', heb);
    fd.append('zonder', zonder);
    fd.append('aanvraag', aanvraag);
    fd.append('vraag', vraag);
    fd.append('bigbox', bigbox);
    fd.append('length', length);
    fd.append('width', width);
    fd.append('Gutter', Gutter);
    fd.append('Slope', Slope);
    fd.append('Ridge', Ridge);
    fd.append('roof', roof);
    fd.append('walls', walls);
    fd.append('roofstyle', roofstyle);
    fd.append('wallstyle', wallstyle);
    fd.append('construction', construction);
    fd.append('doorHexColor', doorHexColor);
    fd.append('roofhexColor', roofhexColor);
    fd.append('wallcolor', hexcolor);
    fd.append('construction', construction);
    fd.append('WalkindoorHexColor', WalkindoorHexColor);
    fd.append('w_color', w_color);
    fd.append('rooft_color', rooft_color);
    fd.append('door_color', door_color);
    fd.append('wd_color', wd_color);
    //   console.log(fd);
    axios("mail.php", { method: "POST", data: fd })
        .then(function(response) {
            if (response.data == 'success') {
       swal({
type: "success",
  title: "Dank voor uw aanvraag!",
  text: "Wij werken deze zsm uit.",
  
  timer: 3000,
  showConfirmButton: false
}, function(){
      window.location.href = "http://www.levere.nl/aanvraag3dverzonden";
});

//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Dank voor uw aanvraag!',
//                     text: 'Wij werken deze zsm uit.',
//                     buttons: {
//         confirm: {
//           text: "OK",
//           value: true,
//           visible: true,
//           className: "",
//           closeModal: true
//         }}
//                 }).then((result) => {
//   if (result.isConfirmed) {
//     window.location.replace("https://www.levere.nl/3dloods-copy/thank-you.html");
//   }
// });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.data,
                });
            };
        })
        .catch(function(error) {
            //console.log(error)
        });
};

function onTransitionEnd(event) {
    event.target.remove();
}