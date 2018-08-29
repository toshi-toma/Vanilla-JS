/**
 * document.getElementById
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */
const rootEl = document.getElementById('root');

/**
 * document.createElement()
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 */
const headerEl = document.createElement('h1');

/**
 * Node.textContent
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 */
headerEl.textContent = 'Vanilla-JS';

/**
 * Node.appendChild
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */
rootEl.appendChild(headerEl);