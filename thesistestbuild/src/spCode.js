
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

export const spCode =`
let layoutCircle = (obj, count, scale, ringStep) => {
    for(let i = 0; i < count; i++) {
      let circleStep = i/count;
      let inc = circleStep * TWO_PI;
      let x = sin(inc) * scale;
      let y = cos(inc) * scale;
      obj(x, y, circleStep, ringStep);
    }
  }
  
  let layoutRings = (obj, numRings, numItems, radius) => {
    for(let i = 1; i <= numRings; i++) {
      let ringStep = i / numRings;
      let colorStep = (i + 1) / numRings;
      layoutCircle(obj, numItems * i, radius *i, ringStep);
    }
  }
  
  let soundInput =input()
  let os = (scale) => {
    scale = scale? scale: 1;
    return abs(sin(time*soundInput * scale));  
  }
  
  let s = getSpace();
  let col = 2.0;
  occlusion(0.3);
  shine(col*2);
  metal(col*1);
  color(col+ normal.y * .1, col, col + normal.y * .9);
  
  blend(0.2);
  layoutRings((x, y, circleStep, ringStep) => {
    displace(x, y, .2);
    let inc = ((ringStep + circleStep) / 2) * TWO_PI;
    sphere(0.06*abs(sin(inc+time*0.2))+ringStep*0.01);
    displace(-1*x, -1*y, -1*.1);
  }, 3, 5, .1);
  
`;