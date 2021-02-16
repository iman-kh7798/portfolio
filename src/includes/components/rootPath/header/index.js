import React, {useEffect} from 'react';
import Top_Header from "./Top_Header";
import * as THREE from 'three';
import NavHeader from "./Nav_Header";


function Header() {
    useEffect(() => {
    const convas=document.querySelector('canvas')
        function cws_threeJs_sphere( item ) {

            //Variables declaration
            let  scene, camera, sphere, sphere_2;
            const outher_sphere = true
            const inner_sphere = true
            let color = "#0094e2"
            color = color.replace(/#/g, '');
            color = parseInt(color, 16);
            let size = 1000
            let size_landscape = 750
            let size_portrait = 0
            let size_mobile = 0
            let width = document.body.offsetWidth;

            //Responsive rules
            if (width < 768) {
                size = size_mobile;
            } else if (width < 992) {
                size = size_portrait;
            } else if (width < 1200) {
                size = size_landscape;
            }


            function init() {
                const object = new THREE.WebGLRenderer({
                    canvas: item,
                    alpha: true,
                    antialias: true
                });

                object.setSize(size, size);

                scene = new THREE.Scene();
                const color2 = 0xFFFFFF;
                const intensity = 1;
                const light = new THREE.DirectionalLight(color2, intensity);
                light.position.set(-100, 200, 400);
                scene.add(light);

                camera = new THREE.PerspectiveCamera(50, size / size, 0.1, 10000);
                camera.position.z = 500;
                scene.add(camera);

                const inner_geometry = new THREE.IcosahedronGeometry(135, 2);
                const inner_settings = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.8,
                    wireframe: true
                });
                sphere = new THREE.Mesh(inner_geometry, inner_settings);
                if (inner_sphere) {
                    scene.add(sphere);
                }

                const outer_geometry = new THREE.IcosahedronGeometry(200, 1);
                const outer_settings = new THREE.MeshPhongMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.1,
                    wireframe: true
                });
                sphere_2 = new THREE.Mesh(outer_geometry, outer_settings);
                if (outher_sphere) {
                    scene.add(sphere_2);
                }
                function render(a) {
                    requestAnimationFrame(render);

                    //Inner sphere rotation
                    sphere.rotation.x += 0.002;
                    sphere.rotation.y -= 0.003;
                    sphere.rotation.z += 0.0005;

                    //Outer sphere rotation
                    sphere_2.rotation.x += 0.001;
                    sphere_2.rotation.y += 0.001;
                    sphere_2.rotation.z -= 0.001;

                    object.render(scene, camera);
                }


                requestAnimationFrame(render);
            }

            //Rotate rules

            init();
        }
        cws_threeJs_sphere(convas);
    })

    return (
        <header>
            <Top_Header/>
            <NavHeader/>
            <div id='sphere_container'>
                <canvas width="1000" height="130" style={{width: '1000px', height: '130px'}}
                        className='cws-sphere'></canvas>
            </div>
        </header>
    )
}

export default Header;