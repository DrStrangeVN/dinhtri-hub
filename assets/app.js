async function loadJSON(path){
  const r = await fetch(path + '?v=' + Date.now());
  if(!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function fmtDate(iso){
  try{
    const d = new Date(iso);
    return d.toLocaleDateString('vi-VN',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'});
  }catch(e){return iso;}
}

async function renderFeatured(){
  const grid = document.getElementById('featured-grid');
  const stamp = document.getElementById('featured-updated');
  try{
    const data = await loadJSON('data/featured.json');
    stamp.textContent = 'Cập nhật: ' + fmtDate(data.updated_at);
    grid.innerHTML = data.items.map(n=>`
      <a class="news-card" href="${esc(n.source_url)}" target="_blank" rel="noopener">
        <div class="news-top">
          <span class="src-tag" style="background:${esc(n.color||'#6366f1')}">${esc(n.source)}</span>
          <span class="news-date">${esc(n.date)}</span>
        </div>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.excerpt)}</p>
        <span class="news-link">Đọc bản tin đầy đủ →</span>
      </a>`).join('');
  }catch(e){
    stamp.textContent = 'Chưa có dữ liệu';
    grid.innerHTML = '<p style="color:#64748b">Tin nổi bật sẽ được cập nhật lúc 8:00 mỗi sáng.</p>';
  }
}

async function renderReports(){
  const grid = document.getElementById('cards-grid');
  try{
    const reports = await loadJSON('data/reports.json');
    grid.innerHTML = reports.map(r=>`
      <a class="card" style="--ac:${esc(r.accent)}" href="${esc(r.url)}" target="_blank" rel="noopener">
        <div class="mono">${esc(r.mono)}</div>
        <h3>${esc(r.name)}</h3>
        <p>${esc(r.tagline)}</p>
        <div class="card-foot">
          <span class="freq">${esc(r.freq)}</span>
          <span class="go">Mở bản tin →</span>
        </div>
      </a>`).join('');
  }catch(e){
    grid.innerHTML = '<p style="color:#64748b">Không tải được danh sách chuyên mục.</p>';
  }
}

document.getElementById('today-label').textContent =
  new Date().toLocaleDateString('vi-VN',{weekday:'long',day:'2-digit',month:'2-digit'});
renderFeatured();
renderReports();
