<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>levere - 3D view</title>

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="style5.css">

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>

</head>
<style>
    .model{
        height:84vh;
    }
    canvas{
        outline: none;
    }
</style>
<body>

<?php
    $connect = mysqli_connect('localhost','careca_levere','levere@001','careca_levere') or die();
    if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * from designed_house where id='".$id."'";
    $result = $connect->query($query);
    while($row = $result->fetch_assoc()) {
?>

    <div class="wrapper">
        <!-- Sidebar Holder -->
        <nav id="sidebar" class="active">
            <div class="sidebar-header" >
                <h3>Levere</h3>
            </div>

            <ul class="list-unstyled components">
           
               
               <li>
                   <a href="">Adres : <?php echo $row['HouseNumber'] ?></a>
               </li>
               <li>
                   <a href="">Postcode : <?php echo $row['Postcode'] ?></a>
               </li>
               <li>
                   <a href="">Plaats : <?php echo $row['Place'] ?></a>
               </li>
               <li>
                   <a href="">Land : <?php echo $row['Land'] ?></a>
               </li>
               <li>
                   <a href="">Telefoon : <?php echo $row['Phone'] ?></a>
               </li>
               <li>
                   <a href="">email : <?php echo $row['email'] ?></a>
               </li>
              
               
            </ul>

            <!-- <ul class="list-unstyled CTAs">
                <li>
                    <a href="../<?php echo $row['ExcelFile'] ?>" class="download">Download Excel File</a>
                </li>
                
            </ul> -->
        </nav>

        <!-- Page Content Holder -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="navbar-btn active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><?php echo $row['fname'] ?> Requested us</a>
                            </li>
                            
                        </ul>
                    </div>

                    
                </div>
            </nav>
            

              <div id="model" class="model w-100">  
                
            </div>             
            
            
        </div>
    </div>

    <!-- jQuery CDN - Slim version (=without AJAX) -->
     <!-- Popper.JS -->
     
     <script src="../three.min.js"></script>
     <script src="../GLTFLoader.js"></script>
     <script src="https://unpkg.com/three@0.85.0/examples/js/controls/OrbitControls.js"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
     <!-- Bootstrap JS -->
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <script>
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
  FrontbackWallsMaterial_height = 4,
  FrontbackWallsMaterial_width = 4,
  RightleftWallsMaterial_height = 5,
  RightleftWallsMaterial_width = 4,
  frontWallsMaterial_normal2_heigth = 5,
  rightWallsMaterial_normal2_heigth = 4,
  frontWallsMaterial_normal2_width = 4,
  terrainTextureHeight = 5,
  terrainTextureWidth = 4,
  normalMap_heigth = 5,
  normalMap_width = 4,
  displacementMap_heigth = 5,
  displacementMap_width = 4,
  normalMap2_heigth = 5,
  normalMap2_width = 4,
  displacementMap2_heigth = 5,
  displacementMap2_width = 4,
  specMap_heigth2 = 5,
  specMap_width2 = 4,
  roofAngleValue = 0,
  GutterHeigthValue = 3,
  roofThicknessValue = 0,
  wallsThicknessValue = 0,
  ModelWidth = 4,
  BackFrontDoorWidth = 2.5,
  roofHeightValue,
  
  hexcolor = '<?php echo $row['hexcolor'];?>', // wall color
  doorHexColor = '<?php echo $row['doorHexColor'];?>', // door color
  roofhexColor = '<?php echo $row['roofhexColor'];?>', // roof color
  WalkindoorHexColor = '<?php echo $row['WalkindoorHexColor'];?>', // walkingdoor color

  RightLeftDoorWidth = 2.5;
const container = document.getElementById("model");
function init() {
  var box = new THREE.Box3();
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.002);
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 5000);
  camera.position.set(0, 0, 50);
  camera.lookAt(0, 0, 0);
  var gridHelper = new THREE.GridHelper(size, divisions);
  //scene.add(gridHelper);
  var AmbientLight = new THREE.AmbientLight(0xffffff, 3.00); // soft white light
  scene.add(AmbientLight);
  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 10, 7.5);
  //directionalLight.castShadow = true; 
  scene.add(directionalLight);
  var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight2.position.set(-5, 10, -7.5);
  //directionalLight.castShadow = true; 
  scene.add(directionalLight2);
  
	const loadingManager = new THREE.LoadingManager( () => {
	
		const loadingScreen = document.getElementById( 'loading-screen' );
		loadingScreen.classList.add( 'fade-out' );
	
		loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
		
	} );

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setSize(container.clientWidth , container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  controls.maxPolarAngle = Math.PI * 0.5;

  var FrontbackWallsMaterial_color = new THREE.TextureLoader().load("../house/textures/wall1/wall_color.jpg");
  FrontbackWallsMaterial_color.wrapS = THREE.RepeatWrapping; // height
  FrontbackWallsMaterial_color.wrapT = THREE.RepeatWrapping; // width
  FrontbackWallsMaterial_color.repeat.set(FrontbackWallsMaterial_height, FrontbackWallsMaterial_width);
  FrontbackWallsMaterial_color.center.set(0.5, 0);
  var RightleftWallsMaterial_color = new THREE.TextureLoader().load("../house/textures/wall1/wall_color.jpg");
  RightleftWallsMaterial_color.wrapS = THREE.RepeatWrapping; // height
  RightleftWallsMaterial_color.wrapT = THREE.RepeatWrapping; // width
  RightleftWallsMaterial_color.repeat.set(RightleftWallsMaterial_height, RightleftWallsMaterial_width);
  RightleftWallsMaterial_color.center.set(0.5, 0.5);
  var FrontbackwallsMaterial_normal = new THREE.TextureLoader().load("../house/textures/wall1/wall_normal.jpg");
  FrontbackwallsMaterial_normal.wrapS = THREE.RepeatWrapping; // height
  FrontbackwallsMaterial_normal.wrapT = THREE.RepeatWrapping; // width
  FrontbackwallsMaterial_normal.repeat.set(FrontbackWallsMaterial_height, FrontbackWallsMaterial_height)
  FrontbackwallsMaterial_normal.center.set(0.5, 0.5);
  var RightleftMaterial_normal = new THREE.TextureLoader().load("../house/textures/wall1/wall_normal.jpg");
  RightleftMaterial_normal.wrapS = THREE.RepeatWrapping; // height
  RightleftMaterial_normal.wrapT = THREE.RepeatWrapping; // width
  RightleftMaterial_normal.repeat.set(RightleftWallsMaterial_height, RightleftWallsMaterial_width);
  RightleftMaterial_normal.center.set(0.5, 0.5);
  var FrontbackwallsMaterial_normal2 = new THREE.TextureLoader().load("../house/textures/wall2/wall_normal.jpg");
  FrontbackwallsMaterial_normal2.wrapS = THREE.RepeatWrapping; // height
  FrontbackwallsMaterial_normal2.wrapT = THREE.RepeatWrapping; // width
  FrontbackwallsMaterial_normal2.repeat.set(rightWallsMaterial_normal2_heigth, frontWallsMaterial_normal2_width);
  FrontbackwallsMaterial_normal2.center.set(0.5, 0.5);
  var RightleftMaterial_normal2 = new THREE.TextureLoader().load("../house/textures/wall2/wall_normal.jpg");
  RightleftMaterial_normal2.wrapS = THREE.RepeatWrapping; // height
  RightleftMaterial_normal2.wrapT = THREE.RepeatWrapping; // width
  RightleftMaterial_normal2.repeat.set(frontWallsMaterial_normal2_heigth, frontWallsMaterial_normal2_width);
  RightleftMaterial_normal2.center.set(0.5, 0.5);
  var normalMap = new THREE.TextureLoader().load("../house/textures/roof1/roof_normal.jpg");
  normalMap.wrapS = THREE.RepeatWrapping; // height
  normalMap.wrapT = THREE.RepeatWrapping; // width
  normalMap.flipY = true;
  normalMap.repeat.set(normalMap_heigth, normalMap_width);
  var displacementMap = new THREE.TextureLoader().load("../house/textures/roof1/roof_disp.jpg");
  displacementMap.wrapS = THREE.RepeatWrapping; // height
  displacementMap.wrapT = THREE.RepeatWrapping; // width
  displacementMap.repeat.set(displacementMap_heigth, displacementMap_width);
  var normalMap2 = new THREE.TextureLoader().load("../house/textures/roof2/roof_normal.jpg");
  normalMap2.wrapS = THREE.RepeatWrapping; // height
  normalMap2.wrapT = THREE.RepeatWrapping; // width
  normalMap2.repeat.set(normalMap2_heigth, normalMap2_width);
  var displacementMap2 = new THREE.TextureLoader().load("../house/textures/roof2/roof_disp.jpg");
  displacementMap2.wrapS = THREE.RepeatWrapping; // height
  displacementMap2.wrapT = THREE.RepeatWrapping; // width
  displacementMap2.repeat.set(displacementMap2_heigth, displacementMap2_width);
  var specMap2 = new THREE.TextureLoader().load("../house/textures/roof2/roof_spec.jpg");
  specMap2.wrapS = THREE.RepeatWrapping; // height
  specMap2.wrapT = THREE.RepeatWrapping; // width
  specMap2.repeat.set(specMap_heigth2, specMap_width2);
  var DoorColor = new THREE.TextureLoader().load(
    "../house/textures/door/wall_color.jpg"
  );
  var DoorNormal = new THREE.TextureLoader().load(
    "../house/textures/door/wall_normal.jpg"
  );

  var DoorSpec = new THREE.TextureLoader().load(
    "../house/textures/door/wall_spec.jpg"
  );
  var DoorBorderNormal = new THREE.TextureLoader().load("../house/textures/door/normal.jpg");
  var DoorBorderAo = new THREE.TextureLoader().load("../house/textures/door/ao.jpg");
  var terrain = new THREE.TextureLoader().load("../house/textures/ground/grass_diffuse.jpg");
  terrain.wrapS = THREE.RepeatWrapping; // height
  terrain.wrapT = THREE.RepeatWrapping; // width
  terrain.repeat.set(terrainTextureHeight, terrainTextureWidth);
  var terrain_normal = new THREE.TextureLoader().load("../house/textures/ground/grass_normal.jpg");
  terrain_normal.wrapS = THREE.RepeatWrapping; // height
  terrain_normal.wrapT = THREE.RepeatWrapping; // width
  terrain_normal.repeat.set(terrainTextureHeight, terrainTextureWidth);
  var door_border_color = new THREE.TextureLoader().load("../house/textures/door/door_border_color.jpg");
  const grass_texture = new THREE.MeshPhongMaterial({
    map: terrain,
    skinning: true,
    normalMap: terrain_normal,
    normalScale: new THREE.Vector2(1, 1),
    side: THREE.DoubleSide,
  });
  const wall2BackFront = new THREE.MeshPhongMaterial({
    color: hexcolor,
    skinning: true,
    normalMap: FrontbackwallsMaterial_normal2,
    normalScale: new THREE.Vector2(2, 2),
    side: THREE.FrontSide,
    shininess: 200,
    //wireframe : true
  });
  const wall2Rightleft = new THREE.MeshPhongMaterial({
    color: hexcolor,
    skinning: true,
    normalMap: RightleftMaterial_normal2,
    normalScale: new THREE.Vector2(2, 2),
    side: THREE.FrontSide,
    shininess: 200,
  });
  var FrontbackwallsMaterial = new THREE.MeshPhongMaterial({
    map: FrontbackWallsMaterial_color,
    color: hexcolor,
    shininess: 200,
    skinning: true,
    normalMap: FrontbackwallsMaterial_normal,
    normalScale: new THREE.Vector2(2, 1),
    side: THREE.FrontSide
  });
  var RightleftwallsMaterial = new THREE.MeshPhongMaterial({
    map: RightleftWallsMaterial_color,
    color: hexcolor,
    shininess: 200,
    skinning: true,
    normalMap: RightleftMaterial_normal,
    normalScale: new THREE.Vector2(2, 1),
    side: THREE.FrontSide
  });

  const roofMaterial = new THREE.MeshPhongMaterial({
    color: roofhexColor,
    skinning: true,
    side: THREE.DoubleSide,
    normalMap: normalMap,
    displacementMap: displacementMap,
    displacementScale: 0.03,
    normalScale: new THREE.Vector2(1, 1),
    shininess: 100,
    // wireframe : true,
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
    color : WalkindoorHexColor,
    skinning : true
  });
  new THREE.GLTFLoader(loadingManager).load("../house/allDoorsModel/scene.glb", function(object) {
    model = object.scene.children[0];
    model.traverse((n) => {
      if (n.isMesh) {
        n.castShadow = true;
        n.receiveShadow = true;
        if (n.material.map) n.material.map.anisotropy = 1;
        model.getObjectByName("wall_front").material = <?php echo ($row['wallstyle'] == 1) ? 'FrontbackwallsMaterial' : 'wall2BackFront' ?>;
        model.getObjectByName("wall_back").material = <?php echo ($row['wallstyle'] == 1) ? 'FrontbackwallsMaterial' : 'wall2BackFront' ?>;
        model.getObjectByName("wall_left").material = <?php echo ($row['wallstyle'] == 1) ? 'RightleftwallsMaterial' : 'wall2Rightleft' ?>;
        model.getObjectByName("wall_right").material = <?php echo ($row['wallstyle'] == 1) ? 'RightleftwallsMaterial' : 'wall2Rightleft' ?>;

        model.getObjectByName("roof_high").material =  <?php echo ($row['roofstyle'] == 1) ? 'roofMaterial' : 'roofMaterial2' ?>;
        model.getObjectByName("roof_border").material = roof_border;
        model.getObjectByName('base').visible = false;
        model.getObjectByName('grass').visible = false;
        model.getObjectByName('back_door_border1').material = DoorBorderMaterial;
        model.getObjectByName('front_door_border1').material = DoorBorderMaterial;
        model.getObjectByName('right_door_border1').material = DoorBorderMaterial;
        model.getObjectByName('left_door_border1').material = DoorBorderMaterial;
        model.getObjectByName('back_door_border2').material = DoorBorderMaterial;
        model.getObjectByName('front_door_border2').material = DoorBorderMaterial;
        model.getObjectByName('right_door_border2').material = DoorBorderMaterial;
        model.getObjectByName('left_door_border2').material = DoorBorderMaterial;
        model.getObjectByName('back_door_border3').material = DoorBorderMaterial;
        model.getObjectByName('front_door_border3').material = DoorBorderMaterial;
        model.getObjectByName('right_door_border3').material = DoorBorderMaterial;
        model.getObjectByName('left_door_border3').material = DoorBorderMaterial;
        model.getObjectByName('back_door_border4').material = DoorBorderMaterial;
        model.getObjectByName('front_door_border4').material = DoorBorderMaterial;
        model.getObjectByName('right_door_border4').material = DoorBorderMaterial;
        model.getObjectByName('left_door_border4').material = DoorBorderMaterial;
        model.getObjectByName('back_door1').material = DoorMaterial;
        model.getObjectByName('front_door1').material = DoorMaterial;
        model.getObjectByName('right_door1').material = DoorMaterial;
        model.getObjectByName('left_door1').material = DoorMaterial;
        model.getObjectByName('back_door2').material = DoorMaterial;
        model.getObjectByName('front_door2').material = DoorMaterial;
        model.getObjectByName('right_door2').material = DoorMaterial;
        model.getObjectByName('left_door2').material = DoorMaterial;
        model.getObjectByName('back_door3').material = DoorMaterial;
        model.getObjectByName('front_door3').material = DoorMaterial;
        model.getObjectByName('right_door3').material = DoorMaterial;
        model.getObjectByName('left_door3').material = DoorMaterial;
        model.getObjectByName('back_door4').material = DoorMaterial;
        model.getObjectByName('front_door4').material = DoorMaterial;
        model.getObjectByName('right_door4').material = DoorMaterial;
        model.getObjectByName('left_door4').material = DoorMaterial;
        model.getObjectByName('left_wdoor1').material = froontWalkinDoor;
        model.getObjectByName('left_wdoor2').material = froontWalkinDoor;
        model.getObjectByName('left_wdoor3').material = froontWalkinDoor;
        model.getObjectByName('left_wdoor4').material = froontWalkinDoor;
        model.getObjectByName('right_wdoor1').material = froontWalkinDoor;
        model.getObjectByName('right_wdoor2').material = froontWalkinDoor;
        model.getObjectByName('right_wdoor3').material = froontWalkinDoor;
        model.getObjectByName('right_wdoor4').material = froontWalkinDoor;
        model.getObjectByName('back_wdoor1').material = froontWalkinDoor;
        model.getObjectByName('back_wdoor2').material = froontWalkinDoor;
        model.getObjectByName('back_wdoor3').material = froontWalkinDoor;
        model.getObjectByName('back_wdoor4').material = froontWalkinDoor;
        model.getObjectByName('front_wdoor1').material = froontWalkinDoor;
        model.getObjectByName('front_wdoor2').material = froontWalkinDoor;
        model.getObjectByName('front_wdoor3').material = froontWalkinDoor;
        model.getObjectByName('front_wdoor4').material = froontWalkinDoor;
        model.getObjectByName("front_door1").visible = <?php echo ($row['frontSectionaDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_door_border1').visible = <?php echo ($row['frontSectionaDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("front_door2").visible = <?php echo ($row['frontSectionaDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_door_border2').visible = <?php echo ($row['frontSectionaDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("front_door3").visible = <?php echo ($row['frontSectionaDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_door_border3').visible = <?php echo ($row['frontSectionaDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("front_door4").visible = <?php echo ($row['frontSectionaDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_door_border4').visible = <?php echo ($row['frontSectionaDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("back_door1").visible = <?php echo ($row['BackSectionalDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_door_border1').visible = <?php echo ($row['BackSectionalDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("back_door2").visible = <?php echo ($row['BackSectionalDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_door_border2').visible = <?php echo ($row['BackSectionalDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("back_door3").visible = <?php echo ($row['BackSectionalDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_door_border3').visible = <?php echo ($row['BackSectionalDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("back_door4").visible = <?php echo ($row['BackSectionalDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_door_border4').visible = <?php echo ($row['BackSectionalDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("left_door1").visible = <?php echo ($row['leftSectionalDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_door_border1').visible = <?php echo ($row['leftSectionalDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("left_door2").visible = <?php echo ($row['leftSectionalDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_door_border2').visible = <?php echo ($row['leftSectionalDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("left_door3").visible = <?php echo ($row['leftSectionalDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_door_border3').visible = <?php echo ($row['leftSectionalDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("left_door4").visible = <?php echo ($row['leftSectionalDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_door_border4').visible = <?php echo ($row['leftSectionalDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("right_door1").visible = <?php echo ($row['rightSectionalDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_door_border1').visible = <?php echo ($row['rightSectionalDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("right_door2").visible = <?php echo ($row['rightSectionalDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_door_border2').visible = <?php echo ($row['rightSectionalDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("right_door3").visible = <?php echo ($row['rightSectionalDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_door_border3').visible = <?php echo ($row['rightSectionalDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName("right_door4").visible = <?php echo ($row['rightSectionalDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_door_border4').visible = <?php echo ($row['rightSectionalDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_wdoor1_grp').visible = <?php echo ($row['rightWalkingDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_wdoor2_grp').visible = <?php echo ($row['rightWalkingDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_wdoor3_grp').visible = <?php echo ($row['rightWalkingDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('right_wdoor4_grp').visible = <?php echo ($row['rightWalkingDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        
        model.getObjectByName('front_wdoor1_grp').visible = <?php echo ($row['frontWalkingDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_wdoor2_grp').visible = <?php echo ($row['frontWalkingDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_wdoor3_grp').visible = <?php echo ($row['frontWalkingDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('front_wdoor4_grp').visible = <?php echo ($row['frontWalkingDoor4is'] == 'disabled') ? 'false' : 'true' ?>;
        
        model.getObjectByName('back_wdoor1_grp').visible = <?php echo ($row['BackWalkingDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_wdoor2_grp').visible = <?php echo ($row['BackWalkingDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_wdoor3_grp').visible = <?php echo ($row['BackWalkingDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('back_wdoor4_grp').visible = <?php echo ($row['BackWalkingDoor4is'] == 'disabled') ? 'false' : 'true' ?>;

        model.getObjectByName('left_wdoor1_grp').visible = <?php echo ($row['leftWalkingDoor1is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_wdoor2_grp').visible = <?php echo ($row['leftWalkingDoor2is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_wdoor3_grp').visible = <?php echo ($row['leftWalkingDoor3is'] == 'disabled') ? 'false' : 'true' ?>;
        model.getObjectByName('left_wdoor4_grp').visible = <?php echo ($row['leftWalkingDoor4is'] == 'disabled') ? 'false' : 'true' ?>;

      }
      model.getObjectByName("house_slope_right").position.y = <?php echo $row['Gutter'] ?>;
      model.getObjectByName("house_topfront_right").position.y = <?php echo $row['Gutter'] ?>;
      model.getObjectByName("house_topback_right").position.y = <?php echo $row['Gutter'] ?>;
      model.getObjectByName("house_slope_left").position.y = <?php echo $row['Gutter'] ?>;
      model.getObjectByName("house_topfront_left").position.y = <?php echo $row['Gutter'] ?>;
      model.getObjectByName("house_topback_left").position.y = <?php echo $row['Gutter'] ?>;
      model.getObjectByName("house_base_right").position.x =  <?php echo $row['length'] ?> / 2;
      model.getObjectByName("house_base_left").position.x = - <?php echo $row['length'] ?> / 2;
      model.getObjectByName("house_basefront_right").position.z =  <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_basefront_left").position.z =  <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_basefront").position.z =  <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_baseback_right").position.z = - <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_baseback_left").position.z = - <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_baseback").position.z = - <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_top_right").position.y = Math.tan(<?php echo $row['Slope'] ?> * Math.PI / 180) * <?php echo $row['width'] ?> / 2;
      model.getObjectByName("house_top_left").position.y = Math.tan(<?php echo $row['Slope'] ?> * Math.PI / 180) * <?php echo $row['width'] ?> / 2;
      model.getObjectByName('left_door_topfront1').position.y = <?php echo $row['LeftSectionalDoorHeight1'] ?>;
      model.getObjectByName('left_door_top_back1').position.y = <?php echo $row['LeftSectionalDoorHeight1'] ?>;
      model.getObjectByName('left_door_baseback1').position.z = -(<?php echo $row['LeftSectionalDoorWidth1'] ?> / 2);
      model.getObjectByName('left_door_basefront1').position.z = <?php echo $row['LeftSectionalDoorWidth1'] ?> / 2;
      model.getObjectByName('left_door_topfront2').position.y = <?php echo $row['LeftSectionalDoorHeight2'] ?>;
      model.getObjectByName('left_door_top_back2').position.y = <?php echo $row['LeftSectionalDoorHeight2'] ?>;
      model.getObjectByName('left_door_baseback2').position.z = -(<?php echo $row['LeftSectionalDoorWidth2'] ?> / 2);
      model.getObjectByName('left_door_basefront2').position.z = <?php echo $row['LeftSectionalDoorWidth2'] ?> / 2;
      model.getObjectByName('left_door_topfront3').position.y = <?php echo $row['LeftSectionalDoorHeight3'] ?>;
      model.getObjectByName('left_door_top_back3').position.y = <?php echo $row['LeftSectionalDoorHeight3'] ?>;
      model.getObjectByName('left_door_baseback3').position.z = -(<?php echo $row['LeftSectionalDoorWidth3'] ?> / 2);
      model.getObjectByName('left_door_basefront3').position.z = <?php echo $row['LeftSectionalDoorWidth3'] ?> / 2;
      model.getObjectByName('left_door_topfront4').position.y = <?php echo $row['LeftSectionalDoorHeight4'] ?>;
      model.getObjectByName('left_door_top_back4').position.y = <?php echo $row['LeftSectionalDoorHeight4'] ?>;
      model.getObjectByName('left_door_baseback4').position.z = -(<?php echo $row['LeftSectionalDoorWidth4'] ?> / 2);
      model.getObjectByName('left_door_basefront4').position.z = <?php echo $row['LeftSectionalDoorWidth4'] ?> / 2;
      model.getObjectByName('right_door_baseback1').position.z = -(<?php echo $row['RightSectionalDoorWidth1'] ?> / 2);
      model.getObjectByName('right_door_basefront1').position.z = <?php echo $row['RightSectionalDoorWidth1'] ?> / 2;
      model.getObjectByName('right_door_topfront1').position.y = <?php echo $row['RightSectionalDoorHeight1'] ?>;
      model.getObjectByName('right_door_top_back1').position.y = <?php echo $row['RightSectionalDoorHeight1'] ?>;
      model.getObjectByName('right_door_baseback2').position.z = -(<?php echo $row['RightSectionalDoorWidth2'] ?> / 2);
      model.getObjectByName('right_door_basefront2').position.z = <?php echo $row['RightSectionalDoorWidth2'] ?> / 2;
      model.getObjectByName('right_door_topfront2').position.y = <?php echo $row['RightSectionalDoorHeight2'] ?>;
      model.getObjectByName('right_door_top_back2').position.y = <?php echo $row['RightSectionalDoorHeight2'] ?>;
      model.getObjectByName('right_door_baseback3').position.z = -(<?php echo $row['RightSectionalDoorWidth3'] ?> / 2);
      model.getObjectByName('right_door_basefront3').position.z = <?php echo $row['RightSectionalDoorWidth3'] ?> / 2;
      model.getObjectByName('right_door_topfront3').position.y = <?php echo $row['RightSectionalDoorHeight3'] ?>;
      model.getObjectByName('right_door_top_back3').position.y = <?php echo $row['RightSectionalDoorHeight3'] ?>;
      model.getObjectByName('right_door_baseback4').position.z = -(<?php echo $row['RightSectionalDoorWidth4'] ?> / 2);
      model.getObjectByName('right_door_basefront4').position.z = <?php echo $row['RightSectionalDoorWidth4'] ?> / 2;
      model.getObjectByName('right_door_topfront4').position.y = <?php echo $row['RightSectionalDoorHeight4'] ?>;
      model.getObjectByName('right_door_top_back4').position.y = <?php echo $row['RightSectionalDoorHeight4'] ?>;
      model.getObjectByName('front_door_topfront1').position.y = <?php echo $row['FrontSectionalDoorHeight1'] ?>;
      model.getObjectByName('front_door_top_back1').position.y = <?php echo $row['FrontSectionalDoorHeight1'] ?>;
      model.getObjectByName('front_door_baseback1').position.z = -(<?php echo $row['FrontSectionalDoorWidth1'] ?> / 2);
      model.getObjectByName('front_door_basefront1').position.z = <?php echo $row['FrontSectionalDoorWidth1'] ?> / 2;
      model.getObjectByName('front_door_topfront2').position.y = <?php echo $row['FrontSectionalDoorHeight2'] ?>;
      model.getObjectByName('front_door_top_back2').position.y = <?php echo $row['FrontSectionalDoorHeight2'] ?>;
      model.getObjectByName('front_door_baseback2').position.z = -(<?php echo $row['FrontSectionalDoorWidth2'] ?> / 2);
      model.getObjectByName('front_door_basefront2').position.z = <?php echo $row['FrontSectionalDoorWidth2'] ?> / 2;
      model.getObjectByName('front_door_topfront3').position.y = <?php echo $row['FrontSectionalDoorHeight3'] ?>;
      model.getObjectByName('front_door_top_back3').position.y = <?php echo $row['FrontSectionalDoorHeight3'] ?>;
      model.getObjectByName('front_door_baseback3').position.z = -(<?php echo $row['FrontSectionalDoorWidth3'] ?> / 2);
      model.getObjectByName('front_door_basefront3').position.z = <?php echo $row['FrontSectionalDoorWidth3'] ?> / 2;
      model.getObjectByName('front_door_topfront4').position.y = <?php echo $row['FrontSectionalDoorHeight4'] ?>;
      model.getObjectByName('front_door_top_back4').position.y = <?php echo $row['FrontSectionalDoorHeight4'] ?>;
      model.getObjectByName('front_door_baseback4').position.z = -(<?php echo $row['FrontSectionalDoorWidth4'] ?> / 2);
      model.getObjectByName('front_door_basefront4').position.z = <?php echo $row['FrontSectionalDoorWidth4'] ?> / 2;
      model.getObjectByName('back_door_baseback1').position.z = -(<?php echo $row['BackSectionalDoorWidth1'] ?> / 2);
      model.getObjectByName('back_door_basefront1').position.z = <?php echo $row['BackSectionalDoorWidth1'] ?> / 2;
      model.getObjectByName('back_door_topfront1').position.y = <?php echo $row['BackSectionalDoorHeight1'] ?>;
      model.getObjectByName('back_door_top_back1').position.y = <?php echo $row['BackSectionalDoorHeight1'] ?>;
      model.getObjectByName('back_door_baseback2').position.z = -(<?php echo $row['BackSectionalDoorWidth2'] ?> / 2);
      model.getObjectByName('back_door_basefront2').position.z = <?php echo $row['BackSectionalDoorWidth2'] ?> / 2;
      model.getObjectByName('back_door_topfront2').position.y = <?php echo $row['BackSectionalDoorHeight2'] ?>;
      model.getObjectByName('back_door_top_back2').position.y = <?php echo $row['BackSectionalDoorHeight2'] ?>;
      model.getObjectByName('back_door_baseback3').position.z = -(<?php echo $row['BackSectionalDoorWidth3'] ?> / 2);
      model.getObjectByName('back_door_basefront3').position.z = <?php echo $row['BackSectionalDoorWidth3'] ?> / 2;
      model.getObjectByName('back_door_topfront3').position.y = <?php echo $row['BackSectionalDoorHeight3'] ?>;
      model.getObjectByName('back_door_top_back3').position.y = <?php echo $row['BackSectionalDoorHeight3'] ?>;
      model.getObjectByName('back_door_baseback4').position.z = -(<?php echo $row['BackSectionalDoorWidth4'] ?> / 2);
      model.getObjectByName('back_door_basefront4').position.z = <?php echo $row['BackSectionalDoorWidth4'] ?> / 2;
      model.getObjectByName('back_door_topfront4').position.y = <?php echo $row['BackSectionalDoorHeight4'] ?>;
      model.getObjectByName('back_door_top_back4').position.y = <?php echo $row['BackSectionalDoorHeight4'] ?>;
      model.getObjectByName("front_door_base1").position.z = <?php echo $row['FrontDoorPosition1'] <= 0 ? $row['FrontDoorPosition1'] * -1 : $row['FrontDoorPosition1']* -1  ?>;
      model.getObjectByName("front_door_base2").position.z = <?php echo $row['FrontDoorPosition2'] <= 0 ? $row['FrontDoorPosition2'] * -1 : $row['FrontDoorPosition2']* -1 ?>;
      model.getObjectByName("front_door_base3").position.z = <?php echo $row['FrontDoorPosition3'] <= 0 ? $row['FrontDoorPosition3'] * -1 : $row['FrontDoorPosition3']* -1 ?>;
      model.getObjectByName("front_door_base4").position.z = <?php echo $row['FrontDoorPosition4'] <= 0 ? $row['FrontDoorPosition4'] * -1 : $row['FrontDoorPosition4']* -1 ?>;

      model.getObjectByName("back_door_base1").position.z = <?php echo $row['BackDoorPosition1'] ?>;
      model.getObjectByName("back_door_base2").position.z = <?php echo $row['BackDoorPosition2'] ?>;
      model.getObjectByName("back_door_base3").position.z = <?php echo $row['BackDoorPosition3'] ?>;
      model.getObjectByName("back_door_base4").position.z = <?php echo $row['BackDoorPosition4'] ?>;

      model.getObjectByName("left_door_base1").position.x = <?php echo $row['LeftDoorPosition1'] ?>;
      model.getObjectByName("left_door_base2").position.x = <?php echo $row['LeftDoorPosition2'] ?>;
      model.getObjectByName("left_door_base3").position.x = <?php echo $row['LeftDoorPosition3'] ?>;
      model.getObjectByName("left_door_base4").position.x = <?php echo $row['LeftDoorPosition4'] ?>;

      model.getObjectByName("right_door_base1").position.x = <?php echo $row['RightDoorPosition1'] ?>;
      model.getObjectByName("right_door_base2").position.x = <?php echo $row['RightDoorPosition2'] ?>;
      model.getObjectByName("right_door_base3").position.x = <?php echo $row['RightDoorPosition3'] ?>;
      model.getObjectByName("right_door_base4").position.x = <?php echo $row['RightDoorPosition4'] ?>;

      model.getObjectByName("back_wdoor_base1").position.z = <?php echo $row['BackWalkingDoor1position'] ?>;
      model.getObjectByName("back_wdoor_base2").position.z = <?php echo $row['BackWalkingDoor2position'] ?>;
      model.getObjectByName("back_wdoor_base3").position.z = <?php echo $row['BackWalkingDoor3position'] ?>;
      model.getObjectByName("back_wdoor_base4").position.z = <?php echo $row['BackWalkingDoor4position'] ?>;
      model.getObjectByName("front_wdoor_base1").position.z = -(<?php echo $row['frontWalkingDoor1position'] ?>);
      model.getObjectByName("front_wdoor_base2").position.z = -(<?php echo $row['frontWalkingDoor2position'] ?>);
      model.getObjectByName("front_wdoor_base3").position.z = -(<?php echo $row['frontWalkingDoor3position'] ?>);
      model.getObjectByName("front_wdoor_base4").position.z = -(<?php echo $row['frontWalkingDoor4position'] ?>);
      model.getObjectByName("left_Wdoor_base1").position.x = <?php echo $row['leftWalkingDoor1position'] ?>;
      model.getObjectByName("left_Wdoor_base2").position.x = <?php echo $row['leftWalkingDoor2position'] ?>;
      model.getObjectByName("left_Wdoor_base3").position.x = <?php echo $row['leftWalkingDoor3position'] ?>;
      model.getObjectByName("left_Wdoor_base4").position.x = <?php echo $row['leftWalkingDoor4position'] ?>;
      model.getObjectByName("right_wdoor_base1").position.x = -(<?php echo $row['rightWalkingDoor1position'] ?>);
      model.getObjectByName("right_wdoor_base2").position.x = -(<?php echo $row['rightWalkingDoor2position'] ?>);
      model.getObjectByName("right_wdoor_base3").position.x = -(<?php echo $row['rightWalkingDoor3position'] ?>);
      model.getObjectByName("right_wdoor_base4").position.x = -(<?php echo $row['rightWalkingDoor4position'] ?>);
    });
    scene.add(model);
    animate();
  });
}
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
    </script>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    </script>
    <?php
        }
    }
?>
</body>

</html>