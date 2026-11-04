/**
 * Smoke test สำหรับ "ประตูล็อค PIN (v5)" — บังคับใส่รหัสทุกครั้งที่เปิด/รีเฟรช
 *
 * วิธีรัน:
 *   npm i -D jsdom
 *   node tests/lock-gate.test.mjs
 *
 * ทดสอบ: หน้าตั้งรหัสครั้งแรก, กดคีย์แพด, ยืนยันรหัสผิด/ถูก, รีเฟรชแล้วต้องใส่รหัสซ้ำ,
 *        ข้อมูลเดิมยังอยู่หลังปลดล็อค, ใส่ผิด 5 ครั้งล็อค 30 วินาที (นับต่อแม้รีเฟรช)
 */
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'fs';
const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const rawHtml = fs.readFileSync(ROOT + '/Html.html', 'utf8');
const appjs = fs.readFileSync(ROOT + '/app.js', 'utf8');
const inline = '<script>\n' + appjs.replace(/<\/script>/g, '<\\/script>') + '\n</script>';
const build = (seed = {}) => {
  let html = rawHtml.replace(/<script src="https:\/\/[^"]+"><\/script>/g, '');
  html = html.replace('<script src="app.js"></script>', () => inline);
  const vc = new VirtualConsole();
  const errs = [];
  vc.on('jsdomError', e => { if(!/getContext|scrollTo|not implemented/i.test(e.message)) errs.push(e.message); });
  const dom = new JSDOM(html, { url: 'https://slipbook-pro-max.vercel.app/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc, beforeParse(w){
    for (const [k, v] of Object.entries(seed)) w.localStorage.setItem(k, v);
  }});
  return { dom, errs, w: dom.window, d: dom.window.document };
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0;
const check = (n, c, x='') => { c ? pass++ : fail++; console.log(`${c ? '✅' : '❌'} ${n}${x ? ' — ' + x : ''}`); };

// ---------- รอบ 1: ผู้ใช้ใหม่ ----------
const A = build();
const aQ = s => A.w.document.querySelector(s);
const aPress = ds => { for (const c of ds) aQ(`#pinPad [data-key="${c}"]`).click(); };
await sleep(500);
check('รอบแรก: ประตูล็อคเด้ง', aQ('#lockScreen').classList.contains('show'));
check('รอบแรก: โหมดตั้งรหัส', aQ('#lockTitle').textContent.includes('ตั้งรหัส'));
aPress('1357'); aQ('#btnUnlockApp').click(); await sleep(60);
check('ขอยืนยันรหัส (ขั้น 2)', aQ('#lockTitle').textContent.includes('ยืนยัน'));
aQ('#btnUnlockApp').click(); await sleep(60);
check('ปุ่มยืนยันถูกล็อคเมื่อพิมพ์ไม่ครบ 4 หลัก', aQ('#btnUnlockApp').disabled === true);
aPress('1357'); aQ('#btnUnlockApp').click(); await sleep(800);
check('ตั้งรหัสสำเร็จ → เข้าแอป', !aQ('#lockScreen').classList.contains('show'));
const lockSeed = {
  'slipbook-promax-lock-v1': A.w.localStorage.getItem('slipbook-promax-lock-v1'),
  'slipbook-promax-attempts-v1': JSON.stringify({ n: 0, until: 0 }),
  'slipbook-promax-v4': JSON.stringify({ transactions: [{ id:'t1', createdAt:1, date:'2026-11-01', time:'09:00', type:'income', amount:1500, category:'รับโอน', note:'ทดสอบหลังรีเฟรช', ref:'', bank:'', source:'manual' }] }),
};
check('มี lock record เก็บไว้', !!lockSeed['slipbook-promax-lock-v1']);
check('รอบแรกไม่มี error', A.errs.length === 0, A.errs[0] || '');

// ---------- รอบ 2: จำลองรีเฟรชหน้า (localStorage คงอยู่) ----------
const B = build(lockSeed);
const bQ = s => B.w.document.querySelector(s);
const bPress = ds => { for (const c of ds) bQ(`#pinPad [data-key="${c}"]`).click(); };
await sleep(500);
check('รีเฟรช: ประตูล็อคเด้งทันที (ไม่ต้องรอตั้งรหัส)', bQ('#lockScreen').classList.contains('show') && bQ('#lockTitle').textContent.includes('ใส่รหัส'), bQ('#lockTitle').textContent);
check('รีเฟรช: ข้อมูลในหน้าแอปถูกซ่อนอยู่หลังประตู', bQ('#lockScreen').classList.contains('show') && B.w.document.body.classList.contains('locked'));
bPress('9999'); bQ('#btnUnlockApp').click(); await sleep(500);
check('ใส่ผิด → แจ้งเตือน + บอกจำนวนครั้งที่เหลือ', /เหลืออีก 4 ครั้ง/.test(bQ('#lockError').textContent), bQ('#lockError').textContent);
check('ใส่ผิดแล้วยังล็อคอยู่', bQ('#lockScreen').classList.contains('show'));
bPress('1357'); bQ('#btnUnlockApp').click(); await sleep(900);
check('ใส่รหัสถูก → เข้าใช้งานได้', !bQ('#lockScreen').classList.contains('show'));
check('เข้าแล้วเห็นข้อมูลเดิม (คงเหลือ ฿1,500)', bQ('#sBal').textContent.includes('1,500'), bQ('#sBal').textContent);
check('รีเฟรช: ไม่มี error', B.errs.length === 0, B.errs[0] || '');

// ---------- รอบ 3: ล็อคทันที + ตัวนับครั้งผิด ----------
bQ('#btnLockNow').click(); await sleep(100);
check('ปุ่มล็อคทันที → ล็อคอีกครั้ง', bQ('#lockScreen').classList.contains('show'));
for (let i = 0; i < 5; i++) { bPress('0000'); bQ('#btnUnlockApp').click(); await sleep(120); }
check('ผิด 5 ครั้ง → ล็อค 30 วินาที', /อีก 30 วินาที|อีก 29/.test(bQ('#lockError').textContent), bQ('#lockError').textContent);
const C = build({ ...lockSeed, 'slipbook-promax-attempts-v1': JSON.stringify({ n: 0, until: Date.now() + 20000 }) });
await sleep(500);
check('ปิด/รีเฟรชระหว่างถูกล็อค → ยังนับเวลาต่อ (ไม่รีเซ็ต)', /อีก \d+ วินาที/.test(C.w.document.querySelector('#lockError').textContent), C.w.document.querySelector('#lockError').textContent);
check('ระหว่างล็อค ปุ่มยืนยันกดไม่ได้', C.w.document.querySelector('#btnUnlockApp').disabled === true);

console.log(`\n=== ${pass} passed, ${fail} failed ===`);
process.exit(fail ? 1 : 0);
