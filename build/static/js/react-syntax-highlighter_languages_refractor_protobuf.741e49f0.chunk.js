(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[194],{1527:function(s,e,a){"use strict";function n(s){!function(s){var e=/\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;s.languages.protobuf=s.languages.extend("clike",{"class-name":[{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},{pattern:/(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,lookbehind:!0}],keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,function:/\b[a-z_]\w*(?=\s*\()/i}),s.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:e}},builtin:e,"positional-class-name":{pattern:/(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[a-z_]\w*(?=\s*=)/i,lookbehind:!0}})}(s)}s.exports=n,n.displayName="protobuf",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_protobuf.741e49f0.chunk.js.map