function processData(input) {
  input = input.split('\n');
  for(var i=1;i<input.length;i++){
    for(var j=0;j<input[i].length;j++){
      var str = input[i];
      if(str[j] !== str[str.length - j - 1]){
        if(str[j] === str[str.length-j -2] && str[j+1] === str[str.length-j-3]){
          console.log(str.length - j - 1);
          break;
        }else{
          console.log(j);
          break;
        }
      }
      if(j === str.length - 1){
        console.log(-1);
        break;
      }
    }
  }
}

// processData("3\n\
// aaab\n\
// baa\n\
// aaa")

// processData("10\n\
// quyjjdcgsvvsgcdjjyq\n\
// hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh\n\
// fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf\n\
// bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb\n\
// fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf\n\
// mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm\n\
// tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt\n\
// lhrxvssvxrhl\n\
// prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp\n\
// kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk")

// processData("10\nhgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh")
