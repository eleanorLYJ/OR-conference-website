// 使用一個簡單的 HTML 轉義函數來防止 XSS 攻擊
export function sanitizeInput(input) {
	if (typeof input !== 'string') {
	  return input;
	}
	return input
	  .replace(/&/g, '&amp;')
	  .replace(/</g, '&lt;')
	  .replace(/>/g, '&gt;')
	  .replace(/"/g, '&quot;')
	  .replace(/'/g, '&#039;');
  }