import React, {useEffect} from 'react';
import steve from '../../../statics/images/bitcoinlogobig.png'
import apple from '../../../statics/images/apple.png'
import google from './../../../statics/images/google.png'
import {TweenMax, Elastic} from "gsap";

function Banner2() {
    useEffect(() => {
        let canvas = document.getElementById("particle_canvas")
        let ctx = canvas.getContext("2d")
        let image = new Image();
        let particles = [];
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0)
            const data = ctx.getImageData(0, 0, image.width, image.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#fece42";
            let y = 0, y2 = data.height;
            for (; y < y2; y++) {
                let x = 0, x2 = data.width;
                for (; x < x2; x++) {
                    if (data.data[(x * 4 + y * 4 * data.width) + 3] > 128) {
                        let particle = {
                            x0: x,
                            y0: y,
                            x1: image.width / 2,
                            y1: image.height / 2,
                            speed: Math.random() * 6
                        };
                        TweenMax.to(particle, particle.speed, {
                            x1: particle.x0,
                            y1: particle.y0,
                            delay: y / 50,
                            ease: Elastic.easeOut
                        });
                        particles.push(particle);
                    }
                }
            }
            requestAnimationFrame(render);
        }
        let render = function () {
            requestAnimationFrame(render);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0, j = particles.length; i < j; i++) {
                let particle = particles[i];
                ctx.fillRect(particle.x1, particle.y1, 2, 2);
            }

        };
        image.src = steve

    })
    return (
        <div id='banner_2' className='flex_container fll_wdth'>
            <div id='particle_container' className='flex_container'>
                <div>
                    <canvas id='particle_canvas' width="540" height="570" style={{width: '540px', height: '570px'}}/>
                </div>
            </div>
            <div id='second_banner_text'>
                <h1>
                    در این بخش یک
                    <br/>افکت متحرک در شکل قرار دارد.
                </h1>
                <br/>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم

                    از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <br/>
                <br/>
                <div id="image_brands">
                    <img src={apple} alt='apple' style={{width: '35%'}}/>
                    <img src={google} alt='google play' style={{width: '35%', marginRight: '10%'}}/>
                </div>
            </div>
        </div>
    );
}

export default Banner2;