// ============================================================
// HubConnect — Master API Connection File v2.0
// Add ONE line to every HTML page, just before </body>:
//   <script src="api.js"></script>
// ============================================================

const API_BASE = 'https://hubconnect-backend.onrender.com/api';

// ── STORAGE HELPERS ───────────────────────────────────────────
const Auth = {
  getToken: () => localStorage.getItem('hc_token'),
  getUser:  () => JSON.parse(localStorage.getItem('hc_user') || 'null'),
  save: (token, user) => {
    localStorage.setItem('hc_token', token);
    localStorage.setItem('hc_user', JSON.stringify(user));
  },
  clear: () => {
    localStorage.removeItem('hc_token');
    localStorage.removeItem('hc_user');
  },
  isLoggedIn: () => !!localStorage.getItem('hc_token'),
};

// ── CORE FETCH ────────────────────────────────────────────────
async function api(method, path, body = null, auth = true) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth && Auth.getToken()) headers['Authorization'] = `Bearer ${Auth.getToken()}`;
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method, headers,
      body: body ? JSON.stringify(body) : null,
    });
    const data = await res.json();
    if (res.status === 401) { Auth.clear(); window.location.href = '/hubconnect/login.html'; return null; }
    return { ok: res.ok, data };
  } catch {
    return { ok: false, data: { message: 'Network error. Please check your connection.' } };
  }
}

// ── UI HELPERS ────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const setText = (sel, val) => { const el = $(sel); if (el) el.textContent = val; };
const setVal  = (sel, val) => { const el = $(sel); if (el) el.value = val; };
const naira   = (n) => '\u20A6' + parseFloat(n || 0).toLocaleString('en-NG', { minimumFractionDigits: 0 });

function toast(msg, type = 'success') {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `position:fixed;top:24px;right:24px;z-index:9999;padding:14px 20px;border-radius:10px;
    font-size:14px;font-weight:500;box-shadow:0 4px 16px rgba(0,0,0,.15);max-width:320px;
    background:${type==='success'?'#dcfce7':'#fee2e2'};color:${type==='success'?'#15803d':'#dc2626'};transition:opacity .4s;`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; setTimeout(()=>t.remove(),400); }, 3500);
}

function setLoading(btn, on) {
  if (!btn) return;
  if (on) { btn.dataset.orig=btn.textContent; btn.textContent='Please wait\u2026'; btn.disabled=true; }
  else    { btn.textContent=btn.dataset.orig||'Submit'; btn.disabled=false; }
}

function requireAuth() {
  if (!Auth.isLoggedIn()) { window.location.href='/hubconnect/login.html'; return false; }
  return true;
}
function redirectIfLoggedIn(dest='/hubconnect/dashboard.html') {
  if (Auth.isLoggedIn()) window.location.href=dest;
}
function injectReferralCode() {
  const ref = new URLSearchParams(window.location.search).get('ref');
  if (!ref) return;
  const el = document.querySelector('#referral-code,[name="referral_code"],[placeholder*="eferral"]');
  if (el) el.value = ref;
}
function populateNav() {
  const u = Auth.getUser(); if (!u) return;
  const name = `${u.first_name} ${u.last_name}`;
  $$('.user-name,.nav-user-name,#nav-user-name,#user-name').forEach(el=>el.textContent=name);
  $$('.user-initials,.avatar-initials,.avatar-letters').forEach(el=>{
    el.textContent=(u.first_name[0]+u.last_name[0]).toUpperCase();
  });
}
function initLogout() {
  $$('a,button').forEach(btn => {
    const txt = btn.textContent.toLowerCase();
    const href = btn.getAttribute('href')||'';
    if (txt.includes('logout')||txt.includes('log out')||(href.includes('index')&&txt.includes('log'))) {
      btn.addEventListener('click', e => { e.preventDefault(); Auth.clear(); window.location.href='/hubconnect/login.html'; });
    }
  });
}

