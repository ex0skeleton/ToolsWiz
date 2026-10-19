'use strict';
// Edit this collection to add or update your tools.
const tools = [
 {name:'Share Wiz',url:'https://ex0skeleton.github.io/Share/',category:'FILE SHARING',description:'Move files. Keep your workflow moving.',icon:'<path d="M8 12h8m-3-3 3 3-3 3"/><rect x="2" y="4" width="7" height="16" rx="2"/><rect x="15" y="4" width="7" height="16" rx="2"/>'},
 {name:'QR Wiz',url:'https://ex0skeleton.github.io/QR/',category:'QR TOOLS',description:'A quick connection between a link and the real world.',icon:'<path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h2v2h-2zM20 14v4h-3v3M21 21h-1M12 3v3M3 12h4M12 10v3h3M12 18v3"/>'},
 {name:'PDF Wiz',url:'https://ex0skeleton.github.io/PDF/',category:'DOCUMENTS',description:'Your next PDF task, a little easier to handle.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5"/>'},
 {name:'Meta Wiz',url:'https://ex0skeleton.github.io/meta/',category:'METADATA',description:'Take a closer look at the details behind your images.',icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m3 17 5-5 4 4 3-3 6 6M16 8h2M17 7v2"/>'},
 {name:'PDFMerger',url:'https://ex0skeleton.github.io/PDF-Merger-Project/',category:'DOCUMENTS',description:'Separate PDFs. One tidy document.',icon:'<path d="M4 3h7v7H4zM14 3h6v7h-6zM7 10v3l5 3 5-3v-3M12 16v5m-3-3 3 3 3-3"/>'},
 {name:'ScaleWiz',url:'https://ex0skeleton.github.io/upscaler/',category:'IMAGE UPSCALING',description:'Give your images room to grow.',icon:'<path d="M14 3h7v7M21 3l-8 8M10 21H3v-7M3 21l8-8"/><path d="M9 3H5a2 2 0 0 0-2 2v4M15 21h4a2 2 0 0 0 2-2v-4"/>'}
];
const grid = document.querySelector('#tool-grid');
tools.forEach((tool,i)=>{
 const link=document.createElement('a');
 link.className='tool glass interactive';link.href=tool.url;link.target='_blank';link.rel='noopener noreferrer';
 link.setAttribute('aria-label',`Open ${tool.name} (new tab)`);
 link.innerHTML=`<div class="tool-top"><span class="tool-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${tool.icon}</svg></span><span class="tool-number">0${i+1} / 06</span></div><h2>${tool.name}</h2><p>${tool.description}</p><div class="tool-bottom"><span class="category">${tool.category}</span><span class="launch">Open tool <span class="launch-arrow" aria-hidden="true">↗</span></span></div>`;
 grid.append(link);
});
let enabled=false;
try{enabled=localStorage.getItem('toolswiz-sound')==='on';}catch(e){/* Storage may be unavailable in private browsing. */}
let audio;
function tone(type){
 if(!enabled)return;
 try{
 const AudioEngine=window.AudioContext||window.webkitAudioContext;if(!AudioEngine)return;
 audio ||= new AudioEngine();if(audio.state==='suspended')audio.resume().catch(()=>{});
 const notes=type==='launch'?[392,523.25,783.99]:type==='enable'?[523.25,659.25,783.99]:[440];
 notes.forEach((frequency,i)=>{const osc=audio.createOscillator(),gain=audio.createGain(),start=audio.currentTime+i*.055;osc.type='sine';osc.frequency.setValueAtTime(frequency,start);gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(type==='hover'?.018:.04,start+.008);gain.gain.exponentialRampToValueAtTime(.0001,start+.12);osc.connect(gain);gain.connect(audio.destination);osc.start(start);osc.stop(start+.14);});
 }catch(e){/* Audio is optional and never blocks navigation. */}
}
const sound=document.querySelector('#sound');
function updateSound(){sound.setAttribute('aria-pressed',String(enabled));document.querySelector('#sound-label').textContent=enabled?'Sound on':'Sound off';sound.title=enabled?'Disable sound effects':'Enable sound effects';}
updateSound();
sound.addEventListener('click',()=>{enabled=!enabled;try{localStorage.setItem('toolswiz-sound',enabled?'on':'off');}catch(e){}updateSound();tone('enable');document.querySelector('#announcement').textContent=enabled?'Sound effects enabled':'Sound effects disabled';});
document.querySelectorAll('.interactive').forEach(el=>{
 el.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=el.getBoundingClientRect();el.style.setProperty('--x',`${e.clientX-r.left}px`);el.style.setProperty('--y',`${e.clientY-r.top}px`);});
 el.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')tone('hover');});
 if(el.matches('.tool'))el.addEventListener('click',()=>tone('launch'));
});
