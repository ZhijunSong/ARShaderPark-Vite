
// const glshader=`
// float mandelbulb(vec3 p, float POWER){	
// int ITR = 20;
// float power=1.0+(POWER-1.0)*(0.5-cos(PI*0.5)*0.5);
// vec3 z=p;
// float dr=1.10;
// float r=0.0;
// for(int i=0;i<ITR;i++){
// r=length(z);
// if(r>3.0)break;
// float theta=acos(z.z/r);
// float phi=atan(z.y,z.x);
// dr=pow(r,power-1.0)*power*dr+1.0;
// float zr=pow(r,power);
// theta*=power;
// phi*=power;
// z=zr*vec3(theta*cos(phi*0.01),phi*sin(theta*cos(time)),cos(theta)*sin(phi)); 
// z+=p;
// }
// return 0.5*log(r)*r/dr;
// }`;
// export const spCode3 = `
// let s = getSpace();
// let soundLevel=input();
// let mandelbulb =glslSDF(${glshader});
// setMaxIterations(200);
// occlusion(.4);
// metal(1.0)
// setStepSize(.3);
// let n = 0.5*noise(s);
// mandelbulb(10);
// color(0, normal.y, 0);
// mixMat(.5);// 0.1>>> 0.8(white)
// blend(0.8);
// color(normal.x,0,normal.z*cos(0.4)) //green yellow blue
// sphere(0.5);`;

export const spCode=`
let soundLevel=input();
setStepSize(0.5);
let scale = 2.0;
let s = getSpace();
let n = 0.5*noise(scale * s +time*s*soundLevel);
let hue = abs(sin(time*.2));
let saturation = 1;
let value = 0.9;

let col = hsv2rgb(vec3(hue+(soundLevel+s.z*5)+n, saturation, value+n));
color(col)
metal(10)
shine(1.0)
rotateY(time)
for(let i=0; i<2; i++){
    mirrorZ(); 
    rotateX(n)
    rotateY(time)  
    displace(0.05+n,0.1,0);  
    torus(0.3+0.2*sin(time)*0.01,0.05+n); 
    mirrorXYZ();  
}
`;