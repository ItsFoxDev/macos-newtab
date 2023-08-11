function gid(i){return document.getElementById(i)}
p=0;
function folder(f){
  var c = document.createElement('folder');
  c.innerHTML='<h1>'+f+'</h1>'
  var t = document.createElement('tiles');
  p++;
  t.id=p
  c.appendChild(t);
  document.body.appendChild(c);
  var a=t;
  console.log('📂 Loaded folder '+f)
}
function tile(n,u,i){
  var t = document.createElement('a');
  t.classList.add('tile');
  t.href=u;
  t.innerHTML='<img src="'+i+'"><span>'+n+'</span>';
  gid(p).appendChild(t);
}