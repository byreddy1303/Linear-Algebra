#!/usr/bin/env node
/*
 * build-problem-lab.js
 *
 * Precompiles a Problem Lab HTML file's JSX into plain JS so the browser
 * doesn't have to run Babel-standalone for a multi-thousand-line file
 * (which makes in-browser JSX too slow / never loads).
 *
 * Usage:
 *   node build-problem-lab.js 2     # builds module-02-problem-lab.{html → .compiled.js}
 *   node build-problem-lab.js 3
 *
 * Requires:
 *   npm install --no-save @babel/standalone
 *
 * The source of truth is the inline <script type="text/template">...</script>
 * block at the bottom of the .html file. Edit that, then re-run this script.
 */

const Babel = (() => {
  try { return require('@babel/standalone'); }
  catch (e) {
    console.error('Missing @babel/standalone. Run: npm install --no-save @babel/standalone');
    process.exit(1);
  }
})();
const fs = require('fs');
const path = require('path');

const moduleNum = process.argv[2];
if (!moduleNum) {
  console.error('Usage: node build-problem-lab.js <module-number>');
  process.exit(1);
}
const pad = String(moduleNum).padStart(2, '0');
const HUB = __dirname;
const htmlPath = path.join(HUB, `module-${pad}-problem-lab.html`);
const compiledPath = path.join(HUB, `module-${pad}-problem-lab.compiled.js`);
const boilerplatePath = path.join(HUB, 'boilerplate.js');

if (!fs.existsSync(htmlPath)) {
  console.error('No file at', htmlPath);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const boilerplate = fs.readFileSync(boilerplatePath, 'utf8');

// Try template script first (post-precompile structure), then babel script (pre-precompile)
let match = html.match(/<script type="text\/template" id="m\d+-source-of-truth"[^>]*>([\s\S]*?)<\/script>/);
if (!match) match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!match) { console.error('No inline source script found in', htmlPath); process.exit(1); }
const moduleJs = match[1];

// Wrap each in IIFE so they get isolated scopes but share window globals.
const wrapped =
  '(function(){\n' + boilerplate + '\n})();\n\n' +
  `/* ===== MODULE ${moduleNum} CONTENT ===== */\n\n` +
  '(function(){\n' + moduleJs + '\n})();\n';

const result = Babel.transform(wrapped, { presets: ['react'] });
fs.writeFileSync(compiledPath, result.code);
console.log(`✓ Wrote ${compiledPath} (${result.code.length} bytes)`);
console.log(`  Source lines:    ${wrapped.split('\n').length}`);
console.log(`  Compiled lines:  ${result.code.split('\n').length}`);