// ============================================================
// 1. LOGIN
// ============================================================
function initLogin() {
  redirectIfLoggedIn();
  injectReferralCode();
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    setLoading(btn, true);
    const r = await api('POST', '/auth/login', {
      email:    (form.querySelector('input[type="email"]')?.value||'').trim(),
      password:  form.querySelector('input[type="password"]')?.value||'',
    }, false);
    setLoading(btn, false);
    if (!r) return;
    if (r.ok) {
      Auth.save(r.data.data.token, r.data.data.user);
      const type = r.data.data.user.user_type;
      window.location.href = (type==='partner'||type==='admin') ? '/hubconnect/partner-dashboard.html' : '/hubconnect/dashboard.html';
    } else {
      toast(r.data.message||'Invalid email or password.','error');
    }
  });
}

// ============================================================
// 2. SIGNUP
// ============================================================
function initSignup() {
  redirectIfLoggedIn();
  injectReferralCode();
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    setLoading(btn, true);
    let first_name, last_name;
    const fullName = form.querySelector('input[placeholder*="Full"],[name="full_name"]')?.value?.trim();
    if (fullName) {
      const p = fullName.split(' ');
      first_name=p[0]; last_name=p.slice(1).join(' ')||p[0];
    } else {
      first_name=form.querySelector('[name="first_name"]')?.value?.trim();
      last_name=form.querySelector('[name="last_name"]')?.value?.trim();
    }
    const referral_code = form.querySelector('[placeholder*="eferral"],[name="referral_code"]')?.value?.trim()||undefined;
    const r = await api('POST', '/auth/signup', {
      first_name, last_name,
      email:    form.querySelector('input[type="email"]')?.value?.trim(),
      phone:    form.querySelector('input[type="tel"],[placeholder*="Phone"]')?.value?.trim(),
      password: form.querySelector('input[type="password"]')?.value,
      referral_code,
    }, false);
    setLoading(btn, false);
    if (!r) return;
    if (r.ok) {
      Auth.save(r.data.data.token, r.data.data.user);
      toast('Account created! Welcome to HubConnect \uD83C\uDF89');
      setTimeout(()=>window.location.href='/hubconnect/dashboard.html',1000);
    } else {
      toast(r.data.message||'Signup failed. Please try again.','error');
    }
  });
}

// ============================================================
// 3. CONSUMER DASHBOARD
// ============================================================
async function initDashboard() {
  if (!requireAuth()) return;
  populateNav();
  const r = await api('GET', '/users/dashboard');
  if (!r||!r.ok) return;
  const { wallet, active_pools, referral_summary } = r.data.data;
  setText('#wallet-balance', naira(wallet.wallet_balance));
  setText('#total-savings',  naira(wallet.total_savings));
  setText('#total-spent',    naira(wallet.total_spent));
  setText('#referral-earnings', naira(referral_summary?.total_commission));
  setText('#total-referrals',   referral_summary?.total_referrals||'0');

  const poolsEl = $('#active-pools-list,#my-pools,.pools-container');
  if (poolsEl) {
    poolsEl.innerHTML = !active_pools.length
      ? `<div style="text-align:center;padding:32px;color:#6b7280"><p>You haven't joined any pools yet.</p><a href="/hubconnect/dashboard.html" style="color:#4f46e5;font-weight:600">Browse opportunities \u2192</a></div>`
      : active_pools.map(p=>`
        <div style="border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin-bottom:12px;background:#fff">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <div style="font-weight:600;font-size:15px">${p.title}</div>
              <div style="color:#6b7280;font-size:13px;margin-top:2px">${p.partner_name} \u00B7 ${p.location||''}</div>
            </div>
            <span style="background:${p.pool_status==='full'?'#dcfce7':'#fef3c7'};color:${p.pool_status==='full'?'#15803d':'#d97706'};padding:4px 10px;border-radius:20px;font-size:12px;font-weight:500">
              ${p.pool_status==='full'?'Full \u2014 Delivering':'Filling'}
            </span>
          </div>
          <div style="margin-top:12px">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
              <span>${p.filled_slots}/${p.total_slots} slots filled</span>
              <span style="font-weight:600">${naira(p.amount_paid)} paid</span>
            </div>
            <div style="background:#f3f4f6;border-radius:6px;height:8px">
              <div style="background:#4f46e5;height:8px;border-radius:6px;width:${Math.min(100,Math.round((p.filled_slots/p.total_slots)*100))}%"></div>
            </div>
          </div>
          ${p.pool_status==='full'&&!p.delivery_confirmed?`<button onclick="confirmDelivery('${p.pool_id}')" style="margin-top:12px;width:100%;background:#15803d;color:#fff;border:none;padding:10px;border-radius:8px;cursor:pointer;font-weight:600">\u2713 Confirm I Received My Order</button>`:''}
          ${p.delivery_confirmed?`<div style="margin-top:10px;color:#15803d;font-size:13px;font-weight:500">\u2713 Delivery confirmed</div>`:''}
        </div>`).join('');
  }
  await initMarketplace();
}

