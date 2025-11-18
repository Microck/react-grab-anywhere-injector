// ==UserScript==
// @name         React Grab Anywhere Injector
// @namespace    https://react-grab.com
// @version      1.0.0
// @description  Inject React Grab on any site (including localhost). Hold ⌘C / Ctrl+C + click to grab elements for AI coding tools.
// @author       Microck
// @match        *://*/*
// @grant        none
// @updateURL    https://github.com/Microck/react-grab-anywhere-injector/raw/main/react-grab-anywhere-injector.user.js
// @downloadURL  https://github.com/Microck/react-grab-anywhere-injector/raw/main/react-grab-anywhere-injector.user.js
// ==/UserScript==

(function () {
  'use strict';

  const SCRIPT_SRC = 'https://unpkg.com/react-grab/dist/index.global.js';

  // Avoid duplicate injection
  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
    console.log('[React Grab Anywhere] Already loaded.');
    return;
  }

  const s = document.createElement('script');
  s.src = SCRIPT_SRC;
  s.crossOrigin = 'anonymous';
  s.dataset.enabled = 'true';
  document.head.appendChild(s);

  console.log('[React Grab Anywhere] Injected successfully!');
})();
