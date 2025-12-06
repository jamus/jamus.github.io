// Decrypted Text Animation Effect
function decryptedTextEffect(element, text, options = {}) {
  const speed = options.speed || 30;
  const revealFrames = options.revealFrames || 4;
  const onComplete = options.onComplete || null;
  const chars = options.chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let frame = 0;
  let interval = setInterval(() => {
    let output = '';
    for (let i = 0; i < text.length; i++) {
      if (frame > i * 2 + revealFrames) {
        output += text[i];
      } else if (frame >= i * 2 && frame <= i * 2 + revealFrames) {
        output += chars[Math.floor(Math.random() * chars.length)];
      } else {
        output += ' ';
      }
    }
    element.textContent = output;
    frame++;
    if (output === text) {
      clearInterval(interval);
      if (typeof onComplete === 'function') onComplete();
    }
  }, speed);
}

function applyDecryptedText(element, options = {}) {
  if (!element) return;
  const finalText = element.textContent;
  element.textContent = '';
  element.style.visibility = 'visible';
  decryptedTextEffect(element, finalText, options);
}
