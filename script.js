(function(){
if(document.getElementById('_rm_overlay'))return;
var h=location.host;

// ── STYLES ──────────────────────────────────────────────────
var style=document.createElement('style');
style.textContent=`
@import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap');
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
#_rm_overlay{
  position:fixed;inset:0;z-index:2147483647;
  background:rgba(0,0,0,0.5);
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  display:flex;align-items:flex-end;justify-content:center;
  animation:_rm_fadeIn .3s ease;
}
@keyframes _rm_fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes _rm_slideUp{from{transform:translateY(100%);}to{transform:translateY(0);}}
#_rm_sheet{
  background:rgba(28,28,30,0.95);
  border-radius:24px 24px 0 0;
  padding:0 0 40px;
  width:100%;max-width:480px;
  animation:_rm_slideUp .4s cubic-bezier(.32,0,.67,0) forwards;
  box-shadow:0 -4px 40px rgba(0,0,0,0.4);
}
#_rm_handle{
  width:36px;height:4px;
  background:rgba(255,255,255,0.2);
  border-radius:2px;
  margin:12px auto 20px;
}
#_rm_icon{
  width:64px;height:64px;
  background:linear-gradient(135deg,#6c47ff,#a855f7);
  border-radius:16px;
  margin:0 auto 12px;
  display:flex;align-items:center;justify-content:center;
  font-size:32px;
  box-shadow:0 8px 24px rgba(108,71,255,0.4);
}
#_rm_title{
  font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;
  font-size:20px;font-weight:700;
  color:#fff;text-align:center;
  margin-bottom:4px;letter-spacing:-0.3px;
}
#_rm_sub{
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:13px;color:rgba(255,255,255,0.4);
  text-align:center;margin-bottom:28px;
}
#_rm_body{padding:0 20px;}
#_rm_inp_label{
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:12px;font-weight:600;
  color:rgba(255,255,255,0.4);
  letter-spacing:1px;text-transform:uppercase;
  margin-bottom:8px;display:block;
}
#_rm_inp{
  width:100%;
  background:rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;
  padding:14px 16px;
  color:#fff;
  font-size:17px;
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  letter-spacing:3px;text-align:center;
  outline:none;
  transition:border .2s,background .2s;
  margin-bottom:10px;
}
#_rm_inp:focus{
  border-color:rgba(108,71,255,0.6);
  background:rgba(108,71,255,0.08);
}
#_rm_inp::placeholder{color:rgba(255,255,255,0.2);letter-spacing:1px;font-size:14px;}
#_rm_err{
  font-size:13px;color:#ff453a;
  text-align:center;min-height:18px;
  margin-bottom:10px;
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
}
#_rm_btn{
  width:100%;
  background:linear-gradient(135deg,#6c47ff,#a855f7);
  border:none;border-radius:14px;
  padding:16px;
  color:#fff;
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:16px;font-weight:600;
  cursor:pointer;
  transition:opacity .2s,transform .1s;
  margin-bottom:16px;
  letter-spacing:-0.2px;
}
#_rm_btn:active{opacity:.8;transform:scale(0.98);}
#_rm_btn:disabled{opacity:.4;cursor:not-allowed;}
#_rm_circle_wrap{
  display:none;flex-direction:column;
  align-items:center;padding:10px 0 20px;
}
#_rm_stage_label{
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:12px;font-weight:600;
  color:rgba(255,255,255,0.4);
  letter-spacing:1px;text-transform:uppercase;
  margin-bottom:16px;
}
#_rm_status{
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:14px;color:rgba(255,255,255,0.6);
  margin-top:16px;text-align:center;
  min-height:20px;
}
#_rm_steps{
  display:flex;gap:8px;
  justify-content:center;
  margin-top:14px;
}
.rm_dot{
  width:8px;height:8px;
  border-radius:50%;
  background:rgba(255,255,255,0.15);
  transition:background .3s,transform .3s;
}
.rm_dot.active{background:#6c47ff;transform:scale(1.3);}
.rm_dot.done{background:#30d158;}
#_rm_tg{
  display:flex;align-items:center;justify-content:center;
  gap:6px;
  color:rgba(255,255,255,0.3);
  font-size:12px;text-decoration:none;
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  margin-top:4px;
  transition:color .2s;
}
#_rm_tg:hover{color:rgba(255,255,255,0.6);}
#_rm_divider{
  height:1px;
  background:rgba(255,255,255,0.08);
  margin:0 20px 16px;
}
`;
document.head.appendChild(style);

// ── HTML ────────────────────────────────────────────────────
var ov=document.createElement('div');
ov.id='_rm_overlay';
ov.innerHTML=`
<div id="_rm_sheet">
  <div id="_rm_handle"></div>
  <div id="_rm_icon">⚔️</div>
  <div id="_rm_title">Aincrad Key Generator</div>
  <div id="_rm_sub">RORAX Edition v2.0</div>
  <div id="_rm_body">
    <div id="_rm_circle_wrap">
      <div id="_rm_stage_label">Processing</div>
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8"/>
        <circle id="_rm_arc" cx="70" cy="70" r="60" fill="none" stroke="#6c47ff" stroke-width="8"
          stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round"
          transform="rotate(-90 70 70)"/>
        <text id="_rm_num" x="70" y="78" text-anchor="middle" fill="#fff"
          font-size="44" font-weight="700" font-family="-apple-system,sans-serif">80</text>
      </svg>
      <div id="_rm_steps">
        <div class="rm_dot" id="_rm_d1"></div>
        <div class="rm_dot" id="_rm_d2"></div>
        <div class="rm_dot" id="_rm_d3"></div>
        <div class="rm_dot" id="_rm_d4"></div>
        <div class="rm_dot" id="_rm_d5"></div>
      </div>
      <div id="_rm_status">Initializing...</div>
    </div>
    <label id="_rm_inp_label">Access Key</label>
    <input id="_rm_inp" type="password" placeholder="Enter key to unlock" maxlength="20"/>
    <div id="_rm_err"></div>
    <button id="_rm_btn">Unlock & Generate Key</button>
    <div id="_rm_divider"></div>
    <a id="_rm_tg" href="https://t.me/my_dad_raaj" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"/>
      </svg>
      t.me/my_dad_raaj
    </a>
  </div>
</div>`;
document.body.appendChild(ov);

// ── REFS ────────────────────────────────────────────────────
var inp=document.getElementById('_rm_inp');
var btn=document.getElementById('_rm_btn');
var err=document.getElementById('_rm_err');
var circleWrap=document.getElementById('_rm_circle_wrap');
var arc=document.getElementById('_rm_arc');
var numEl=document.getElementById('_rm_num');
var statusEl=document.getElementById('_rm_status');
var inpLabel=document.getElementById('_rm_inp_label');
var stageLabel=document.getElementById('_rm_stage_label');
var dots=[1,2,3,4,5].map(function(i){return document.getElementById('_rm_d'+i);});

// close on backdrop
ov.onclick=function(e){if(e.target===ov)ov.remove();};

// ── DOT HELPERS ─────────────────────────────────────────────
function setDot(i,state){
  dots.forEach(function(d){d.classList.remove('active','done');});
  for(var x=0;x<i-1;x++)dots[x].classList.add('done');
  if(i<=5)dots[i-1].classList.add('active');
}

// ── SHOW CIRCLE ─────────────────────────────────────────────
function showCircle(){
  circleWrap.style.display='flex';
  btn.style.display='none';
  inp.style.display='none';
  inpLabel.style.display='none';
  err.style.display='none';
}

// ── COUNTDOWN (display only) ─────────────────────────────────
function startDisplayCountdown(){
  var s=80;var total=377;
  numEl.textContent=s;
  arc.setAttribute('stroke-dashoffset','0');
  arc.setAttribute('stroke','#6c47ff');
  var iv=setInterval(function(){
    s--;
    if(s<0){clearInterval(iv);return;}
    numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',(total/80)*(80-s));
    if(s===0){
      arc.setAttribute('stroke','#30d158');
      numEl.textContent='✓';
    }
  },1000);
}

// ── CALL NEXT STAGE ──────────────────────────────────────────
function callNext(domain,token,stageId,progress,cb){
  var proto='http';
  var input=encodeURIComponent(JSON.stringify({"0":{"json":{"token":token,"progress":progress,"stageId":stageId}}}));
  fetch(proto+'://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+input,{
    credentials:'include',
    headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
  }).then(function(r){return r.text();})
  .then(function(t){
    var dest=null,url=null;
    t.trim().split('\n').forEach(function(l){
      try{
        var j=JSON.parse(l);
        if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
          var dd=j.json[2][0][0];
          if(dd){if(dd.destinationLink)dest=dd.destinationLink;if(dd.url)url=dd.url;}
        }
      }catch(e){}
    });
    cb(dest,url);
  }).catch(function(e){statusEl.textContent='❌ Error: '+e.message;});
}

