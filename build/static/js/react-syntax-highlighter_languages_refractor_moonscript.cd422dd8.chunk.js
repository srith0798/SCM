(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[132],{1486:function(e,t,n){"use strict";function a(e){e.languages.moonscript={comment:/--.*/,string:[{pattern:/'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/,greedy:!0},{pattern:/"[^"]*"/,greedy:!0,inside:{interpolation:{pattern:/#\{[^{}]*\}/,inside:{moonscript:{pattern:/(^#\{)[\s\S]+(?=\})/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/#\{|\}/,alias:"punctuation"}}}}}],"class-name":[{pattern:/(\b(?:class|extends)[ \t]+)\w+/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,variable:/@@?\w*/,property:{pattern:/\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/,lookbehind:!0},function:{pattern:/\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:running|create|resume|status|wrap|yield)|debug\.(?:debug|gethook|getinfo|getlocal|getupvalue|setlocal|setupvalue|sethook|traceback|getfenv|getmetatable|getregistry|setfenv|setmetatable)|dofile|error|getfenv|getmetatable|io\.(?:stdin|stdout|stderr|close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|sin|cos|tan|deg|exp|floor|log|log10|max|min|fmod|modf|cosh|sinh|tanh|pow|rad|sqrt|frexp|ldexp|random|randomseed|pi)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|len|lower|rep|sub|upper|format|gsub|gmatch|match|reverse)|table\.(?:maxn|concat|sort|insert|remove)|tonumber|tostring|type|unpack|xpcall)\b/,inside:{punctuation:/\./}},boolean:/\b(?:false|true)\b/,number:/(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,operator:/\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,punctuation:/[.,()[\]{}\\]/},e.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside=e.languages.moonscript,e.languages.moon=e.languages.moonscript}e.exports=a,a.displayName="moonscript",a.aliases=["moon"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_moonscript.cd422dd8.chunk.js.map