
/** @type {import('unified').Plugin<[], import('mdast-util-directive').LeafDirective, Image = import('mdast').Image>} */
export default function remarkQrCodeDirective(): (tree: import('mdast-util-directive').LeafDirective) => void;
export type Image = import('mdast').Image
export type LeafDirective = import('mdast-util-directive').LeafDirective;