// ============================================================
// 4. MARKETPLACE
// ============================================================
async function initMarketplace() {
  const container = $('#opportunities-list,#marketplace-grid,.opportunities-grid,#pools-grid');
  if (!container) return;
  container.innerHTML = `<div style="text-align:center;padding:40px;color:#6b7280">Loading opportunities\u2026</div>`;
  const category = new URLSearchParams(window.location.search).get('category')||'';
  const r = await api('GET', '/opportunities?status=active&limit=20'+(category?`&category=${category}`:''),(null),false);
  if (!r||!r.ok||!r.data.data?.opportunities?.length) {
    container.innerHTML=`<div style="text-align:center;padding:40px;color:#6b7280"><p style="font-size:16px;font-weight:500">No opportunities available yet.</p><p style="font-size:14px">Partners are adding listings daily. Check back soon!</p></div>`;
    return;
  }
  container.innerHTML = r.data.data.opportunities.map(o=>`
    <div style="border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;background:#fff">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;height:180px;object-fit:cover" alt="${o.title}">`:`<div style="width:100%;height:180px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:#fff;font-size:36px">\uD83C\uDFF7\uFE0F</div>`}
      <div style="padding:16px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span style="background:#ede9fe;color:#7c3aed;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:500">${o.category}</span>
          <span style="background:#dcfce7;color:#15803d;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Save ${o.savings_percentage}%</span>
        </div>
        <h3 style="margin:0 0 4px;font-size:15px;font-weight:600">${o.title}</h3>
        <p style="color:#6b7280;font-size:13px;margin:0 0 10px">${o.partner_name} \u00B7 \uD83D\uDCCD${o.location||'Nigeria'}</p>
        <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:10px">
          <span style="font-size:20px;font-weight:700;color:#4f46e5">${naira(o.pool_price)}</span>
          <span style="text-decoration:line-through;color:#9ca3af;font-size:14px">${naira(o.individual_price)}</span>
        </div>
        <div style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#6b7280;margin-bottom:4px">
            <span>${o.filled_slots} joined</span><span>${o.available_slots} slots left</span>
          </div>
          <div style="background:#f3f4f6;border-radius:6px;height:8px">
            <div style="background:${o.available_slots<=3?'#ef4444':'#4f46e5'};height:8px;border-radius:6px;width:${Math.min(100,Math.round((o.filled_slots/o.total_slots)*100))}%"></div>
          </div>
          ${o.available_slots<=3&&o.available_slots>0?`<p style="color:#ef4444;font-size:12px;margin:4px 0 0;font-weight:500">\u26A1 Only ${o.available_slots} slot(s) left!</p>`:''}
        </div>
        <button onclick="joinPool('${o.id}','${o.title}')" style="width:100%;background:#4f46e5;color:#fff;border:none;padding:11px;border-radius:9px;cursor:pointer;font-weight:600;font-size:14px">
          Join Pool \u2014 ${naira(o.pool_price)}
        </button>
      </div>
    </div>`).join('');
}

// ============================================================
// 5. JOIN POOL
// ============================================================
async function joinPool(opportunityId, title) {
  if (!Auth.isLoggedIn()) { toast('Please log in to join a pool.','error'); setTimeout(()=>window.location.href='/hubconnect/login.html',1200); return; }
  const btn = event?.target;
  if (btn) setLoading(btn, true);
  const r = await api('POST', '/pools/join', { opportunity_id: opportunityId, slots: 1 });
  if (!r) { if (btn) setLoading(btn, false); return; }
  if (r.ok) {
    toast(`Joining "${title}"\u2026 redirecting to payment \uD83D\uDCB3`);
    setTimeout(()=>window.location.href=r.data.data.payment_url, 1000);
  } else {
    if (btn) setLoading(btn, false);
    toast(r.data.message||'Could not join pool. Please try again.','error');
  }
}

// ============================================================
// 6. CONFIRM DELIVERY
// ============================================================
async function confirmDelivery(poolId) {
  if (!confirm('Confirm that you have physically received your order?')) return;
  const r = await api('POST', `/pools/${poolId}/confirm-delivery`, { confirmed: true, rating: 5 });
  if (r&&r.ok) { toast('Delivery confirmed! Payment released to partner \uD83C\uDF89'); setTimeout(()=>location.reload(),1500); }
  else toast(r?.data?.message||'Failed. Please try again.','error');
}

// ============================================================
// 7. PROFILE PAGE
// ============================================================
async function initProfile() {
  if (!requireAuth()) return;
  populateNav();
  const r = await api('GET', '/users/profile');
  if (!r||!r.ok) return;
  const u = r.data.data;
  setText('.profile-name,h2.name,.member-name', `${u.first_name} ${u.last_name}`);
  setText('.member-since', u.created_at?`Member since ${new Date(u.created_at).toLocaleDateString('en-NG',{month:'long',year:'numeric'})}`: '');
  $$('.avatar-initials,.profile-initials,.avatar-letters').forEach(el=>el.textContent=(u.first_name[0]+u.last_name[0]).toUpperCase());
  setText('#total-savings,.stat-savings', naira(u.total_savings));
  setText('#total-spent,.stat-spent',     naira(u.total_spent));
  const form = document.querySelector('form');
  if (form) {
    setVal('input[placeholder*="Full"],[name="full_name"]', `${u.first_name} ${u.last_name}`);
    setVal('input[type="email"],[name="email"]', u.email);
    setVal('input[type="tel"],[name="phone"]',   u.phone);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"],.save-btn,button');
      setLoading(btn, true);
      const fn = form.querySelector('input[placeholder*="Full"],[name="full_name"]')?.value?.trim().split(' ');
      const upd = await api('PUT', '/users/profile', {
        first_name: fn?.[0]||u.first_name,
        last_name:  fn?.slice(1).join(' ')||u.last_name,
        phone:      form.querySelector('input[type="tel"]')?.value?.trim(),
      });
      setLoading(btn, false);
      if (upd&&upd.ok) { toast('Profile updated!'); } else { toast(upd?.data?.message||'Update failed.','error'); }
    });
  }
  // Referral link
  const link = `https://martinezknight.github.io/hubconnect/signup.html?ref=${u.referral_code}`;
  $$('#referral-link,.referral-link,input[readonly]').forEach(el=>{ if(el.tagName==='INPUT') el.value=link; else el.textContent=link; });
  $$('.copy-link,#copy-link').forEach(btn=>btn.addEventListener('click',()=>{ navigator.clipboard.writeText(link); toast('Referral link copied! \uD83C\uDF89'); }));
  const refR = await api('GET', '/referrals/stats');
  if (refR&&refR.ok) {
    setText('#referral-earnings,.referral-earnings', naira(refR.data.data.total_earnings));
    setText('#total-referrals,.referral-count', `${refR.data.data.total_referrals} referrals`);
  }
}

