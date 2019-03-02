export const generateColor = ( score: number, opacity = 1 ) => {
  let red   = 255;
  let green = 255;

  if ( score <= 15 ) {
    green = 17 * score;
  } else {
    red = 17 * (30 - score);
  }

  return `rgba(${ red }, ${ green }, 0, ${ opacity } )`;
};
