/** 
 * @param portNum - port server is listening on 
 * @param speed - interval to run the animation on (500 recommended)
 */

function runConsoleMsg(portNum, speed) {
   console.log(`Node server listening on port ${portNum}`);
   let dot = '';
   const message = `Node server listening on port ${portNum}`;
   setInterval(() => {
      console.clear();
      console.log(message + dot);
      dot.length > 2 ? dot = '' : dot += '.';
   }, speed);
}

module.exports.runConsoleMsg = runConsoleMsg