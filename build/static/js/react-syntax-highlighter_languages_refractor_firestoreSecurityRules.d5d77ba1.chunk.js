(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[63],{1427:function(e,s,i){"use strict";function n(e){e.languages["firestore-security-rules"]=e.languages.extend("clike",{comment:/\/\/.*/,keyword:/\b(?:allow|function|if|match|null|return|rules_version|service)\b/,operator:/&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/}),delete e.languages["firestore-security-rules"]["class-name"],e.languages.insertBefore("firestore-security-rules","keyword",{path:{pattern:/(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,inside:{operator:/=/,keyword:/\*\*/,punctuation:/[.$(){}]/}},punctuation:/\//}},method:{pattern:/(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,lookbehind:!0,alias:"builtin",inside:{punctuation:/,/}}})}e.exports=n,n.displayName="firestoreSecurityRules",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_firestoreSecurityRules.d5d77ba1.chunk.js.map