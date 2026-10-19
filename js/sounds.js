'use strict';
// Sound is on by default. Browsers unlock audio after the first user gesture.
window.ToolsWizSound = (() => {
 let context;
 function unlock(){
  try{
   const Engine=window.AudioContext||window.webkitAudioContext;
   if(!Engine)return;
   context ||= new Engine();
   if(context.state==='suspended')context.resume().catch(()=>{});
  }catch(error){/* Sound never blocks the tools. */}
 }
 function play(kind='open'){
  if(!context||context.state!=='running')return;
  try{
   const frequencies=kind==='hover'?[440]:[392,523.25,783.99];
   frequencies.forEach((frequency,index)=>{
    const oscillator=context.createOscillator(),volume=context.createGain();
    const start=context.currentTime+index*.045;
    oscillator.type='sine';oscillator.frequency.setValueAtTime(frequency,start);
    volume.gain.setValueAtTime(0,start);
    volume.gain.linearRampToValueAtTime(kind==='hover'?.015:.035,start+.008);
    volume.gain.exponentialRampToValueAtTime(.0001,start+.115);
    oscillator.connect(volume);volume.connect(context.destination);
    oscillator.start(start);oscillator.stop(start+.13);
   });
  }catch(error){/* Optional enhancement. */}
 }
 document.addEventListener('pointerdown',unlock,{capture:true});
 document.addEventListener('keydown',unlock,{capture:true});
 return {play,unlock};
})();