// ── GET SESSION ──────────────────────────────────────────────
function getSession(domain,cb){
  fetch('http://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
  .then(function(r){return r.json();})
  .then(cb)
  .catch(function(e){statusEl.textContent='❌ '+e.message;});
}

// ── RODAEMOTOR FULL AUTO BYPASS ──────────────────────────────
function runRodaemotorAuto(){
  showCircle();
  startDisplayCountdown();
  stageLabel.textContent='Bypassing Stages';
  statusEl.textContent='Getting session...';

  getSession('rodaemotor.com',function(d){
    if(!d.sessionToken){statusEl.textContent='❌ No session!';return;}
    var token=d.sessionToken;
    var stageId=d.stageId;
    var current=d.stageNumber;
    setDot(current);
    statusEl.textContent='Stage '+current+'/5 → moving to '+(current+1)+'/5...';

    // Step current → current+1 after 17s
    setTimeout(function(){
      callNext('rodaemotor.com',token,stageId,current+1,function(dest1,url1){
        setDot(current+1);
        statusEl.textContent='Stage '+(current+1)+'/5 → '+(current+2)+'/5...';
        setTimeout(function(){
          // refresh session
          getSession('rodaemotor.com',function(d2){
            callNext('rodaemotor.com',d2.sessionToken,d2.stageId,d2.stageNumber+1,function(dest2,url2){
              setDot(current+2);
              statusEl.textContent='Stage '+(current+2)+'/5 → '+(current+3)+'/5...';
              setTimeout(function(){
                getSession('rodaemotor.com',function(d3){
                  callNext('rodaemotor.com',d3.sessionToken,d3.stageId,d3.stageNumber+1,function(dest3,url3){
                    setDot(current+3);
                    statusEl.textContent='Stage '+(current+3)+'/5 → '+(current+4)+'/5...';
                    setTimeout(function(){
                      getSession('rodaemotor.com',function(d4){
                        callNext('rodaemotor.com',d4.sessionToken,d4.stageId,d4.stageNumber+1,function(dest4,url4){
                          setDot(5);
                          var finalUrl=dest4||url4||dest3||url3||dest2||url2||dest1||url1;
                          statusEl.textContent='✅ All stages done! Redirecting...';
                          arc.setAttribute('stroke','#30d158');
                          numEl.textContent='✓';
                          dots.forEach(function(d){d.classList.remove('active');d.classList.add('done');});
                          setTimeout(function(){
                            ov.remove();
                            window.location.href=finalUrl||'https://aincradmods.com/getkey';
                          },1500);
                        });
                      });
                    },17000);
                  });
                });
              },17000);
            });
          });
        },17000);
      });
    },17000);
  });
}

// ── TARVIRAL BYPASS ──────────────────────────────────────────
function runTarviralBypass(){
  showCircle();
  stageLabel.textContent='Bypassing Tarviral';
  statusEl.textContent='Starting in 30s...';
  var s=30;var total=377;
  numEl.textContent=s;
  arc.setAttribute('stroke','#6c47ff');
  arc.setAttribute('stroke-dashoffset','0');
  var iv=setInterval(function(){
    s--;numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',(total/30)*(30-s));
    if(s<=0){
      clearInterval(iv);
      numEl.textContent='⚡';
      arc.setAttribute('stroke','#30d158');
      statusEl.textContent='🚀 Bypassing...';
      getSession('tarviral.com',function(d){
        if(!d.sessionToken){statusEl.textContent='❌ No session!';return;}
        callNext('tarviral.com',d.sessionToken,d.stageId,d.totalStage+1,function(dest){
          if(dest){
            statusEl.textContent='✅ Done! Redirecting...';
            setTimeout(function(){ov.remove();window.location.href=dest;},800);
          }else{statusEl.textContent='❌ Bypass failed!';}
        });
      });
    }
  },1000);
}

// ── BUTTON CLICK ─────────────────────────────────────────────
btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='RORAX 2.0'){
    err.textContent='Wrong key! Access denied.';
    inp.value='';
    inp.style.borderColor='rgba(255,69,58,0.6)';
    setTimeout(function(){inp.style.borderColor='';},1500);
    return;
  }
  err.textContent='';
  if(h.includes('rodaemotor.com')){
    runRodaemotorAuto();
  }else if(h.includes('tarviral.com')){
    runTarviralBypass();
  }else if(h.includes('aincradmods.com')){
    ov.remove();
    fetch('https://aincradmods.com/getkey.data',{method:'POST',credentials:'include',headers:{'content-type':'application/x-www-form-urlencoded;charset=UTF-8','accept':'*/*','origin':'https://aincradmods.com','referer':'https://aincradmods.com/getkey','x-requested-with':'mark.via.gp'}})
    .then(function(){window.location.href='https://alpharede.com/aincrad2';})
    .catch(function(){window.location.href='https://alpharede.com/aincrad2';});
  }else if(h.includes('alpharede.com')){
    ov.remove();
    window.location.href='https://alpharede.com/aincrad2';
  }else{
    err.textContent='Open aincradmods.com/getkey first!';
  }
};
inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
})();
