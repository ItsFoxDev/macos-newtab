gid('darkbackground').src=darkBackground;
gid('lightbackground').src=lightBackground;
if (!darkBackground){
  /* If no dark background is set, disable it */
  darkBackground.style.display="none";
}
if (hoverEffect){
  /* If hover effect is enabled */
  document.body.classList.add('he');
}
var cs=document.createElement('style');
if (darkText){
  cs.innerHTML=':root{--colour:'+textColour+'; --dark:'+darkText+'}';

} else {
  cs.innerHTML=':root{--colour:'+textColour+'; --dark:'+textColour+'}';

}
document.head.appendChild(cs);

if (!blurEffect){
  gid('bgblur').style.display='none';
}