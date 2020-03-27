
var strStr = function(haystack, needle) {
  if (!needle){
    return 0;
  }
  if (haystack.length === 0){
      return -1
  }  
  
  var initialIndex = 0;
  for (let i=0, j=0; i <haystack.length; i++){
    if (haystack[i] === needle[j]){
      console.log(haystack[i],needle[j]," haystack@i and needle@j")
      initialIndex = i;
      for (let m=0, n= i; m <needle.length; n++, m++){ 
        console.log(needle[m],haystack[n], " needle@m haystack@n")
        if ( needle[m] !== haystack[n] ){
          break;
        } else if ( needle[m] === haystack[n] && m === needle.length - 1 ){
          return initialIndex;
        }
      }
    }
  }
  return -1;
};

const haystackOne = "mississippiosippiisippio";
const needleOne = "sippii";

strStr(haystackOne,needleOne);

 // possible solution 
    // if (!needle){
    //     return 0;
    // } 
    // return haystack.indexOf(needle);

    // go to the first point in the haystack.
    // if the next value matches, continue comparing
    // if it doesnt match move on, 