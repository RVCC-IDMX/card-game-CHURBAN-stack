// #1 proper case
export const properCase = (string) =>
  `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

// #2 console log
export const log = (content) => {
  console.log(content);
};

// #3 query selector with optional scope
export const select = (selector, scope) =>
  (scope || document).querySelector(selector);

// #4 addEventListener wrapper
export const listen = (target, event, callback, capture = false) => {
  target.addEventListener(event, callback, !!capture);
};

// #5 sanitize input / escape characters
export const sanitizeInput = (inputValue) => {
  const div = document.createElement('div');
  div.textContent = inputValue;
  return div.innerHTML;
};

// #6 create an element with an optional CSS class
export const createElement = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
};

// #7 delete all contents
export const deleteChildElements = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

// #8 add class with optional query scope
export const addClass = (selector, className, scope) => {
  (scope || document).querySelector(selector).classList.add(className);
};

// #9 check for iOS
// removed

// #10 get parameters by name from url
export const getParameterValue = (paramName, url) => {
  let passedUrl = url;
  if (!url) passedUrl = window.location.href;
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
  const results = regex.exec(passedUrl);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
