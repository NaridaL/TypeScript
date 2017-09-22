//// [identifierBracesUnicodeEscapeSequenceErrors.ts]
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


//// [identifierBracesUnicodeEscapeSequenceErrors.js]
var n = 1;
var \u{6e} = 2; // 6e is also n
var u = (_a = " ",  = _a[20], _a); // a space isn't a valid identifier, even if escaped
var abcde, u = (_b = " ",  = _b[20], _b);
var abcde, u = { 20:  }, space = " ";
var abcd, u = (_c = " ", NOTHEX = _c.NOTHEX, _c);
var u = (_d = " ", NOTHEX = _d.NOTHEX, _d);
var u = { f1: f1,
    "const": , u: "l" }; // 
u;
{
    f1.toUpperCase();
    foo(u, { 20:  }, u, { 303: _and_more }); // space and unclosed escape sequence
    foo(long_, u, { 20:  }, _wrong_, u, { 303: _identifier });
}
var _a, _b, _c, _d;
