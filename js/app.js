'use strict';
document.querySelectorAll('.tool').forEach(tool=>{
 tool.addEventListener('pointerenter',event=>{
  if(event.pointerType!=='touch')window.ToolsWizSound?.play('hover');
 });
 tool.addEventListener('click',()=>{
  window.ToolsWizSound?.unlock();
  window.ToolsWizSound?.play('open');
 });
});