// ============================================================
// 8. PARTNER DASHBOARD
// ============================================================
async function initPartnerDashboard() {
  if (!requireAuth()) return;
  populateNav();
  const r = await api('GET', '/partners/stats');
  if (!r||!r.ok) return;
  const s = r.data.data;
  setText('.business-name,#business-name', s.business_name||Auth.getUser()?.first_name);
  setText('#revenue-30,.revenue-30',         naira(s.revenue_30_days));
  setText('#partner-share,.partner-share',   naira(s.revenue_30_days*0.875));
  setText('#active-pools,.active-pools',     s.active_pools||'0');
  setText('#total-customers,.total-customers', s.total_customers||'0');
  setText('#pending-payout,.pending-payout', naira(s.pending_payout));
  const growthEl=$('.revenue-growth,#revenue-growth');
  if (growthEl) { const g=s.revenue_growth_percent||0; growthEl.textContent=`${g>=0?'\u2191':'\u2193'} ${Math.abs(g)}%`; growthEl.style.color=g>=0?'#15803d':'#dc2626'; }
  const listingsR = await api('GET', '/opportunities/partner/my-listings');
  const listingsEl = $('#listings-table tbody,#active-listings,.listings-list');
  if (listingsEl&&listingsR&&listingsR.ok) {
    const opps = listingsR.data.data?.opportunities||[];
    listingsEl.innerHTML = !opps.length
      ? `<tr><td colspan="4" style="text-align:center;padding:24px;color:#6b7280">No listings yet. <a href="/hubconnect/create-listing.html" style="color:#4f46e5">Create your first listing \u2192</a></td></tr>`
      : opps.map(o=>`<tr>
          <td style="padding:12px">${o.title}</td>
          <td style="padding:12px">${o.filled_slots}/${o.total_slots} buyers</td>
          <td style="padding:12px">${naira(o.pool_price*o.filled_slots)}</td>
          <td style="padding:12px"><span style="background:${o.status==='active'?'#dcfce7':'#f3f4f6'};color:${o.status==='active'?'#15803d':'#6b7280'};padding:3px 10px;border-radius:20px;font-size:12px">${o.status}</span></td>
        </tr>`).join('');
  }
}

