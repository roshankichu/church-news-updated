// ============================
// SABHA VARTHA — Full CMS
// All settings editable from Admin
// ============================

// ============================
// DEFAULTS
// ============================
const DEFAULT_CREDS = { user:'admin', pass:'church2025' };

const DEFAULT_SETTINGS = {
  siteTitle:'സഭാ വാർത്ത',
  siteSubtitle:'Sabha Vartha — Church News',
  heroTitle:'ദൈവ വചനം — ജീവന്റെ വഴി',
  heroSubtitle:'The Word of God — The Way of Life',
  heroVerse:'"കർത്താവ് എന്റെ ആട്ടിടയൻ; എനിക്ക് ഒന്നിനും കുറവില്ല"',
  footerSub:'Sharing the Good News • സുവിശേഷം പങ്കുവയ്ക്കുന്നു',
  theme:'',
  heroBg:'',
  logo:'',
  rollingAd:'🏪 John\'s Supermarket — Fresh Groceries | 📚 Tuition Centre — Call 9876543210 | ✈️ Christ Travel — Pilgrimage Tours | 🏥 Divine Grace Hospital — 24/7 Care',
  bibleQuote1:{ text:'"For God so loved the world that he gave his one and only Son"', ref:'John 3:16' },
  bibleQuote2:{ text:'"I can do all things through Christ who strengthens me"', ref:'Philippians 4:13' },
  tickerVerses:[
    '"കർത്താവ് എന്റെ ആട്ടിടയൻ; എനിക്ക് ഒന്നിനും കുറവില്ല" — സങ്കീർത്തനം 23:1',
    '"For God so loved the world that he gave his one and only Son" — John 3:16',
    '"ഞാൻ വഴിയും സത്യവും ജീവനും ആകുന്നു" — യോഹന്നാൻ 14:6',
    '"I can do all things through Christ who strengthens me" — Philippians 4:13',
    '"Be still and know that I am God" — Psalm 46:10',
  ],
  sidebarAds:[
    { icon:'🏪', name:"John's Supermarket", desc:'Fresh Groceries<br>Opp. Church Gate', cta:'Visit Now →', bg:'linear-gradient(135deg,#0d1b2a,#1b4332)' },
    { icon:'📚', name:"St. Mary's Tuition", desc:'Coaching Cl. 1–12<br>Admissions Open', cta:'Enquire →', bg:'linear-gradient(135deg,#0c1445,#1565C0)' },
    { icon:'✈️', name:'Christ Travel', desc:'Pilgrimage Tours<br>Jerusalem • Rome', cta:'Book Now →', bg:'linear-gradient(135deg,#1a0533,#6a0dad)' },
  ],
  videos:[
    { id:'videoseries?list=PLbpi6ZahtOH6Ar_3GPy3workpGjmGziB5', title:'Sunday Service — Easter Special 2025', date:'April 20, 2025' },
    { id:'LXb3EKWsInQ', title:'Youth Camp Highlights 2025', date:'June 16, 2025' },
    { id:'dQw4w9WgXcQ', title:'Bible Study — Book of Psalms', date:'April 5, 2025' },
    { id:'8R5VlnKGJr4', title:'Prayer & Fasting Service', date:'March 28, 2025' },
  ],
  gallery:[],
  contact:{
    churchName:'Sabha Vartha Church',
    pastor:'Rev. Thomas Abraham',
    address:'Church Road, Thiruvananthapuram, Kerala 695001',
    phone1:'+91 98765 43210',
    phone2:'+91 87654 32109',
    email:'info@sabhavarthachu.rch',
    website:'www.sabhavartha.org',
    serviceTime:'Sunday 10:00 AM',
    mapUrl:''
  }
};

const DEFAULT_NEWS = [
  { id:1, title:'ഈസ്റ്റർ ആഘോഷം — പ്രത്യേക ആരാധന 2025', category:'Events', date:'April 20, 2025',
    image:'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=900&auto=format&fit=crop&q=80',
    summary:'ഈ വർഷത്തെ ഈസ്റ്റർ ആഘോഷം വളരെ പ്രത്യേകമായ ആരാധനകളോടെ ആഘോഷിക്കും. എല്ലാ സഭാംഗങ്ങളേയും ക്ഷണിക്കുന്നു.',
    content:'ഈ വർഷത്തെ ഈസ്റ്റർ ആഘോഷം ഏപ്രിൽ 20-ന് രാവിലെ 6 മണിക്ക് പ്രഭാത ആരാധനയോടെ ആരംഭിക്കും.\n\n"He is Risen! — ഹലലൂയ്യ!"'},
  { id:2, title:'യുവജന ക്യാമ്പ് — ജൂൺ 2025', category:'Youth', date:'March 15, 2025',
    image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&auto=format&fit=crop&q=80',
    summary:'ജൂൺ 14-16 തീയതികളിൽ യൂത്ത് ക്യാമ്പ് നടക്കും. രജിസ്ട്രേഷൻ ആരംഭിച്ചു.',
    content:'ജൂൺ 14 മുതൽ 16 വരെ നടക്കുന്ന യുവജന ക്യാമ്പ്. ഫീ: ₹500. ചർച്ച് ഓഫീസിൽ ബന്ധപ്പെടുക.'},
  { id:3, title:'പ്രാർഥനാ ഉപവാസ ദിനം — ഏപ്രിൽ 25', category:'Prayer', date:'April 10, 2025',
    image:'https://images.unsplash.com/photo-1502767089517-b7983f3eca50?w=700&auto=format&fit=crop&q=80',
    summary:'സഭ മുഴുവൻ ഒരുമിച്ചു പ്രാർഥിക്കാൻ പ്രത്യേക ഉപവാസ ദിനം.',
    content:'ഏപ്രിൽ 25-ന് ഭൂമിക്ക് ഉണർവ്വ് ലഭിക്കേണ്ടതിന് സഭ ഒരുമിച്ചു ദൈവസന്നിധിൽ ഉപവസിക്കും.'},
  { id:4, title:'New Sunday School Building Inauguration', category:'Parish News', date:'March 28, 2025',
    image:'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&auto=format&fit=crop&q=80',
    summary:'The new Sunday School building will be inaugurated by the Bishop on May 5.',
    content:'The inauguration of the new Sunday School building on May 5, 2025. Bishop Mar Thomas will preside at 10:00 AM.'},
  { id:5, title:'ദൈവ ഭവനത്തിൽ ആഴ്ചതോറും ബൈബിൾ പഠനം', category:'Announcement', date:'April 5, 2025',
    image:'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&auto=format&fit=crop&q=80',
    summary:'എല്ലാ ബുധനാഴ്ചയും വൈകിട്ട് 7 മണിക്ക് ബൈബിൾ പഠനം.',
    content:'ആഴ്ചതോറുമുള്ള ബൈബിൾ പഠന ക്ലാസ്സ് ഇനി കൂടുതൽ ആഴത്തിൽ നടത്തും.'},
];

