(function(){
if(document.getElementById('_ab_ov'))return;
var h=location.host;

var style=document.createElement('style');
style.textContent=`
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap');
@keyframes _ab_fade{from{opacity:0;}to{opacity:1;}}
@keyframes _ab_pop{from{opacity:0;transform:scale(0.85);}to{opacity:1;transform:scale(1);}}
@keyframes _ab_scan{0%{transform:translateY(-100%);}100%{transform:translateY(400px);}}
@keyframes _ab_pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0.5);}50%{box-shadow:0 0 0 8px rgba(220,38,38,0);}}
@keyframes _ab_glow{0%,100%{border-color:rgba(220,38,38,0.4);}50%{border-color:rgba(220,38,38,0.8);}}

#_ab_ov{
  position:fixed;inset:0;z-index:2147483647;
  background:rgba(0,0,0,0.6);
  backdrop-filter:blur(8px);
  -webkit-backdrop-filter:blur(8px);
  display:flex;align-items:center;justify-content:center;
  animation:_ab_fade .25s ease;
  font-family:'Rajdhani',sans-serif;
}

#_ab_box{
  background:linear-gradient(145deg,#0c0c14,#12121e);
  border:1px solid rgba(220,38,38,0.35);
  border-radius:20px;
  width:300px;
  padding:24px 20px 20px;
  position:relative;
  overflow:hidden;
  animation:_ab_pop .3s cubic-bezier(0.34,1.4,0.64,1);
  box-shadow:0 0 40px rgba(220,38,38,0.15),0 20px 60px rgba(0,0,0,0.6);
  animation:_ab_glow 3s infinite;
}

#_ab_box::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(220,38,38,0.8),transparent);
}

#_ab_scan_line{
  position:absolute;left:0;right:0;height:60px;
  background:linear-gradient(180deg,transparent,rgba(220,38,38,0.04),transparent);
  animation:_ab_scan 2.5s linear infinite;
  pointer-events:none;
}

#_ab_close{
  position:absolute;top:12px;right:14px;
  background:none;border:none;color:rgba(255,255,255,0.25);
  font-size:18px;cursor:pointer;line-height:1;padding:2px 6px;
  font-family:'Rajdhani',sans-serif;
  transition:color .2s;
}
#_ab_close:hover{color:rgba(255,255,255,0.6);}

#_ab_logo_wrap{
  display:flex;flex-direction:column;align-items:center;
  margin-bottom:14px;
}

#_ab_logo{
  width:60px;height:60px;border-radius:14px;
  overflow:hidden;background:#0a0a0a;
  border:1px solid rgba(220,38,38,0.3);
  box-shadow:0 0 20px rgba(220,38,38,0.2);
  animation:_ab_pulse 2.5s infinite;
  margin-bottom:10px;
}
#_ab_logo img{width:100%;height:100%;object-fit:cover;display:block;}

#_ab_title{
  font-family:'Rajdhani',sans-serif;
  font-size:20px;font-weight:700;
  color:#fff;letter-spacing:1px;
  text-align:center;margin-bottom:2px;
}

#_ab_sub{
  font-family:'Rajdhani',sans-serif;
  font-size:11px;font-weight:600;
  color:rgba(220,38,38,0.7);
  letter-spacing:3px;text-transform:uppercase;
  text-align:center;
}

#_ab_divider{
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent);
  margin:14px 0;
}

#_ab_inp_lbl{
  font-family:'Rajdhani',sans-serif;
  font-size:11px;font-weight:600;
  color:rgba(255,255,255,0.3);
  letter-spacing:2px;text-transform:uppercase;
  display:block;margin-bottom:6px;
}

#_ab_inp_wrap{position:relative;margin-bottom:8px;}

#_ab_inp{
  width:100%;
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:10px;
  padding:12px 40px 12px 14px;
  color:#fff;
  font-family:'Rajdhani',sans-serif;
  font-size:15px;font-weight:600;
  letter-spacing:3px;text-align:center;
  outline:none;
  transition:all .2s;
  box-sizing:border-box;
}
#_ab_inp:focus{
  border-color:rgba(220,38,38,0.5);
  background:rgba(220,38,38,0.04);
  box-shadow:0 0 16px rgba(220,38,38,0.08);
}
#_ab_inp::placeholder{
  color:rgba(255,255,255,0.15);
  letter-spacing:1px;font-size:12px;
}

#_ab_eye{
  position:absolute;right:12px;top:50%;transform:translateY(-50%);
  background:none;border:none;
  color:rgba(255,255,255,0.25);
  font-size:15px;cursor:pointer;padding:2px;
  transition:color .2s;
}
#_ab_eye:hover{color:rgba(255,255,255,0.6);}

#_ab_err{
  font-family:'Rajdhani',sans-serif;
  font-size:12px;font-weight:600;
  color:#ef4444;text-align:center;
  min-height:16px;margin-bottom:8px;
  letter-spacing:1px;
}

#_ab_btn{
  width:100%;
  background:linear-gradient(135deg,#dc2626,#991b1b);
  border:none;border-radius:10px;
  padding:13px;
  color:#fff;
  font-family:'Rajdhani',sans-serif;
  font-size:14px;font-weight:700;
  letter-spacing:2px;text-transform:uppercase;
  cursor:pointer;
  transition:all .2s;
  margin-bottom:14px;
  box-shadow:0 4px 16px rgba(220,38,38,0.25);
}
#_ab_btn:active{transform:scale(0.97);opacity:0.85;}

#_ab_circle_sec{
  display:none;flex-direction:column;
  align-items:center;padding:4px 0 14px;
}

#_ab_svg_outer{position:relative;width:130px;height:130px;}

#_ab_center_num{
  position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);
  text-align:center;pointer-events:none;
}

#_ab_big_num{
  font-family:'Rajdhani',sans-serif;
  font-size:44px;font-weight:700;
  color:#fff;line-height:1;display:block;
}

#_ab_sec_lbl{
  font-family:'Rajdhani',sans-serif;
  font-size:10px;font-weight:600;
  color:rgba(255,255,255,0.3);
  letter-spacing:3px;text-transform:uppercase;
  display:block;margin-top:2px;
}

#_ab_status{
  font-family:'Rajdhani',sans-serif;
  font-size:12px;font-weight:600;
  color:rgba(255,255,255,0.35);
  text-align:center;margin-top:12px;
  letter-spacing:1px;min-height:16px;
}

#_ab_tg{
  display:flex;align-items:center;justify-content:center;gap:5px;
  color:rgba(255,255,255,0.2);font-size:11px;font-weight:600;
  text-decoration:none;font-family:'Rajdhani',sans-serif;
  letter-spacing:1px;transition:color .2s;
}
#_ab_tg:hover{color:rgba(255,255,255,0.5);}
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_ab_ov';
ov.innerHTML=`
<div id="_ab_box">
  <div id="_ab_scan_line"></div>
  <button id="_ab_close">✕</button>
  <div id="_ab_logo_wrap">
    <div id="_ab_logo">
      <img src="https://raw.githubusercontent.com/robinhossainraaj/rorax-iptv-database/main/logo.png" id="_ab_img"/>
    </div>
    <div id="_ab_title">Aincrad Bypass</div>
    <div id="_ab_sub">RORAX Edition</div>
  </div>
  <div id="_ab_divider"></div>

  <div id="_ab_circle_sec">
    <div id="_ab_svg_outer">
      <svg width="130" height="130" viewBox="0 0 130 130" style="position:absolute;top:0;left:0;">
        <circle cx="65" cy="65" r="56" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="5"/>
        <circle id="_ab_arc" cx="65" cy="65" r="56" fill="none" stroke="#dc2626" stroke-width="5"
          stroke-dasharray="352" stroke-dashoffset="352"
          stroke-linecap="round" transform="rotate(-90 65 65)"/>
      </svg>
      <div id="_ab_center_num">
        <span id="_ab_big_num">50</span>
        <span id="_ab_sec_lbl">seconds</span>
      </div>
    </div>
    <div id="_ab_status">Initializing...</div>
  </div>

  <label id="_ab_inp_lbl">Access Key</label>
  <div id="_ab_inp_wrap">
    <input id="_ab_inp" type="password" placeholder="Enter key to unlock"/>
    <button id="_ab_eye" type="button">👁</button>
  </div>
  <div id="_ab_err"></div>
  <button id="_ab_btn">Unlock & Bypass</button>
  <a id="_ab_tg" href="https://t.me/rorax_x" target="_blank">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"/>
    </svg>
    t.me/rorax_x
  </a>
</div>`;
document.body.appendChild(ov);

// Logo fallback
document.getElementById('_ab_img').onerror=function(){
  document.getElementById('_ab_logo').innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:28px;">⚔️</div>';
};

var inp=document.getElementById('_ab_inp');
var btn=document.getElementById('_ab_btn');
var err=document.getElementById('_ab_err');
var eye=document.getElementById('_ab_eye');
var circleSec=document.getElementById('_ab_circle_sec');
var arc=document.getElementById('_ab_arc');
var numEl=document.getElementById('_ab_big_num');
var secLbl=document.getElementById('_ab_sec_lbl');
var statusEl=document.getElementById('_ab_status');
var inpLbl=document.getElementById('_ab_inp_lbl');
var inpWrap=document.getElementById('_ab_inp_wrap');

document.getElementById('_ab_close').onclick=function(){ov.remove();};
ov.onclick=function(e){if(e.target===ov)ov.remove();};
eye.onclick=function(){
  inp.type=inp.type==='password'?'text':'password';
  eye.textContent=inp.type==='password'?'👁':'🙈';
};

function showCircle(){
  circleSec.style.display='flex';
  btn.style.display='none';
  inpWrap.style.display='none';
  inpLbl.style.display='none';
  err.style.display='none';
  document.getElementById('_ab_close').style.display='none';
}

var finalUrl=null;

function startCountdown(total,onDone){
  var s=total;
  var circ=352;
  numEl.textContent=s;
  arc.setAttribute('stroke-dashoffset',circ);
  arc.setAttribute('stroke','#dc2626');
  var iv=setInterval(function(){
    s--;
    if(s<0){clearInterval(iv);if(onDone)onDone();return;}
    numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',circ-((circ/total)*(total-s)));
    if(s===0){
      arc.setAttribute('stroke','#22c55e');
      numEl.textContent='✓';
      secLbl.textContent='DONE';
      if(finalUrl){
        statusEl.textContent='Redirecting...';
        setTimeout(function(){ov.remove();window.location.href=finalUrl;},700);
      }
    }
  },1000);
}

function parseResp(text){
  var dest=null,url=null;
  text.trim().split('\n').forEach(function(l){
    try{
      var j=JSON.parse(l);
      if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
        var d=j.json[2][0][0];
        if(d){
          if(d.destinationLink&&typeof d.destinationLink==='string'&&d.destinationLink.length>5)dest=d.destinationLink;
          if(d.url&&typeof d.url==='string'&&d.url.length>5)url=d.url;
        }
      }
    }catch(e){}
  });
  return{dest:dest,url:url};
}

function getSession(domain,cb){
  fetch('http://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
  .then(function(r){return r.json();}).then(cb)
  .catch(function(e){statusEl.textContent='Error: '+e.message;});
}

function callNext(domain,token,stageId,progress,cb){
  var input=encodeURIComponent(JSON.stringify({"0":{"json":{"token":token,"progress":progress,"stageId":stageId}}}));
  fetch('http://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+input,{
    credentials:'include',
    headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
  }).then(function(r){return r.text()}).then(function(t){
    var r=parseResp(t);cb(r.dest,r.url);
  }).catch(function(e){statusEl.textContent='Error: '+e.message;});
}

function doRedirect(url){
  finalUrl=url;
  statusEl.textContent='Key obtained! Redirecting...';
  arc.setAttribute('stroke','#22c55e');
  numEl.textContent='✓';
  secLbl.textContent='DONE';
  setTimeout(function(){ov.remove();window.location.href=url;},800);
}

function processStages(token,stageId,current,total){
  statusEl.textContent='Stage '+current+'/'+total+'...';
  setTimeout(function(){
    callNext('rodaemotor.com',token,stageId,current+1,function(dest,url){
      if(dest&&dest.length>5){
        doRedirect(dest);return;
      }
      if(current+1<total){
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='Session lost!';return;}
          processStages(d.sessionToken,d.stageId,d.stageNumber,total);
        });
      }else{
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='No session!';return;}
          callNext('rodaemotor.com',d.sessionToken,d.stageId,d.totalStage+1,function(fd,fu){
            if(fd&&fd.length>5){doRedirect(fd);}
            else if(fu&&fu.length>5){doRedirect(fu);}
            else{statusEl.textContent='Could not get final link!';}
          });
        });
      }
    });
  },17000);
}

function runRodaemotor(){
  showCircle();
  statusEl.textContent='Connecting...';
  startCountdown(50,function(){
    if(!finalUrl)statusEl.textContent='Waiting for key...';
  });
  getSession('rodaemotor.com',function(d){
    if(!d||!d.sessionToken){statusEl.textContent='No session found!';return;}
    statusEl.textContent='Stage '+d.stageNumber+'/'+d.totalStage+' detected';
    setTimeout(function(){processStages(d.sessionToken,d.stageId,d.stageNumber,d.totalStage);},500);
  });
}

function runTarviral(){
  showCircle();
  statusEl.textContent='Please wait 50s...';
  startCountdown(50,function(){
    statusEl.textContent='Bypassing...';
    getSession('tarviral.com',function(d){
      if(!d||!d.sessionToken){statusEl.textContent='No session!';return;}
      callNext('tarviral.com',d.sessionToken,d.stageId,d.totalStage+1,function(dest){
        if(dest&&dest.length>5){doRedirect(dest);}
        else{statusEl.textContent='Bypass failed! Try again.';}
      });
    });
  });
}

btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='RORAX'){
    err.textContent='Wrong key — access denied.';
    inp.value='';
    inp.style.borderColor='rgba(239,68,68,0.6)';
    setTimeout(function(){inp.style.borderColor='';err.textContent='';},2000);
    return;
  }
  if(h.includes('rodaemotor.com')){runRodaemotor();}
  else if(h.includes('tarviral.com')){runTarviral();}
  else if(h.includes('aincradmods.com')){
    ov.remove();
    fetch('https://aincradmods.com/getkey.data',{method:'POST',credentials:'include',headers:{'content-type':'application/x-www-form-urlencoded;charset=UTF-8','accept':'*/*','origin':'https://aincradmods.com','referer':'https://aincradmods.com/getkey','x-requested-with':'mark.via.gp'}})
    .then(function(){window.location.href='https://alpharede.com/aincrad2';})
    .catch(function(){window.location.href='https://alpharede.com/aincrad2';});
  }else if(h.includes('alpharede.com')){
    ov.remove();window.location.href='https://alpharede.com/aincrad2';
  }else{
    err.textContent='Open aincradmods.com/getkey first!';
  }
};
inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
})();