// ============================================================
// 9. CREATE LISTING
// ============================================================
function initCreateListing() {
  if (!requireAuth()) return;
  const form = document.querySelector('form');
  if (!form) return;
  const submit = async (status) => {
    const btn = status==='active' ? form.querySelector('button[type="submit"],.publish-btn') : form.querySelector('.draft-btn');
    setLoading(btn, true);
    const payload = {
      category:         form.querySelector('select,[name="category"]')?.value,
      title:            form.querySelector('[placeholder*="itle"],[name="title"]')?.value?.trim(),
      description:      form.querySelector('textarea,[name="description"]')?.value?.trim(),
      individual_price: parseFloat(form.querySelector('[placeholder*="ndividual"],[name="individual_price"]')?.value||0),
      pool_price:       parseFloat(form.querySelector('[placeholder*="ool Price"],[name="pool_price"]')?.value||0),
      total_slots:      parseInt(form.querySelector('[placeholder*="lot"],[name="total_slots"]')?.value||0),
      duration_days:    parseInt(form.querySelector('[placeholder*="uration"],[name="duration_days"]')?.value||7),
      location:         form.querySelector('[placeholder*="ocation"],[name="location"]')?.value?.trim(),
      terms:            form.querySelector('[placeholder*="erms"],[name="terms"]')?.value?.trim()||'',
    };
    if (!payload.title||!payload.category||!payload.pool_price||!payload.total_slots) { toast('Please fill in all required fields.','error'); setLoading(btn,false); return; }
    if (payload.pool_price>=payload.individual_price) { toast('Pool price must be lower than individual price.','error'); setLoading(btn,false); return; }
    const r = await api('POST', '/opportunities', payload);
    setLoading(btn, false);
    if (r&&r.ok) { toast(status==='active'?'Listing published! \uD83C\uDF89':'Saved as draft.'); setTimeout(()=>window.location.href='/hubconnect/partner-dashboard.html',1200); }
    else toast(r?.data?.message||'Failed to create listing.','error');
  };
  form.querySelector('button[type="submit"],.publish-btn')?.addEventListener('click',e=>{e.preventDefault();submit('active');});
  form.querySelector('.draft-btn')?.addEventListener('click',e=>{e.preventDefault();submit('draft');});
}