// ============================
// STORAGE HELPERS
// ============================
function getData(key, def) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; } }
function setData(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function getNews()      { return getData('sv_news', DEFAULT_NEWS); }
function saveNews(d)    { setData('sv_news', d); }
function getSettings()  { return { ...DEFAULT_SETTINGS, ...getData('sv_settings', {}) }; }
function saveSettings(d){ const cur = getData('sv_settings', {}); setData('sv_settings', { ...cur, ...d }); }
function getCreds()     { return getData('sv_creds', DEFAULT_CREDS); }
function saveCreds(d)   { setData('sv_creds', d); }

// ============================
// APPLY SETTINGS TO PAGE
// ============================
function applySettings() {
  const s = getSettings();
  // Text
  document.getElementById('siteTitle').textContent = s.siteTitle;
  document.getElementById('siteSubtitle').textContent = s.siteSubtitle;
  document.getElementById('heroTitle').textContent = s.heroTitle;
  document.getElementById('heroSubtitle').textContent = s.heroSubtitle;
  document.getElementById('heroVerse').textContent = s.heroVerse;
  document.getElementById('footerTitle').textContent = s.siteTitle;
  document.getElementById('footerSub').textContent = s.footerSub;
  document.getElementById('pageTabTitle').textContent = s.siteTitle;
  document.getElementById('loginChurchName').textContent = s.siteTitle;
  document.getElementById('newsPageLogo').textContent = '✝ ' + s.siteTitle;

  // Hero background
  const heroBg = document.getElementById('heroBgImg');
  if (s.heroBg) { heroBg.style.backgroundImage = `url(${s.heroBg})`; heroBg.style.opacity = '0.35'; }

  // Logo
  const logoWrap = document.getElementById('heroLogoWrap');
  const logoImg  = document.getElementById('heroLogoImg');
  const heroCross = document.getElementById('heroCrossIcon');
  const headerLogoArea = document.getElementById('headerLogoArea');
  if (s.logo) {
    logoWrap.style.display = 'block';
    logoImg.src = s.logo;
    heroCross.style.display = 'none';
    // Also add to header
    let hLogo = document.getElementById('headerLogoImg');
    if (!hLogo) { hLogo = document.createElement('img'); hLogo.id='headerLogoImg'; hLogo.className='header-logo-img'; headerLogoArea.appendChild(hLogo); }
    hLogo.src = s.logo;
  } else {
    logoWrap.style.display = 'none';
    heroCross.style.display = 'block';
    const hLogo = document.getElementById('headerLogoImg');
    if (hLogo) hLogo.remove();
  }

  // Theme
  const themes = ['emerald','royal','crimson','ocean','sunset','rose','teal','violet','amber','white'];
  document.body.className = '';
  if (s.theme && themes.includes(s.theme)) document.body.classList.add('theme-'+s.theme);

  // Rolling ad
  renderRollingAd(s.rollingAd);

  // Sidebar ads
  renderSidebarAds(s.sidebarAds);
  renderDetailAds(s.sidebarAds);

  // Bible quotes
  document.getElementById('bq1text').textContent = s.bibleQuote1.text;
  document.getElementById('bq1ref').textContent  = s.bibleQuote1.ref;
  document.getElementById('bq2text').textContent = s.bibleQuote2.text;
  document.getElementById('bq2ref').textContent  = s.bibleQuote2.ref;

  // Ticker
  const verses = s.tickerVerses.join('   •   ');
  const el = document.getElementById('tickerContent');
  el.textContent = verses + '   •   ' + verses;

  // Videos
  renderVideos(s.videos, 'videoGridHome');
  renderVideos(s.videos, 'videoGridFull');
  renderAdminVideoList(s.videos);

  // Gallery
  renderGallery(s.gallery || []);

  // Contact
  renderContact(s.contact || DEFAULT_SETTINGS.contact);

  // Footer contact strip
  renderFooterContact(s.contact || DEFAULT_SETTINGS.contact);
}

// ============================
// ROLLING AD
// ============================
function renderRollingAd(text) {
  const el = document.getElementById('rollingAdContent');
  if (!el) return;
  const parts = text.split('|').map(p=>p.trim()).filter(Boolean);
  const content = parts.join('   &nbsp;&nbsp;|&nbsp;&nbsp;   ') + '   &nbsp;&nbsp;|&nbsp;&nbsp;   ' + parts.join('   &nbsp;&nbsp;|&nbsp;&nbsp;   ');
  el.innerHTML = content;
}

// ============================
// SIDEBAR ADS
// ============================
function renderSidebarAds(ads) {
  const wrap = document.getElementById('adSlidesWrap');
  const dots  = document.getElementById('adDots');
  if (!wrap || !dots) return;
  wrap.innerHTML = ads.map((a,i)=>`
    <div class="ad-slide ${i===0?'active':''}">
      <div class="ad-block" style="background:${a.bg||'linear-gradient(135deg,#1a1a2e,#2d2d5e)'}">
        <span class="ad-icon">${a.icon||'📢'}</span>
        <p class="ad-name">${a.name||''}</p>
        <p class="ad-desc">${a.desc||''}</p>
        <span class="ad-cta-btn">${a.cta||'Learn More →'}</span>
      </div>
    </div>
  `).join('');
  dots.innerHTML = ads.map((_,i)=>`<span class="ad-dot ${i===0?'active':''}" onclick="goAdSlide(${i})"></span>`).join('');
  currentAdSlide=0;
}

function renderDetailAds(ads) {
  const col = document.getElementById('newsDetailAds');
  if (!col) return;
  col.innerHTML = `<div class="ad-fixed-label-tag">Advertisement</div>` + ads.map(a=>`
    <div class="ad-side-item" style="background:${a.bg||'linear-gradient(135deg,#1a1a2e,#2d2d5e)'}">
      <span class="ad-icon">${a.icon||'📢'}</span>
      <p class="ad-name">${a.name||''}</p>
      <p class="ad-desc">${a.desc||''}</p>
      <span class="ad-cta-btn">${a.cta||'Learn More →'}</span>
    </div>
  `).join('');
}

// ============================
// AD SLIDESHOW
// ============================
let currentAdSlide=0;
let adTimer=null;
function goAdSlide(idx) {
  const slides=document.querySelectorAll('.ad-slide');
  const dotEls=document.querySelectorAll('.ad-dot');
  if(!slides.length)return;
  slides[currentAdSlide].classList.remove('active');
  dotEls[currentAdSlide]&&dotEls[currentAdSlide].classList.remove('active');
  currentAdSlide=idx%slides.length;
  slides[currentAdSlide].classList.add('active');
  dotEls[currentAdSlide]&&dotEls[currentAdSlide].classList.add('active');
}
function startAdCycle(){
  if(adTimer)clearInterval(adTimer);
  adTimer=setInterval(()=>{ const s=document.querySelectorAll('.ad-slide'); if(s.length)goAdSlide((currentAdSlide+1)%s.length); },4500);
}

// ============================
// VIDEOS
// ============================
function extractYtId(input) {
  if (!input) return '';
  const match = input.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  if (match) return match[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) return input;
  if (input.includes('list=')) {
    const m = input.match(/list=([A-Za-z0-9_-]+)/);
    if (m) return 'videoseries?list=' + m[1];
  }
  return input;
}
function renderVideos(videos, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = videos.map(v=>`
    <div class="video-card">
      <div class="video-thumb-wrap">
        <iframe class="video-iframe" src="https://www.youtube.com/embed/${v.id}" title="${v.title}" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-info">
        <h4 class="video-title">${v.title}</h4>
        <p class="video-meta">✝ Sabha Vartha • ${v.date}</p>
      </div>
    </div>
  `).join('');
}

// ============================
// GALLERY
// ============================
function renderGallery(gallery) {
  const el = document.getElementById('galleryGrid');
  if (!el) return;
  if (!gallery.length) { el.innerHTML='<div class="gallery-empty">No photos yet. Add via Admin → Gallery.</div>'; return; }
  el.innerHTML = gallery.map((g,i)=>`
    <div class="gallery-item">
      <img src="${g.img}" alt="${g.caption||''}"/>
      <div class="gallery-caption">${g.caption||''}</div>
    </div>
  `).join('');
}

// ============================
// CONTACT
// ============================
function renderContact(c) {
  const box = document.getElementById('contactInfoBox');
  if (!box) return;
  box.innerHTML = `
    <h3 style="font-family:'Noto Serif Malayalam',serif;font-size:1.3rem;color:var(--text);margin-bottom:22px;">✝ ${c.churchName||''}</h3>
    ${c.pastor?`<div class="contact-info-row"><span class="contact-info-icon">👤</span><div><div class="contact-info-label">Pastor / Vicar</div><div class="contact-info-val">${c.pastor}</div></div></div>`:''}
    ${c.address?`<div class="contact-info-row"><span class="contact-info-icon">📍</span><div><div class="contact-info-label">Address</div><div class="contact-info-val">${c.address.replace(/\n/g,'<br>')}</div></div></div>`:''}
    ${c.phone1?`<div class="contact-info-row"><span class="contact-info-icon">📞</span><div><div class="contact-info-label">Phone</div><div class="contact-info-val">${c.phone1}${c.phone2?'<br>'+c.phone2:''}</div></div></div>`:''}
    ${c.email?`<div class="contact-info-row"><span class="contact-info-icon">✉️</span><div><div class="contact-info-label">Email</div><div class="contact-info-val"><a href="mailto:${c.email}" style="color:var(--gold)">${c.email}</a></div></div></div>`:''}
    ${c.website?`<div class="contact-info-row"><span class="contact-info-icon">🌐</span><div><div class="contact-info-label">Website</div><div class="contact-info-val"><a href="${c.website}" target="_blank" style="color:var(--gold)">${c.website}</a></div></div></div>`:''}
    ${c.serviceTime?`<div class="contact-info-row"><span class="contact-info-icon">🕙</span><div><div class="contact-info-label">Service Time</div><div class="contact-info-val">${c.serviceTime}</div></div></div>`:''}
  `;
  const mapBox = document.getElementById('contactMapBox');
  if (mapBox) {
    mapBox.innerHTML = c.mapUrl ? `<div class="contact-map-wrap"><iframe src="${c.mapUrl}" allowfullscreen loading="lazy"></iframe></div>`
      : `<div style="padding:40px;text-align:center;color:var(--text-faint)">📍 Add a Google Maps URL in Admin → Contact to show map here.</div>`;
  }
}

function renderFooterContact(c) {
  const strip = document.getElementById('footerContactStrip');
  if (!strip) return;
  const items = [];
  if (c.phone1) items.push(`<span class="footer-contact-item">📞 ${c.phone1}</span>`);
  if (c.email)  items.push(`<span class="footer-contact-item">✉️ ${c.email}</span>`);
  if (c.address) items.push(`<span class="footer-contact-item">📍 ${c.address.split('\n')[0]}</span>`);
  strip.innerHTML = items.join('');
}

// ============================
// SECTION NAVIGATION
// ============================
function showSection(name) {
  ['home','parish','events','announcements','videos','gallery','contact'].forEach(s=>{
    const el=document.getElementById('sec-'+s);
    if(el) el.classList.toggle('hidden', s!==name);
  });
  document.querySelectorAll('.nav-link').forEach((l,i)=>{
    const names=['home','parish','events','announcements','videos','gallery','contact'];
    l.classList.toggle('active', names[i]===name);
  });
  // Fill section grids
  const news=getNews();
  if(name==='parish') fillCategoryGrid('parishGrid','Parish News',news);
  if(name==='events') fillCategoryGrid('eventsGrid','Events',news);
  if(name==='announcements') fillCategoryGrid('announcementsGrid','Announcement',news);
  window.scrollTo(0,0);
}

function fillCategoryGrid(gridId, category, news) {
  const el=document.getElementById(gridId);
  if(!el)return;
  const filtered=news.filter(n=>n.category===category||n.category.toLowerCase()===category.toLowerCase());
  if(!filtered.length){el.innerHTML=`<div class="empty-state"><span class="empty-cross">✝</span><p>No ${category} items yet.</p></div>`;return;}
  el.innerHTML=filtered.map((item,idx)=>`
    <div class="news-card" style="animation-delay:${idx*0.1}s">
      <div class="card-img-wrap" onclick="openNewsFullPage(${item.id})" style="cursor:pointer">
        <img class="card-img" src="${item.image||FALLBACK}" alt="${item.title}" onerror="this.src='${FALLBACK}'"/>
        <span class="card-category-badge">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title" onclick="openNewsFullPage(${item.id})" style="cursor:pointer">${item.title}</h3>
        <p class="card-summary">${item.summary}</p>
        <div class="card-meta">
          <span class="card-date">📅 ${item.date}</span>
          <span class="card-read-more" onclick="openNewsFullPage(${item.id})">Read More →</span>
        </div>
        <div class="card-share-row"><button class="card-share-btn" onclick="shareNews(${item.id},event)">🔗 Share</button></div>
      </div>
    </div>
  `).join('');
}

const FALLBACK='https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=700&auto=format&fit=crop&q=80';

// ============================
// RENDER NEWS (home)
// ============================
function renderNews() {
  const news=getNews();
  const grid=document.getElementById('newsGrid');
  if(!news.length){grid.innerHTML=`<div class="empty-state"><span class="empty-cross">✝</span><p>No news yet. Login as admin to add.</p></div>`;return;}
  grid.innerHTML=news.map((item,idx)=>`
    <div class="news-card" style="animation-delay:${idx*0.1}s">
      <div class="card-img-wrap" onclick="openNewsFullPage(${item.id})" style="cursor:pointer">
        <img class="card-img" src="${item.image||FALLBACK}" alt="${item.title}" onerror="this.src='${FALLBACK}'"/>
        <span class="card-category-badge">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title" onclick="openNewsFullPage(${item.id})" style="cursor:pointer">${item.title}</h3>
        <p class="card-summary">${item.summary}</p>
        <div class="card-meta">
          <span class="card-date">📅 ${item.date}</span>
          <span class="card-read-more" onclick="openNewsFullPage(${item.id})">Read More →</span>
        </div>
        <div class="card-share-row"><button class="card-share-btn" onclick="shareNews(${item.id},event)">🔗 Share</button></div>
      </div>
    </div>
  `).join('');

  // Strip
  const strip=document.getElementById('newsStrip');
  if(strip) strip.innerHTML=news.map(item=>`
    <div class="strip-card" onclick="openNewsFullPage(${item.id})">
      <img src="${item.image||FALLBACK}" alt="${item.title}" onerror="this.src='${FALLBACK}'"/>
      <div class="strip-card-body">
        <div class="strip-card-cat">${item.category}</div>
        <h4 class="strip-card-title">${item.title}</h4>
      </div>
    </div>
  `).join('');

  // News ticker
  const ticker=document.getElementById('newsTickerContent');
  if(ticker){ const h=news.map(n=>`✝  ${n.title}  •  ${n.category}  `).join('     '); ticker.textContent=h+'     '+h; }
}

// ============================
// NEWS FULL PAGE
// ============================
let currentNewsId=null;
function openNewsFullPage(id) {
  const news=getNews();
  const item=news.find(n=>n.id===id);
  if(!item)return;
  currentNewsId=id;
  document.getElementById('fullDetailImg').src=item.image||FALLBACK;
  document.getElementById('fullDetailTitle').textContent=item.title;
  document.getElementById('fullDetailCategory').textContent=item.category;
  document.getElementById('fullDetailDate').textContent='📅 '+item.date;
  document.getElementById('fullDetailContent').innerHTML=(item.content||'').replace(/\n/g,'<br>');
  history.pushState({newsId:id},'','#news-'+id);
  showPage('newsFullPage');
}
function closeNewsFullPage(){ history.pushState({},'',window.location.pathname); showHome(); }

function showPage(id) {
  ['homePage','newsFullPage','adminFullPage'].forEach(p=>document.getElementById(p).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo(0,0);
}
function showHome() {
  document.getElementById('homePage').classList.remove('hidden');
  document.getElementById('newsFullPage').classList.add('hidden');
  document.getElementById('adminFullPage').classList.add('hidden');
}

function shareNews(id,evt) {
  if(evt)evt.stopPropagation();
  const item=getNews().find(n=>n.id===id);
  if(!item)return;
  const url=window.location.href.split('#')[0]+'#news-'+id;
  if(navigator.share)navigator.share({title:item.title+' — Sabha Vartha',url});
  else navigator.clipboard.writeText(url).then(()=>showToast('✅ Link copied!')).catch(()=>showToast('🔗 '+url));
}
function shareCurrentNews(){ if(currentNewsId)shareNews(currentNewsId,null); }

// ============================
// LOGIN
// ============================
function openLogin(){ document.getElementById('loginModal').classList.add('active'); document.getElementById('loginError').textContent=''; }
function closeLogin(){ document.getElementById('loginModal').classList.remove('active'); }
function closeLoginOutside(e){ if(e.target===document.getElementById('loginModal'))closeLogin(); }
function doLogin(){
  const u=document.getElementById('loginUser').value.trim();
  const p=document.getElementById('loginPass').value;
  const c=getCreds();
  if(u===c.user&&p===c.pass){ closeLogin(); sessionStorage.setItem('svAdmin','1'); openAdminPage(); }
  else { document.getElementById('loginError').textContent='⚠️ Invalid credentials.'; document.getElementById('loginPass').value=''; }
}
document.addEventListener('keydown',e=>{ if(e.key==='Enter'&&document.getElementById('loginModal').classList.contains('active'))doLogin(); if(e.key==='Escape')closeLogin(); });

// ============================
// ADMIN
// ============================
function openAdminPage() {
  populateAdminForms();
  renderAdminList();
  renderAdminAdsList();
  renderAdminVideoList(getSettings().videos);
  renderAdminGallery();
  showPage('adminFullPage');
}
function closeAdminPage(){ showHome(); }
function doLogout(){ sessionStorage.removeItem('svAdmin'); closeAdminPage(); }

function openAdminTab(tabId, btn) {
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.add('hidden'));
  document.querySelectorAll('.admin-nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(tabId).classList.remove('hidden');
  btn.classList.add('active');
}

function populateAdminForms() {
  const s=getSettings();
  // Appearance
  setVal('appSiteTitle',s.siteTitle);
  setVal('appSiteSubtitle',s.siteSubtitle);
  setVal('appHeroTitle',s.heroTitle);
  setVal('appHeroSubtitle',s.heroSubtitle);
  setVal('appHeroVerse',s.heroVerse);
  setVal('appFooterSub',s.footerSub);
  // Quotes
  setVal('q1text',s.bibleQuote1.text);
  setVal('q1ref',s.bibleQuote1.ref);
  setVal('q2text',s.bibleQuote2.text);
  setVal('q2ref',s.bibleQuote2.ref);
  setVal('tickerVerses',s.tickerVerses.join('\n'));
  // Rolling ad
  setVal('rollingAdText',s.rollingAd);
  // Contact
  const c=s.contact||DEFAULT_SETTINGS.contact;
  setVal('ctChurchName',c.churchName);setVal('ctPastor',c.pastor);setVal('ctAddress',c.address);
  setVal('ctPhone1',c.phone1);setVal('ctPhone2',c.phone2);setVal('ctEmail',c.email);
  setVal('ctWebsite',c.website);setVal('ctServiceTime',c.serviceTime);setVal('ctMapUrl',c.mapUrl||'');
  // Hero bg preview
  if(s.heroBg){ document.getElementById('heroBgPreview').src=s.heroBg; document.getElementById('heroBgPreview').classList.remove('hidden'); document.getElementById('heroBgPlaceholder').classList.add('hidden'); document.getElementById('heroBgRemoveBtn').classList.remove('hidden'); document.getElementById('heroBgData').value=s.heroBg; }
  // Logo preview
  if(s.logo){ document.getElementById('logoPreview').src=s.logo; document.getElementById('logoPreview').classList.remove('hidden'); document.getElementById('logoPlaceholder').classList.add('hidden'); document.getElementById('logoRemoveBtn').classList.remove('hidden'); document.getElementById('logoData').value=s.logo; }
  // Theme
  renderThemeGrid(s.theme);
}
function setVal(id,val){ const el=document.getElementById(id); if(el)el.value=val||''; }

// ============================
// THEME GRID
// ============================
const THEMES = [
  {key:'',       label:'Default', bg:'linear-gradient(135deg,#0b0f1a,#d4a017)'},
  {key:'emerald',label:'Emerald', bg:'linear-gradient(135deg,#061a10,#22c55e)'},
  {key:'royal',  label:'Royal',   bg:'linear-gradient(135deg,#06061a,#818cf8)'},
  {key:'crimson',label:'Crimson', bg:'linear-gradient(135deg,#1a0609,#f43f5e)'},
  {key:'ocean',  label:'Ocean',   bg:'linear-gradient(135deg,#030d1a,#0ea5e9)'},
  {key:'sunset', label:'Sunset',  bg:'linear-gradient(135deg,#1a0c00,#f97316)'},
  {key:'rose',   label:'Rose',    bg:'linear-gradient(135deg,#1a060f,#ec4899)'},
  {key:'teal',   label:'Teal',    bg:'linear-gradient(135deg,#00131a,#14b8a6)'},
  {key:'violet', label:'Violet',  bg:'linear-gradient(135deg,#0f0620,#a855f7)'},
  {key:'amber',  label:'Amber',   bg:'linear-gradient(135deg,#120900,#f59e0b)'},
  {key:'white',  label:'Light',   bg:'linear-gradient(135deg,#e2e8f0,#1e40af)'},
];

function renderThemeGrid(selected) {
  const el=document.getElementById('themeGrid');
  if(!el)return;
  el.innerHTML=THEMES.map(t=>`
    <div class="theme-swatch ${selected===t.key?'selected':''}" style="background:${t.bg}" onclick="applyTheme('${t.key}',this)">${t.label}</div>
  `).join('');
}

function applyTheme(key, el) {
  document.querySelectorAll('.theme-swatch').forEach(s=>s.classList.remove('selected'));
  el.classList.add('selected');
  const themes=['emerald','royal','crimson','ocean','sunset','rose','teal','violet','amber','white'];
  document.body.className='';
  if(key&&themes.includes(key))document.body.classList.add('theme-'+key);
  saveSettings({theme:key});
  showToast('🎨 Theme applied!');
}

function applyCustomTheme() {
  const accent=document.getElementById('customAccent').value;
  const bg=document.getElementById('customBg').value;
  document.documentElement.style.setProperty('--gold',accent);
  document.documentElement.style.setProperty('--gold-lt',accent);
  document.documentElement.style.setProperty('--amber',accent);
  document.documentElement.style.setProperty('--ink',bg);
  document.documentElement.style.setProperty('--deep',bg);
  showToast('🎨 Custom theme applied!');
}

// ============================
// APPEARANCE SAVES
// ============================
function saveAppearanceText() {
  saveSettings({
    siteTitle:getV('appSiteTitle'),siteSubtitle:getV('appSiteSubtitle'),
    heroTitle:getV('appHeroTitle'),heroSubtitle:getV('appHeroSubtitle'),
    heroVerse:getV('appHeroVerse'),footerSub:getV('appFooterSub')
  });
  applySettings();
  showToast('✅ Text saved!');
}

function saveHeroBg() {
  const data=document.getElementById('heroBgData').value;
  saveSettings({heroBg:data});
  applySettings();
  showToast('✅ Background applied!');
}
function removeHeroBg() {
  resetImgField('heroBgData','heroBgFile','heroBgPreview','heroBgPlaceholder','heroBgRemoveBtn');
  saveSettings({heroBg:''});
  document.getElementById('heroBgImg').style.backgroundImage='';
}

function saveLogo() {
  const data=document.getElementById('logoData').value;
  saveSettings({logo:data});
  applySettings();
  showToast('✅ Logo applied!');
}
function removeLogo() {
  resetImgField('logoData','logoFile','logoPreview','logoPlaceholder','logoRemoveBtn');
  saveSettings({logo:''});
  document.getElementById('heroLogoWrap').style.display='none';
  document.getElementById('heroCrossIcon').style.display='block';
  const h=document.getElementById('headerLogoImg');if(h)h.remove();
}

// ============================
// ADS
// ============================
function saveRollingAd() {
  const text=getV('rollingAdText');
  saveSettings({rollingAd:text});
  renderRollingAd(text);
  showToast('✅ Rolling ad saved!');
}
function addSidebarAd() {
  const s=getSettings();
  const ads=s.sidebarAds||[];
  if(ads.length>=6){showToast('⚠️ Max 6 ads allowed.');return;}
  const icon=getV('adIcon')||'📢';
  const name=getV('adTitle');
  const desc=getV('adSubtitle');
  const cta=getV('adCta')||'Learn More →';
  const bg=getV('adBg')||'linear-gradient(135deg,#1a1a2e,#2d2d5e)';
  if(!name){showToast('⚠️ Enter ad title.');return;}
  ads.push({icon,name,desc,cta,bg});
  saveSettings({sidebarAds:ads});
  renderSidebarAds(ads);
  renderDetailAds(ads);
  renderAdminAdsList();
  setVal('adTitle','');setVal('adSubtitle','');setVal('adIcon','');setVal('adCta','');setVal('adBg','');
  showToast('✅ Ad added!');
}
function deleteSidebarAd(i) {
  const s=getSettings();
  const ads=s.sidebarAds||[];
  ads.splice(i,1);
  saveSettings({sidebarAds:ads});
  renderSidebarAds(ads);renderDetailAds(ads);renderAdminAdsList();
  showToast('🗑 Ad removed.');
}
function renderAdminAdsList() {
  const el=document.getElementById('adminAdsList');
  if(!el)return;
  const ads=getSettings().sidebarAds||[];
  el.innerHTML=ads.map((a,i)=>`
    <div class="admin-list-item">
      <span style="font-size:1.6rem">${a.icon}</span>
      <div style="flex:1"><div class="admin-list-label">${a.name}</div><div class="admin-list-sub">${a.desc}</div></div>
      <button class="admin-btn-danger" onclick="deleteSidebarAd(${i})">🗑 Remove</button>
    </div>
  `).join('') || '<p style="color:var(--text-faint);font-size:.88rem">No ads yet.</p>';
}

// ============================
// VIDEOS
// ============================
function addVideo() {
  const s=getSettings();
  const videos=s.videos||[];
  const rawUrl=getV('vidUrl');
  const vidId=extractYtId(rawUrl);
  const title=getV('vidTitle');
  const date=getV('vidDate')||new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  if(!vidId||!title){showToast('⚠️ Enter video title and URL.');return;}
  videos.unshift({id:vidId,title,date});
  saveSettings({videos});
  renderVideos(videos,'videoGridHome');
  renderVideos(videos,'videoGridFull');
  renderAdminVideoList(videos);
  setVal('vidTitle','');setVal('vidUrl','');setVal('vidDate','');
  showToast('✅ Video added!');
}
function deleteVideo(i) {
  const s=getSettings();
  const videos=s.videos||[];
  videos.splice(i,1);
  saveSettings({videos});
  renderVideos(videos,'videoGridHome');
  renderVideos(videos,'videoGridFull');
  renderAdminVideoList(videos);
  showToast('🗑 Video removed.');
}
function renderAdminVideoList(videos) {
  const el=document.getElementById('adminVideoList');
  if(!el)return;
  el.innerHTML=(videos||[]).map((v,i)=>`
    <div class="admin-list-item">
      <span style="font-size:1.4rem">📺</span>
      <div style="flex:1"><div class="admin-list-label">${v.title}</div><div class="admin-list-sub">${v.date} — ID: ${v.id}</div></div>
      <button class="admin-btn-danger" onclick="deleteVideo(${i})">🗑 Remove</button>
    </div>
  `).join('') || '<p style="color:var(--text-faint);font-size:.88rem">No videos yet.</p>';
}

// ============================
// GALLERY
// ============================
function addGalleryPhoto() {
  const s=getSettings();
  const gallery=s.gallery||[];
  const img=document.getElementById('galleryImgData').value;
  const caption=getV('galleryCaption');
  if(!img){showToast('⚠️ Upload a photo.');return;}
  gallery.unshift({img,caption});
  saveSettings({gallery});
  renderGallery(gallery);
  renderAdminGallery();
  resetImgField('galleryImgData','galleryFile','galleryPreview','galleryPlaceholder','galleryRemoveBtn');
  setVal('galleryCaption','');
  showToast('✅ Photo added!');
}
function deleteGalleryPhoto(i) {
  const s=getSettings();
  const gallery=s.gallery||[];
  gallery.splice(i,1);
  saveSettings({gallery});
  renderGallery(gallery);
  renderAdminGallery();
  showToast('🗑 Photo removed.');
}
function renderAdminGallery() {
  const el=document.getElementById('galleryAdminGrid');
  if(!el)return;
  const gallery=getSettings().gallery||[];
  el.innerHTML=gallery.map((g,i)=>`
    <div class="gallery-admin-item">
      <img src="${g.img}" alt="${g.caption||''}"/>
      <button class="gallery-admin-del" onclick="deleteGalleryPhoto(${i})">✕</button>
    </div>
  `).join('') || '<p style="color:var(--text-faint);font-size:.88rem;grid-column:1/-1">No photos yet.</p>';
}

// ============================
// BIBLE QUOTES + TICKER
// ============================
function saveQuotes() {
  saveSettings({
    bibleQuote1:{text:getV('q1text'),ref:getV('q1ref')},
    bibleQuote2:{text:getV('q2text'),ref:getV('q2ref')}
  });
  applySettings();
  showToast('✅ Quotes saved!');
}
function saveTicker() {
  const lines=getV('tickerVerses').split('\n').map(l=>l.trim()).filter(Boolean);
  saveSettings({tickerVerses:lines});
  applySettings();
  showToast('✅ Ticker saved!');
}

// ============================
// CONTACT
// ============================
function saveContact() {
  saveSettings({contact:{
    churchName:getV('ctChurchName'),pastor:getV('ctPastor'),address:getV('ctAddress'),
    phone1:getV('ctPhone1'),phone2:getV('ctPhone2'),email:getV('ctEmail'),
    website:getV('ctWebsite'),serviceTime:getV('ctServiceTime'),mapUrl:getV('ctMapUrl')
  }});
  applySettings();
  showToast('✅ Contact saved!');
}

// ============================
// SECURITY
// ============================
function changePassword() {
  const creds=getCreds();
  const old=document.getElementById('secOldPass').value;
  const nw =document.getElementById('secNewPass').value;
  const cf =document.getElementById('secConfPass').value;
  const nu =document.getElementById('secNewUser').value.trim();
  const msg=document.getElementById('secMsg');
  if(old!==creds.pass){msg.style.color='#f87171';msg.textContent='⚠️ Current password is incorrect.';return;}
  if(nw&&nw.length<6){msg.style.color='#f87171';msg.textContent='⚠️ New password must be at least 6 characters.';return;}
  if(nw&&nw!==cf){msg.style.color='#f87171';msg.textContent='⚠️ Passwords do not match.';return;}
  saveCreds({user:nu||creds.user, pass:nw||creds.pass});
  msg.style.color='#4ade80';
  msg.textContent='✅ Credentials updated successfully!';
  ['secOldPass','secNewPass','secConfPass','secNewUser'].forEach(id=>document.getElementById(id).value='');
}

// ============================
// NEWS CRUD
// ============================
function renderAdminList() {
  const news=getNews();
  const list=document.getElementById('adminNewsList');
  if(!news.length){list.innerHTML='<p style="color:var(--text-faint);font-size:.88rem">No articles yet.</p>';return;}
  list.innerHTML=news.map(item=>`
    <div class="admin-news-item">
      <img class="admin-news-thumb" src="${item.image||FALLBACK}" alt="" onerror="this.src='${FALLBACK}'"/>
      <div class="admin-news-info">
        <div class="admin-news-title">${item.title}</div>
        <div class="admin-news-cat">${item.category} • ${item.date}</div>
      </div>
      <div class="admin-news-actions">
        <button class="admin-btn-secondary" onclick="startEdit(${item.id})">✏️ Edit</button>
        <button class="admin-btn-danger" onclick="deleteNews(${item.id})">🗑 Delete</button>
      </div>
    </div>
  `).join('');
}

function saveNewsForm() {
  const editId=document.getElementById('editingId').value;
  const title=getV('newTitle').trim();
  const cat=document.getElementById('newCategory').value;
  const imgData=document.getElementById('newImageData').value;
  const summary=getV('newSummary').trim();
  const content=getV('newContent').trim();
  if(!title||!summary||!content){showToast('⚠️ Fill in Title, Summary and Content.');return;}
  let news=getNews();
  const today=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  if(editId){
    const idx=news.findIndex(n=>n.id===parseInt(editId));
    if(idx!==-1){news[idx]={...news[idx],title,category:cat,summary,content};if(imgData)news[idx].image=imgData;}
    cancelEdit();showToast('✅ News updated!');
  } else {
    news.unshift({id:Date.now(),title,category:cat,date:today,image:imgData||FALLBACK,summary,content});
    clearForm();showToast('✅ News published!');
  }
  saveNews(news);renderNews();renderAdminList();
}
function startEdit(id) {
  const item=getNews().find(n=>n.id===id);if(!item)return;
  document.getElementById('editingId').value=id;
  setVal('newTitle',item.title);document.getElementById('newCategory').value=item.category;
  setVal('newSummary',item.summary);setVal('newContent',item.content);
  if(item.image){document.getElementById('imagePreview').src=item.image;document.getElementById('imagePreview').classList.remove('hidden');document.getElementById('uploadPlaceholder').classList.add('hidden');document.getElementById('removeImageBtn').classList.remove('hidden');}
  document.getElementById('newFormTitle').textContent='✏️ Edit News';
  document.getElementById('publishBtn').textContent='💾 Save Changes';
  document.getElementById('cancelEditBtn').classList.remove('hidden');
  document.getElementById('tab-news').scrollTo(0,0);
  openAdminTab('tab-news', document.querySelector('.admin-nav-btn'));
}
function cancelEdit(){
  document.getElementById('editingId').value='';
  document.getElementById('newFormTitle').textContent='➕ Add News';
  document.getElementById('publishBtn').textContent='✝ Publish';
  document.getElementById('cancelEditBtn').classList.add('hidden');
  clearForm();
}
function clearForm(){ setVal('newTitle','');setVal('newSummary','');setVal('newContent','');resetImgField('newImageData','newImageFile','imagePreview','uploadPlaceholder','removeImageBtn'); }
function deleteNews(id){ if(!confirm('Delete this article?'))return; saveNews(getNews().filter(n=>n.id!==id)); renderNews();renderAdminList();showToast('🗑 Deleted.'); }

// ============================
// IMAGE UPLOAD HELPER
// ============================
function handleImageUpload(event, dataId, previewId, placeholderId, removeBtnId) {
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    document.getElementById(dataId).value=e.target.result;
    document.getElementById(previewId).src=e.target.result;
    document.getElementById(previewId).classList.remove('hidden');
    document.getElementById(placeholderId).classList.add('hidden');
    document.getElementById(removeBtnId).classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}
function removeImageField(dataId,fileId,previewId,placeholderId,removeBtnId){
  document.getElementById(dataId).value='';
  document.getElementById(fileId).value='';
  document.getElementById(previewId).src='';
  document.getElementById(previewId).classList.add('hidden');
  document.getElementById(placeholderId).classList.remove('hidden');
  document.getElementById(removeBtnId).classList.add('hidden');
}
function resetImgField(dataId,fileId,previewId,placeholderId,removeBtnId){ removeImageField(dataId,fileId,previewId,placeholderId,removeBtnId); }

// ============================
// UTIL
// ============================
function getV(id){ const el=document.getElementById(id);return el?el.value:''; }
function showToast(msg){ const t=document.getElementById('toast');t.textContent=msg;t.classList.remove('hidden');t.classList.add('show');setTimeout(()=>{t.classList.remove('show');t.classList.add('hidden');},3200); }

function checkHashOnLoad(){
  const hash=window.location.hash;
  if(hash&&hash.startsWith('#news-')){const id=parseInt(hash.replace('#news-',''));if(!isNaN(id))openNewsFullPage(id);}
}
window.addEventListener('popstate',()=>{ if(!window.location.hash)showHome(); });

// ============================
// INIT
// ============================
document.addEventListener('DOMContentLoaded',()=>{
  if(!localStorage.getItem('sv_news'))saveNews(DEFAULT_NEWS);
  applySettings();
  renderNews();
  startAdCycle();
  if(sessionStorage.getItem('svAdmin'))openAdminPage();
  else checkHashOnLoad();
});
