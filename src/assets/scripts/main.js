/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import {
  enable as enableDarkMode, disable as disableDarkMode, auto as followSystemColorScheme, exportGeneratedCSS as collectCSS
} from 'darkreader';

/**
 * Write any other JavaScript below
 */

+(function () {
  console.log('Hello, UOC!');
})();

/**
 * Dark Reader
 */
const options = {
  brightness: 100,
  contrast: 90,
  sepia: 10,
}

let darkMode = false;
document.getElementById('toggle').addEventListener('click', changeDarkMode);
const toggleText = document.getElementById('toggle-text');

function changeDarkMode() {
  darkMode = !darkMode;
  darkMode ? enableDarkMode(options) : disableDarkMode();
  darkMode ? toggleText.innerHTML = '🌜' : toggleText.innerHTML = '🌞';
}

//followSystemColorScheme();
//const CSS = await collectCSS();