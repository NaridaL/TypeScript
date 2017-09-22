const n = 1;
const \u{6e} = 2; // 6e is also n

const \u{20} = " "; // a space isn't a valid identifier, even if escaped
const abcde\u{20} = " ";
const abcde\u{20}space = " ";


const abcd\u{NOTHEX} = " ";
const \u{NOTHEX} = " ";

const \u{f1 = "\u{f1}"; // missing closing brace

const \u{} = "l"; // 

// usage as object
\u{f1.toUpperCase();

// usage as passed value
declare function foo(s: string): void;
foo(\u{20}\u{303_and_more); // space and unclosed escape sequence
foo(long_\u{20}_wrong_\u{303_identifier);