// ============================================================
// 10. POST OPPORTUNITY
// ============================================================
function initPostOpportunity() {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!Auth.isLoggedIn()) { toast('Please sign up first.','error'); setTimeout(()=>window.location.href='/hubconnect/signup.html',1200); return; }
    const btn = form.querySelector('button');
    setLoading(btn, true);
    const r = await api('POST', '/partners/register', {
      business_name: form.querySelector('[placeholder*="usiness"],[name="business_name"]')?.value?.trim(),
      category:      form.querySelector('select,[name="category"]')?.value||'service',
      description:   form.querySelector('textarea,[name="description"]')?.value?.trim(),
      address:       form.querySelector('[placeholder*="ddress"],[placeholder*="ocation"]')?.value?.trim(),
      bank_name:           form.querySelector('[placeholder*="ank name"],[name="bank_name"]')?.value?.trim(),
      bank_account_number: form.querySelector('[placeholder*="ccount number"],[name="account_number"]')?.value?.trim(),
      bank_account_name:   form.querySelector('[placeholder*="ccount name"],[name="account_name"]')?.value?.trim(),
    });
    setLoading(btn, false);
    if (r&&(r.ok||r.data.message?.includes('already'))) { toast('Application submitted! We\'ll verify within 24-48 hours. \uD83C\uDF89'); form.reset(); }
    else toast(r?.data?.message||'Submission failed.','error');
  });
}

// ============================================================
// 11. CHANGE PASSWORD
// ============================================================
function initChangePassword() {
  if (!requireAuth()) return;
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input[type="password"]');
    if (inputs.length>=3&&inputs[1].value!==inputs[2].value) { toast('New passwords do not match.','error'); return; }
    const btn = form.querySelector('button');
    setLoading(btn, true);
    const r = await api('PUT', '/users/change-password', { current_password: inputs[0].value, new_password: inputs[1].value });
    setLoading(btn, false);
    if (r&&r.ok) { toast('Password changed successfully!'); form.reset(); }
    else toast(r?.data?.message||'Failed to change password.','error');
  });
}

// ============================================================
// 12. NOTIFICATIONS
// ============================================================
async function initNotifications() {
  if (!requireAuth()) return;
  const container = $('#notifications-list,.notifications-container');
  if (!container) return;
  const r = await api('GET', '/notifications');
  if (!r||!r.ok) return;
  const { notifications, unread_count } = r.data.data;
  $$('.notification-badge,.notif-count').forEach(el=>{ el.textContent=unread_count; el.style.display=unread_count>0?'flex':'none'; });
  container.innerHTML = !notifications.length
    ? `<div style="text-align:center;padding:40px;color:#6b7280">No notifications yet.</div>`
    : notifications.map(n=>`
      <div id="notif-${n.id}" onclick="markNotifRead('${n.id}')" style="padding:16px;border-bottom:1px solid #f3f4f6;background:${n.read?'#fff':'#f5f3ff'};cursor:pointer">
        <div style="display:flex;justify-content:space-between">
          <div style="font-weight:${n.read?400:600};font-size:14px">${n.title}</div>
          <div style="font-size:11px;color:#9ca3af">${new Date(n.created_at).toLocaleDateString()}</div>
        </div>
        <div style="color:#6b7280;font-size:13px;margin-top:4px">${n.message}</div>
      </div>`).join('');
  $('#mark-all-read')?.addEventListener('click', async()=>{ await api('PUT','/notifications/mark-all-read'); toast('All marked as read.'); location.reload(); });
}
async function markNotifRead(id) {
  await api('PUT', `/notifications/${id}/read`);
  const el = $(`#notif-${id}`); if (el) el.style.background='#fff';
}

// ============================================================
// 13. TRANSACTIONS
// ============================================================
async function initTransactions() {
  if (!requireAuth()) return;
  populateNav();
  const container = $('#transactions-list,.transactions-table tbody,#transactions-container');
  if (!container) return;
  const r = await api('GET', '/payments/transactions');
  if (!r||!r.ok) return;
  const txs = r.data.data?.transactions||[];
  container.innerHTML = !txs.length
    ? `<tr><td colspan="5" style="text-align:center;padding:24px;color:#6b7280">No transactions yet.</td></tr>`
    : txs.map(t=>`<tr>
        <td style="padding:12px;font-size:14px">${new Date(t.created_at).toLocaleDateString('en-NG')}</td>
        <td style="padding:12px;font-size:14px">${t.opportunity_title||t.transaction_type}</td>
        <td style="padding:12px;font-weight:600">${naira(t.amount)}</td>
        <td style="padding:12px;font-size:13px">${t.payment_method}</td>
        <td style="padding:12px"><span style="background:${t.status==='successful'?'#dcfce7':t.status==='pending'?'#fef3c7':'#fee2e2'};color:${t.status==='successful'?'#15803d':t.status==='pending'?'#d97706':'#dc2626'};padding:3px 10px;border-radius:20px;font-size:12px">${t.status}</span></td>
      </tr>`).join('');
}

