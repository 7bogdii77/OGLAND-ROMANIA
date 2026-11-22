const input = document.getElementById('dirtyAmount');
const feeOutput = document.getElementById('fee');
const cleanOutput = document.getElementById('cleanAmount');
const resetButton = document.getElementById('resetBtn');
const money = value => new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 2 }).format(value) + ' $';
function calculate() {
  const raw = Number(input.value);
  const dirty = Number.isFinite(raw) && raw > 0 ? raw : 0;
  const fee = dirty * 0.30;
  const clean = dirty - fee;
  feeOutput.textContent = money(fee);
  cleanOutput.innerHTML = `${money(clean).replace(' $', '')} <small>$</small>`;
}
input.addEventListener('input', calculate);
resetButton.addEventListener('click', () => { input.value = ''; calculate(); input.focus(); });
document.getElementById('year').textContent = new Date().getFullYear();
calculate();
