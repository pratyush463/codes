//    #
//   ##
//  ###
// ####

const Print = (size) => {
  let space = " ";
  let star = "*";
  for (let i = 1; i <= size; i++) {
    console.log(space.repeat(size - i) + star.repeat(i));
  }
};
Print(5);
