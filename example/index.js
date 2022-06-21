import vulcheck from 'vulcheck';

function main(){
  var pwd = '1969HoglinSteak';
  console.log(vulcheck.isSecure(pwd).toString());
}

main();
