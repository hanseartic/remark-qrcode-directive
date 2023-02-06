/**
 * @typedef {import('mdast-util-directive').LeafDirective} LeafDirective
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').Root} Root
 **/
import remarkQRCodeDirective from './lib/index.js';

/** @type {import('unified').Plugin<[], LeafDirective, Image>} */
export default remarkQRCodeDirective;
