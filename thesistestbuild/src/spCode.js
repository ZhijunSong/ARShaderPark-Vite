
// export const spCode =  `
// let scale = 5.0;
// // let soundLevel =input();
// let s = getSpace();
// let n = 0.4*noise(scale * s + time/3);
// let m = 0.5*noise(scale * s);
// let color2 = vec3(0.8, 0.2*n, 0.6*n);
// color(color2);
// sphere(0.3 + n);
// mixGeo(abs(cos(time)));
// box(0.3, 0.2, 0.2);
// blend(0.5)
// torus(0.6, 0.1);

// `;

// export const spCode =`
// let layoutCircle = (obj, count, scale, ringStep) => {
//     for(let i = 0; i < count; i++) {
//       let circleStep = i/count;
//       let inc = circleStep * TWO_PI;
//       let x = sin(inc) * scale;
//       let y = cos(inc) * scale;
//       obj(x, y, circleStep, ringStep);
//     }
//   }
  
//   let layoutRings = (obj, numRings, numItems, radius) => {
//     for(let i = 1; i <= numRings; i++) {
//       let ringStep = i / numRings;
//       let colorStep = (i + 1) / numRings;
//       layoutCircle(obj, numItems * i, radius *i, ringStep);
//     }
//   }
  
//   let os = (scale) => {
//     scale = scale? scale: 1;
//     return abs(sin(time* scale));  
//   }
  
//   let s = getSpace();
//   let col = 2.0;
//   occlusion(0.3);
//   shine(col*2);
//   metal(col*1);
//   color(col+ normal.y * .1, col, col + normal.y * .9);
  
//   blend(0.2);
//   layoutRings((x, y, circleStep, ringStep) => {
//     displace(x, y, .2);
//     let inc = ((ringStep + circleStep) / 2) * TWO_PI;
//     sphere(0.06*abs(sin(inc+time*0.2))+ringStep*0.01);
//     displace(-1*x, -1*y, -1*.1);
//   }, 3, 5, .1);
  
// `;

export const spCode=`


let scale = 1;
let s = getSpace();
let ray = getRayDirection();


let soundVal = input();//0.0, 0.0, 1.0
let soundLevel =input();//0.2
let soundVal2= input();//10, 0, 200//gyscale
let noiseScale = input();//20, 0, 200
let newin = input();//0.02
let blendLevel = input();//0.2



let n = ray.x*ray.y*2.0*noise(scale*s+ time*soundLevel);
shine(0.1);
let hue = sin(time*0.1);
let saturation = 1;
let value = 1.0;
//let col2= hsv2rgb(vec3(hue+n*0.05, saturation, value*normal.x*sin(time*s*soundLevel)));




function gyroid(scale) {
  let s = getSpace();
  s = mult(s, scale);
  let v = mix(sin(add(s, time)), tan(add(s, mult(nsin(time), 0.2))), soundVal);
  return divide(dot(v, cos(add(vec3(s.z, s.x, s.y), time))), scale);
}
setMaxIterations(18);
setStepSize(.9);
//rotateY(mult(-1, mult(mouse.x, 2)));
//rotateX(mult(-1, mult(mouse.y, 2)));
lightDirection(getRayDirection());
let gy = gyroid(soundVal2);

let glo = max(sub(1, mult(1, dot(mult(-1, normal), getRayDirection()))), 0);
let col2 = mult(mult(gy, n), 0.1);
metal(mult(abs(n), 2));
shine(0.2);
let phase = input(0.5, 0, 10);//phase


let cosPallette = (t, brightness, contrast, oscillation, phase) => {
    return add(brightness, mult(contrast, cos(mult(mult(PI, 2), add(mult(oscillation, t), phase)))));
};




let layoutCircle = (obj, count, scale, ringStep) => {
    for(let i = 0; i < count; i++) {
      let circleStep = i/count;
      let inc = circleStep * TWO_PI;
      let x = sin(inc) * scale;
      //let y = cos(inc) * scale;
      obj(x, x, circleStep, ringStep);
    }
  }
  
  let layoutRings = (obj, numRings, numItems, radius) => {
    for(let i = 1; i <= numRings; i++) {
      let ringStep = i / numRings;
      let colorStep = (i + 1) / numRings;
      layoutCircle(obj, numItems * i, radius *i, ringStep);
    }
  }
  
  let soundInput =input(0.)
  let os = (scale) => {
    scale = scale? scale: 1;
    return abs(sin(time*soundInput * scale));  
  }
  
  let col = 2.0;
  occlusion(0.1);
  shine(col*0.1);
  metal(col*0.2);
  color(add(cosPallette(length(getSpace()), vec3(0.5), vec3(0.5), vec3(0.5, 0, 1), vec3(phase)), mult(glo, 0.3)));
  //color(col2);
  blend(blendLevel);

  layoutRings((x, y, circleStep, ringStep) => {
    displace(x,y,0.2);//insert z value
    let inc = ((ringStep + circleStep)/newin) * TWO_PI;
    //mixGeo(abs(cos(time*0.01)));

   ///torus(0.5*abs(sin(inc+time*0.5))+ringStep*0.01,0.1,0.1);
    //blend(0.5);
    sphere(0.04*abs(sin(inc+time*0.2))+ringStep*0.01);
    displace(-1*x, -1*y, -1*.1);
  },2, 5, .1);
`;