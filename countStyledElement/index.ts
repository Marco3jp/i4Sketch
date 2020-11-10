const regex = /[#.]/;
const classIdList: Array<string> = [];
const styleSheetsErrors: Array<any> = [];

let exportMessage = `${document.querySelectorAll("body *:not(script)").length}\t`;

for (let i = 0; i < document.styleSheets.length; i++) {

    try {
        for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
            const rule = document.styleSheets[i].cssRules[j];
            // # か . が含まれているCSSスタイルのみを抽出
            // ruleには CSSMediaRule とか CSSSupportsRule , CSSKeyframesRule なども入る可能性があります
            if (isCSSStyleRule(rule) && regex.test(rule.selectorText)) {
                classIdList.push(rule.selectorText);
            }
        }
    } catch (e) {
        styleSheetsErrors.push(e);
    }
}

let query: string = "";

classIdList.forEach(classId => {
    query += `${classId}, `;
})

// フレームワークなどによってstyle属性でスタイリングされているチェック
query += "body *[style]:not(script)"

const elements = document.querySelectorAll(query);

exportMessage += `${elements.length}\t`;

exportMessage += `${classIdList.length}`;

console.log(exportMessage);

console.log(styleSheetsErrors);

function isCSSStyleRule(rule: unknown): rule is CSSStyleRule {
    return rule instanceof CSSStyleRule
}
