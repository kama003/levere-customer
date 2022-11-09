
			import * as THREE from '/build/three.module.js';

			import { RoomEnvironment } from '/jsm/environments/RoomEnvironment.js';
			import { OrbitControls } from '/jsm/controls/OrbitControls.js';
			import { GLTFLoader } from '/jsm/loaders/GLTFLoader.js';
            //import { GUI } from './jsm/libs/dat.gui.module.js';
			import { KTX2Loader } from '/jsm/loaders/KTX2Loader.js';
			import { MeshoptDecoder } from '/jsm/libs/meshopt_decoder.module.js';

			let camera, scene, renderer, controls, essentialMaterialColor, model;

			init();
			animate();

            

			function init() {
                //const gui = new GUI();

                
                
				const container = document.getElementById('model');
				//document.container.appendChild( container );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( container.clientWidth , container.clientHeight );
				// renderer.toneMapping = THREE.ACESFilmicToneMapping;
				// renderer.toneMappingExposure = 0.2;
				// renderer.outputEncoding = THREE.sRGBEncoding;
				container.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientHeight, 1, 2000 );
				camera.position.set( -28.62, 36.41, 188.146 );
                // gui.add(camera.position, 'x', -1000, 1000).step(0.001);
                // gui.add(camera.position, 'y', -1000, 1000).step(0.001);
                // gui.add(camera.position, 'z', -1000, 1000).step(0.001);


               

				const environment = new RoomEnvironment();
				const pmremGenerator = new THREE.PMREMGenerator( renderer );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xFFFFFF );
				scene.environment = pmremGenerator.fromScene( environment ).texture;
                
                
                const panelNormalMap = new THREE.TextureLoader().load("/models/gltf/texture/qq.png");

        

                let essentialPanelMaterial = new THREE.MeshPhongMaterial({
                    color: new THREE.Color( 0xFF0505 ),
                    // normalMap: panelNormalMap,
                    // normalScale: new THREE.Vector2(0.04, -0.04),
                    transparent: true,
                    shininess: 5,
                    side: THREE.DoubleSide,
                    visible: true
                }); 

                let hpsPanelMaterial = new THREE.MeshPhongMaterial({
                    color: new THREE.Color( 0xFF0505 ),
                    normalMap: panelNormalMap,
                    normalScale: new THREE.Vector2(-0.30, -0.40),
                    transparent: true,
                    shininess: 5,
                    side: THREE.DoubleSide,
                    visible: true
                }); 

                let ultraPanelMaterial = new THREE.MeshPhongMaterial({
                    color: new THREE.Color( 0xFF0505 ),
                    // normalMap: panelNormalMap,
                    // normalScale: new THREE.Vector2(0.04, -0.04),
                    transparent: true,
                    shininess: 50,
                    side: THREE.DoubleSide,
                    visible: true
                }); 
				
                let essentialColor = document.querySelectorAll(".essential-colors");
                let hpsColor = document.querySelectorAll(".hps-colors");
                
                

				const ktx2Loader = new KTX2Loader()
					.setTranscoderPath( 'js/libs/basis/' )
					.detectSupport( renderer );
				const loader = new GLTFLoader().setPath( '/models/gltf/panel_1/' );
				loader.setKTX2Loader( ktx2Loader );
				loader.setMeshoptDecoder( MeshoptDecoder );
				loader.load( 'scene.glb', function ( gltf ) {
                    model = gltf.scene;
                    model.traverse(node => {
                    if (!node.isMesh) {
                        return;
                    }
                    model.getObjectByName('polySurface2').material = essentialPanelMaterial;
                    essentialColor.forEach(function(elem) {
                        elem.addEventListener("click", function() {
                            //elem.preventDefault();
                            essentialPanelMaterial.color.set(new THREE.Color(elem.style.backgroundColor));
                            model.getObjectByName('polySurface2').material = essentialPanelMaterial;
                        });
                    });
                    hpsColor.forEach(function(elem) {
                        elem.addEventListener("click", function() {
                            //elem.preventDefault();
                            hpsPanelMaterial.color.set(new THREE.Color(elem.style.backgroundColor));
                            model.getObjectByName('polySurface2').material = hpsPanelMaterial;
                        });
                    });
                    
                });

                    gltf.scene.position.set(0,-78.73, 18.815);
                    gltf.scene.scale.set(10,10,10);
                    scene.add( gltf.scene );
                    animate();
					
				} );
                

				controls = new OrbitControls( camera, renderer.domElement );
				//controls.addEventListener( 'change', controlChange ); // use if there is no animation loop
				//controls.minDistance = 400;
				//controls.maxDistance = 1000;
				//controls.target.set( 6.753396807469432, 72.63100435622614, -16.746504722552192);
                // gui.add(controls.target, 'x', -100, 100).step(0.001);
                // gui.add(controls.target, 'y', -100, 100).step(0.001);
                // gui.add(controls.target, 'z', -100, 100).step(0.001);
                //controls.autoRotate = true;
				controls.update();

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				animate();

			}

			//

			// function render() {
            //     controls.autoRotate = true;
            //     console.log(controls.target);
			// 	renderer.render( scene, camera );

			// }

            // function controlChange(){
            //     controls.update();
            //     console.log(controls.target);
            // }

            function animate() {

                requestAnimationFrame( animate );

                // required if controls.enableDamping or controls.autoRotate are set to true
                controls.update();

                //console.log(controls);
                renderer.render( scene, camera );

            }