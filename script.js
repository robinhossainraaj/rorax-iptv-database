(function(){
if(document.getElementById('_rx_ov'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent='@keyframes _rx_up{from{transform:translateY(100%);opacity:0;}to{transform:translateY(0);opacity:1;}}@keyframes _rx_fade{from{opacity:0;}to{opacity:1;}}@keyframes _rx_pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0.4);}50%{box-shadow:0 0 0 12px rgba(220,38,38,0);}}#_rx_ov{position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,0.7);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);display:flex;align-items:flex-end;justify-content:center;animation:_rx_fade .3s ease;}#_rx_sheet{width:100%;max-width:480px;background:linear-gradient(180deg,#0a0a0a 0%,#111 100%);border-radius:28px 28px 0 0;border-top:1px solid rgba(255,255,255,0.08);padding-bottom:40px;animation:_rx_up .4s cubic-bezier(0.34,1.56,0.64,1);}#_rx_bar{width:40px;height:4px;background:rgba(255,255,255,0.15);border-radius:2px;margin:14px auto 0;}#_rx_logo_wrap{display:flex;flex-direction:column;align-items:center;padding:24px 0 0;}#_rx_logo{width:72px;height:72px;border-radius:18px;overflow:hidden;background:#000;border:1px solid rgba(255,255,255,0.08);box-shadow:0 8px 32px rgba(220,38,38,0.3);animation:_rx_pulse 2s infinite;}#_rx_logo img{width:100%;height:100%;object-fit:cover;}#_rx_brand{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;font-weight:700;letter-spacing:4px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin-top:10px;}#_rx_title{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:22px;font-weight:700;color:#fff;margin-top:4px;letter-spacing:-0.5px;}#_rx_ver{display:inline-block;background:linear-gradient(135deg,#dc2626,#7f1d1d);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;letter-spacing:2px;margin-top:6px;}#_rx_body{padding:24px 20px 0;}#_rx_inp{width:100%;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.08);border-radius:14px;padding:15px 18px;color:#fff;font-size:17px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;letter-spacing:4px;text-align:center;outline:none;transition:all .25s;margin-bottom:8px;}#_rx_inp:focus{border-color:rgba(220,38,38,0.5);background:rgba(220,38,38,0.05);}#_rx_inp::placeholder{color:rgba(255,255,255,0.18);letter-spacing:1px;font-size:13px;}#_rx_err{font-size:12px;color:#ef4444;text-align:center;min-height:16px;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;}#_rx_btn{width:100%;background:linear-gradient(135deg,#dc2626,#b91c1c);border:none;border-radius:14px;padding:16px;color:#fff;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;font-weight:600;cursor:pointer;transition:all .2s;margin-bottom:20px;box-shadow:0 4px 20px rgba(220,38,38,0.3);}#_rx_btn:active{transform:scale(0.97);opacity:0.85;}#_rx_circle_sec{display:none;flex-direction:column;align-items:center;padding:8px 0 20px;}#_rx_svg_wrap{position:relative;width:160px;height:160px;}#_rx_center_num{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}#_rx_big_num{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:52px;font-weight:700;color:#fff;line-height:1;display:block;}#_rx_sec_label{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;text-transform:uppercase;margin-top:2px;display:block;}#_rx_status{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:rgba(255,255,255,0.4);margin-top:18px;text-align:center;min-height:18px;}#_rx_divider{height:1px;background:rgba(255,255,255,0.06);margin:0 20px 16px;}#_rx_tg{display:flex;align-items:center;justify-content:center;gap:6px;color:rgba(255,255,255,0.25);font-size:12px;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;transition:color .2s;margin:0 20px;}#_rx_tg:hover{color:rgba(255,255,255,0.5);}';
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_rx_ov';
ov.innerHTML='<div id="_rx_sheet"><div id="_rx_bar"></div><div id="_rx_logo_wrap"><div id="_rx_logo"><img src="https://raw.githubusercontent.com/robinhossainraaj/rorax-iptv-database/main/logo.png" onerror="this.parentNode.innerHTML=\'<span style=\\\"font-size:36px;line-height:72px;\\\">⚔️</span>\';"/></div><div id="_rx_brand">RORAX</div><div id="_rx_title">Key Generator</div><div id="_rx_ver">v 2.0</div></div><div id="_rx_body"><div id="_rx_circle_sec"><svg width="160" height="160" viewBox="0 0 160 160" style="display:block;"><circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="6"/><circle id="_rx_arc" cx="80" cy="80" r="70" fill="none" stroke="#dc2626" stroke-width="6" stroke-dasharray="440" stroke-dashoffset="440" stroke-linecap="round" transform="rotate(-90 80 80)"/></svg><div id="_rx_svg_wrap" style="position:relative;margin-top:-160px;width:160px;height:160px;"><div id="_rx_center_num"><span id="_rx_big_num">80</span><span id="_rx_sec_label">seconds</span></div></div><div id="_rx_status">Initializing...</div></div><label style="display:block;font-size:11px;font-weight:600;color:rgba(255,255,255,0.3);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;" id="_rx_inp_lbl">Access Key</label><input id="_rx_inp" type="password" placeholder="Enter access key" maxlength="20"/><div id="_rx_err"></div><button id="_rx_btn">Unlock & Generate</button></div><div id="_rx_divider"></div><a id="_rx_tg" href="https://t.me/my_dad_raaj" target="_blank"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"/></svg>t.me/my_dad_raaj</a></div>';
document.body.appendChild(ov);

var inp=document.getElementById('_rx_inp');
var btn=document.getElementById('_rx_btn');
var err=document.getElementById('_rx_err');
var circleSec=document.getElementById('_rx_circle_sec');
var arc=document.getElementById('_rx_arc');
var numEl=document.getElementById('_rx_big_num');
var secLabel=document.getElementById('_rx_sec_label');
var statusEl=document.getElementById('_rx_status');
var inpLbl=document.getElementById('_rx_inp_lbl');

ov.onclick=function(e){if(e.target===ov)ov.remove();};

function showCircle(){
  circleSec.style.display='flex';
  btn.style.display='none';
  inp.style.display='none';
  inpLbl.style.display='none';
  err.style.display='none';
}

function startCountdown(total,onDone){
  var s=total;
  var circumference=440;
  numEl.textContent=s;
  arc.setAttribute('stroke-dashoffset',circumference);
  arc.setAttribute('stroke','#dc2626');
  var iv=setInterval(function(){
    s--;
    if(s<0){clearInterval(iv);if(onDone)onDone();return;}
    numEl.textContent=s;
    var progress=(total-s)/total;
    arc.setAttribute('stroke-dashoffset',circumference-(circumference*progress));
    if(s===0){
      arc.setAttribute('stroke','#22c55e');
      numEl.textContent='✓';
      secLabel.textContent='done';
    }
  },1000);
}

function parseNextStageResponse(text){
  var dest=null,url=null;
  text.trim().split('\n').forEach(function(line){
    try{
      var j=JSON.parse(line);
      // Look deep in the jsonl structure
      if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
        var arr=j.json[2];
        if(arr&&arr[0]&&arr[0][0]){
          var d=arr[0][0];
          // destinationLink can be string or null
          if(d.destinationLink&&typeof d.destinationLink==='string'&&d.destinationLink.length>0){
            dest=d.destinationLink;
          }
          if(d.url&&typeof d.url==='string'&&d.url.length>0){
            url=d.url;
          }
        }
      }
    }catch(e){}
  });
  return {dest:dest,url:url};
}

function getSession(domain,cb){
  fetch('http://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
  .then(function(r){return r.json();})
  .then(cb)
  .catch(function(e){statusEl.textContent='❌ Session error: '+e.message;});
}

function callNext(domain,token,stageId,progress,cb){
  var input=encodeURIComponent(JSON.stringify({"0":{"json":{"token":token,"progress":progress,"stageId":stageId}}}));
  fetch('http://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+input,{
    credentials:'include',
    headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
  }).then(function(r){return r.text();})
  .then(function(t){
    var result=parseNextStageResponse(t);
    cb(result.dest,result.url);
  }).catch(function(e){statusEl.textContent='❌ '+e.message;});
}

// ── RODAEMOTOR: process each stage recursively with 17s delay
function processStages(token,stageId,current,total){
  statusEl.textContent='Stage '+current+'/'+total+'...';
  setTimeout(function(){
    callNext('rodaemotor.com',token,stageId,current+1,function(dest,url){
      // Check if we got the final aincradmods link
      if(dest&&dest.includes('aincradmods.com')){
        // SUCCESS! Redirect to aincradmods key page
        statusEl.textContent='✅ Key obtained! Redirecting...';
        arc.setAttribute('stroke','#22c55e');
        numEl.textContent='✓';
        secLabel.textContent='done';
        setTimeout(function(){
          ov.remove();
          window.location.href=dest;
        },1000);
        return;
      }
      // Not final yet — get fresh session and continue
      if(current+1<=total){
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='❌ Session lost!';return;}
          processStages(d.sessionToken,d.stageId,d.stageNumber,total);
        });
      }else{
        // All stages done but no destinationLink — try final call with totalStage+1
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='❌ No final link!';return;}
          callNext('rodaemotor.com',d.sessionToken,d.stageId,d.totalStage+1,function(finalDest,finalUrl){
            var go=finalDest||finalUrl;
            if(go){
              statusEl.textContent='✅ Done! Redirecting...';
              arc.setAttribute('stroke','#22c55e');
              numEl.textContent='✓';
              secLabel.textContent='done';
              setTimeout(function(){ov.remove();window.location.href=go;},1000);
            }else{
              statusEl.textContent='❌ Could not get final link!';
            }
          });
        });
      }
    });
  },17000);
}

