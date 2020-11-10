const regex = /[#.]/;
const classIdList: Array<string> = [];
const styleSheetsErrors: Array<any> = [];

// 全要素数
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
        // 外部ドメインのCSSを参照できないためここに飛んでくる (クロスオリジンの制約)
        // その場合はブラウザ側の起動引数とかでセキュリティ機構無効化か、クロスオリジン系の強制有効があれば解決できる
        // 時代が経つに連れてこのあたり厳しくなっているので、情報を調べる際はいつの情報なのかも気にしてください
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

// スタイル設定されていた要素数
exportMessage += `${elements.length}\t`;

// CSSクエリの数
exportMessage += `${classIdList.length}`;

// 出力形式は | allElementCount | styledElementCount | cssQueryCount | の順で、
// エクセルなどにそのまま貼り付け出来るように、タブ文字( \t )で区切っている
console.log(exportMessage);

console.log(styleSheetsErrors);

function isCSSStyleRule(rule: unknown): rule is CSSStyleRule {
    return rule instanceof CSSStyleRule
}
