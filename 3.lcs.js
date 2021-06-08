/*
 * @Author: Qiuxue.Wu - LCFC
 * @Date: 2021-05-11 09:49:49
 * @LastEditors: Qiuxue.Wu - LCFC
 * @LastEditTime: 2021-05-11 15:44:19
 * @Description: file content
 * @FilePath: \algorithms\3.lcs.js
 */
function lcs(s = '', t = '') {
    if (s == '' || t == '') {
        return 0
    }

    if (s[s.length - 1] == t[t.length - 1]) {
        return lcs(
            s.substr(0, s.length - 1),
            t.substr(0, t.length - 1),
        ) + 1
    } else {
        return Math.max(
            lcs(s.substr(0, s.length - 1), t),
            lcs(s, t.substr(0, t.length - 1))
        )
    }
}

console.log(lcs('banxp', 'batop'));
