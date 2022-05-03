// export const newspCode=`
// let duration = time / 4 * PI;
// let s = getSpace();
// setStepSize(0.9);
// setMaxIterations(20);
// let n = noise(s*3.5+time*0.1) + noise(s*3.5+sin(time*.9))*.5 + 1;

// let nColor = pow(n,0.);
// let col = vec3(nColor) + normal + 0.2;

// let lumia = shape(() =>{

//     color(col)
//   	sphere(0.1);
//   	displace(0.1,0,0);
//     mixGeo((sin(time/2.0) / 2.0 + 0.5, 0.256));
//     box(0.01,0.01,0.01);
//     sphere(n * 0.5);


// });


// lumia();

// `;

export const newspCode=`
let i;
setStepSize(0.5);
let scale = 2.0;
let s = getSpace();
let soundLevel = input();
let n = 0.5*noise(scale * s +time*s*soundLevel);
let hue = abs(sin(time*.2));
let saturation = 1;
let value = 0.9;

let col = hsv2rgb(vec3(hue+(soundLevel+s.z*5)+n, saturation, value+n));
color(col)
metal(10)
shine(1.0)
rotateY(time)
for(i=0;i<2;i++){
mirrorZ(); 
rotateX(n)
rotateY(time)  
displace(0.05+n,0.1,0);  
torus(0.3+0.2*sin(time)*0.01,0.05+n); 
mirrorXYZ();  
}



`;