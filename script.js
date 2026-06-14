(function(){
if(document.getElementById('_rx_ov'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent='@keyframes _rx_up{from{transform:translateY(100%);opacity:0;}to{transform:translateY(0);opacity:1;}}@keyframes _rx_fade{from{opacity:0;}to{opacity:1;}}@keyframes _rx_glitch{0%,100%{text-shadow:2px 0 #00ffff,-2px 0 #ff00ff;}25%{text-shadow:-2px 0 #00ffff,2px 0 #ff00ff;}50%{text-shadow:2px 2px #00ffff,-2px -2px #ff00ff;}75%{text-shadow:-2px 2px #ff00ff,2px -2px #00ffff;}}@keyframes _rx_scan{0%{transform:translateY(-100%);}100%{transform:translateY(100vh);}}@keyframes _rx_blink{0%,100%{opacity:1;}50%{opacity:0.3;}}@keyframes _rx_border{0%,100%{border-color:rgba(0,255,255,0.5);}50%{border-color:rgba(255,0,255,0.5);}}#_rx_ov{position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:flex;align-items:flex-end;justify-content:center;animation:_rx_fade .3s ease;overflow:hidden;}#_rx_scan_line{position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,rgba(0,255,255,0.3),transparent);animation:_rx_scan 3s linear infinite;pointer-events:none;}#_rx_sheet{width:100%;max-width:480px;background:linear-gradient(180deg,#050510 0%,#080818 100%);border-radius:24px 24px 0 0;border-top:1px solid rgba(0,255,255,0.3);border-left:1px solid rgba(0,255,255,0.1);border-right:1px solid rgba(0,255,255,0.1);padding-bottom:36px;animation:_rx_up .4s cubic-bezier(0.34,1.2,0.64,1);position:relative;overflow:hidden;}#_rx_sheet::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#00ffff,#ff00ff,#00ffff,transparent);}#_rx_bar{width:36px;height:3px;background:rgba(0,255,255,0.3);border-radius:2px;margin:12px auto 0;}#_rx_logo_wrap{display:flex;flex-direction:column;align-items:center;padding:20px 0 0;}#_rx_logo{width:70px;height:70px;border-radius:16px;overflow:hidden;background:#000;border:1px solid rgba(0,255,255,0.3);box-shadow:0 0 20px rgba(0,255,255,0.2),0 0 40px rgba(0,255,255,0.1);position:relative;}#_rx_logo::after{content:"";position:absolute;inset:0;border-radius:16px;box-shadow:inset 0 0 20px rgba(0,255,255,0.1);}#_rx_logo img{width:100%;height:100%;object-fit:cover;display:block;}#_rx_logo_fallback{width:70px;height:70px;border-radius:16px;background:linear-gradient(135deg,#0a0a1a,#111);border:1px solid rgba(0,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:32px;box-shadow:0 0 20px rgba(0,255,255,0.2);}#_rx_brand{font-family:-apple-system,BlinkMacSystemFont,monospace;font-size:10px;font-weight:700;letter-spacing:6px;color:rgba(0,255,255,0.5);text-transform:uppercase;margin-top:10px;}#_rx_title{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:22px;font-weight:800;color:#fff;margin-top:3px;letter-spacing:-0.5px;animation:_rx_glitch 4s infinite;}#_rx_ver{display:inline-flex;align-items:center;gap:4px;background:rgba(0,255,255,0.08);border:1px solid rgba(0,255,255,0.2);border-radius:6px;padding:3px 10px;font-size:10px;font-weight:700;color:#00ffff;letter-spacing:3px;margin-top:8px;}#_rx_body{padding:20px 20px 0;}#_rx_inp_wrap{position:relative;margin-bottom:8px;}#_rx_inp{width:100%;background:rgba(0,255,255,0.03);border:1px solid rgba(0,255,255,0.2);border-radius:12px;padding:14px 44px 14px 18px;color:#00ffff;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,monospace;letter-spacing:3px;text-align:center;outline:none;transition:all .25s;animation:_rx_border 3s infinite;}#_rx_inp:focus{border-color:rgba(0,255,255,0.6);background:rgba(0,255,255,0.05);box-shadow:0 0 20px rgba(0,255,255,0.1);}#_rx_inp::placeholder{color:rgba(0,255,255,0.2);letter-spacing:1px;font-size:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;}#_rx_eye{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(0,255,255,0.4);font-size:16px;cursor:pointer;padding:4px;line-height:1;}#_rx_eye:hover{color:rgba(0,255,255,0.8);}#_rx_err{font-size:12px;color:#ff00ff;text-align:center;min-height:16px;margin-bottom:10px;font-family:monospace;letter-spacing:1px;animation:_rx_blink .5s infinite;}#_rx_btn{width:100%;background:linear-gradient(135deg,rgba(0,255,255,0.15),rgba(255,0,255,0.15));border:1px solid rgba(0,255,255,0.4);border-radius:12px;padding:15px;color:#00ffff;font-family:-apple-system,BlinkMacSystemFont,monospace;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;margin-bottom:20px;letter-spacing:2px;text-transform:uppercase;position:relative;overflow:hidden;}#_rx_btn::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,255,255,0.1),rgba(255,0,255,0.1));opacity:0;transition:opacity .2s;}#_rx_btn:hover::before{opacity:1;}#_rx_btn:active{transform:scale(0.98);}#_rx_circle_sec{display:none;flex-direction:column;align-items:center;padding:4px 0 20px;}#_rx_c_label{font-family:monospace;font-size:10px;font-weight:700;color:rgba(0,255,255,0.4);letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;}#_rx_svg_outer{position:relative;width:160px;height:160px;}#_rx_center_num{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;}#_rx_big_num{font-family:-apple-system,BlinkMacSystemFont,monospace;font-size:50px;font-weight:800;color:#fff;line-height:1;display:block;}#_rx_sec_label{font-family:monospace;font-size:10px;color:rgba(0,255,255,0.4);letter-spacing:3px;text-transform:uppercase;margin-top:4px;display:block;}#_rx_status{font-family:monospace;font-size:12px;color:rgba(0,255,255,0.5);margin-top:14px;text-align:center;letter-spacing:1px;min-height:16px;}#_rx_divider{height:1px;background:linear-gradient(90deg,transparent,rgba(0,255,255,0.15),transparent);margin:0 20px 14px;}#_rx_tg{display:flex;align-items:center;justify-content:center;gap:6px;color:rgba(0,255,255,0.25);font-size:11px;text-decoration:none;font-family:monospace;transition:color .2s;margin:0 20px;letter-spacing:1px;}#_rx_tg:hover{color:rgba(0,255,255,0.6);}';
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_rx_ov';
ov.innerHTML='<div id="_rx_scan_line"></div><div id="_rx_sheet"><div id="_rx_bar"></div><div id="_rx_logo_wrap"><div id="_rx_logo"><img src="https://raw.githubusercontent.com/robinhossainraaj/rorax-iptv-database/main/logo.png" id="_rx_img"/></div><div id="_rx_brand">R O R A X</div><div id="_rx_title">Key Generator</div><div id="_rx_ver"><span style="color:#ff00ff;">▶</span> v 2.0</div></div><div id="_rx_body"><div id="_rx_circle_sec"><div id="_rx_c_label">[ Processing ]</div><div id="_rx_svg_outer"><svg width="160" height="160" viewBox="0 0 160 160" style="position:absolute;top:0;left:0;"><circle cx="80" cy="80" r="68" fill="none" stroke="rgba(0,255,255,0.06)" stroke-width="6"/><circle cx="80" cy="80" r="68" fill="none" stroke="rgba(0,255,255,0.03)" stroke-width="14"/><circle id="_rx_arc" cx="80" cy="80" r="68" fill="none" stroke="url(#_rx_grad)" stroke-width="6" stroke-dasharray="427" stroke-dashoffset="427" stroke-linecap="round" transform="rotate(-90 80 80)"/><defs><linearGradient id="_rx_grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#00ffff"/><stop offset="100%" style="stop-color:#ff00ff"/></linearGradient></defs></svg><div id="_rx_center_num"><span id="_rx_big_num">80</span><span id="_rx_sec_label">seconds</span></div></div><div id="_rx_status">[ INITIALIZING... ]</div></div><label style="display:block;font-family:monospace;font-size:10px;font-weight:700;color:rgba(0,255,255,0.4);letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;" id="_rx_inp_lbl">// Access Key</label><div id="_rx_inp_wrap"><input id="_rx_inp" type="password" placeholder="Enter access key..."/><button id="_rx_eye" type="button">👁</button></div><div id="_rx_err"></div><button id="_rx_btn">[ Unlock & Generate ]</button></div><div id="_rx_divider"></div><a id="_rx_tg" href="https://t.me/my_dad_raaj" target="_blank"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"/></svg>t.me/my_dad_raaj</a></div>';
document.body.appendChild(ov);

// Fix logo fallback
var img=document.getElementById('_rx_img');
img.onerror=function(){
  var logo=document.getElementById('_rx_logo');
  logo.innerHTML='<div id="_rx_logo_fallback"><span style="font-size:32px;">⚔️</span></div>';
  logo.style.border='none';
};

var inp=document.getElementById('_rx_inp');
var btn=document.getElementById('_rx_btn');
var err=document.getElementById('_rx_err');
var eye=document.getElementById('_rx_eye');
var circleSec=document.getElementById('_rx_circle_sec');
var arc=document.getElementById('_rx_arc');
var numEl=document.getElementById('_rx_big_num');
var secLabel=document.getElementById('_rx_sec_label');
var statusEl=document.getElementById('_rx_status');
var inpLbl=document.getElementById('_rx_inp_lbl');
var inpWrap=document.getElementById('_rx_inp_wrap');

// Show/hide password
eye.onclick=function(){
  if(inp.type==='password'){inp.type='text';eye.textContent='🙈';}
  else{inp.type='password';eye.textContent='👁';}
};

ov.onclick=function(e){if(e.target===ov)ov.remove();};

function showCircle(){
  circleSec.style.display='flex';
  btn.style.display='none';
  inpWrap.style.display='none';
  inpLbl.style.display='none';
  err.style.display='none';
}

var finalDestUrl=null;

function startCountdown(total,onDone){
  var s=total;
  var circumference=427;
  numEl.textContent=s;
  arc.setAttribute('stroke-dashoffset',circumference);
  var iv=setInterval(function(){
    s--;
    if(s<0){clearInterval(iv);if(onDone)onDone();return;}
    numEl.textContent=s;
    var progress=(total-s)/total;
    arc.setAttribute('stroke-dashoffset',circumference-(circumference*progress));
    if(s===0){
      numEl.textContent='✓';
      secLabel.textContent='DONE';
      // Auto redirect if we have the URL
      if(finalDestUrl){
        statusEl.textContent='[ REDIRECTING... ]';
        setTimeout(function(){
          ov.remove();
          window.location.href=finalDestUrl;
        },800);
      }
    }
  },1000);
}

function parseResponse(text){
  var dest=null,url=null;
  text.trim().split('\n').forEach(function(line){
    try{
      var j=JSON.parse(line);
      if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
        var arr=j.json[2];
        if(arr&&arr[0]&&arr[0][0]){
          var d=arr[0][0];
          if(d.destinationLink&&typeof d.destinationLink==='string'&&d.destinationLink.length>5){
            dest=d.destinationLink;
          }
          if(d.url&&typeof d.url==='string'&&d.url.length>5){
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
  .catch(function(e){statusEl.textContent='[ ERR: '+e.message+' ]';});
}

function callNext(domain,token,stageId,progress,cb){
  var input=encodeURIComponent(JSON.stringify({"0":{"json":{"token":token,"progress":progress,"stageId":stageId}}}));
  fetch('http://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+input,{
    credentials:'include',
    headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
  }).then(function(r){return r.text();})
  .then(function(t){
    var result=parseResponse(t);
    cb(result.dest,result.url);
  }).catch(function(e){statusEl.textContent='[ ERR: '+e.message+' ]';});
}

function doRedirect(url){
  finalDestUrl=url;
  statusEl.textContent='[ KEY OBTAINED! REDIRECTING... ]';
  arc.setAttribute('stroke','#00ff88');
  numEl.textContent='✓';
  secLabel.textContent='DONE';
  setTimeout(function(){
    ov.remove();
    window.location.href=url;
  },1000);
}

function processStages(token,stageId,current,total){
  statusEl.textContent='[ STAGE '+current+'/'+total+' ]';
  setTimeout(function(){
    callNext('rodaemotor.com',token,stageId,current+1,function(dest,url){
      if(dest&&dest.length>5){
        // Got final destination!
        doRedirect(dest);
        return;
      }
      // Continue to next stage
      var nextStage=current+1;
      if(nextStage<total){
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='[ ERR: SESSION LOST ]';return;}
          processStages(d.sessionToken,d.stageId,d.stageNumber,total);
        });
      }else{
        // Last stage — force final call
        getSession('rodaemotor.com',function(d){
          if(!d||!d.sessionToken){statusEl.textContent='[ ERR: NO SESSION ]';return;}
          callNext('rodaemotor.com',d.sessionToken,d.stageId,d.totalStage+1,function(fd,fu){
            if(fd&&fd.length>5){
              doRedirect(fd);
            }else if(fu&&fu.length>5){
              doRedirect(fu);
            }else{
              statusEl.textContent='[ ERR: NO FINAL LINK ]';
            }
          });
        });
      }
    });
  },17000);
}

function runRodaemotorAuto(){
  showCircle();
  statusEl.textContent='[ CONNECTING... ]';
  startCountdown(80,function(){
    // Countdown done but redirect not happened yet — wait for API
    if(!finalDestUrl){
      statusEl.textContent='[ WAITING FOR KEY... ]';
    }
  });
  getSession('rodaemotor.com',function(d){
    if(!d||!d.sessionToken){statusEl.textContent='[ ERR: NO SESSION ]';return;}
    statusEl.textContent='[ STAGE '+d.stageNumber+'/'+d.totalStage+' DETECTED ]';
    setTimeout(function(){
      processStages(d.sessionToken,d.stageId,d.stageNumber,d.totalStage);
    },500);
  });
}

function runTarviralBypass(){
  showCircle();
  statusEl.textContent='[ STARTING IN 30s... ]';
  startCountdown(30,function(){
    statusEl.textContent='[ BYPASSING... ]';
    getSession('tarviral.com',function(d){
      if(!d||!d.sessionToken){statusEl.textContent='[ ERR: NO SESSION ]';return;}
      callNext('tarviral.com',d.sessionToken,d.stageId,d.totalStage+1,function(dest){
        if(dest&&dest.length>5){
          doRedirect(dest);
        }else{
          statusEl.textContent='[ BYPASS FAILED. RETRY ]';
        }
      });
    });
  });
}

btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='RORAX 2.0'){
    err.textContent='// ACCESS DENIED: WRONG KEY';
    inp.value='';
    inp.style.borderColor='rgba(255,0,255,0.8)';
    inp.style.boxShadow='0 0 20px rgba(255,0,255,0.2)';
    setTimeout(function(){
      inp.style.borderColor='';
      inp.style.boxShadow='';
      err.textContent='';
    },2000);
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
    err.textContent='// OPEN AINCRADMODS.COM/GETKEY FIRST';
  }
};
inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
})();