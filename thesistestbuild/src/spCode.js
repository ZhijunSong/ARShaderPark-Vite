
export const spCode =  `
let scale = 5.0;
// let soundLevel =input();
let s = getSpace();
let n = 0.4*noise(scale * s + time/3);
let m = 0.5*noise(scale * s);
let color2 = vec3(0.8, 0.2*n, 0.6*n);
color(color2);
sphere(0.3 + n);
mixGeo(abs(cos(time)));
box(0.3, 0.2, 0.2);
blend(0.5)
torus(0.6, 0.1);

`;