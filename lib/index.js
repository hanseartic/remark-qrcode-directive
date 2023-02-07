/**
 * @typedef {import('mdast-util-directive').LeafDirective} LeafDirective
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Image} Image
 **/

import QRCode from 'qrcode';
import {visit} from 'unist-util-visit';

/** @type {import('unified').Plugin<[], LeafDirective, Image>} */
export default function remarkQrCodeDirective() {
  return (tree) => {
    visit (tree, ["leafDirective"], (node) => {
      if (node.name !== 'qr') return;
      if (node.children.length === 0) {
        console.error("No content");
        return;
      }
      const address = node.children[0].value;
      node.children = [];
      node.type = 'image';

      QRCode.toDataURL(
        address,
        {...nestObj(node.attributes)},
        (err, url) => {
          if (err) console.error(err);

          node.url = url;
          node.alt = "QR code for " + address;
          node.title = address;
      });
    });
  }
}

const nestObj = (object) => {
  for (var p of Object.keys(object)) {
    const keys = p.split('.');
    if (keys.length === 1) continue;
    var container = {}
    var current = container;
    const val = object[p];
    keys.map((k, i, values) => {
      current = (current[k] = (i === values.length - 1 ? val : {}));
    });
    object[keys[0]] = {...object[keys[0]], ...container[keys[0]]};
    delete(object[p]);
  }
  return object;
}