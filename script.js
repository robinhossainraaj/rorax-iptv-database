(function(){
if(document.getElementById('_ab_ov'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent='@import url(\'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap\');@keyframes _ab_fade{from{opacity:0}to{opacity:1}}@keyframes _ab_pop{from{opacity:0;transform:scale(0.88) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes _ab_scan{0%{top:-60px}100%{top:100%}}@keyframes _ab_pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0.4)}50%{box-shadow:0 0 0 8px rgba(220,38,38,0)}}@keyframes _ab_spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}#_ab_ov{position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,0.65);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;animation:_ab_fade .25s ease;font-family:\'Rajdhani\',sans-serif;}#_ab_box{background:linear-gradient(160deg,#0d0d18 0%,#111122 100%);border:1px solid rgba(220,38,38,0.3);border-radius:22px;width:292px;padding:22px 18px 18px;position:relative;overflow:hidden;animation:_ab_pop .35s cubic-bezier(0.34,1.3,0.64,1);box-shadow:0 0 0 1px rgba(220,38,38,0.08),0 24px 64px rgba(0,0,0,0.7),0 0 40px rgba(220,38,38,0.08);}#_ab_box::before{content:\'\';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(220,38,38,0.7),transparent);}#_ab_scan_line{position:absolute;left:0;right:0;height:50px;background:linear-gradient(180deg,transparent,rgba(220,38,38,0.03),transparent);animation:_ab_scan 3s linear infinite;pointer-events:none;}#_ab_close{position:absolute;top:10px;right:12px;background:none;border:none;color:rgba(255,255,255,0.2);font-size:16px;cursor:pointer;padding:4px 6px;line-height:1;font-family:\'Rajdhani\',sans-serif;transition:color .2s;}#_ab_close:hover{color:rgba(255,255,255,0.5);}#_ab_logo_wrap{display:flex;flex-direction:column;align-items:center;margin-bottom:12px;}#_ab_logo{width:58px;height:58px;border-radius:14px;overflow:hidden;border:1px solid rgba(220,38,38,0.25);box-shadow:0 0 24px rgba(220,38,38,0.15);animation:_ab_pulse 2.5s infinite;margin-bottom:9px;}#_ab_logo img{width:100%;height:100%;object-fit:cover;display:block;}#_ab_title{font-family:\'Rajdhani\',sans-serif;font-size:19px;font-weight:700;color:#fff;letter-spacing:0.5px;text-align:center;margin-bottom:1px;}#_ab_sub{font-family:\'Rajdhani\',sans-serif;font-size:10px;font-weight:600;color:rgba(220,38,38,0.6);letter-spacing:3px;text-transform:uppercase;text-align:center;}#_ab_div{height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent);margin:12px 0;}#_ab_circle_sec{display:none;flex-direction:column;align-items:center;padding:2px 0 12px;}#_ab_svg_outer{position:relative;width:120px;height:120px;}#_ab_cnum{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;}#_ab_big_num{font-family:\'Rajdhani\',sans-serif;font-size:40px;font-weight:700;color:#fff;line-height:1;display:block;}#_ab_sec_lbl{font-family:\'Rajdhani\',sans-serif;font-size:9px;font-weight:600;color:rgba(255,255,255,0.25);letter-spacing:3px;text-transform:uppercase;display:block;margin-top:2px;}#_ab_stage_row{display:flex;gap:5px;justify-content:center;margin-top:10px;}#_ab_stage_row span{width:28px;height:3px;border-radius:2px;background:rgba(255,255,255,0.1);transition:background .4s;}#_ab_stage_row span.done{background:#22c55e;}#_ab_stage_row span.active{background:#dc2626;}#_ab_status{font-family:\'Rajdhani\',sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.3);text-align:center;margin-top:8px;letter-spacing:1px;min-height:14px;}#_ab_inp_lbl{font-family:\'Rajdhani\',sans-serif;font-size:10px;font-weight:600;color:rgba(255,255,255,0.25);letter-spacing:2px;text-transform:uppercase;display:block;margin-bottom:6px;}#_ab_inp_wrap{position:relative;margin-bottom:7px;}#_ab_inp{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:10px;padding:11px 38px 11px 13px;color:#fff;font-family:\'Rajdhani\',sans-serif;font-size:15px;font-weight:600;letter-spacing:2px;text-align:center;outline:none;transition:all .2s;box-sizing:border-box;}#_ab_inp:focus{border-color:rgba(220,38,38,0.45);background:rgba(220,38,38,0.03);}#_ab_inp::placeholder{color:rgba(255,255,255,0.12);letter-spacing:1px;font-size:11px;}#_ab_eye{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,0.2);font-size:14px;cursor:pointer;padding:2px;transition:color .2s;}#_ab_eye:hover{color:rgba(255,255,255,0.5);}#_ab_err{font-family:\'Rajdhani\',sans-serif;font-size:11px;font-weight:600;color:#ef4444;text-align:center;min-height:14px;margin-bottom:7px;letter-spacing:0.5px;}#_ab_btn{width:100%;background:linear-gradient(135deg,#dc2626,#991b1b);border:none;border-radius:10px;padding:12px;color:#fff;font-family:\'Rajdhani\',sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;margin-bottom:12px;box-shadow:0 4px 14px rgba(220,38,38,0.2);}#_ab_btn:active{transform:scale(0.97);opacity:0.85;}#_ab_tg{display:flex;align-items:center;justify-content:center;gap:5px;color:rgba(255,255,255,0.18);font-size:10px;font-weight:600;text-decoration:none;font-family:\'Rajdhani\',sans-serif;letter-spacing:1px;transition:color .2s;}#_ab_tg:hover{color:rgba(255,255,255,0.45);}';
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_ab_ov';
ov.innerHTML='<div id="_ab_box"><div id="_ab_scan_line"></div><button id="_ab_close">\u2715<\/button><div id="_ab_logo_wrap"><div id="_ab_logo"><img src="https://raw.githubusercontent.com/robinhossainraaj/rorax-iptv-database/refs/heads/main/logo.png" id="_ab_img"\/><\/div><div id="_ab_title">Aincrad Bypass<\/div><div id="_ab_sub">RORAX Edition<\/div><\/div><div id="_ab_div"><\/div><div id="_ab_circle_sec"><div id="_ab_svg_outer"><svg width="120" height="120" viewBox="0 0 120 120" style="position:absolute;top:0;left:0;"><circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="5"\/><circle id="_ab_arc" cx="60" cy="60" r="52" fill="none" stroke="#dc2626" stroke-width="5" stroke-dasharray="327" stroke-dashoffset="327" stroke-linecap="round" transform="rotate(-90 60 60)"\/><\/svg><div id="_ab_cnum"><span id="_ab_big_num">50<\/span><span id="_ab_sec_lbl">seconds<\/span><\/div><\/div><div id="_ab_stage_row"><span id="_ab_s1"><\/span><span id="_ab_s2"><\/span><span id="_ab_s3"><\/span><span id="_ab_s4"><\/span><span id="_ab_s5"><\/span><\/div><div id="_ab_status">Initializing...<\/div><\/div><label id="_ab_inp_lbl">Access Key<\/label><div id="_ab_inp_wrap"><input id="_ab_inp" type="password" placeholder="Enter key to unlock"\/><button id="_ab_eye" type="button">\ud83d\udc41<\/button><\/div><div id="_ab_err"><\/div><button id="_ab_btn">Unlock & Bypass<\/button><a id="_ab_tg" href="https:\/\/t.me\/rorax_x" target="_blank"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"\/><\/svg>t.me\/rorax_x<\/a><\/div>';
document.body.appendChild(ov);

// Logo fallback
document.getElementById('_ab_img').onerror=function(){
  document.getElementById('_ab_logo').innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1a0a0a;font-size:26px;">\u2694\ufe0f<\/div>';
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
var dots=[1,2,3,4,5].map(function(i){return document.getElementById('_ab_s'+i);});

document.getElementById('_ab_close').onclick=function(){ov.remove();};
ov.onclick=function(e){if(e.target===ov)ov.remove();};
eye.onclick=function(){
  inp.type=inp.type==='password'?'text':'password';
  eye.textContent=inp.type==='password'?'\ud83d\udc41':'\ud83d\ude48';
};

function setStage(n){
  dots.forEach(function(d,i){
    d.className='';
    if(i<n-1)d.classList.add('done');
    else if(i===n-1)d.classList.add('active');
  });
}

function showCircle(){
  circleSec.style.display='flex';
  btn.style.display='none';
  inpWrap.style.display='none';
  inpLbl.style.display='none';
  err.style.display='none';
  document.getElementById('_ab_close').style.display='none';
}

var finalUrl=null;
var countDone=false;

function startCountdown(total,onDone){
  var s=total;
  var circ=327;
  numEl.textContent=s;
  arc.setAttribute('stroke-dashoffset',circ);
  arc.setAttribute('stroke','#dc2626');
  var iv=setInterval(function(){
    s--;
    if(s<0){clearInterval(iv);countDone=true;if(onDone)onDone();return;}
    numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',circ-((circ/total)*(total-s)));
    if(s===0){
      arc.setAttribute('stroke','#22c55e');
      numEl.textContent='\u2713';
      secLbl.textContent='DONE';
      countDone=true;
      if(finalUrl){redirect(finalUrl);}
    }
  },1000);
}

function redirect(url){
  statusEl.textContent='Redirecting to key page...';
  setTimeout(function(){ov.remove();window.location.href=url;},700);
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
  }).then(function(r){return r.text();})
  .then(function(t){var r=parseResp(t);cb(r.dest,r.url);})
  .catch(function(e){statusEl.textContent='Error: '+e.message;});
}

// Process each stage with exactly 10s delay
function processStage(token,stageId,current,total){
  setStage(current);
  statusEl.textContent='Stage '+current+'/'+total+'...';
  setTimeout(function(){
    callNext('rodaemotor.com',token,stageId,current+1,function(dest,url){
      if(dest&&dest.length>5){
        // Got final aincradmods link!
        finalUrl=dest;
        dots.forEach(function(d){d.className='done';});
        statusEl.textContent='Key obtained!';
        arc.setAttribute('stroke','#22c55e');
        numEl.textContent='\u2713';
        secLbl.textContent='DONE';
        redirect(dest);
        return;
      }
      var next=current+1;
      if(next<=total){
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='Session lost!';return;}
          processStage(d.sessionToken,d.stageId,d.stageNumber,total);
        });
      }else{
        // Force final
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='No session!';return;}
          callNext('rodaemotor.com',d.sessionToken,d.stageId,d.totalStage+1,function(fd,fu){
            var go=fd||fu;
            if(go&&go.length>5){
              finalUrl=go;
              redirect(go);
            }else{statusEl.textContent='Could not get final link!';}
          });
        });
      }
    });
  },10000); // 10 seconds per stage
}

function runRodaemotor(){
  showCircle();
  statusEl.textContent='Connecting...';
  startCountdown(50,function(){
    if(!finalUrl)statusEl.textContent='Waiting for key...';
  });
  getSession('rodaemotor.com',function(d){
    if(!d||!d.sessionToken){statusEl.textContent='No session found!';return;}
    statusEl.textContent='Stage '+d.stageNumber+'/'+d.totalStage;
    processStage(d.sessionToken,d.stageId,d.stageNumber,d.totalStage);
  });
}

function runTarviral(){
  showCircle();
  statusEl.textContent='Waiting 50 seconds...';
  startCountdown(50,function(){
    statusEl.textContent='Bypassing...';
    getSession('tarviral.com',function(d){
      if(!d||!d.sessionToken){statusEl.textContent='No session!';return;}
      callNext('tarviral.com',d.sessionToken,d.stageId,d.totalStage+1,function(dest){
        if(dest&&dest.length>5){
          finalUrl=dest;
          redirect(dest);
        }else{statusEl.textContent='Bypass failed! Try again.';}
      });
    });
  });
}

btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='RORAX'){
    err.textContent='Wrong key — access denied.';
    inp.value='';
    inp.style.borderColor='rgba(239,68,68,0.5)';
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