// ============================================================
// 14. AGENT / REFERRAL DASHBOARD
// ============================================================
async function initAgentDashboard() {
  if (!requireAuth()) return;
  populateNav();
  const r = await api('GET', '/referrals/stats');
  if (!r||!r.ok) return;
  const s = r.data.data;
  setText('#total-referrals,.total-referrals',    s.total_referrals);
  setText('#total-earnings,.total-earnings',       naira(s.total_earnings));
  setText('#signup-bonuses,.signup-bonuses',       naira(s.signup_bonus_earned));
  setText('#commission-earned,.commission-earned', naira(s.commission_earned));
  setText('#this-month,.this-month-earnings',      naira(s.this_month_earnings));
  setText('#wallet-balance,.wallet-balance',       naira(s.wallet_balance));
  const link = `https://martinezknight.github.io/hubconnect/signup.html?ref=${s.referral_code}`;
  $$('#referral-link,.referral-link,input[readonly]').forEach(el=>{ if(el.tagName==='INPUT') el.value=link; else el.textContent=link; });
  $$('.copy-link,#copy-link').forEach(btn=>btn.addEventListener('click',()=>{ navigator.clipboard.writeText(link); toast('Referral link copied! \uD83C\uDF89'); }));
  const listR = await api('GET', '/referrals/list');
  const listEl = $('#referrals-list,.referrals-table tbody');
  if (listEl&&listR&&listR.ok) {
    const refs = listR.data.data?.referrals||[];
    listEl.innerHTML = !refs.length
      ? `<tr><td colspan="4" style="text-align:center;padding:24px;color:#6b7280">No referrals yet. Share your link!</td></tr>`
      : refs.map(ref=>`<tr>
          <td style="padding:12px">${ref.referred_user}</td>
          <td style="padding:12px">${new Date(ref.signup_date).toLocaleDateString('en-NG')}</td>
          <td style="padding:12px">${naira(ref.total_commission_earned)}</td>
          <td style="padding:12px"><span style="background:${ref.signup_bonus_paid?'#dcfce7':'#fef3c7'};color:${ref.signup_bonus_paid?'#15803d':'#d97706'};padding:3px 10px;border-radius:20px;font-size:12px">${ref.signup_bonus_paid?'Bonus Paid':'Pending'}</span></td>
        </tr>`).join('');
  }
}

// ============================================================
// AUTO-INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.toLowerCase();
  initLogout();
  if      (page.includes('login'))           initLogin();
  else if (page.includes('signup'))          initSignup();
  else if (page.includes('partner-dash'))    initPartnerDashboard();
  else if (page.includes('create-list'))     initCreateListing();
  else if (page.includes('post-opport'))     initPostOpportunity();
  else if (page.includes('change-pass'))     initChangePassword();
  else if (page.includes('notification'))    initNotifications();
  else if (page.includes('transaction'))     initTransactions();
  else if (page.includes('agent')||page.includes('referral')) initAgentDashboard();
  else if (page.includes('profile'))         initProfile();
  else if (page.includes('dashboard')||page.includes('index')) initDashboard();

  if (document.querySelector('#opportunities-list,#marketplace-grid,.opportunities-grid')) initMarketplace();

  // Live notification badge on all pages
  if (Auth.isLoggedIn()) {
    api('GET','/notifications').then(r=>{
      if (r&&r.ok) {
        const c = r.data.data?.unread_count||0;
        $$('.notification-badge,.notif-count').forEach(el=>{ el.textContent=c; el.style.display=c>0?'flex':'none'; });
      }
    });
  }
});
