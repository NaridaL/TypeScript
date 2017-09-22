const n = 1;

const \u{6E}\u{303} = "\u{6E}\u{303}"; // Latin lowercase "n" followed by the combining tilde "◌̃") is defined by Unicode to be canonically equivalent to the single code point U+00F1

const \u{f1} = "\u{f1}"; // unicode string canonically equivalent to the above, but a distinct identifier.

const \u{0000006d} = "l"; // lowercase d and unnecessary padding 0s

// usage as object
\u{f1}.toUpperCase();

// usage as passed value
declare function foo(s: string): void;
foo(\u{6E}\u{303});

// mixed with normal characters:
const \u{6E}o = "Dr.";
const o\u{6E} = "off";

// mixed with \uHHHHH escape sequence
const \u{6E}\u0041 = "nana";
const \u0041\u{6E} = "off";
