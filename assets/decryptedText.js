// Decrypted Text Animation Effect


/**
 * Returns a random character from the given set.
 * @param {string} chars - The set of characters to choose from.
 * @returns {string}
 */
function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

/**
 * Builds the output string for the current animation frame.
 * @param {string} text - The final text to reveal.
 * @param {number} frame - The current animation frame.
 * @param {number} revealFrames - Frames to show random char before reveal.
 * @param {string} chars - Characters to use for random effect.
 * @returns {string}
 */
function buildDecryptedFrame(text, frame, revealFrames, chars) {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    if (frame > i * 2 + revealFrames) {
      output += text[i];
    } else if (frame >= i * 2 && frame <= i * 2 + revealFrames) {
      output += getRandomChar(chars);
    } else {
      output += ' ';
    }
  }
  return output;
}

/**
 * Animates text to appear as if it's being decrypted, revealing each character in sequence.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {string} text - The final text to reveal.
 * @param {Object} options - Animation options.
 *   speed: Number (ms per frame)
 *   revealFrames: Number (frames to show random char before reveal)
 *   onComplete: Function (callback after animation)
 *   chars: String (characters to use for random effect)
 */
function decryptedTextEffect(element, text, options = {}) {
  const speed = options.speed || 30;
  const revealFrames = options.revealFrames || 4;
  const onComplete = options.onComplete || null;
  const chars = options.chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let frame = 0;
  let interval = setInterval(() => {
    // Build the output string for this frame
    const output = buildDecryptedFrame(text, frame, revealFrames, chars);
    // Update the element's text
    element.textContent = output;
    frame++;
    // If the animation is done, clear interval and call callback
    if (output === text) {
      clearInterval(interval);
      if (typeof onComplete === 'function') onComplete();
    }
  }, speed);
}

/**
 * Helper to apply the decrypted text effect to an element.
 * Hides the element's text, then animates it in.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {Object} options - Animation options (see decryptedTextEffect).
 */

/**
 * Helper to apply the decrypted text effect to an element.
 * Hides the element's text, then animates it in.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {Object} options - Animation options (see decryptedTextEffect).
 */
function applyDecryptedText(element, options = {}) {
  if (!element) return;
  // Store the final text and hide it
  const finalText = element.textContent;
  element.textContent = '';
  element.style.visibility = 'visible';
  decryptedTextEffect(element, finalText, options);
}
