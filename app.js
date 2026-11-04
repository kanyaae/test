if (window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ================= พจนานุกรมภาษา (TH / EN) ================= */
const I18N = {
  th: {
    brand_sub: "ระบบบัญชีและภาษีครบวงจร",
    sec_notice: "🔒 เข้ารหัสและเก็บในเครื่อง",
    dashboard: "ภาพรวม", goals: "เป้าหมายออมเงิน", list: "รายการทั้งหมด", statement: "สเตจเม้นท์ธนาคาร", upload: "อัปโหลดสลิป", invoice: "โครงการ & ออกบิล", export: "ส่งออกรายงาน", settings: "ตั้งค่า",
    net_balance: "คงเหลือสุทธิ", total_income: "รายรับรวม", total_expense: "รายจ่ายรวม", budget_status: "งบประมาณรายจ่าย",
    chart_trend: "เปรียบเทียบ 6 เดือนล่าสุด", chart_cat: "รายจ่ายตามหมวดหมู่", recent_title: "รายการล่าสุด",
    cta_title: "นำเข้าสเตจเม้นท์ สลิป หรือออกบิลภาษี", cta_desc: "รองรับ WHT 3%/5%, VAT 7%, โครงการ และออกใบเสร็จรับเงิน/ใบกำกับภาษี",
    cta_btn_stmt: "อัปโหลดสเตจเม้นท์", cta_btn_inv: "ออกใบเสร็จ / ใบกำกับภาษี",
    all_time: "ทั้งหมด", all_types: "ทุกประเภท", income: "รายรับ", expense: "รายจ่าย",
    stmt_title: "📂 อัปโหลดสเตจเม้นท์ธนาคาร (รองรับรหัสผ่านและบาร์โค้ด)",
    stmt_desc: "รองรับไฟล์ PDF สเตจเม้นท์ทุกธนาคาร ดึงประวัติย้อนหลัง บาร์โค้ด และคำนวณภาษีอัตโนมัติ",
    stmt_drop: "ลากไฟล์ PDF สเตจเม้นท์มาวางที่นี่ หรือคลิกเพื่อเลือกไฟล์",
    slip_drop: "ลากสลิปมาวางที่นี่ หรือคลิกเพื่อเลือกไฟล์",
    export_opts: "ตั้งค่ารายงาน", doc_title_lbl: "ชื่อเอกสาร", period_lbl: "ช่วงเวลา", opt_month: "รายเดือน", opt_range: "กำหนดช่วงวันที่", opt_all: "ทั้งหมด",
    month_lbl: "เดือน", from_lbl: "ตั้งแต่", to_lbl: "ถึง", type_lbl: "ประเภทรายการ", all: "ทั้งหมด",
    chk_slips: "แนบภาพสลิปเป็นภาคผนวกใน PDF", chk_appr: "แสดงช่องลงนามผู้ตรวจสอบ/ผู้อนุมัติ",
    dl_pdf: "📄 ดาวน์โหลด PDF ทางการ", dl_xlsx: "📊 ดาวน์โหลด Excel (.xlsx)", print_doc: "🖨️ พิมพ์เอกสาร",
    set_profile: "ข้อมูลกิจการ / บุคคล", entity_type: "ประเภทกิจการ", name_lbl: "ชื่อ-นามสกุล หรือ ชื่อบริษัท", pos_lbl: "ตำแหน่ง / ผู้มีอำนาจ",
    comp_id: "เลขทะเบียนนิติบุคคล (13 หลัก)", tax_id: "เลขประจำตัวผู้เสียภาษี (13 หลัก)", addr_lbl: "ที่อยู่ตามหนังสือรับรอง",
    appr_name: "ชื่อผู้อนุมัติ", appr_pos: "ตำแหน่งผู้อนุมัติ", logo_lbl: "โลโก้บริษัท", upload: "อัปโหลด", delete: "ลบ",
    set_sig: "ลายเซ็นอิเล็กทรอนิกส์", sig_desc: "เซ็นในกรอบเพื่อใช้ในรายงานทางการ", clear: "ล้างลายเซ็น", upload_img: "อัปโหลดรูป",
    stmt_match_title: "การจับคู่บัญชีสเตจเม้นท์และสลิป", my_names_lbl: "ชื่อของคุณหรือบริษัทในสเตจเม้นท์ (บรรทัดละ 1 ชื่อ)",
    my_accts_lbl: "เลขบัญชี 4 ตัวท้าย (คั่นด้วย ,)", my_banks_lbl: "ธนาคารหลักที่คุณใช้", set_budget_cat: "งบประมาณและหมวดหมู่",
    budget_lbl: "งบรายจ่ายต่อเดือน (บาท) · 0 = ไม่ตั้ง", inc_cat: "หมวดหมู่รายรับ", exp_cat: "หมวดหมู่รายจ่าย", add: "เพิ่ม",
    data_mgmt: "จัดการข้อมูล", backup_desc: "ข้อมูลและสเตจเม้นท์ทั้งหมดเก็บในเบราว์เซอร์เครื่องนี้", backup: "💾 สำรองข้อมูล", restore: "📂 กู้คืนข้อมูล", wipe: "🗑 ล้างข้อมูล",
    pwd_title: "🔒 สเตจเม้นท์นี้มีรหัสผ่านป้องกัน", pwd_desc: "กรุณากรอกรหัสผ่านเปิด PDF", cancel: "ยกเลิก", unlock: "ปลดล็อกและอ่านไฟล์",
    amount_lbl: "จำนวนเงิน (บาท)", date_lbl: "วันที่", time_lbl: "เวลา", cat_lbl: "หมวดหมู่", note_lbl: "รายละเอียด", ref_lbl: "เลขอ้างอิง / บาร์โค้ด", save: "บันทึก",
    sec_title: "🔒 ความปลอดภัย (PIN)",
    lock_title: "🔒 ป้อน PIN เพื่อเข้าใช้งาน", lock_sub: "แอปนี้ถูกล็อคเพื่อปกป้องข้อมูลทางการเงินของคุณ", unlock_btn: "ปลดล็อค", pin_ph: "PIN 4–6 หลัก",
    forgot_pin: "ลืม PIN? ล้างข้อมูลทั้งหมด", forgot_c1: "ลืม PIN แล้วใช่ไหม? ข้อมูลที่เข้ารหัสจะกู้คืนไม่ได้เลย", forgot_c2: "ยืนยันลบข้อมูลและการตั้งค่าทั้งหมดในเครื่องนี้?", pin_wrong: "PIN ไม่ถูกต้อง ลองอีกครั้ง", unlocked_ok: "ปลดล็อคแล้ว",
    sec_status_on: "🟢 เปิดการล็อคด้วย PIN อยู่ (เบราว์เซอร์นี้ไม่รองรับ WebCrypto — ข้อมูลยังเป็นข้อความธรรมดา)", sec_status_enc: "🟢 เปิดการล็อคอยู่ และข้อมูลถูกเข้ารหัส AES-GCM ในเครื่องนี้", sec_status_off: "⚪ ปิดการล็อคอยู่ — ข้อมูลเก็บเป็นข้อความธรรมดาในเบราว์เซอร์",
    sec_set: "🔒 ตั้ง PIN ล็อคแอป", sec_change: "✏️ เปลี่ยน PIN", sec_disable: "🔓 ปิดการล็อค",
    sec_desc: "ตั้ง PIN 4–6 หลัก: ทุกครั้งที่เปิดแอปในแท็บใหม่ต้องป้อน PIN และข้อมูลจะถูกเข้ารหัส (AES-GCM) ในเครื่อง ลืม PIN = ต้องล้างข้อมูลทั้งหมด",
    pin_modal_set: "ตั้ง PIN ล็อคแอป", pin_modal_change: "เปลี่ยน PIN", pin_modal_disable: "ปิดการล็อค", pin_cur: "PIN ปัจจุบัน", pin_new: "PIN ใหม่ (4–6 หลัก)", pin_confirm: "ยืนยัน PIN ใหม่",
    pin_err_short: "PIN ต้องเป็นตัวเลข 4–6 หลัก", pin_err_mismatch: "PIN ที่ยืนยันไม่ตรงกัน", pin_ok_set: "ตั้ง PIN แล้ว — ข้อมูลถูกเข้ารหัสและล็อคเรียบร้อย", pin_ok_off: "ปิดการล็อคแล้ว",
    restore_ok: "กู้คืนข้อมูลสำเร็จ", restore_bad: "ไฟล์สำรองไม่ถูกต้อง", backup_ok: "สำรองข้อมูลแล้ว (รวมรูปสลิป)", backup_plain: "ไฟล์สำรองไม่เข้ารหัส — เก็บรักษาอย่างปลอดภัย", wipe_confirm: "ลบข้อมูลทั้งหมด รวมถึงการล็อค PIN? ย้อนกลับไม่ได้",
    list_in: "เงินเข้ารวม", list_out: "รายจ่ายรวม", dup_warn: "⚠️ พบรายการที่ยอดเงินและวันที่ตรงกันอยู่แล้ว — อาจเป็นรายการซ้ำ",
    sec_notice_lock: "🔒 ล็อคด้วย PIN และเก็บในเครื่อง", sec_notice_lock_enc: "🔒 เข้ารหัส AES-GCM + ล็อคด้วย PIN"
  },
  en: {
    brand_sub: "Accounting & Tax Pro Max",
    sec_notice: "🔒 Encrypted & stored locally",
    dashboard: "Dashboard", goals: "Savings Goals", list: "All Transactions", statement: "Bank Statement", upload: "Upload Slip", invoice: "Projects & Invoices", export: "Export Report", settings: "Settings",
    net_balance: "Net Balance", total_income: "Total Income", total_expense: "Total Expense", budget_status: "Monthly Budget",
    chart_trend: "6-Month Trend", chart_cat: "Expenses by Category", recent_title: "Recent Transactions",
    cta_title: "Import Statements, Slips or Tax Invoices", cta_desc: "Supports WHT 3%/5%, VAT 7%, Projects & Tax Invoice Generator",
    cta_btn_stmt: "Upload Statement", cta_btn_inv: "Generate Tax Invoice",
    all_time: "All Time", all_types: "All Types", income: "Income", expense: "Expense",
    stmt_title: "📂 Upload Bank Statement (Password & Barcode Support)",
    stmt_desc: "Supports PDF statements from all banks, auto-extracts history, barcodes and tax calculations.",
    stmt_drop: "Drag & drop PDF statement here or click to browse",
    slip_drop: "Drag & drop slips here or click to browse",
    export_opts: "Report Options", doc_title_lbl: "Document Title", period_lbl: "Period", opt_month: "Monthly", opt_range: "Date Range", opt_all: "All Time",
    month_lbl: "Month", from_lbl: "From", to_lbl: "To", type_lbl: "Transaction Type", all: "All",
    chk_slips: "Attach slips as PDF appendix", chk_appr: "Show Approver Signature Box",
    dl_pdf: "📄 Download Official PDF", dl_xlsx: "📊 Download Excel (.xlsx)", print_doc: "🖨️ Print Document",
    set_profile: "Entity / Personal Profile", entity_type: "Entity Type", name_lbl: "Name / Company Name", pos_lbl: "Position / Authorized Person",
    comp_id: "Company Registration No. (13 digits)", tax_id: "Tax ID (13 digits)", addr_lbl: "Registered Address",
    appr_name: "Approver Name", appr_pos: "Approver Position", logo_lbl: "Company Logo", upload: "Upload", delete: "Delete",
    set_sig: "Electronic Signature", sig_desc: "Sign inside the box for official reports", clear: "Clear", upload_img: "Upload Image",
    stmt_match_title: "Statement & Slip Matching Setup", my_names_lbl: "Your Name/Company in Statement (one per line)",
    my_accts_lbl: "Last 4 digits of Account (comma separated)", my_banks_lbl: "Primary Banks", set_budget_cat: "Budget & Categories",
    budget_lbl: "Monthly Budget (THB) · 0 = None", inc_cat: "Income Categories", exp_cat: "Expense Categories", add: "Add",
    data_mgmt: "Data Management", backup_desc: "All statements and data are stored locally in your browser", backup: "💾 Backup Data", restore: "📂 Restore Data", wipe: "🗑 Wipe Data",
    pwd_title: "🔒 Protected Statement PDF", pwd_desc: "Please enter PDF password", cancel: "Cancel", unlock: "Unlock & Parse",
    amount_lbl: "Amount (THB)", date_lbl: "Date", time_lbl: "Time", cat_lbl: "Category", note_lbl: "Description", ref_lbl: "Reference / Barcode", save: "Save",
    sec_title: "🔒 Security (PIN)",
    lock_title: "🔒 Enter PIN to unlock", lock_sub: "This app is locked to protect your financial data", unlock_btn: "Unlock", pin_ph: "PIN 4–6 digits",
    forgot_pin: "Forgot PIN? Wipe all data", forgot_c1: "Forgot your PIN? Encrypted data cannot be recovered at all.", forgot_c2: "Confirm wiping ALL data and settings on this device?", pin_wrong: "Wrong PIN. Try again.", unlocked_ok: "Unlocked",
    sec_status_on: "🟢 PIN lock is ON (this browser lacks WebCrypto — data is still plain text)", sec_status_enc: "🟢 Lock is ON and data is encrypted (AES-GCM) on this device", sec_status_off: "⚪ Lock is OFF — data is stored as plain text in the browser",
    sec_set: "🔒 Set app PIN", sec_change: "✏️ Change PIN", sec_disable: "🔓 Disable lock",
    sec_desc: "Set a 4–6 digit PIN: every new tab requires the PIN, and data is encrypted (AES-GCM) on-device. Forgot PIN = wipe everything",
    pin_modal_set: "Set app PIN", pin_modal_change: "Change PIN", pin_modal_disable: "Disable lock", pin_cur: "Current PIN", pin_new: "New PIN (4–6 digits)", pin_confirm: "Confirm new PIN",
    pin_err_short: "PIN must be 4–6 digits", pin_err_mismatch: "PINs do not match", pin_ok_set: "PIN set — data encrypted and locked", pin_ok_off: "Lock disabled",
    restore_ok: "Data restored", restore_bad: "Invalid backup file", backup_ok: "Backup saved (includes slip images)", backup_plain: "Backup file is NOT encrypted — keep it safe", wipe_confirm: "Wipe ALL data including the PIN lock? This cannot be undone",
    list_in: "Total In", list_out: "Total Expenses", dup_warn: "⚠️ A transaction with the same amount and date already exists — possible duplicate",
    sec_notice_lock: "🔒 PIN-locked & stored locally", sec_notice_lock_enc: "🔒 AES-GCM encrypted + PIN-locked"
  }
};

/* ================= ค่าคงที่ระบบ ================= */
const KEY = 'slipbook-promax-v4';
const BANKS = {'002':'กรุงเทพ','004':'กสิกรไทย','006':'กรุงไทย','011':'ทหารไทยธนชาต','014':'ไทยพาณิชย์','022':'ซีไอเอ็มบี ไทย','024':'ยูโอบี','025':'กรุงศรีอยุธยา','030':'ออมสิน','033':'อาคารสงเคราะห์','034':'ธ.ก.ส.','066':'อิสลาม','067':'ทิสโก้','069':'เกียรตินาคินภัทร','073':'แลนด์ แอนด์ เฮ้าส์'};
const DEFAULT = {
  transactions: [],
  projects: ['โครงการหลักสำนักงาน', 'โครงการพัฒนาซอฟต์แวร์ A', 'โครงการที่ปรึกษา B'],
  savingsGoals: [],
  categories: {
    income: ['เงินเดือน','รับโอน','ขายสินค้า/บริการ','ฟรีแลนซ์','โบนัส','ดอกเบี้ย/ปันผล','อื่นๆ'],
    expense: ['เงินออก','อาหาร','เดินทาง','ที่พัก/ค่าเช่า','ค่าน้ำ/ไฟ/เน็ต','ช้อปปิ้ง','สุขภาพ','บันเทิง','การศึกษา','อื่นๆ']
  },
  settings: {
    lang:'th', theme:'dark', entityType:'corporate', name:'บริษัท ตัวอย่าง จำกัด', position:'กรรมการผู้จัดการ',
    companyId:'0105560000001', taxId:'0105560000001', address:'99/9 อาคารพรอสเพอร์ ถนนสุขุมวิท กรุงเทพฯ',
    approver:'สมชาย ใจดี', approverPos:'ผู้จัดการฝ่ายบัญชีและการเงิน', logo:'', signature:'', myNames:'', myAccounts:'', myBanks:[], budget:50000, docSeq:1,
    idleLock:5   // v5: ล็อคอัตโนมัติเมื่อไม่ใช้งาน (นาที) · 0 = ปิด
  }
};
const ICONS = {'เงินเดือน':'💼','รับโอน':'📥','ขายสินค้า/บริการ':'🛍️','ฟรีแลนซ์':'💻','โบนัส':'🎁','ดอกเบี้ย/ปันผล':'📈',
  'เงินออก':'📤','อาหาร':'🍜','เดินทาง':'🚗','ที่พัก/ค่าเช่า':'🏠','ค่าน้ำ/ไฟ/เน็ต':'💡','ช้อปปิ้ง':'🛒','สุขภาพ':'💊','บันเทิง':'🎬','การศึกษา':'📚'};
const COLORS = ['#7c5cff','#22d3ee','#f43f5e','#f59e0b','#22c55e','#ec4899','#3b82f6','#a855f7','#14b8a6','#f97316','#84cc16','#06b6d4'];
const PAGES = [
  {id:'dashboard',labelKey:'dashboard',short:'ภาพรวม',title:'ภาพรวมการเงินและภาษี',sub:'กระแสเงินสด ภาษี และสุขภาพบัญชี'},
  {id:'goals',labelKey:'goals',short:'เป้าหมาย',title:'เป้าหมายออมเงิน',sub:'ติดตามความคืบหน้าและวางแผนเงินออม'},
  {id:'list',labelKey:'list',short:'รายการ',title:'รายการทั้งหมด',sub:'จัดการรายการ ย้อนหลัง และภาษี WHT/VAT'},
  {id:'statement',labelKey:'statement',short:'สเตจเม้นท์',title:'อัปโหลดสเตจเม้นท์ธนาคาร',sub:'ถอดรหัส PDF ล็อกรหัส ดึงบาร์โค้ดอัตโนมัติ'},
  {id:'upload',labelKey:'upload',short:'อัปสลิป',title:'อัปโหลดสลิปรายเดี่ยว',sub:'สแกน QR และ OCR รายการ'},
  {id:'invoice',labelKey:'invoice',short:'ออกบิล & โปรเจกต์',title:'โครงการ และออกใบเสร็จ/ใบกำกับภาษี',sub:'จัดการ Cost Center และพิมพ์เอกสารภาษีสรรพากร'},
  {id:'export',labelKey:'export',short:'ส่งออก',title:'ส่งออกรายงาน',sub:'PDF ทางการพร้อมลายเซ็น และ Excel'},
  {id:'settings',labelKey:'settings',short:'ตั้งค่า',title:'ตั้งค่าระบบ',sub:'ข้อมือนิติบุคคล ลายเซ็น และรหัสบัญชี'}
];
const SVG = {
  dashboard:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  goals:'<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  statement:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  invoice:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1zM14 8H8M16 12H8M13 16H8"/>',
  export:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5"/>',
  settings:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>'
};
const svg = k => `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${SVG[k]}</svg>`;
const LONG = {day:'numeric',month:'long',year:'numeric'};

/* ================= ยูทิลิตี้และภาษา ================= */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const clone = o => JSON.parse(JSON.stringify(o));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const fmtNum = n => Number(n || 0).toLocaleString('th-TH', {minimumFractionDigits:2, maximumFractionDigits:2});
const fmt = n => (n < 0 ? '-' : '') + '฿' + fmtNum(Math.abs(n));
const pad = n => String(n).padStart(2, '0');
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
const nowTime = () => { const d = new Date(); return `${pad(d.getHours())}:${pad(d.getMinutes())}`; };
const thDate = (d, o = {day:'numeric',month:'short',year:'numeric'}) => d ? new Date(d + 'T00:00:00').toLocaleDateString(state.settings.lang === 'th' ? 'th-TH' : 'en-US', o) : '-';
const sumT = (l, ty) => l.reduce((s, t) => t.type === ty ? s + t.amount : s, 0);
const sortDesc = (a, b) => (b.date + (b.time||'')).localeCompare(a.date + (a.time||'')) || b.createdAt - a.createdAt;
const sortAsc = (a, b) => (a.date + (a.time||'')).localeCompare(b.date + (b.time||'')) || a.createdAt - b.createdAt;

function t(key){
  const lang = (state && state.settings && state.settings.lang) || 'th';
  return I18N[lang]?.[key] || I18N.th[key] || key;
}
function applyI18N(){
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $('#brandSub').textContent = t('brand_sub');
  document.documentElement.lang = (state && state.settings.lang) || 'th';
  $('#secNotice').textContent = lockRec ? (lockRec.enc === 'AES-GCM' ? t('sec_notice_lock_enc') : t('sec_notice_lock')) : t('sec_notice');
  $('#btnLang').textContent = ((state && state.settings.lang) || 'th') === 'th' ? '🌐 EN' : '🌐 TH';
}
$('#btnLang').addEventListener('click', () => {
  state.settings.lang = (state.settings.lang || 'th') === 'th' ? 'en' : 'th';
  save(); applyI18N(); buildNav(); go(current);
});

function bahtText(n){
  n = Math.round(Math.abs(n) * 100) / 100;
  const D = ['ศูนย์','หนึ่ง','สอง','สาม','สี่','ห้า','หก','เจ็ด','แปด','เก้า'], P = ['','สิบ','ร้อย','พัน','หมื่น','แสน'];
  const r6 = s => { s = s.replace(/^0+/, ''); let o = ''; const L = s.length;
    for(let i = 0; i < L; i++){ const d = +s[i], p = L - i - 1; if(!d) continue;
      if(p === 1 && d === 1) o += 'สิบ'; else if(p === 1 && d === 2) o += 'ยี่สิบ';
      else if(p === 0 && d === 1 && L > 1) o += 'เอ็ด'; else o += D[d] + P[p]; }
    return o; };
  const rd = s => { const parts = []; while(s.length > 6){ parts.unshift(s.slice(-6)); s = s.slice(0, -6); } parts.unshift(s);
    const mult = ['', 'ล้าน', 'ล้านล้าน', 'ล้านล้านล้าน', 'ล้านล้านล้านล้าน']; let out = '';
    for(let i = 0; i < parts.length; i++){ const g = r6(parts[i]); if(g) out += g + (mult[parts.length - 1 - i] || ''); }
    return out; };
  const [b, st] = n.toFixed(2).split('.');
  const bt = rd(b), stt = r6(st);
  if(!bt && !stt) return 'ศูนย์บาทถ้วน';
  return (bt ? bt + 'บาท' : '') + (stt ? stt + 'สตางค์' : 'ถ้วน');
}
function toast(msg, kind = ''){
  const t = $('#toast'); t.textContent = msg; t.className = 'toast show ' + kind;
  clearTimeout(t._t); t._t = setTimeout(() => t.className = 'toast', 2600);
}

/* ================= จัดเก็บข้อมูล ================= */
function loadStateRaw(){ try{ return JSON.parse(localStorage.getItem(KEY)); }catch(e){ return null; } }
function stateFromRaw(raw){
  const base = clone(DEFAULT);
  if(raw && Array.isArray(raw.transactions)){
    base.transactions = raw.transactions;
    if(raw.projects) base.projects = raw.projects;
    if(Array.isArray(raw.savingsGoals)) base.savingsGoals = raw.savingsGoals;
    if(raw.categories) base.categories = raw.categories;
    base.settings = {...base.settings, ...(raw.settings || {})};
  }
  return base;
}
let encSaveTimer = null;
function save(){
  // ความปลอดภัย: ถ้ามีข้อมูลเข้ารหัสอยู่ในเครื่องแต่ยังไม่ปลดล็อค ห้ามเขียนทับด้วยข้อความธรรมดา
  if(lockRec && lockRec.enc === 'AES-GCM' && !encRaw) return;
  if(encRaw && lockRec && lockRec.enc === 'AES-GCM'){
    clearTimeout(encSaveTimer);
    encSaveTimer = setTimeout(async () => {
      try{ localStorage.setItem(KEY, JSON.stringify(await encryptState(encRaw, state))); }
      catch(e){ toast('บันทึกข้อมูลไม่สำเร็จ', 'err'); }
    }, 250);
    return;
  }
  try{ localStorage.setItem(KEY, JSON.stringify(state)); }
  catch(e){ toast('พื้นที่จัดเก็บเต็ม', 'err'); }
}
const SlipDB = {
  db: null,
  open(){ return new Promise((res, rej) => { const r = indexedDB.open('slipbook-promax-slips', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('slips');
    r.onsuccess = () => { this.db = r.result; res(); }; r.onerror = () => rej(r.error); }); },
  _q(mode, fn){ return new Promise((res, rej) => { const q = fn(this.db.transaction('slips', mode).objectStore('slips'));
    q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); }); },
  put(k, v){ return this._q('readwrite', s => s.put(v, k)); },
  get(k){ return this._q('readonly', s => s.get(k)); },
  del(k){ return this._q('readwrite', s => s.delete(k)); },
  clear(){ return this._q('readwrite', s => s.clear()); },
  allKeys(){ return this._q('readonly', s => s.getAllKeys()); }
};
let state = null, slipsOK = false, current = 'dashboard';
let lockRec = null, encRaw = null;

/* ================= ความปลอดภัย: PIN lock + เข้ารหัสข้อมูล (AES-GCM) ================= */
const LOCK_KEY = 'slipbook-promax-lock-v1';
const SESS_KEY = 'slipbook-promax-session-v1';
const ATTEMPT_KEY = 'slipbook-promax-attempts-v1';   // v5: นับครั้งที่ใส่รหัสผิด
const LAST_UNLOCK_KEY = 'slipbook-promax-lastunlock-v1'; // v5: เวลาเข้าใช้งานล่าสุด

// SHA-256 แบบ JS (fallback กรณีไม่มี crypto.subtle เช่น เปิดผ่าน file://)
function sha256Sync(ascii){
  function rr(v, a){ return (v >>> a) | (v << (32 - a)); }
  const maxWord = Math.pow(2, 32); let result = '';
  const words = []; const asciiBitLength = ascii.length * 8;
  let hash = sha256Sync.h = sha256Sync.h || []; const k = sha256Sync.k = sha256Sync.k || [];
  let primeCounter = k.length; const isComposite = {};
  for(let candidate = 2; primeCounter < 64; candidate++){
    if(!isComposite[candidate]){
      for(let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
      hash[primeCounter] = (Math.pow(candidate, .5) * maxWord) | 0;
      k[primeCounter++] = (Math.pow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  ascii += '\x80';
  while(ascii.length % 64 - 56) ascii += '\x00';
  for(let i = 0; i < ascii.length; i++){
    const j = ascii.charCodeAt(i);
    if(j >> 8) return sha256Sync('');
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;
  for(let j = 0; j < words.length;){
    const w = words.slice(j, j += 16);
    const oldHash = hash;
    hash = hash.slice(0, 8);
    for(let i = 0; i < 64; i++){
      const w15 = w[i - 15], w2 = w[i - 2];
      const a = hash[0], e = hash[4];
      const temp1 = hash[7]
        + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25))
        + ((e & hash[5]) ^ ((~e) & hash[6]))
        + k[i]
        + (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
      const temp2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }
    for(let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for(let i = 0; i < 8; i++){
    for(let j = 3; j + 1; j--){
      const b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? '0' : '') + b.toString(16);
    }
  }
  return result;
}
const bufToB64 = buf => { const u = new Uint8Array(buf); let s = ''; for(let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
const b64ToBuf = s => { const bin = atob(s); const u = new Uint8Array(bin.length); for(let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };

function loadLock(){ try{ const r = JSON.parse(localStorage.getItem(LOCK_KEY)); return (r && r.salt && r.hash) ? r : null; }catch(e){ return null; } }

async function deriveRaw(pin, saltB64){
  if(window.crypto && crypto.subtle){
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({name:'PBKDF2', salt: b64ToBuf(saltB64), iterations: 120000, hash:'SHA-256'}, base, 256);
    return new Uint8Array(bits);
  }
  let x = saltB64 + ':' + pin;
  for(let i = 0; i < 20000; i++) x = sha256Sync(x);
  return new TextEncoder().encode(x);
}
async function hashRaw(raw){
  if(window.crypto && crypto.subtle) return bufToB64(await crypto.subtle.digest('SHA-256', raw));
  return sha256Sync(bufToB64(raw));
}
async function verifyPin(pin){
  if(!lockRec) return false;
  return (await hashRaw(await deriveRaw(pin, lockRec.salt))) === lockRec.hash;
}
async function makeLock(pin){
  const salt = (window.crypto && crypto.getRandomValues) ? crypto.getRandomValues(new Uint8Array(16)) : Uint8Array.from({length:16}, () => Math.floor(Math.random() * 256));
  const saltB64 = bufToB64(salt);
  const raw = await deriveRaw(pin, saltB64);
  lockRec = {v:1, salt: saltB64, hash: await hashRaw(raw), enc: (window.crypto && crypto.subtle) ? 'AES-GCM' : null};
  localStorage.setItem(LOCK_KEY, JSON.stringify(lockRec));
  return raw;
}
async function encryptState(raw, obj){
  const key = await crypto.subtle.importKey('raw', raw, {name:'AES-GCM'}, false, ['encrypt']);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, new TextEncoder().encode(JSON.stringify(obj)));
  return {enc:'AES-GCM', iv: bufToB64(iv), data: bufToB64(data)};
}
async function decryptState(raw, rec){
  const key = await crypto.subtle.importKey('raw', raw, {name:'AES-GCM'}, false, ['decrypt']);
  const plain = await crypto.subtle.decrypt({name:'AES-GCM', iv: b64ToBuf(rec.iv)}, key, b64ToBuf(rec.data));
  return JSON.parse(new TextDecoder().decode(plain));
}
async function loadDecryptedState(){
  const rawState = loadStateRaw();
  if(rawState && rawState.enc === 'AES-GCM' && encRaw){
    try{ return stateFromRaw(await decryptState(encRaw, rawState)); }catch(e){ return stateFromRaw(null); }
  }
  return stateFromRaw(rawState);
}
async function unlockWithPin(pin){
  if(!lockRec || !(await verifyPin(pin))) return false;
  const raw = await deriveRaw(pin, lockRec.salt);
  encRaw = lockRec.enc === 'AES-GCM' ? raw : null;
  try{ sessionStorage.setItem(SESS_KEY, bufToB64(raw)); }catch(e){}
  state = await loadDecryptedState();
  $('#lockScreen').classList.remove('show');
  document.body.classList.remove('locked');
  applyI18N(); buildNav(); applyTheme(); go(current); renderSecStatus();
  return true;
}
async function trySessionUnlock(){
  if(!lockRec) return false;
  let s; try{ s = sessionStorage.getItem(SESS_KEY); }catch(e){ return false; }
  if(!s) return false;
  const raw = b64ToBuf(s);
  if((await hashRaw(raw)) !== lockRec.hash) return false;
  encRaw = lockRec.enc === 'AES-GCM' ? raw : null;
  state = await loadDecryptedState();
  return true;
}
function renderSecStatus(){
  const on = !!lockRec;
  const st = $('#secStatus'); if(st) st.textContent = on ? (lockRec.enc === 'AES-GCM' ? t('sec_status_enc') : t('sec_status_on')) : t('sec_status_off');
  const bSet = $('#btnSetPin'); if(bSet) bSet.textContent = on ? t('sec_change') : t('sec_set');
  const bOff = $('#btnDisablePin'); if(bOff) bOff.style.display = on ? '' : 'none';
  // v5: สถานะประตูล็อค / เวลาเข้าใช้ล่าสุด / เวลาล็อคอัตโนมัติ
  const gate = $('#secGateState'); if(gate) gate.textContent = on ? '🔐 ต้องใส่รหัสทุกครั้งที่เปิด/รีเฟรช' : '⚠️ ยังไม่มีรหัส — จะถูกขอตั้งเมื่อเปิดใหม่';
  const last = $('#secLastUnlock');
  if(last){
    let iso = null; try{ iso = localStorage.getItem(LAST_UNLOCK_KEY); }catch(e){}
    if(iso){
      const d = new Date(iso);
      last.textContent = Number.isNaN(d.valueOf()) ? '—'
        : d.toLocaleString('th-TH', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'});
    } else last.textContent = '—';
  }
  const isel = $('#idleSelect');
  if(isel && state && state.settings) isel.value = String(state.settings.idleLock ?? 5);
}

/* ================= นำทางและธีม ================= */
function buildNav(){
  $('#sideNav').innerHTML = PAGES.map(p => `<a data-nav="${p.id}">${svg(p.id)}<span>${t(p.labelKey)}</span></a>`).join('');
  $('#bottomNav').innerHTML = PAGES.map(p => `<a data-nav="${p.id}">${svg(p.id)}<span>${p.short}</span></a>`).join('');
}
function go(page){
  const p = PAGES.find(x => x.id === page) || PAGES[0]; current = p.id;
  $$('.page').forEach(el => el.classList.toggle('active', el.id === 'page-' + p.id));
  $$('#sideNav a, #bottomNav a').forEach(a => a.classList.toggle('active', a.dataset.nav === p.id));
  $('#pageTitle').textContent = t(p.labelKey); $('#pageSub').textContent = p.sub;
  $('#periodBox').style.display = (p.id === 'dashboard' || p.id === 'list') ? 'flex' : 'none';
  if(p.id === 'dashboard') renderDashboard();
  if(p.id === 'goals') renderSavingsGoals();
  if(p.id === 'list') renderList();
  if(p.id === 'invoice') renderInvoicePage();
  if(p.id === 'export') renderDoc();
  if(p.id === 'settings') renderSettings();
  window.scrollTo({top: 0});
}
function renderAll(){
  if(current === 'dashboard') renderDashboard();
  if(current === 'goals') renderSavingsGoals();
  if(current === 'list') renderList();
  if(current === 'invoice') renderInvoicePage();
  if(current === 'export') renderDoc();
}

let editingGoalId = null, contributingGoalId = null;
function renderSavingsGoals(){
  const goals = state.savingsGoals || [];
  const totalTarget = goals.reduce((sum, goal) => sum + Number(goal.target || 0), 0);
  const totalSaved = goals.reduce((sum, goal) => sum + Number(goal.saved || 0), 0);
  const completed = goals.filter(goal => Number(goal.saved) >= Number(goal.target)).length;
  const stats = [
    ['เป้าหมายทั้งหมด', goals.length, '🎯'],
    ['ยอดออมสะสม', fmt(totalSaved), '💰'],
    ['ยอดเป้าหมายรวม', fmt(totalTarget), '🌱'],
    ['ทำสำเร็จแล้ว', `${completed} เป้าหมาย`, '🏆']
  ];
  $('#goalStats').innerHTML = stats.map(([label, value, icon]) => `<div class="goal-stat card"><span class="goal-stat-icon">${icon}</span><div><span>${label}</span><strong>${value}</strong></div></div>`).join('');
  if(!goals.length){
    $('#goalList').innerHTML = `<div class="goal-empty"><div class="goal-empty-icon">🌱</div><h3>เริ่มต้นเป้าหมายแรกของคุณ</h3><p class="muted">ไม่ว่าจะเป็นเงินสำรอง ท่องเที่ยว หรือของชิ้นใหญ่ แบ่งเป้าหมายให้ชัดแล้วค่อยๆ ออมไปด้วยกัน</p><button class="btn btn-grad" data-goal-create>สร้างเป้าหมายแรก</button></div>`;
    return;
  }
  $('#goalList').innerHTML = goals.map(goal => {
    const target = Number(goal.target) || 0, saved = Number(goal.saved) || 0;
    const progress = target > 0 ? Math.min(saved / target * 100, 100) : 0;
    const complete = target > 0 && saved >= target;
    let deadline = 'ไม่กำหนดวัน';
    if(goal.deadline){
      const daysLeft = Math.ceil((new Date(`${goal.deadline}T00:00:00`) - new Date(`${today()}T00:00:00`)) / 86400000);
      deadline = complete ? 'บรรลุเป้าหมายแล้ว' : daysLeft < 0 ? `เลยกำหนด ${Math.abs(daysLeft)} วัน` : daysLeft === 0 ? 'ครบกำหนดวันนี้' : `เหลืออีก ${daysLeft} วัน`;
    }
    return `<article class="goal-card card">
      <div class="goal-card-head"><div class="goal-mark">${complete ? '🏆' : '✨'}</div><div class="goal-card-actions">
        <button class="icon-btn sm" data-goal-edit="${esc(goal.id)}" title="แก้ไขเป้าหมาย">✏️</button>
        <button class="icon-btn sm" data-goal-delete="${esc(goal.id)}" title="ลบเป้าหมาย">🗑️</button>
      </div></div>
      <h3>${esc(goal.name)}</h3>
      <p class="goal-deadline">${esc(deadline)}</p>
      <div class="goal-amounts"><strong>${fmt(saved)}</strong><span>จาก ${fmt(target)}</span></div>
      <div class="goal-progress"><div style="width:${progress}%"></div></div>
      <div class="goal-progress-meta"><span>${Math.round(progress)}% สำเร็จ</span><span>เหลือ ${fmt(Math.max(target - saved, 0))}</span></div>
      <button class="btn ${complete ? 'btn-ghost' : 'btn-grad'} btn-block" data-goal-contribute="${esc(goal.id)}" ${complete ? 'disabled' : ''}>${complete ? '✓ ถึงเป้าหมายแล้ว' : '＋ เพิ่มเงินออม'}</button>
    </article>`;
  }).join('');
}

function openGoalModal(id = ''){
  editingGoalId = id || null;
  const goal = id ? state.savingsGoals.find(item => item.id === id) : null;
  $('#goalModalTitle').textContent = goal ? 'แก้ไขเป้าหมาย' : 'สร้างเป้าหมาย';
  $('#goalName').value = goal?.name || '';
  $('#goalTarget').value = goal?.target ?? '';
  $('#goalSaved').value = goal?.saved ?? 0;
  $('#goalDeadline').value = goal?.deadline || '';
  $('#goalModal').classList.add('show');
  setTimeout(() => $('#goalName').focus(), 100);
}

$('#btnNewGoal').addEventListener('click', () => openGoalModal());
$('#goalList').addEventListener('click', e => {
  const create = e.target.closest('[data-goal-create]');
  const edit = e.target.closest('[data-goal-edit]');
  const remove = e.target.closest('[data-goal-delete]');
  const contribute = e.target.closest('[data-goal-contribute]');
  if(create) openGoalModal();
  if(edit) openGoalModal(edit.dataset.goalEdit);
  if(remove){
    const goal = state.savingsGoals.find(item => item.id === remove.dataset.goalDelete);
    if(goal && confirm(`ลบเป้าหมาย "${goal.name}" ใช่หรือไม่?`)){
      state.savingsGoals = state.savingsGoals.filter(item => item.id !== goal.id);
      save(); renderSavingsGoals(); toast('ลบเป้าหมายแล้ว', 'ok');
    }
  }
  if(contribute){
    const goal = state.savingsGoals.find(item => item.id === contribute.dataset.goalContribute);
    if(!goal) return;
    contributingGoalId = goal.id;
    $('#goalContributeName').textContent = goal.name;
    $('#goalContribution').value = '';
    $('#goalContributeModal').classList.add('show');
    setTimeout(() => $('#goalContribution').focus(), 100);
  }
});

$('#goalForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#goalName').value.trim(), target = Number($('#goalTarget').value);
  const saved = Number($('#goalSaved').value || 0), deadline = $('#goalDeadline').value;
  if(!name || !Number.isFinite(target) || target <= 0 || !Number.isFinite(saved) || saved < 0){
    return toast('กรุณาตรวจสอบชื่อและยอดเงินเป้าหมาย', 'err');
  }
  const goal = {id:editingGoalId || uid(), name, target:Math.round(target * 100) / 100, saved:Math.round(saved * 100) / 100, deadline};
  if(editingGoalId) state.savingsGoals = state.savingsGoals.map(item => item.id === editingGoalId ? goal : item);
  else state.savingsGoals.push(goal);
  save(); $('#goalModal').classList.remove('show'); renderSavingsGoals();
  toast(editingGoalId ? 'แก้ไขเป้าหมายแล้ว' : 'สร้างเป้าหมายแล้ว', 'ok');
});

$('#goalContributeForm').addEventListener('submit', e => {
  e.preventDefault();
  const amount = Number($('#goalContribution').value);
  const goal = state.savingsGoals.find(item => item.id === contributingGoalId);
  if(!goal || !Number.isFinite(amount) || amount <= 0) return toast('กรุณากรอกยอดออมให้ถูกต้อง', 'err');
  goal.saved = Math.round((Number(goal.saved || 0) + amount) * 100) / 100;
  save(); $('#goalContributeModal').classList.remove('show'); renderSavingsGoals();
  toast('เพิ่มยอดออมในเป้าหมายแล้ว', 'ok');
});

function applyTheme(){
  const th = (state && state.settings.theme) || 'dark';
  document.documentElement.dataset.theme = th;
  $('#btnTheme').textContent = th === 'light' ? '🌙' : '☀️';
}
$('#btnTheme').addEventListener('click', () => {
  state.settings.theme = state.settings.theme === 'light' ? 'dark' : 'light';
  save(); applyTheme(); if(current === 'dashboard') renderDashboard();
});

/* ================= ภาพรวมและ AI Tax & Financial Audit ================= */
function periodTx(){ const m = $('#month').value; return m ? state.transactions.filter(t => t.date.startsWith(m)) : state.transactions.slice(); }

function renderDashboard(){
  const l = periodTx(), inc = sumT(l, 'income'), exp = sumT(l, 'expense'), m = $('#month').value;
  $('#sIn').textContent = fmt(inc); $('#sOut').textContent = fmt(exp); $('#sBal').textContent = fmt(inc - exp);
  $('#sInSub').textContent = `${l.filter(t => t.type === 'income').length} รายการ`;
  $('#sOutSub').textContent = `${l.filter(t => t.type === 'expense').length} รายการ`;
  const all = sumT(state.transactions, 'income') - sumT(state.transactions, 'expense');
  $('#sBalSub').textContent = `${m ? thDate(m + '-01', {month:'long',year:'numeric'}) : 'ทุกช่วงเวลา'} · ยอดสะสม ${fmt(all)}`;
  const b = +state.settings.budget || 0, bar = $('#sBudgetBar');
  if(b > 0 && m){
    const p = exp / b * 100;
    $('#sBudget').textContent = Math.round(p) + '%';
    bar.style.width = Math.min(p, 100) + '%';
    bar.style.background = p > 100 ? 'var(--out)' : p > 80 ? 'var(--warn)' : 'var(--in)';
    $('#sBudgetSub').textContent = p > 100 ? `⚠ เกินงบ ${fmt(exp - b)}` : `เหลือ ${fmt(b - exp)} จาก ${fmt(b)}`;
  } else {
    $('#sBudget').textContent = b > 0 ? fmt(b) : '—'; bar.style.width = '0';
    $('#sBudgetSub').textContent = b > 0 ? 'เลือกเดือนเพื่อดูการใช้งบ' : 'ตั้งงบได้ที่หน้าตั้งค่า';
  }

  runAIAudit(l, inc, exp);

  const recent = l.slice().sort(sortDesc).slice(0, 6);
  $('#recentTitle').textContent = t('recent_title');
  $('#recent').innerHTML = recent.length ? recent.map(txRow).join('') : emptyHTML('ยังไม่มีรายการในช่วงนี้', 'อัปโหลดสเตจเม้นท์หรือสลิปเพื่อเริ่มบันทึก');
  renderCharts(l);
}

function runAIAudit(l, inc, exp){
  const box = $('#aiText');
  if(!l.length){ box.innerHTML = '💡 <b>คำแนะนำ AI:</b> ยังไม่มีข้อมูลในช่วงนี้ ลองอัปโหลดสเตจเม้นท์ธนาคารย้อนหลังเพื่อวิเคราะห์กระแสเงินสด'; return; }
  let notes = [];
  const vatTotal = l.reduce((s,t) => s + (t.vatAmount || 0), 0);
  const whtTotal = l.reduce((s,t) => s + (t.whtAmount || 0), 0);
  notes.push(`📊 <b>สรุปภาษีเบื้องต้นในช่วงนี้:</b> ภาษีมูลค่าเพิ่ม (VAT) รวม ${fmt(vatTotal)} | ภาษีหัก ณ ที่จ่ายรวม ${fmt(whtTotal)}`);
  if(exp > inc) notes.push('🔴 สภาวะกระแสเงินสดติดลบ รายจ่ายมากกว่ารายรับ');
  else notes.push('🟢 สุขภาพกระแสเงินสดปกติ รายรับครอบคลุมรายจ่าย');
  box.innerHTML = notes.join('<br>');
}

const emptyHTML = (a, b) => `<div class="empty"><div class="big">📭</div><div style="font-weight:600">${a}</div><div style="font-size:.85rem">${b}</div></div>`;

let charts = {};
function renderCharts(l){
  if(typeof Chart === 'undefined') return;
  const dark = state.settings.theme !== 'light';
  const grid = dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)';
  Chart.defaults.font.family = "'IBM Plex Sans Thai', sans-serif";
  Chart.defaults.color = dark ? '#a3abbf' : '#5b6476';

  const by = {};
  l.filter(t => t.type === 'expense').forEach(t => by[t.category] = (by[t.category] || 0) + t.amount);
  let labels = Object.keys(by).sort((a, b) => by[b] - by[a]), data = labels.map(k => by[k]);
  let colors = labels.map((_, i) => COLORS[i % COLORS.length]);
  const empty = !labels.length;
  if(empty){ labels = ['ไม่มีข้อมูล']; data = [1]; colors = [grid]; }
  charts.pie?.destroy();
  charts.pie = new Chart($('#pieC'), {type:'doughnut',
    data:{labels, datasets:[{data, backgroundColor:colors, borderWidth:0, hoverOffset:8}]},
    options:{maintainAspectRatio:false, cutout:'70%',
      plugins:{legend:{position:'bottom', labels:{boxWidth:10, usePointStyle:true, padding:14}},
        tooltip:{callbacks:{label: c => empty ? 'ไม่มีข้อมูล' : ` ${c.label}: ${fmt(c.raw)}`}}}}});

  const end = $('#month').value || today().slice(0, 7), [y, mo] = end.split('-').map(Number), ms = [];
  for(let i = 5; i >= 0; i--){ const d = new Date(y, mo - 1 - i, 1); ms.push(`${d.getFullYear()}-${pad(d.getMonth() + 1)}`); }
  const byM = (k, ty) => sumT(state.transactions.filter(t => t.date.startsWith(k)), ty);
  charts.bar?.destroy();
  charts.bar = new Chart($('#barC'), {type:'bar',
    data:{labels: ms.map(k => thDate(k + '-01', {month:'short', year:'2-digit'})),
      datasets:[{label:t('income'), data:ms.map(k => byM(k, 'income')), backgroundColor:'#22c55e', borderRadius:8, maxBarThickness:26},
                {label:t('expense'), data:ms.map(k => byM(k, 'expense')), backgroundColor:'#f43f5e', borderRadius:8, maxBarThickness:26}]},
    options:{maintainAspectRatio:false,
      plugins:{legend:{labels:{boxWidth:10, usePointStyle:true}}, tooltip:{callbacks:{label: c => ` ${c.dataset.label}: ${fmt(c.raw)}`}}},
      scales:{x:{grid:{display:false}}, y:{beginAtZero:true, grid:{color:grid}, ticks:{callback: v => Number(v).toLocaleString('th-TH')}}}}});
}

/* ================= รายการทั้งหมด ================= */
function txRow(t){
  const tags = [];
  const direction = t.type === 'income' ? 'เงินเข้า' : 'เงินออก';
  const sign = t.type === 'income' ? '+' : '−';
  if(t.hasSlip) tags.push('<span class="tag">สลิป</span>');
  if(t.source === 'statement') tags.push('<span class="tag" style="background:rgba(34,211,238,.15);color:var(--accent2)">สเตจเม้นท์</span>');
  if(t.project) tags.push(`<span class="tag" style="background:rgba(245,158,11,.15);color:var(--warn)">${esc(t.project)}</span>`);
  if(t.vatAmount) tags.push(`<span class="tag">VAT 7%</span>`);
  if(t.whtAmount) tags.push(`<span class="tag">WHT</span>`);

  const sub = [t.time ? t.time + ' น.' : '', t.note, t.bank].filter(Boolean).map(esc).join(' · ');
  return `<div class="tx">
    <div class="tx-ic ${t.type}">${ICONS[t.category] || (t.type === 'income' ? '💰' : '💸')}</div>
    <div class="tx-main"><div class="tx-title"><span class="tx-direction ${t.type}">${direction}</span><span>${esc(t.category)}</span>${tags.join(' ')}</div><div class="tx-sub">${sub || '—'}</div></div>
    <div class="tx-amt ${t.type === 'income' ? 'in' : 'out'}">${sign}${fmt(t.amount)}</div>
    <div class="tx-act">${t.hasSlip ? `<button class="icon-btn sm" data-slip="${t.id}" title="ดูสลิป">🧾</button>` : ''}
      <button class="icon-btn sm" data-edit="${t.id}" title="แก้ไข">✏️</button><button class="icon-btn sm" data-del="${t.id}" title="ลบ">🗑️</button></div>
  </div>`;
}
function renderFilterCats(){
  const sel = $('#fCat'), cur = sel.value;
  const cats = [...new Set([...state.categories.income, ...state.categories.expense, ...state.transactions.map(t => t.category)])];
  sel.innerHTML = '<option value="">' + t('all_types') + '</option>' + cats.map(c => `<option ${c === cur ? 'selected' : ''}>${esc(c)}</option>`).join('');
}
function renderList(){
  renderFilterCats();
  const ty = $('#fType').value, cat = $('#fCat').value, q = $('#fSearch').value.trim().toLowerCase();
  const rows = periodTx().filter(t => (!ty || t.type === ty) && (!cat || t.category === cat) &&
    (!q || [t.note, t.category, t.ref, t.bank, t.project].some(v => (v || '').toLowerCase().includes(q)))).sort(sortDesc);
  const income = sumT(rows, 'income'), expense = sumT(rows, 'expense');
  $('#listOverview').innerHTML = `
    <div class="list-total income-total"><span>${t('list_in')}</span><strong>+${fmt(income)}</strong></div>
    <div class="list-total expense-total"><span>${t('list_out')}</span><strong>−${fmt(expense)}</strong></div>
    <div class="list-total balance-total"><span>${t('net_balance')}</span><strong class="${income >= expense ? 'in' : 'out'}">${fmt(income - expense)}</strong></div>`;
  $('#listSum').textContent = `${rows.length} รายการ · แสดงตามเดือนและตัวกรองที่เลือก`;
  if(!rows.length){ $('#txList').innerHTML = emptyHTML('ไม่พบรายการ', 'ลองเปลี่ยนเดือนหรือตัวกรอง'); return; }
  const g = {}; rows.forEach(t => (g[t.date] = g[t.date] || []).push(t));
  $('#txList').innerHTML = Object.entries(g).map(([d, items]) => {
    const net = sumT(items, 'income') - sumT(items, 'expense');
    return `<div class="day"><span>${thDate(d, {weekday:'long', day:'numeric', month:'long', year:'numeric'})}</span><span class="${net >= 0 ? 'in' : 'out'}">${net >= 0 ? '+' : ''}${fmt(net)}</span></div>` + items.map(txRow).join('');
  }).join('');
}
['#fType', '#fCat'].forEach(s => $(s).addEventListener('change', renderList));
$('#fSearch').addEventListener('input', renderList);
$('#month').addEventListener('change', renderAll);
$('#btnAllTime').addEventListener('click', () => { $('#month').value = ''; renderAll(); });

/* ================= สเตจเม้นท์ธนาคาร (Statement & Password) ================= */
let pendingPdfFile = null;
const stmtDrop = $('#stmtDrop');
stmtDrop.addEventListener('click', () => $('#fileStmt').click());
$('#fileStmt').addEventListener('change', e => { handleStmtFile(e.target.files[0]); e.target.value = ''; });
['dragenter', 'dragover'].forEach(ev => stmtDrop.addEventListener(ev, e => { e.preventDefault(); stmtDrop.classList.add('over'); }));
['dragleave', 'drop'].forEach(ev => stmtDrop.addEventListener(ev, e => { e.preventDefault(); stmtDrop.classList.remove('over'); }));
stmtDrop.addEventListener('drop', e => { if(e.dataTransfer.files.length) handleStmtFile(e.dataTransfer.files[0]); });
$('#btnStmtTable').addEventListener('click', () => $('#fileStmtTable').click());
$('#fileStmtTable').addEventListener('change', async e => {
  const file = e.target.files[0];
  e.target.value = '';
  if(file) await handleStatementTableFile(file);
});

async function loadStatementPdf(file, password){
  const data = new Uint8Array(await file.arrayBuffer());
  const options = password ? {data, password} : {data};
  return pdfjsLib.getDocument(options).promise;
}

async function handleStmtFile(file){
  if(typeof pdfjsLib === 'undefined'){ toast('โหลดไลบรารีอ่าน PDF ไม่สำเร็จ — ครั้งแรกต้องเปิดผ่านอินเทอร์เน็ต', 'err'); return; }
  if(!file || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))){
    toast('กรุณาอัปโหลดไฟล์ PDF สเตจเม้นท์ธนาคาร', 'err');
    return;
  }
  pendingPdfFile = file;
  $('#pdfPwdInput').value = '';
  $('#stmtQueue').innerHTML = '';
  try {
    const pdf = await loadStatementPdf(file);
    await parseAndRenderStatement(pdf, file.name);
  } catch(err) {
    if(err.name === 'PasswordException'){
      $('#pwdModal').classList.add('show');
      $('#pdfPwdInput').focus();
    } else {
      toast(`ไม่สามารถอ่านไฟล์ PDF นี้ได้${err.message ? `: ${err.message}` : ''}`, 'err');
    }
  }
}

$('#btnUnlockPdf').addEventListener('click', async () => {
  const pwd = $('#pdfPwdInput').value;
  if(!pwd) return toast('กรุณากรอกรหัสผ่าน', 'err');
  if(!pendingPdfFile) return toast('กรุณาเลือกไฟล์ PDF ใหม่อีกครั้ง', 'err');

  const button = $('#btnUnlockPdf');
  button.disabled = true;
  try {
    const pdf = await loadStatementPdf(pendingPdfFile, pwd);
    $('#pwdModal').classList.remove('show');
    $('#pdfPwdInput').value = '';
    await parseAndRenderStatement(pdf, pendingPdfFile.name);
  } catch(err) {
    if(err.name === 'PasswordException'){
      toast('รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง', 'err');
      $('#pdfPwdInput').focus();
    } else {
      toast(`ไม่สามารถอ่านไฟล์ PDF นี้ได้${err.message ? `: ${err.message}` : ''}`, 'err');
    }
  } finally {
    button.disabled = false;
  }
});

async function parseAndRenderStatement(pdf, fileName){
  toast('กำลังวิเคราะห์สเตจเม้นท์ย้อนหลัง...', 'ok');
  let pageNumber = 0;
  let stage = 'เตรียมอ่านข้อความ';
  try {
    let fullText = '';
    for(let i = 1; i <= pdf.numPages; i++){
      pageNumber = i;
      stage = 'เปิดหน้า PDF';
      const page = await pdf.getPage(i);
      stage = 'อ่านข้อความในหน้า PDF';
      const textContent = await page.getTextContent();
      fullText += `\n[Page ${i}]\n${pdfItemsToLines(textContent.items)}`;
    }
    stage = 'แปลงข้อความเป็นรายการ';
    pageNumber = 0;
    const txs = parseStatementText(fullText);
    const snapshots = extractStatementBalances(fullText);
    if(!txs.length && !Object.keys(snapshots).length){
      $('#stmtQueue').innerHTML = '<div class="card"><p class="muted">ไม่พบรายการที่อ่านได้ในไฟล์นี้ กรุณาตรวจสอบว่า PDF มีข้อความที่เลือกคัดลอกได้</p></div>';
      toast('ไม่พบรายการในสเตจเม้นท์', 'err');
      return;
    }
    stage = 'แสดงรายการที่อ่านได้';
    renderStatementQueue(txs, fileName, snapshots);
    toast(`สแกนสเตจเม้นท์สำเร็จ พบ ${txs.length} รายการ${!txs.length ? ' และยอดคงเหลือ' : ''}`, 'ok');
  } catch(e) {
    console.error('Statement PDF processing failed', {fileName, stage, pageNumber, error:e});
    const detail = e?.message || String(e) || 'ไม่ทราบสาเหตุ';
    const location = pageNumber ? ` (หน้า ${pageNumber})` : '';
    toast(`ประมวลผลสเตจเม้นท์ไม่สำเร็จ${location} ระหว่าง${stage}: ${detail}`, 'err');
  }
}

function pdfItemsToLines(items){
  const positioned = items
    .map((item, index) => ({
      text: typeof item.str === 'string' ? item.str.trim() : '',
      x: item.transform?.[4] ?? index,
      y: item.transform?.[5]
    }))
    .filter(item => item.text);
  if(!positioned.length) return '';
  if(positioned.some(item => typeof item.y !== 'number')){
    return positioned.map(item => item.text).join(' ');
  }

  const rows = [];
  positioned.sort((a, b) => b.y - a.y || a.x - b.x).forEach(item => {
    let row = rows.find(candidate => Math.abs(candidate.y - item.y) <= 2.5);
    if(!row){ row = {y:item.y, items:[]}; rows.push(row); }
    row.items.push(item);
  });
  return rows
    .sort((a, b) => b.y - a.y)
    .map(row => row.items.sort((a, b) => a.x - b.x).map(item => item.text).join(' '))
    .join('\n');
}

function parseStatementDate(line){
  const numeric = /(\d{1,4})\s*[\/.-]\s*(\d{1,2})\s*[\/.-]\s*(\d{2,4})/.exec(line);
  let day, month, year, raw;
  if(numeric){
    const first = numeric[1], second = numeric[2], third = numeric[3];
    if(first.length === 4){ year = first; month = second; day = third; }
    else { day = first; month = second; year = third; }
    raw = numeric[0];
  } else {
    const monthNames = [
      ['มกราคม',1], ['ม.ค.',1], ['มกรา',1], ['ม.ค',1],
      ['กุมภาพันธ์',2], ['ก.พ.',2], ['ก.พ',2],
      ['มีนาคม',3], ['มี.ค.',3], ['มี.ค',3],
      ['เมษายน',4], ['เม.ย.',4], ['เม.ย',4],
      ['พฤษภาคม',5], ['พ.ค.',5], ['พ.ค',5],
      ['มิถุนายน',6], ['มิ.ย.',6], ['มิ.ย',6],
      ['กรกฎาคม',7], ['ก.ค.',7], ['ก.ค',7],
      ['สิงหาคม',8], ['ส.ค.',8], ['ส.ค',8],
      ['กันยายน',9], ['ก.ย.',9], ['ก.ย',9],
      ['ตุลาคม',10], ['ต.ค.',10], ['ต.ค',10],
      ['พฤศจิกายน',11], ['พ.ย.',11], ['พ.ย',11],
      ['ธันวาคม',12], ['ธ.ค.',12], ['ธ.ค',12],
      ['January',1], ['Jan',1], ['February',2], ['Feb',2],
      ['March',3], ['Mar',3], ['April',4], ['Apr',4],
      ['May',5], ['June',6], ['Jun',6], ['July',7], ['Jul',7],
      ['August',8], ['Aug',8], ['September',9], ['Sep',9],
      ['October',10], ['Oct',10], ['November',11], ['Nov',11],
      ['December',12], ['Dec',12]
    ].sort((a, b) => b[0].length - a[0].length);
    const monthPattern = monthNames.map(([name]) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const named = new RegExp(`(\\d{1,2})\\s*(${monthPattern})\\s*(\\d{2,4})`, 'i').exec(line);
    if(!named) return null;
    day = named[1];
    month = monthNames.find(([name]) => name.toLowerCase() === named[2].toLowerCase())?.[1];
    year = named[3];
    raw = named[0];
  }

  year = Number(year);
  if(year < 100) year = year >= 50 ? 2500 + year : 2000 + year;
  if(year > 2400) year -= 543;
  day = Number(day);
  month = Number(month);
  const date = new Date(Date.UTC(year, month - 1, day));
  if(date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return {date:`${year}-${pad(month)}-${pad(day)}`, raw};
}

function parseStatementText(text){
  const lines = text.split('\n');
  const parsed = [];
  const amtRe = /(\d{1,3}(?:,\d{3})+|\d+)\.\d{2}/g;
  const balanceLabelRe = /ยอดยกมา|ยอดยกไป|ยอดคงเหลือยกมา|ยอดคงเหลือยกไป|ยอดคงเหลือต้นงวด|ยอดคงเหลือปลายงวด|ยอดต้นงวด|ยอดปลายงวด|opening balance|beginning balance|closing balance|ending balance|balance brought forward|balance carried forward|\b(?:b\/f|c\/f)\b/i;
  const outgoingRe = /debit|withdraw(?:al)?|payment|purchase|transfer\s*out|trf\s*out|โอน(?:เงิน)?ออก|โอนไป|ถอน|จ่าย|ชำระ|ซื้อ|เงินออก|หักบัญชี|ค่าธรรมเนียม/i;
  const incomingRe = /credit|deposit|transfer\s*in|trf\s*in|เงินเข้า|รับโอน|ฝาก|รับชำระ|รับเงิน|โอนเข้า|ดอกเบี้ย|คืนเงิน/i;
  lines.forEach(line => {
    if(balanceLabelRe.test(line)) return;
    const statementDate = parseStatementDate(line);
    if(!statementDate) return;
    const amounts = [...line.matchAll(amtRe)]
      .map(match => Number(match[0].replace(/,/g, '')));
    if(!amounts.length) return;
    const candidates = amounts.length > 1 ? amounts.slice(0, -1) : amounts; // ตัดยอดคงเหลือ (คอลัมน์สุดท้าย) ออกเมื่อมีหลายตัวเลข
    const amt = candidates.find(amount => amount > 0);
    if(amt === undefined) return;

    const timeMatch = /\b([01]?\d|2[0-3]):([0-5]\d)(?::[0-5]\d)?\b/.exec(line);
    const time = timeMatch ? `${pad(timeMatch[1])}:${timeMatch[2]}` : '';
    const strongInRe = /คืนเงิน|ดอกเบี้ย|รับโอน|รับชำระ|รับเงิน|เงินเข้า|ฝากเงิน|โอนเข้า|credit|deposit/i;
    const direction = strongInRe.test(line) ? 'income' : outgoingRe.test(line) ? 'expense' : incomingRe.test(line) ? 'income' : '';
    const note = line
      .replace(statementDate.raw, '')
      .replace(/\b([01]?\d|2[0-3]):([0-5]\d)(?::[0-5]\d)?\b/, '')
      .replace(/(\d{1,3}(?:,\d{3})+|\d+)\.\d{2}/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 80);
    parsed.push({
      id: uid(), createdAt: Date.now(), date: statementDate.date, time,
      type: direction, amount: amt,
      category: direction === 'income' ? 'รับโอน' : direction === 'expense' ? 'เงินออก' : 'รอตรวจสอบ',
      note: note || 'รายการจากสเตจเม้นท์',
      ref: 'STM-' + Math.floor(Math.random()*1000000), bank: 'ธนาคาร',
      source: 'statement', project: ''
    });
  });
  return parsed;
}

function extractStatementBalances(text){
  const openingRe = /ยอดยกมา|ยอดคงเหลือยกมา|ยอดคงเหลือต้นงวด|ยอดต้นงวด|opening balance|beginning balance|balance brought forward|\bb\/f\b/i;
  const closingRe = /ยอดยกไป|ยอดคงเหลือยกไป|ยอดคงเหลือปลายงวด|ยอดปลายงวด|closing balance|ending balance|balance carried forward|\bc\/f\b/i;
  const amountRe = /-?\s*(?:\d{1,3}(?:,\d{3})+|\d+)\.\d{2}/g;
  const snapshots = {};
  const pages = text.split(/\[Page \d+\]/i);
  pages.forEach(pageText => {
    const pageLines = pageText.split('\n');
    const pageMonths = pageLines.map(line => parseStatementDate(line)?.date.slice(0, 7)).filter(Boolean);
    const pageMonth = pageMonths.at(-1) || '';
    pageLines.forEach(line => {
      const isOpening = openingRe.test(line), isClosing = closingRe.test(line);
      if(!isOpening && !isClosing) return;
      const amounts = [...line.matchAll(amountRe)].map(m => Number(m[0].replace(/[,\s]/g, '')));
      if(!amounts.length) return;
      const month = parseStatementDate(line)?.date.slice(0, 7) || pageMonth;
      if(!month) return;
      snapshots[month] ||= {};
      snapshots[month][isOpening ? 'opening' : 'closing'] = amounts.at(-1);
    });
  });
  return snapshots;
}

function statementMonthSummary(txs, snapshots = {}){
  const months = [...new Set([...txs.map(tx => tx.date.slice(0, 7)), ...Object.keys(snapshots)])].sort();
  let previousClosing = null;
  return months.map(month => {
    const items = txs.filter(tx => tx.date.startsWith(month));
    const snapshot = snapshots[month] || {};
    const priorClosing = previousClosing;
    const opening = snapshot.opening ?? priorClosing;
    const income = sumT(items, 'income'), expense = sumT(items, 'expense');
    const calculatedClosing = opening === null ? null : Math.round((opening + income - expense) * 100) / 100;
    const closing = snapshot.closing ?? calculatedClosing;
    const variance = snapshot.closing !== undefined && calculatedClosing !== null
      ? Math.round((snapshot.closing - calculatedClosing) * 100) / 100
      : null;
    const isCarried = opening !== null && (
      snapshot.opening === undefined ||
      (priorClosing !== null && Math.abs(opening - priorClosing) < 0.005)
    );
    const carryVariance = snapshot.opening !== undefined && priorClosing !== null
      ? Math.round((snapshot.opening - priorClosing) * 100) / 100
      : null;
    previousClosing = closing;
    return {month, opening, income, expense, calculatedClosing, closing, variance, carryVariance, isCarried};
  });
}

function statementDuplicateKey(tx){
  const note = (tx.note || '').toLocaleLowerCase().replace(/[\s\p{P}\p{S}]/gu, '');
  return `${tx.date}|${tx.type}|${Number(tx.amount).toFixed(2)}|${note}`;
}

function renderStatementQueue(txs, fileName, snapshots = {}){
  const unresolvedCount = txs.filter(t => !t.type).length;
  const existingKeys = new Set(state.transactions.map(statementDuplicateKey));
  const duplicateKeys = new Set();
  const duplicates = txs.filter(tx => {
    if(!tx.type) return false;
    const key = statementDuplicateKey(tx);
    const duplicate = existingKeys.has(key) || duplicateKeys.has(key);
    duplicateKeys.add(key);
    return duplicate;
  });
  const reconciliation = statementMonthSummary(txs, snapshots);
  const saveLabel = unresolvedCount
    ? `ระบุเงินเข้า/ออกอีก ${unresolvedCount} รายการก่อนบันทึก`
    : txs.length ? '✓ บันทึกประวัติสเตจเม้นท์ทั้งหมด' : 'ไม่พบรายการให้บันทึก';
  $('#stmtQueue').innerHTML = `<div class="card">
    <h2>📄 ผลการอ่านสเตจเม้นท์: ${esc(fileName)}</h2>
    <div class="statement-summary">
      <span class="statement-count">${txs.length} รายการ</span>
      <span class="income">เงินเข้า ${fmt(sumT(txs.filter(t => t.type === 'income'), 'income'))}</span>
      <span class="expense">เงินออก ${fmt(sumT(txs.filter(t => t.type === 'expense'), 'expense'))}</span>
      ${unresolvedCount ? `<span class="statement-review">ต้องตรวจสอบ ${unresolvedCount} รายการ</span>` : ''}
      ${duplicates.length ? `<span class="statement-review">รายการซ้ำที่ตรวจพบ ${duplicates.length} รายการ</span>` : ''}
    </div>
    ${reconciliation.length ? `<div class="statement-reconcile">${reconciliation.map(row => `<div class="statement-reconcile-row">
      <strong>${esc(row.month)}</strong>
      <span>ยอดยกมา ${row.opening === null ? 'ไม่พบ' : `<b class="statement-balance">${fmt(row.opening)}</b>${row.isCarried ? ' (ยกจากงวดก่อน)' : ''}`}</span>
      <span>รับเข้า ${fmt(row.income)}</span><span>จ่ายออก ${fmt(row.expense)}</span>
      <span>ยอดคำนวณปลายงวด ${row.calculatedClosing === null ? '—' : `<b>${fmt(row.calculatedClosing)}</b>`}</span>
      ${row.closing !== null ? `<span>ยอดยกไป ${fmt(row.closing)}${row.month !== reconciliation.at(-1)?.month ? ' (ใช้เป็นยอดยกมางวดถัดไป)' : ''}</span>` : ''}
      ${row.variance !== null && row.variance !== 0 ? `<span class="statement-variance">ต่างจากยอดในเอกสาร ${fmt(row.variance)}</span>` : ''}
      ${row.carryVariance !== null && row.carryVariance !== 0 ? `<span class="statement-variance">ยอดยกมาต่างจากยอดปิดงวดก่อน ${fmt(row.carryVariance)}</span>` : ''}
    </div>`).join('')}</div>` : ''}
    <div style="max-height:350px;overflow-y:auto;margin-bottom:16px">
      ${txs.map(t => `<div class="statement-row ${t.type || 'unresolved'}">
        <div class="tx-ic ${t.type || 'unresolved'}">${t.type === 'income' ? '↓' : t.type === 'expense' ? '↑' : '↕'}</div>
        <div class="tx-main">
          <div class="tx-title"><span class="tx-direction ${t.type || 'unresolved'}">${t.type === 'income' ? 'เงินเข้า' : t.type === 'expense' ? 'เงินออก' : 'เลือกทิศทาง'}</span><span>${esc(t.note)}</span>${duplicates.includes(t) ? '<span class="statement-duplicate">อาจซ้ำ</span>' : ''}</div>
          <div class="tx-sub">${thDate(t.date)}${t.time ? ` · ${esc(t.time)} น.` : ''} · ${esc(t.ref)}</div>
        </div>
        <div class="statement-row-end">
          <strong class="tx-amt ${t.type === 'income' ? 'in' : t.type === 'expense' ? 'out' : ''}">${t.type === 'income' ? '+' : t.type === 'expense' ? '−' : ''}${fmt(t.amount)}</strong>
          <select class="statement-direction" data-statement-id="${t.id}" aria-label="เลือกทิศทางเงินเข้าออก">
            <option value="" ${!t.type ? 'selected' : ''}>เลือกทิศทาง</option>
            <option value="income" ${t.type === 'income' ? 'selected' : ''}>เงินเข้า</option>
            <option value="expense" ${t.type === 'expense' ? 'selected' : ''}>เงินออก</option>
          </select>
        </div>
      </div>`).join('')}
    </div>
    <div class="inline" style="justify-content:flex-end">
      <button class="btn btn-ghost" onclick="$('#stmtQueue').innerHTML=''">ยกเลิก</button>
      <button class="btn btn-grad" id="btnSaveStmt" ${unresolvedCount || !txs.length ? 'disabled' : ''}>${saveLabel}</button>
    </div>
  </div>`;
  $('#stmtQueue').querySelectorAll('[data-statement-id]').forEach(select => {
    select.addEventListener('change', () => {
      const tx = txs.find(item => item.id === select.dataset.statementId);
      if(!tx) return;
      tx.type = select.value;
      tx.category = tx.type === 'income' ? 'รับโอน' : tx.type === 'expense' ? 'เงินออก' : 'รอตรวจสอบ';
      renderStatementQueue(txs, fileName, snapshots);
    });
  });
  $('#btnSaveStmt').onclick = () => {
    if(txs.some(t => !['income', 'expense'].includes(t.type))){
      toast('กรุณาเลือกเงินเข้าหรือเงินออกให้ครบทุกรายการ', 'err');
      return;
    }
    let rowsToSave = txs;
    if(duplicates.length){
      const saveDuplicates = confirm(`พบรายการที่อาจซ้ำ ${duplicates.length} รายการ\nตกลง = บันทึกทั้งหมดรวมรายการซ้ำ\nยกเลิก = บันทึกเฉพาะรายการใหม่`);
      if(!saveDuplicates){
        const duplicateSet = new Set(duplicates);
        rowsToSave = txs.filter(tx => !duplicateSet.has(tx));
      }
    }
    if(!rowsToSave.length) return toast('ไม่มีรายการใหม่ให้บันทึก', 'err');
    rowsToSave.forEach(t => state.transactions.push(t));
    const months = [...new Set(rowsToSave.map(t => t.date.slice(0, 7)))];
    $('#month').value = months.length === 1 ? months[0] : '';
    save(); $('#stmtQueue').innerHTML = ''; renderAll(); toast(`บันทึกสำเร็จ ${rowsToSave.length} รายการ`, 'ok'); go('list');
  };
}

function parseStatementTable(file){
  if(typeof XLSX === 'undefined') throw new Error('โหลดไลบรารี Excel ไม่สำเร็จ');
  return file.arrayBuffer().then(buffer => {
    const workbook = XLSX.read(buffer, {type:'array', cellDates:true});
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    if(!sheet) throw new Error('ไม่พบชีตข้อมูลในไฟล์');
    const rows = XLSX.utils.sheet_to_json(sheet, {header:1, raw:false, defval:'', dateNF:'yyyy-mm-dd'});
    if(rows.length < 2) throw new Error('ไฟล์ไม่มีแถวข้อมูล');
    const normalize = value => String(value || '').trim().toLocaleLowerCase().replace(/[\s_\-./()]/g, '');
    const headers = rows[0].map(normalize);
    const findColumn = names => headers.findIndex(header => names.some(name => header.includes(normalize(name))));
    const dateCol = findColumn(['วันที่', 'date', 'transactiondate', 'transdate']);
    const noteCol = findColumn(['รายละเอียด', 'รายการ', 'description', 'detail', 'memo']);
    const amountCol = findColumn(['จำนวนเงิน', 'amount', 'transactionamount']);
    const incomeCol = findColumn(['เงินเข้า', 'ฝาก', 'credit', 'deposit']);
    const expenseCol = findColumn(['เงินออก', 'ถอน', 'debit', 'withdrawal']);
    const balanceCol = findColumn(['ยอดคงเหลือ', 'balance', 'runningbalance']);
    const refCol = findColumn(['เลขอ้างอิง', 'reference', 'ref']);
    const directionCol = findColumn(['ทิศทาง', 'ประเภท', 'direction', 'type']);
    if(dateCol < 0 || (amountCol < 0 && incomeCol < 0 && expenseCol < 0)){
      throw new Error('ต้องมีคอลัมน์วันที่ และจำนวนเงิน หรือคอลัมน์เงินเข้า/เงินออก');
    }
    const txs = [], snapshots = {}, balanceEntries = {};
    rows.slice(1).forEach(row => {
      const rawDate = row[dateCol];
      let parsedDate = parseStatementDate(String(rawDate));
      if(!parsedDate && rawDate instanceof Date && !Number.isNaN(rawDate.valueOf())){
        parsedDate = {date:`${rawDate.getFullYear()}-${pad(rawDate.getMonth()+1)}-${pad(rawDate.getDate())}`};
      }
      if(!parsedDate){
        const usDate = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(rawDate).trim());
        if(usDate && Number(usDate[1]) <= 12 && Number(usDate[2]) > 12){
          const date = new Date(Date.UTC(Number(usDate[3]), Number(usDate[1]) - 1, Number(usDate[2])));
          parsedDate = {date:`${date.getUTCFullYear()}-${pad(date.getUTCMonth()+1)}-${pad(date.getUTCDate())}`};
        }
      }
      if(!parsedDate) return;
      const money = value => {
        const text = String(value ?? '').replace(/,/g, '').trim();
        const match = /-?\d+(?:\.\d{1,2})?/.exec(text);
        return match ? Number(match[0]) : 0;
      };
      const income = incomeCol >= 0 ? Math.abs(money(row[incomeCol])) : 0;
      const expense = expenseCol >= 0 ? Math.abs(money(row[expenseCol])) : 0;
      const combined = amountCol >= 0 ? money(row[amountCol]) : 0;
      const amount = income || expense ? (income || expense) : Math.abs(combined);
      if(!amount) return;
      const direction = String(row[directionCol] || '').toLocaleLowerCase();
      const type = income ? 'income' : expense ? 'expense' :
        /debit|withdraw|expense|out|จ่าย|ถอน|ออก/.test(direction) ? 'expense' :
        /credit|deposit|income|in|รับ|ฝาก|เข้า/.test(direction) ? 'income' :
        combined < 0 ? 'expense' : 'income';
      const date = parsedDate.date, month = date.slice(0, 7);
      const tx = {
        id:uid(), createdAt:Date.now(), date, time:'', type, amount,
        category:type === 'income' ? 'รับโอน' : 'เงินออก',
        note:String(row[noteCol] || 'รายการจากไฟล์ตาราง').trim().slice(0, 80),
        ref:refCol >= 0 ? String(row[refCol] || '') : '',
        bank:'ธนาคาร', source:'statement', project:''
      };
      txs.push(tx);
      if(balanceCol >= 0 && String(row[balanceCol]).trim()){
        (balanceEntries[month] ||= []).push({date, balance:money(row[balanceCol]), tx});
      }
    });
    if(!txs.length) throw new Error('ไม่พบแถวรายการที่มีวันที่และยอดเงินที่ถูกต้อง');
    Object.entries(balanceEntries).forEach(([month, entries]) => {
      entries.sort((a, b) => a.date.localeCompare(b.date));
      const first = entries[0];
      snapshots[month] = {
        opening:Math.round((first.balance - (first.tx.type === 'income' ? first.tx.amount : -first.tx.amount)) * 100) / 100,
        closing:entries.at(-1).balance
      };
    });
    return {txs, snapshots};
  });
}

async function handleStatementTableFile(file){
  try{
    const {txs, snapshots} = await parseStatementTable(file);
    renderStatementQueue(txs, file.name, snapshots);
    toast(`อ่านไฟล์สำเร็จ พบ ${txs.length} รายการ`, 'ok');
  }catch(error){
    toast(`อ่านไฟล์ตารางไม่สำเร็จ: ${error.message}`, 'err');
  }
}

/* ================= คลิกรวม / Modal เพิ่ม/แก้ไขรายการ ================= */
document.addEventListener('click', e => {
  const n = e.target.closest('[data-nav]'); if(n){ e.preventDefault(); go(n.dataset.nav); return; }
  const b = e.target.closest('button'); if(!b) return;
  if(b.dataset.edit) openTx(b.dataset.edit);
  if(b.dataset.del) deleteTx(b.dataset.del);
  if(b.dataset.slip) viewSlip(b.dataset.slip);
  if(b.hasAttribute('data-close')) b.closest('.modal-bg').classList.remove('show');
});
$$('.modal-bg').forEach(m => m.addEventListener('click', e => { if(e.target === m) m.classList.remove('show'); }));
document.addEventListener('keydown', e => { if(e.key === 'Escape') $$('.modal-bg').forEach(m => m.classList.remove('show')); });
function openLightbox(src){ $('#lbImg').src = src; $('#lightbox').classList.add('show'); }
async function viewSlip(id){
  const src = slipsOK ? await SlipDB.get(id).catch(() => null) : null;
  src ? openLightbox(src) : toast('ไม่พบรูปสลิป', 'err');
}
async function deleteTx(id){
  if(!confirm('ต้องการลบรายการนี้ใช่หรือไม่?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  if(slipsOK) SlipDB.del(id).catch(() => {});
  save(); renderAll(); toast('ลบรายการแล้ว');
}

let mType = 'expense', editId = null;
function updateProjectSelect(selProj){
  $('#mProject').innerHTML = '<option value="">-- ไม่ระบุโครงการ --</option>' + state.projects.map(p => `<option ${p===selProj?'selected':''}>${esc(p)}</option>`).join('');
}
function catOptions(type, sel){
  const c = [...state.categories[type]]; if(sel && !c.includes(sel)) c.push(sel);
  return c.map(x => `<option ${x === sel ? 'selected' : ''}>${esc(x)}</option>`).join('');
}
function setMType(type, sel){
  mType = type;
  $$('#mSeg button').forEach(b => b.className = b.dataset.type === type ? (type === 'income' ? 'on-in' : 'on-out') : '');
  $('#mCat').innerHTML = catOptions(type, sel);
}
function openTx(id){
  editId = id || null; const t = id ? state.transactions.find(x => x.id === id) : null;
  $('#mTitle').textContent = t ? 'แก้ไขรายการ' : 'เพิ่มรายการ';
  setMType(t ? t.type : 'expense', t?.category);
  updateProjectSelect(t?.project);
  $('#mAmount').value = t ? t.amount : ''; $('#mDate').value = t ? t.date : today();
  $('#mTime').value = t ? (t.time || '') : nowTime(); $('#mNote').value = t?.note || ''; $('#mRef').value = t?.ref || '';
  $('#mVat').checked = !!t?.vatAmount; $('#mWht3').checked = t?.whtRate === 0.03; $('#mWht5').checked = t?.whtRate === 0.05;
  $('#txModal').classList.add('show'); setTimeout(() => $('#mAmount').focus(), 120);
}
$$('#mSeg button').forEach(b => b.addEventListener('click', () => setMType(b.dataset.type)));
$('#fab').addEventListener('click', () => openTx());

$('#txForm').addEventListener('submit', e => {
  e.preventDefault();
  let amount = parseFloat($('#mAmount').value);
  if(!(amount > 0)) return toast('กรุณากรอกจำนวนเงินให้ถูกต้อง', 'err');
  if(!$('#mDate').value) return toast('กรุณาเลือกวันที่', 'err');

  let vat = $('#mVat').checked ? amount * 0.07 : 0;
  let whtRate = $('#mWht3').checked ? 0.03 : $('#mWht5').checked ? 0.05 : 0;
  let wht = amount * whtRate;

  const data = {
    type: mType, amount: Math.round(amount * 100) / 100, category: $('#mCat').value,
    date: $('#mDate').value, time: $('#mTime').value || '', note: $('#mNote').value.trim(),
    ref: $('#mRef').value.trim(), project: $('#mProject').value,
    vatAmount: Math.round(vat * 100) / 100, whtRate, whtAmount: Math.round(wht * 100) / 100
  };
  if(editId){ const i = state.transactions.findIndex(t => t.id === editId); if(i > -1) state.transactions[i] = {...state.transactions[i], ...data}; }
  else state.transactions.push({id:uid(), createdAt:Date.now(), bank:'', source:'manual', hasSlip:false, ...data});
  save(); $('#txModal').classList.remove('show'); renderAll(); toast(editId ? 'แก้ไขรายการแล้ว' : 'บันทึกรายการแล้ว', 'ok');
});

/* ================= โครงการ & ใบเสร็จ/ใบกำกับภาษี (Projects & Invoices) ================= */
function renderInvoicePage(){
  renderProjectList();
}
function renderProjectList(){
  $('#projList').innerHTML = state.projects.map((p, i) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--input);border-radius:10px;margin-bottom:6px">
      <span><b>${esc(p)}</b> · รายรับ: ${fmt(sumT(state.transactions.filter(t=>t.project===p), 'income'))}</span>
      <button class="btn btn-ghost sm" data-delproj="${i}">ลบ</button>
    </div>`).join('') || '<div class="muted">ยังไม่มีโครงการ</div>';
}
$('#btnAddProj').addEventListener('click', () => {
  const name = $('#newProjName').value.trim();
  if(!name) return;
  if(state.projects.includes(name)) return toast('มีโครงการนี้แล้ว', 'err');
  state.projects.push(name); $('#newProjName').value = ''; save(); renderProjectList(); toast('เพิ่มโครงการแล้ว', 'ok');
});
$('#projList').addEventListener('click', e => {
  const btn = e.target.closest('[data-delproj]'); if(!btn) return;
  const idx = +btn.dataset.delproj;
  if(state.projects.length <= 1) return toast('ต้องมีโครงการอย่างน้อย 1 โครงการ', 'err');
  state.projects.splice(idx, 1); save(); renderProjectList(); toast('ลบโครงการแล้ว');
});

$('#btnPrintInv').addEventListener('click', () => {
  const cust = $('#invCustomer').value.trim() || 'ลูกค้าทั่วไป';
  const addr = $('#invAddr').value.trim() || '-';
  const item = $('#invItemName').value.trim() || 'ค่าบริการ';
  const amt = parseFloat($('#invAmount').value) || 0;
  if(!(amt > 0)) return toast('กรุณาระบุจำนวนเงิน', 'err');

  const hasVat = $('#invVat').checked;
  const whtRate = $('#invWht3').checked ? 0.03 : $('#invWht5').checked ? 0.05 : 0;
  const vat = hasVat ? amt * 0.07 : 0;
  const wht = amt * whtRate;
  const net = amt + vat - wht;
  const s = state.settings;

  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>Tax Invoice</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Sarabun',sans-serif;padding:30px;color:#111}
      .head{display:flex;justify-content:space-between;border-bottom:2px solid #1e3a8a;padding-bottom:15px;margin-bottom:20px}
      .title{text-align:right}
      .info{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;font-size:14px}
      table{width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px}
      th,td{border:1px solid #ccc;padding:8px 12px;text-align:left}
      th{background:#1e3a8a;color:#fff}
      .r{text-align:right}
      .total{margin-top:20px;float:right;width:300px;font-size:14px}
      .total div{display:flex;justify-content:space-between;padding:4px 0}
      .total strong{font-size:16px;color:#1e3a8a}
    </style></head><body>
    <div class="head">
      <div><h2>${esc(s.name)}</h2><p>${esc(s.address)}<br>เลขประจำตัวผู้เสียภาษี: ${esc(s.taxId)}</p></div>
      <div class="title"><h2>ใบเสร็จรับเงิน / ใบกำกับภาษี</h2><p>เลขที่: INV-${today().replace(/-/g,'')}<br>วันที่: <b>${thDate(today())}</b></p></div>
    </div>
    <div class="info">
      <div><b>นามผู้ซื้อ / ลูกค้า:</b><br>${esc(cust)}<br>${esc(addr).replace(/\n/g,'<br>')}</div>
    </div>
    <table>
      <thead><tr><th>ลำดับ</th><th>รายการสินค้า / บริการ</th><th class="r">จำนวนเงิน (บาท)</th></tr></thead>
      <tbody><tr><td>1</td><td>${esc(item)}</td><td class="r">${fmtNum(amt)}</td></tr></tbody>
    </table>
    <div class="total">
      <div><span>มูลค่าสินค้า/บริการ:</span><span>${fmtNum(amt)}</span></div>
      ${hasVat ? `<div><span>VAT 7%:</span><span>${fmtNum(vat)}</span></div>` : ''}
      ${whtRate ? `<div><span>หัก ณ ที่จ่าย (${whtRate*100}%):</span><span>-${fmtNum(wht)}</span></div>` : ''}
      <div><strong>ยอดชำระสุทธิ:</strong><strong>${fmtNum(net)}</strong></div>
    </div>
    <script>window.print();<\/script></body></html>`);
  w.document.close();
});

$('#btnSaveInvTx').addEventListener('click', () => {
  const amt = parseFloat($('#invAmount').value) || 0;
  if(!(amt > 0)) return toast('กรุณาระบุจำนวนเงิน', 'err');
  const hasVat = $('#invVat').checked;
  const whtRate = $('#invWht3').checked ? 0.03 : $('#invWht5').checked ? 0.05 : 0;
  state.transactions.push({
    id: uid(), createdAt: Date.now(), type: 'income', amount: Math.round(amt * 100) / 100,
    category: 'ขายสินค้า/บริการ', date: today(), time: nowTime(),
    note: 'ออกใบเสร็จ: ' + ($('#invCustomer').value.trim() || 'ลูกค้าทั่วไป'),
    ref: 'INV-' + Math.floor(Math.random()*100000), bank: '', source: 'manual', hasSlip: false,
    project: state.projects[0] || '', vatAmount: hasVat ? amt*0.07 : 0, whtRate, whtAmount: amt * whtRate
  });
  save(); renderAll(); toast('บันทึกรายรับจากใบเสร็จแล้ว', 'ok'); go('list');
});

/* ================= OCR / QR สลิปรายเดี่ยว ================= */
async function loadImg(file){
  return new Promise((res, rej) => { const img = new Image(); img.onload = () => res(img); img.onerror = rej; img.src = URL.createObjectURL(file); });
}
function toDataURL(img, max, q = .8){
  const sc = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
  const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * sc); c.height = Math.round(img.naturalHeight * sc);
  const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height);
  return c.toDataURL('image/jpeg', q);
}
function scanQR(img){
  if(typeof jsQR === 'undefined') return null;
  const W = img.naturalWidth, H = img.naturalHeight;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d', {willReadFrequently:true}); ctx.drawImage(img, 0, 0);
  const r = jsQR(ctx.getImageData(0, 0, W, H).data, W, H, {inversionAttempts:'attemptBoth'});
  return r ? r.data : null;
}
function parseTLV(s){
  let i = 0, out = {};
  while(i + 4 <= s.length){ const id = s.substr(i,2), len = parseInt(s.substr(i+2,2),10); if(isNaN(len))break; out[id]=s.substr(i+4,len); i+=4+len; }
  return out;
}
function parseSlipQR(text){
  const top = parseTLV(text);
  if(!top || top['00'] !== '01') return {isSlip:false};
  // ข้อมูล PromptPay อยู่ใน tag 29 (AnyID) หรือ 30 (Bill Payment): sub 00=AID, 01=เบอร์, 02=เลขบัตร, 03=e-wallet, 04=เลขบัญชี (3 หลักแรก = รหัสธนาคาร)
  const acct = top['29'] ? parseTLV(top['29']) : top['30'] ? parseTLV(top['30']) : null;
  if(!acct || !acct['00']) return {isSlip:false};
  let bank = '', ref = '';
  if(acct['04']){ const code = acct['04'].slice(0, 3); bank = BANKS[code] ? 'ธ.' + BANKS[code] : ''; ref = acct['04'].slice(3); }
  else if(acct['01']) ref = acct['01'].replace(/^0066/, '0');
  else if(acct['02']) ref = acct['02'];
  else if(acct['03']) ref = acct['03'];
  let extraRef = '';
  if(top['62']){ const ad = parseTLV(top['62']); extraRef = ad['05'] || ad['07'] || ''; }
  const amount = top['54'] !== undefined ? Number(top['54']) : '';
  return {isSlip:true, bank, ref: ref || extraRef || '', amount: Number.isFinite(amount) ? amount : '', name: top['59'] || ''};
}

let queue = [], busy = false;
function handleFiles(files){
  const imgs = [...files].filter(f => f.type.startsWith('image/'));
  if(!imgs.length) return toast('รองรับเฉพาะไฟล์รูปภาพ', 'err');
  setMatchWarn('');
  imgs.forEach(f => queue.push({id:uid(), file:f, status:'wait', progress:0, msg:'รอคิว...'}));
  renderQueue(); if(!busy) runQueue();
}
async function runQueue(){
  busy = true; let it;
  while((it = queue.find(q => q.status === 'wait'))) await processItem(it);
  busy = false;
}
async function processItem(it){
  it.status = 'work'; it.msg = 'กำลังประมวลผลสลิป...'; renderQueue();
  try{
    const img = await loadImg(it.file);
    it.thumb = toDataURL(img, 1000, .8);
    const qrText = scanQR(img); it.qr = qrText ? parseSlipQR(qrText) : null;
    it.type = ''; it.amount = ''; it.date = ''; it.time = ''; it.category = ''; it.note = '';
    if(it.qr && it.qr.isSlip){
      it.ref = it.qr.ref || '';
      it.bank = it.qr.bank || '';
      if(it.qr.amount) it.amount = it.qr.amount;
      if(it.qr.name) it.note = it.qr.name;
    } else { it.ref = ''; it.bank = ''; }
    // OCR — ดึงยอดเงิน/วันที่/เวลาจากรูปสลิป (เมื่อโหลด Tesseract สำเร็จ) สำหรับกรณีที่ QR ไม่มี
    if(typeof Tesseract !== 'undefined'){
      it.msg = 'กำลังอ่านข้อความจากสลิป (OCR)...'; renderQueue();
      try{
        const r = await Tesseract.recognize(it.file, 'tha+eng');
        const txt = (r && r.data && r.data.text) || '';
        if(txt){
          if(!it.amount){ const amts = [...txt.matchAll(/(\d{1,3}(?:,\d{3})+|\d+)\.\d{2}/g)].map(m => Number(m[1].replace(/,/g, ''))); if(amts.length) it.amount = Math.max(...amts); }
          if(!it.date){ const dm = parseStatementDate(txt); if(dm) it.date = dm.date; }
          if(!it.time){ const tm = /\b([01]?\d|2[0-3]):([0-5]\d)(?::[0-5]\d)?\b/.exec(txt); if(tm) it.time = `${pad(tm[1])}:${tm[2]}`; }
        }
      }catch(err){ /* OCR ล้มเหลว — กรอกมือได้ */ }
    }
    if(!it.date) it.date = today();
    it.status = 'ready'; URL.revokeObjectURL(img.src);
  }catch(e){ it.status = 'error'; it.msg = 'อ่านไฟล์ไม่สำเร็จ'; }
  renderQueue();
}
function renderQueue(){
  $('#qHead').style.display = queue.length ? 'flex' : 'none';
  $('#qCount').textContent = `· ${queue.length} สลิป`;
  $('#queue').innerHTML = queue.map(qCard).join('');
}
function qCard(q){
  return `<div class="card q-card" data-qid="${q.id}">
    <div class="q-thumb" style="aspect-ratio:3/4;background:var(--input);border-radius:12px;overflow:hidden">${q.thumb ? `<img src="${q.thumb}" style="width:100%;height:100%;object-fit:cover">`:''}</div>
    <div>
      <div class="badges"><span class="badge ${q.status === 'ready' ? 'ok' : ''}">${q.status === 'ready' ? 'ตรวจสอบข้อมูลก่อนบันทึก' : esc(q.msg || 'กำลังประมวลผล')}</span></div>
      <div class="q-grid">
        <div><label class="f">ประเภท</label><select data-qf="type"><option value="">เลือกประเภท</option><option value="income" ${q.type === 'income' ? 'selected' : ''}>รายรับ</option><option value="expense" ${q.type === 'expense' ? 'selected' : ''}>รายจ่าย</option></select></div>
        <div><label class="f">จำนวนเงิน</label><input type="number" min="0" step="0.01" data-qf="amount" value="${q.amount}"></div>
        <div><label class="f">วันที่</label><input type="date" data-qf="date" value="${q.date}"></div>
        <div><label class="f">หมวดหมู่</label><select data-qf="category"><option value="">เลือกหมวดหมู่</option>${q.type ? catOptions(q.type, q.category) : ''}</select></div>
        <div class="span2"><label class="f">รายละเอียด</label><input data-qf="note" value="${esc(q.note)}"></div>
      </div>
      <div class="q-actions"><button class="btn btn-ghost" data-qrm="${q.id}">ลบ</button><button class="btn btn-grad" data-qsave="${q.id}" ${q.status !== 'ready' ? 'disabled' : ''}>บันทึก</button></div>
    </div></div>`;
}
function setMatchWarn(msg){ const el = $('#matchWarn'); el.innerHTML = msg ? `<div class="alert">${esc(msg)}</div>` : ''; }
function saveQueuedSlip(q){
  if(q.status !== 'ready' || !['income', 'expense'].includes(q.type) || !(Number(q.amount) > 0) || !q.date || !q.category) return false;
  const amount = Math.round(+q.amount * 100) / 100;
  const dup = state.transactions.find(t => t.date === q.date && t.type === q.type && Math.abs(t.amount - amount) < 0.005);
  const tx = {id:uid(), createdAt:Date.now(), type:q.type, amount, category:q.category, date:q.date, time:q.time, note:q.note, ref:q.ref, bank:q.bank, source:'slip', hasSlip:true, project:q.project || ''};
  state.transactions.push(tx);
  if(slipsOK) SlipDB.put(tx.id, q.thumb).catch(() => {});
  if(dup) setMatchWarn(t('dup_warn'));
  return true;
}
function updateQueueField(e){
  const field = e.target.dataset.qf;
  if(!field) return;
  const card = e.target.closest('[data-qid]'), q = queue.find(x => x.id === card?.dataset.qid);
  if(!q) return;
  q[field] = e.target.value;
  if(field === 'type'){
    q.category = '';
    card.querySelector('[data-qf="category"]').innerHTML = '<option value="">เลือกหมวดหมู่</option>' + (q.type ? catOptions(q.type, '') : '');
  }
}
$('#queue').addEventListener('input', updateQueueField);
$('#queue').addEventListener('change', updateQueueField);
$('#queue').addEventListener('click', e => {
  const b = e.target.closest('[data-qrm],[data-qsave]'); if(!b) return;
  const q = queue.find(x => x.id === b.closest('[data-qid]').dataset.qid); if(!q) return;
  if(b.dataset.qrm){ queue = queue.filter(x => x !== q); renderQueue(); }
  if(b.dataset.qsave){
    if(!saveQueuedSlip(q)) return toast('กรุณากรอกประเภท จำนวนเงิน วันที่ และหมวดหมู่ให้ครบ', 'err');
    queue = queue.filter(x => x !== q); save(); renderQueue(); renderAll(); toast('บันทึกสลิปแล้ว', 'ok');
  }
});
$('#qClear').addEventListener('click', () => { queue = []; renderQueue(); });
$('#qSaveAll').addEventListener('click', () => {
  const valid = queue.filter(saveQueuedSlip);
  if(!valid.length) return toast('กรุณากรอกข้อมูลสลิปให้ครบก่อนบันทึก', 'err');
  queue = queue.filter(q => !valid.includes(q)); save(); renderQueue(); renderAll();
  toast(`บันทึกสลิป ${valid.length} รายการ${queue.length ? ` · ยังมี ${queue.length} รายการที่ต้องตรวจสอบ` : ''}`, 'ok');
});
const drop = $('#drop');
drop.addEventListener('click', () => $('#fileSlip').click());
$('#fileSlip').addEventListener('change', e => { handleFiles(e.target.files); e.target.value = ''; });

/* ================= ส่งออกรายงาน (PDF & Excel) ================= */
const DOC_CSS = `
#doc{width:794px;background:#fff;color:#111827;font-family:'Sarabun',sans-serif;font-size:13.5px;line-height:1.5;padding:44px 50px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,.35)}
#doc .d-head{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding-bottom:14px;border-bottom:3px solid #1e3a8a}
#doc .d-org h2{font-size:19px;color:#1e3a8a;margin:0}
#doc .d-org p{margin:0;font-size:12.5px;color:#4b5563}
#doc .d-title{text-align:right}
#doc .d-title h1{font-size:21px;color:#1e3a8a;margin:0 0 4px}
#doc .d-title table{margin-left:auto}
#doc .d-title td{padding:1px 0 1px 10px;font-size:12.5px}
#doc .d-info{display:grid;grid-template-columns:1fr 1fr;gap:4px 24px;margin:14px 0}
#doc .d-sum{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:6px 0 14px}
#doc .d-sum div{border:1px solid #d1d5db;border-radius:6px;padding:8px 12px}
#doc .d-sum small{display:block;color:#6b7280;font-size:12px}
#doc .d-sum strong{font-size:17px}
#doc table.d-tbl{width:100%;border-collapse:collapse;font-size:12.5px}
#doc .d-tbl th{background:#1e3a8a;color:#fff;font-weight:600;padding:7px 6px;border:1px solid #1e3a8a;text-align:center}
#doc .d-tbl td{border:1px solid #d1d5db;padding:6px;vertical-align:top}
#doc .d-tbl tfoot td{font-weight:700;background:#eef2ff}
#doc .c{text-align:center}#doc .r{text-align:right;white-space:nowrap}
#doc .income-c{color:#047857}#doc .expense-c{color:#b91c1c}
#doc .d-words{margin:12px 0 6px;padding:8px 12px;background:#f1f5f9;border-left:4px solid #1e3a8a}
#doc .d-sigs{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:34px}
#doc .d-sig{text-align:center}
#doc .sig-img{height:66px;display:flex;align-items:flex-end;justify-content:center}
#doc .sig-img img{max-height:66px;max-width:220px}
#doc .sig-line{display:flex;align-items:flex-end;gap:6px;margin:0 10px 6px}
#doc .sig-line span.l{flex:1;border-bottom:1px dotted #111;height:1px}`;
document.head.insertAdjacentHTML('beforeend', `<style>${DOC_CSS}</style>`);

function reportOpts(){
  return {mode:$('#rMode').value, month:$('#rMonth').value, from:$('#rFrom').value, to:$('#rTo').value, type:$('#rType').value,
          title:$('#rTitle').value.trim() || 'รายงานสรุปรายรับ-รายจ่าย', slips:$('#rSlips').checked, approver:$('#rApprover').checked};
}
function getReportTx(o){
  return state.transactions.filter(t => {
    if(o.type && t.type !== o.type) return false;
    if(o.mode === 'month') return !!o.month && t.date.startsWith(o.month);
    if(o.mode === 'range') return (!o.from || t.date >= o.from) && (!o.to || t.date <= o.to);
    return true;
  }).sort(sortAsc);
}
function periodLabel(o, list){
  if(o.mode === 'month') return o.month ? 'ประจำเดือน ' + thDate(o.month + '-01', {month:'long', year:'numeric'}) : '-';
  if(o.mode === 'range') return `ตั้งแต่ ${thDate(o.from, LONG)} ถึง ${thDate(o.to, LONG)}`;
  return 'ทุกช่วงเวลา';
}
const docNo = () => `RPT-${today().slice(0, 7).replace('-', '')}-${String(state.settings.docSeq || 1).padStart(4, '0')}`;

async function buildDoc(){
  const o = reportOpts(), list = getReportTx(o), s = state.settings;
  const inc = sumT(list, 'income'), exp = sumT(list, 'expense'), net = inc - exp, no = docNo(), issue = thDate(today(), LONG);
  let run = 0;
  const rows = list.map((t, i) => { run += t.type === 'income' ? t.amount : -t.amount; return `<tr>
    <td class="c">${i + 1}</td>
    <td>${thDate(t.date)}${t.time ? `<br><small>${t.time} น.</small>` : ''}</td>
    <td><b>${esc(t.category)}</b>${t.note ? `<br><small>${esc(t.note)}</small>` : ''}${t.project?`<br><small style="color:var(--accent)">โปรเจกต์: ${esc(t.project)}</small>`:''}</td>
    <td><small>${esc(t.bank)} ${esc(t.ref)}</small></td>
    <td class="r income-c">${t.type === 'income' ? fmtNum(t.amount) : ''}</td>
    <td class="r expense-c">${t.type === 'expense' ? fmtNum(t.amount) : ''}</td>
    <td class="r">${fmtNum(run)}</td></tr>`; }).join('')
    || '<tr><td colspan="7" class="c" style="padding:24px;color:#9ca3af">ไม่มีรายการในช่วงเวลาที่เลือก</td></tr>';

  const corpDetails = s.entityType === 'corporate' ? `<p>เลขทะเบียนนิติบุคคล: ${esc(s.companyId || '-')} | เลขประจำตัวผู้เสียภาษี: ${esc(s.taxId || '-')}</p>` : '';
  const dots = '..............................................';

    let appendix = '';
  if(o.slips){
    const ids = list.filter(t => t.hasSlip).map(t => t.id).slice(0, 40);
    const imgs = slipsOK ? (await Promise.all(ids.map(id => SlipDB.get(id).catch(() => null)))).filter(Boolean) : [];
    if(imgs.length) appendix = `<div style="page-break-before:always;margin-top:18px"><h3 style="color:#1e3a8a;font-size:15px">ภาคผนวก — ภาพสลิป (${imgs.length} รูป)</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">${imgs.map(src => `<img src="${esc(src)}" style="width:100%;border:1px solid #d1d5db;border-radius:6px">`).join('')}</div></div>`;
  }

return `<div id="doc">
    <div class="d-head">
      <div class="d-org">${s.logo ? `<img src="${esc(s.logo)}" style="width:60px;height:60px;object-fit:contain">` : ''}<div>
        <h2>${esc(s.name || 'ชื่อผู้จัดทำ / กิจการ')}</h2>
        ${corpDetails}
        ${s.address ? `<p>${esc(s.address)}</p>` : ''}</div></div>
      <div class="d-title"><h1>${esc(o.title)}</h1>
        <table><tr><td>เลขที่เอกสาร</td><td><b>${no}</b></td></tr><tr><td>วันที่ออก</td><td><b>${issue}</b></td></tr></table></div>
    </div>
    <div class="d-info">
      <div><b>ผู้จัดทำ:</b> ${esc(s.name || '-')} (${esc(s.position || 'การเงิน')})</div>
      <div><b>ช่วงเวลา:</b> ${esc(periodLabel(o, list))}</div>
    </div>
    <div class="d-sum">
      <div><small>รวมรายรับ</small><strong class="income-c">${fmtNum(inc)}</strong> บาท</div>
      <div><small>รวมรายจ่าย</small><strong class="expense-c">${fmtNum(exp)}</strong> บาท</div>
      <div><small>คงเหลือสุทธิ</small><b>${fmtNum(net)}</b> บาท</div>
    </div>
    <table class="d-tbl">
      <thead><tr><th style="width:40px">ลำดับ</th><th style="width:95px">วันที่</th><th>รายการ</th><th style="width:110px">อ้างอิง</th><th style="width:80px">รายรับ</th><th style="width:80px">รายจ่าย</th><th style="width:85px">คงเหลือ</th></tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr><td colspan="4" class="r">รวมทั้งสิ้น</td><td class="r income-c">${fmtNum(inc)}</td><td class="r expense-c">${fmtNum(exp)}</td><td class="r">${fmtNum(net)}</td></tr></tfoot>
    </table>
    <div class="d-words"><b>ยอดเงิน (ตัวอักษร):</b> ${net < 0 ? 'ติดลบ ' : ''}${bahtText(net)}</div>
    <div class="d-sigs">
      <div class="d-sig"><div class="sig-img">${s.signature ? `<img src="${esc(s.signature)}">` : ''}</div>
        <div class="sig-line"><span>ลงชื่อ</span><span class="l"></span><span>ผู้จัดทำ</span></div>
        <div>( ${esc(s.name || dots)} )</div></div>
      ${o.approver ? `<div class="d-sig"><div class="sig-img"></div>
        <div class="sig-line"><span>ลงชื่อ</span><span class="l"></span><span>ผู้อนุมัติ</span></div>
        <div>( ${esc(s.approver || dots)} )</div></div>` : '<div></div>'}
    </div>
    ${appendix}
  </div>`;
}

let docTimer;
async function renderDoc(){
  $('#docWrap').innerHTML = await buildDoc();
}
$('#page-export').addEventListener('input', e => {
  if(e.target.id === 'rMode'){ const m = e.target.value;
    $('#rMonthBox').style.display = m === 'month' ? '' : 'none'; $('#rRangeBox').style.display = m === 'range' ? '' : 'none'; }
  clearTimeout(docTimer); docTimer = setTimeout(renderDoc, 250);
});

$('#btnPdf').addEventListener('click', async () => {
  if(typeof html2pdf === 'undefined') return toast('โหลดไลบรารี PDF ไม่สำเร็จ', 'err');
  const btn = $('#btnPdf'); btn.disabled = true; btn.textContent = 'กำลังสร้าง PDF...';
  try{
    await renderDoc();
    await html2pdf().set({margin:[8, 0, 12, 0], filename:`${docNo()}.pdf`, image:{type:'jpeg', quality:.95},
      html2canvas:{scale:2, useCORS:true, backgroundColor:'#ffffff'}, jsPDF:{unit:'mm', format:'a4', orientation:'portrait'}})
      .from($('#doc')).save();
    state.settings.docSeq = (state.settings.docSeq || 1) + 1; save();
    toast('ดาวน์โหลด PDF แล้ว', 'ok');
  }catch(e){ toast('สร้าง PDF ไม่สำเร็จ', 'err'); }
  btn.disabled = false; btn.textContent = t('dl_pdf');
});

$('#btnPrint').addEventListener('click', async () => {
  await renderDoc();
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${docNo()}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>${DOC_CSS} @page{size:A4;margin:12mm} body{margin:0} #doc{box-shadow:none;padding:0;width:auto}</style></head>
    <body>${$('#docWrap').innerHTML}</body></html>`);
  w.document.close(); setTimeout(() => w.print(), 500);
});

$('#btnXlsx').addEventListener('click', () => {
  if(typeof XLSX === 'undefined') return toast('โหลดไลบรารี Excel ไม่สำเร็จ', 'err');
  const o = reportOpts(), list = getReportTx(o), s = state.settings;
  if(!list.length) return toast('ไม่มีรายการในช่วงที่เลือก', 'err');
  const wb = XLSX.utils.book_new(), inc = sumT(list, 'income'), exp = sumT(list, 'expense'), r2 = n => Math.round(n * 100) / 100;

  const head = ['ลำดับ','วันที่','เวลา','ประเภท','หมวดหมู่','โครงการ','รายละเอียด','ธนาคาร','เลขอ้างอิง','รายรับ','รายจ่าย','VAT 7%','WHT','คงเหลือสะสม'];
  let run = 0;
  const rows = list.map((t, i) => { run += t.type === 'income' ? t.amount : -t.amount;
    return [i + 1, t.date, t.time, t.type === 'income' ? 'รายรับ' : 'รายจ่าย', t.category, t.project || '', t.note, t.bank, t.ref, t.type === 'income' ? t.amount : '', t.type === 'expense' ? t.amount : '', t.vatAmount || 0, t.whtAmount || 0, r2(run)]; });
  const ws = XLSX.utils.aoa_to_sheet([[o.title], [`กิจการ: ${s.name || '-'}`], [], head, ...rows]);
  XLSX.utils.book_append_sheet(wb, ws, 'รายการบัญชีและภาษี');
  XLSX.writeFile(wb, `${docNo()}.xlsx`);
  toast('ดาวน์โหลด Excel แล้ว', 'ok');
});

/* ================= ตั้งค่า (Settings) ================= */
function renderSettings(){
  $$('[data-set]').forEach(el => {
    const k = el.dataset.set;
    if(el.type === 'checkbox') el.checked = !!state.settings[k];
    else el.value = state.settings[k] ?? '';
  });
  $('#bankList').innerHTML = Object.entries(BANKS).map(([c, n]) =>
    `<label class="check"><input type="checkbox" data-bank="${c}" ${state.settings.myBanks.includes(c) ? 'checked' : ''}> ${n}</label>`).join('');
  $('#logoPrev').innerHTML = state.settings.logo ? `<img src="${esc(state.settings.logo)}">` : 'ไม่มี';
  renderChips(); sizeSig();
}
let setTimer;
function autoSave(){
  clearTimeout(setTimer);
  setTimer = setTimeout(() => { save(); const f = $('#savedFlag'); f.classList.add('show'); setTimeout(() => f.classList.remove('show'), 1500); }, 400);
}
$('#page-settings').addEventListener('input', e => {
  const k = e.target.dataset.set;
  if(k){ state.settings[k] = k === 'budget' ? Math.max(0, +e.target.value || 0) : e.target.value; autoSave(); }
  if(e.target.dataset.bank){ state.settings.myBanks = $$('[data-bank]:checked').map(x => x.dataset.bank); autoSave(); }
});
function renderChips(){
  ['income', 'expense'].forEach(ty => {
    $(ty === 'income' ? '#chipsIncome' : '#chipsExpense').innerHTML = state.categories[ty]
      .map((c, i) => `<span class="chip">${esc(c)}<button data-rmcat="${ty}" data-i="${i}">×</button></span>`).join('');
  });
}
$('#page-settings').addEventListener('click', e => {
  const add = e.target.closest('[data-addcat]'), rm = e.target.closest('[data-rmcat]');
  if(add){ const ty = add.dataset.addcat, inp = $(ty === 'income' ? '#newIncome' : '#newExpense'), v = inp.value.trim();
    if(!v) return; if(state.categories[ty].includes(v)) return toast('มีหมวดหมู่นี้แล้ว', 'err');
    state.categories[ty].push(v); inp.value = ''; save(); renderChips(); toast('เพิ่มหมวดหมู่แล้ว', 'ok'); }
  if(rm){ const ty = rm.dataset.rmcat, i = +rm.dataset.i;
    if(state.categories[ty].length <= 1) return toast('ต้องมีอย่างน้อย 1 หมวดหมู่', 'err');
    state.categories[ty].splice(i, 1); save(); renderChips(); }
});
function readImageFile(file, max){
  return loadImg(file).then(img => {
    const sc = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * sc); c.height = Math.round(img.naturalHeight * sc);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(img.src);
    return c.toDataURL('image/png');
  });
}
$('#btnLogo').addEventListener('click', () => $('#logoFile').click());
$('#logoFile').addEventListener('change', async e => {
  const f = e.target.files[0]; if(!f) return;
  state.settings.logo = await readImageFile(f, 240); save(); renderSettings(); e.target.value = '';
});
$('#btnLogoRm').addEventListener('click', () => { state.settings.logo = ''; save(); renderSettings(); });

/* ลายเซ็น */
const sig = $('#sigPad'), sctx = sig.getContext('2d'), SIG_COLOR = '#1d3b8b';
let sigDraw = false, last = null;
function sizeSig(){
  const r = sig.getBoundingClientRect(); if(!r.width) return;
  sig.width = r.width * 2; sig.height = r.height * 2;
  sctx.setTransform(2, 0, 0, 2, 0, 0);
  sctx.lineWidth = 2.4; sctx.lineCap = 'round'; sctx.lineJoin = 'round'; sctx.strokeStyle = SIG_COLOR; sctx.fillStyle = SIG_COLOR;
  if(state.settings.signature){ const im = new Image(); im.onload = () => sctx.drawImage(im, 0, 0, r.width, r.height); im.src = state.settings.signature; }
}
const sigPos = e => { const r = sig.getBoundingClientRect(); return {x: e.clientX - r.left, y: e.clientY - r.top}; };
sig.addEventListener('pointerdown', e => { sigDraw = true; last = sigPos(e); sig.setPointerCapture(e.pointerId);
  sctx.beginPath(); sctx.arc(last.x, last.y, 1.2, 0, Math.PI * 2); sctx.fill(); });
sig.addEventListener('pointermove', e => { if(!sigDraw) return; const p = sigPos(e);
  sctx.beginPath(); sctx.moveTo(last.x, last.y); sctx.lineTo(p.x, p.y); sctx.stroke(); last = p; });
['pointerup', 'pointercancel'].forEach(ev => sig.addEventListener(ev, () => {
  if(!sigDraw) return; sigDraw = false; state.settings.signature = sig.toDataURL('image/png'); autoSave(); }));
$('#sigClear').addEventListener('click', () => { sctx.clearRect(0, 0, sig.width, sig.height); state.settings.signature = ''; save(); toast('ล้างลายเซ็นแล้ว'); });
$('#sigUpload').addEventListener('click', () => $('#sigFile').click());
$('#sigFile').addEventListener('change', async e => {
  const f = e.target.files[0]; if(!f) return;
  state.settings.signature = await readImageFile(f, 600); save(); renderSettings(); toast('อัปโหลดลายเซ็นแล้ว', 'ok');
});
window.addEventListener('resize', () => { if(current === 'settings') sizeSig(); });

/* สำรอง / กู้คืน / ลบ */
function download(name, content, mime){
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([content], {type:mime}));
  a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}
$('#btnBackup').addEventListener('click', async () => {
  let slips = {};
  if(slipsOK){
    try{
      const keys = await SlipDB.allKeys();
      slips = Object.fromEntries(await Promise.all(keys.map(async k => [k, await SlipDB.get(k)])));
    }catch(e){}
  }
  const payload = {app:'slipbook-promax', version:2, savedAt: today(), state, slips};
  download(`slipbook-promax-backup-${today()}.json`, JSON.stringify(payload), 'application/json');
  toast(t('backup_ok') + ' — ' + t('backup_plain'), 'ok');
});
$('#btnRestore').addEventListener('click', () => $('#restoreFile').click());
$('#restoreFile').addEventListener('change', e => {
  const f = e.target.files[0]; if(!f) return;
  const rd = new FileReader();
  rd.onload = async () => {
    try{
      const d = JSON.parse(rd.result);
      const incoming = (d && d.app === 'slipbook-promax' && d.state) ? d.state : d; // รองรับไฟล์สำรองรุ่นเก่า
      if(!incoming || !Array.isArray(incoming.transactions)) throw 0;
      state = stateFromRaw(incoming);
      if(slipsOK && d && d.slips && typeof d.slips === 'object'){
        await Promise.all(Object.entries(d.slips).map(([k, v]) => SlipDB.put(k, v).catch(() => {})));
      }
      save(); applyTheme(); applyI18N(); buildNav(); go(current); renderSettings(); renderSecStatus();
      toast(t('restore_ok'), 'ok');
    }catch(err){ toast(t('restore_bad'), 'err'); }
    e.target.value = '';
  };
  rd.readAsText(f);
});
$('#btnWipe').addEventListener('click', async () => {
  if(!confirm(t('wipe_confirm'))) return;
  localStorage.removeItem(KEY); localStorage.removeItem(LOCK_KEY);
  try{ sessionStorage.removeItem(SESS_KEY); }catch(e){}
  if(slipsOK) await SlipDB.clear().catch(() => {});
  location.reload();
});

/* ================= PIN lock UI (v5: บังคับใส่รหัสทุกครั้งที่เข้า/รีเฟรช) ================= */
let pinMode = 'set';        // โหมดในหน้าตั้งค่า: set | change | disable
let gateMode = 'unlock';    // โหมดหน้าประตูล็อค: unlock | setup
let gateStep = 1;           // setup: 1 = กำหนดรหัส, 2 = ยืนยันรหัส
let pinBuf = '', pinFirst = '', coolTimer = null;

function lockMeta(){ try{ const o = JSON.parse(localStorage.getItem(ATTEMPT_KEY)); return {n:Number(o?.n) || 0, until:Number(o?.until) || 0}; }catch(e){ return {n:0, until:0}; } }
function setLockMeta(o){ try{ localStorage.setItem(ATTEMPT_KEY, JSON.stringify(o)); }catch(e){} }
function markUnlocked(){ try{ localStorage.setItem(LAST_UNLOCK_KEY, new Date().toISOString()); }catch(e){} renderSecStatus(); }

function renderDots(){
  const dots = $('#pinDots'); if(!dots) return;
  const n = Math.max(6, pinBuf.length);
  dots.innerHTML = Array.from({length:n}, (_, i) => `<span class="pin-dot ${i < pinBuf.length ? 'on' : ''}"></span>`).join('');
  const btn = $('#btnUnlockApp'); if(btn && !coolTimer) btn.disabled = pinBuf.length < 4;
}
function gateError(msg, shake){
  const el = $('#lockError'); if(!el) return;
  el.textContent = msg || '';
  if(msg && shake !== false){
    const card = document.querySelector('.lock-card');
    if(card){ card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake'); }
  }
}
function startCooldown(until){
  clearInterval(coolTimer);
  const btn = $('#btnUnlockApp');
  const tick = () => {
    const left = Math.ceil((until - Date.now()) / 1000);
    if(left <= 0){ clearInterval(coolTimer); coolTimer = null; gateError(''); renderDots(); return; }
    if(btn) btn.disabled = true;
    gateError(`ใส่รหัสผิดหลายครั้งเกินไป — ลองใหม่ในอีก ${left} วินาที`, false);
  };
  tick(); coolTimer = setInterval(tick, 1000);
}
function openGate(mode){
  gateMode = mode || (lockRec ? 'unlock' : 'setup');
  gateStep = 1; pinBuf = ''; pinFirst = '';
  const unlockMode = gateMode === 'unlock';
  $('#lockTitle').textContent = unlockMode ? 'ใส่รหัสเพื่อเข้าใช้งาน' : 'ตั้งรหัสเข้าใช้งาน';
  $('#lockSub').textContent = unlockMode
    ? 'ต้องยืนยันรหัสทุกครั้งที่เปิดเว็บหรือรีเฟรชหน้านี้'
    : 'กำหนดรหัส 4–6 หลักก่อนเริ่มใช้งานครั้งแรก';
  $('#btnUnlockApp').textContent = unlockMode ? 'ปลดล็อค' : 'บันทึกรหัสและเข้าใช้งาน';
  $('#lockSetupHint').style.display = unlockMode ? 'none' : '';
  $('#btnSkipSetup').style.display = unlockMode ? 'none' : '';
  $('#btnForgotPin').style.display = unlockMode ? '' : 'none';
  $('#lockPin').value = '';
  gateError('');
  document.body.classList.add('locked');
  $('#lockScreen').classList.add('show');
  renderDots();
  const meta = lockMeta();
  if(unlockMode && meta.until > Date.now()) startCooldown(meta.until);
  setTimeout(() => { try{ $('#lockPin').focus({preventScroll:true}); }catch(e){ try{ $('#lockPin').focus(); }catch(_){} } }, 120);
}
function hideGate(){
  $('#lockScreen').classList.remove('show');
  document.body.classList.remove('locked');
  gateError('');
  pinBuf = ''; $('#lockPin').value = '';
}
function lockNow(silent){
  if(!lockRec) return toast('ยังไม่ได้ตั้งรหัส — ไปที่ตั้งค่า → ความปลอดภัย (PIN)', 'err');
  openGate('unlock');
  if(!silent) toast('ล็อคแอปแล้ว 🔒', 'ok');
}
function pinKey(ch){
  const meta = lockMeta();
  if(meta.until > Date.now()) return;
  if(ch === 'del') pinBuf = pinBuf.slice(0, -1);
  else if(ch === 'clear') pinBuf = '';
  else if(/^\d$/.test(ch) && pinBuf.length < 6) pinBuf += ch;
  $('#lockPin').value = pinBuf;
  gateError('');
  renderDots();
  if(pinBuf.length === 6 && gateMode === 'unlock') submitGate();
}
async function submitGate(){
  const meta = lockMeta();
  if(meta.until > Date.now()) return;
  if(pinBuf.length < 4) return gateError('รหัสต้องมีอย่างน้อย 4 หลัก');
  const btn = $('#btnUnlockApp');
  btn.disabled = true;

  if(gateMode === 'setup'){
    if(gateStep === 1){
      pinFirst = pinBuf; pinBuf = ''; gateStep = 2;
      $('#lockTitle').textContent = 'ยืนยันรหัสอีกครั้ง';
      $('#btnUnlockApp').textContent = 'ยืนยันและเข้าใช้งาน';
      $('#lockPin').value = ''; gateError(''); renderDots();
      return;
    }
    if(pinBuf !== pinFirst){
      gateStep = 1; pinFirst = ''; pinBuf = '';
      $('#lockTitle').textContent = 'ตั้งรหัสเข้าใช้งาน';
      $('#btnUnlockApp').textContent = 'บันทึกรหัสและเข้าใช้งาน';
      $('#lockPin').value = ''; renderDots();
      return gateError('รหัสทั้งสองครั้งไม่ตรงกัน ลองใหม่อีกครั้ง');
    }
    const pin = pinBuf;
    try{
      const raw = await makeLock(pin);
      if(lockRec.enc === 'AES-GCM'){
        encRaw = raw;
        try{ localStorage.setItem(KEY, JSON.stringify(await encryptState(raw, state))); }catch(e){}
      }
      try{ sessionStorage.setItem(SESS_KEY, bufToB64(raw)); }catch(e){}
      setLockMeta({n:0, until:0});
      markUnlocked();
      hideGate(); renderSecStatus(); applyI18N(); renderAll();
      toast('ตั้งรหัสเรียบร้อย — ครั้งต่อไปต้องใส่รหัสทุกครั้ง 🔐', 'ok');
    }catch(e){ toast('ตั้งรหัสไม่สำเร็จ', 'err'); }
    return;
  }

  const ok = await unlockWithPin(pinBuf);
  btn.disabled = false;
  if(ok){
    setLockMeta({n:0, until:0});
    markUnlocked();
    pinBuf = ''; $('#lockPin').value = ''; renderDots(); gateError('');
    toast(t('unlocked_ok') + ' 🔓', 'ok');
  }else{
    const m = lockMeta(); m.n = (m.n || 0) + 1;
    if(m.n >= 5){
      m.until = Date.now() + 30000; m.n = 0; setLockMeta(m); startCooldown(m.until);
    }else{
      setLockMeta(m);
      pinBuf = ''; $('#lockPin').value = ''; renderDots();
      gateError(`${t('pin_wrong')} — เหลืออีก ${5 - m.n} ครั้ง`);
    }
  }
}
$('#btnUnlockApp').addEventListener('click', submitGate);
$('#lockPin').addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); submitGate(); } });
$('#pinPad')?.addEventListener('click', e => {
  const b = e.target.closest('[data-key]'); if(!b) return;
  pinKey(b.dataset.key);
});
document.addEventListener('keydown', e => {
  const gateOpen = $('#lockScreen').classList.contains('show');
  if(!gateOpen) return;
  if(/^\d$/.test(e.key)){ e.preventDefault(); pinKey(e.key); }
  else if(e.key === 'Backspace'){ e.preventDefault(); pinKey('del'); }
  else if(e.key === 'Escape'){ pinKey('clear'); }
  else if(e.key === 'Enter'){ e.preventDefault(); submitGate(); }
});
$('#btnForgotPin').addEventListener('click', async () => {
  if(!confirm(t('forgot_c1')) || !confirm(t('forgot_c2'))) return;
  localStorage.removeItem(KEY); localStorage.removeItem(LOCK_KEY); localStorage.removeItem(ATTEMPT_KEY);
  try{ sessionStorage.removeItem(SESS_KEY); }catch(e){}
  if(slipsOK) await SlipDB.clear().catch(() => {});
  location.reload();
});
$('#btnSkipSetup').addEventListener('click', () => {
  if(!confirm('ข้ามการตั้งรหัสใช่ไหม?\nข้อมูลจะไม่ถูกเข้ารหัส และจะไม่มีประตูล็อคจนกว่าจะตั้งรหัสในหน้าตั้งค่า')) return;
  lockRec = null;
  hideGate();
  renderSecStatus(); applyI18N();
  toast('เข้าใช้งานโดยไม่ตั้งรหัส — แนะนำให้ตั้งที่หน้าตั้งค่าครับ', 'err');
});
$('#btnLockNow').addEventListener('click', () => lockNow());
$('#btnLockQuick')?.addEventListener('click', () => lockNow());

/* ---------- หน้าตั้งค่า: ตั้ง / เปลี่ยน / ปิด PIN ---------- */
function openPinModal(mode){
  pinMode = mode;
  $('#pinModalTitle').textContent = t(mode === 'change' ? 'pin_modal_change' : mode === 'disable' ? 'pin_modal_disable' : 'pin_modal_set');
  $('#pinFieldCur').style.display = mode === 'set' ? 'none' : '';
  $('#pinFieldNew').style.display = mode === 'disable' ? 'none' : '';
  $('#pinFieldConfirm').style.display = mode === 'disable' ? 'none' : '';
  $('#pinInput0').value = ''; $('#pinInput1').value = ''; $('#pinInput2').value = '';
  $('#pinModal').classList.add('show');
  setTimeout(() => $(mode === 'set' ? '#pinInput1' : '#pinInput0').focus(), 100);
}
$('#btnSetPin').addEventListener('click', () => openPinModal(lockRec ? 'change' : 'set'));
$('#btnDisablePin').addEventListener('click', () => openPinModal('disable'));
$('#btnSavePin').addEventListener('click', async () => {
  const cur = $('#pinInput0').value.trim(), p1 = $('#pinInput1').value.trim(), p2 = $('#pinInput2').value.trim();
  if(pinMode !== 'set' && !(await verifyPin(cur))) return toast(t('pin_wrong'), 'err');
  if(pinMode === 'disable'){
    lockRec = null; encRaw = null;
    localStorage.removeItem(LOCK_KEY); localStorage.removeItem(ATTEMPT_KEY);
    try{ sessionStorage.removeItem(SESS_KEY); }catch(e){}
    save(); $('#pinModal').classList.remove('show'); renderSecStatus(); applyI18N();
    return toast('ปิดรหัสแล้ว — แต่ระบบบังคับล็อคจะขอตั้งรหัสใหม่เมื่อเปิดครั้งถัดไป', 'err');
  }
  if(!/^\d{4,6}$/.test(p1)) return toast(t('pin_err_short'), 'err');
  if(p1 !== p2) return toast(t('pin_err_mismatch'), 'err');
  const raw = await makeLock(p1);
  if(lockRec.enc === 'AES-GCM'){
    encRaw = raw;
    try{ localStorage.setItem(KEY, JSON.stringify(await encryptState(raw, state))); }catch(e){ toast('เข้ารหัสข้อมูลไม่สำเร็จ', 'err'); }
  } else { encRaw = null; save(); }
  try{ sessionStorage.setItem(SESS_KEY, bufToB64(raw)); }catch(e){}
  setLockMeta({n:0, until:0}); markUnlocked();
  $('#pinModal').classList.remove('show'); renderSecStatus(); applyI18N();
  toast(t('pin_ok_set'), 'ok');
});
$('#idleSelect')?.addEventListener('change', e => {
  if(!state || !state.settings) return;
  state.settings.idleLock = Number(e.target.value);
  save();
  toast(state.settings.idleLock ? `ล็อคอัตโนมัติเมื่อไม่ใช้งาน ${state.settings.idleLock} นาที` : 'ปิดล็อคอัตโนมัติแล้ว', state.settings.idleLock ? 'ok' : 'err');
});

/* ---------- ล็อคอัตโนมัติเมื่อไม่ใช้งาน ---------- */
let lastActivity = Date.now();
['pointerdown', 'keydown', 'input', 'touchstart', 'wheel'].forEach(ev =>
  document.addEventListener(ev, () => { lastActivity = Date.now(); }, {passive: true}));
setInterval(() => {
  if(!lockRec) return;
  if($('#lockScreen').classList.contains('show')) return;
  const mins = Number(state?.settings?.idleLock ?? 5);
  if(!mins) return;
  if(Date.now() - lastActivity > mins * 60000) lockNow(true);
}, 15000);

/* ---------- คีย์ลัด (v5) ---------- */
document.addEventListener('keydown', e => {
  if($('#lockScreen').classList.contains('show')) return;
  const tag = (e.target.tagName || '').toLowerCase();
  const typing = ['input','select','textarea'].includes(tag) || e.target.isContentEditable;
  if(e.altKey && /^[1-8]$/.test(e.key)){
    const p = PAGES[Number(e.key) - 1];
    if(p){ e.preventDefault(); go(p.id); toast(p.title); }
    return;
  }
  if((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key || '').toLowerCase() === 'k'){
    e.preventDefault(); go('list');
    const s = $('#fSearch'); if(s){ s.focus(); s.select?.(); }
    return;
  }
  if(e.key === '?' && !typing){ toast('คีย์ลัด: Alt+1…8 เปลี่ยนหน้า · Ctrl/⌘+K ค้นหา · Ctrl/⌘+L ล็อค', 'ok'); }
  if((e.ctrlKey || e.metaKey) && (e.key || '').toLowerCase() === 'l'){ e.preventDefault(); lockNow(); }
});

/* ================= เริ่มต้นระบบ ================= */
(async function init(){
  lockRec = loadLock();
  if(!state) state = stateFromRaw(loadStateRaw());
  applyTheme(); applyI18N(); buildNav();
  try{ await SlipDB.open(); slipsOK = true; }catch(e){}
  const m = today().slice(0, 7);
  $('#month').value = m; $('#rMonth').value = m; $('#rFrom').value = m + '-01'; $('#rTo').value = today();
  go('dashboard'); renderSecStatus();
  // v5: ประตูล็อค — ต้องใส่รหัสทุกครั้งที่เปิด/รีเฟรช (ถ้ายังไม่มีรหัส จะให้ตั้งก่อนเข้าใช้งาน)
  lastActivity = Date.now();
  openGate(lockRec ? 'unlock' : 'setup');
})();