function runRodaemotorAuto(){
  showCircle();
  statusEl.textContent='Getting session...';
  startCountdown(80,function(){});
  getSession('rodaemotor.com',function(d){
    if(!d||!d.sessionToken){statusEl.textContent='❌ No session found!';return;}
    statusEl.textContent='Stage '+d.stageNumber+'/'+d.totalStage+' detected';
    setTimeout(function(){
      processStages(d.sessionToken,d.stageId,d.stageNumber,d.totalStage);
    },500);
  });
}

function runTarviralBypass(){
  showCircle();
  statusEl.textContent='Please wait...';
  startCountdown(30,function(){
    statusEl.textContent='Bypassing...';
    getSession('tarviral.com',function(d){
      if(!d||!d.sessionToken){statusEl.textContent='❌ No session!';return;}
      callNext('tarviral.com',d.sessionToken,d.stageId,d.totalStage+1,function(dest){
        if(dest){
          statusEl.textContent='✅ Done! Redirecting...';
          setTimeout(function(){ov.remove();window.location.href=dest;},800);
        }else{statusEl.textContent='❌ Bypass failed! Try again.';}
      });
    });
  });
}

btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='RORAX 2.0'){
    err.textContent='Wrong key — access denied.';
    inp.value='';
    inp.style.borderColor='rgba(239,68,68,0.6)';
    setTimeout(function(){inp.style.borderColor='';err.textContent='';},2000);
    return;
  }
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