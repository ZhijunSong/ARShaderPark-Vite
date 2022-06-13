// export const newspCode=`
// let s = getSpace();
// setMaxIterations(100);
// occlusion(.8);
// metal(.0)// chalk to metal
// setStepSize(0.6);

// let newShape= shape(()=>{
//   for(let i = 0;i<3;i++){
//     //displace(n*abs(i));
//     rotateX(abs(PI*i*0.05*time));
//     boxFrame(vec3(.4)*i, .01);
// }

  
// });


// let n = noise(s);
// let scale = 1.5;
// let ray = getRayDirection();
// let soundLevel = input();
// //let soundLevel2=input();
// let nr= ray.x*ray.y*3.0*noise(scale * s + time*soundLevel);

// let hue = sin(time*.05);
// let saturation = 1;
// let value = 1.0;

// let col = hsv2rgb(vec3(hue+n*0.3, saturation, value*normal.x*10*sin(time*s*soundLevel)));

// color(col);
// displace(n);

// //color(0, normal.y, 0);
// //mandelbulb(2);
// shine(0.6);
// mixMat(.2);// 0.1>>> 0.8(white)
// blend(0.8);
// color(normal.x,normal.y,normal.z*cos(0.4)); //green yellow blue
// newShape();`;


// // export const newspCode=`
// // let i;
// // setStepSize(0.5);
// // let scale = 2.0;
// // let s = getSpace();
// // let soundLevel = input();
// // let n = 0.5*noise(scale * s +time*s*soundLevel);
// // let hue = abs(sin(time*.2));
// // let saturation = 1;
// // let value = 0.9;

// // let col = hsv2rgb(vec3(hue+(soundLevel+s.z*5)+n, saturation, value+n));
// // color(col)
// // metal(10)
// // shine(1.0)
// // rotateY(time)
// // for(i=0;i<2;i++){
// // mirrorZ(); 
// // rotateX(n)
// // rotateY(time)  
// // displace(0.05+n,0.1,0);  
// // torus(0.3+0.2*sin(time)*0.01,0.05+n); 
// // mirrorXYZ();  
// // }



// // `;

export const newspCode =`
let scale = 1.5;
let s = getSpace();
let ray = getRayDirection();
let soundLevel = input();
let n = ray.x*ray.y*3.0*noise(scale * s + time*soundLevel);
shine(0.6);
let hue = sin(time*.05);
let saturation = 1;
let value = 1.0;
let col = hsv2rgb(vec3(hue+n*0.3, saturation, value*normal.x*10*sin(time*s*soundLevel)));


blend(0.9);
color(col );
lightDirection(ray);
sphere(0.1 + n);
mixMat(0.5);

for(let i = 0; i <5
    
; i++){
displace(0.8*sin(0.1*time+i), 0.8*cos(0.1*s.x-i), 0);
sphere(.2);
}




`;