const Json2xml = (json) => {
    var a = json;
    var c = document.createElement("resources");
    var t = function (v) {
        return {}.toString.call(v).split(' ')[1].slice(0, -1).toLowerCase();
    };
    var f = function (f, c, a, s) {
        c.setAttribute("tools", "http://schemas.android.com/tools");
        c.setAttribute("tools:ignore", "MissingTranslation");

        if (t(a) !== "array" && t(a) !== "object") {
            if (t(a) !== "null") {
                c.appendChild(document.createTextNode(a));
            }
        } else {
            for (var k in a) {
                var v = a[k];
                if (k === "ki" && t(a) === "object") {
                    c.setAttribute("__pi", v);
                } else {
                    if (t(v) === "object") {
                        var ch = c.appendChild(document.createElementNS(null, s ? "bh" : "string"));
                        f(f, ch, v);
                    } else if (t(v) === "array") {
                        var ch = c.appendChild(document.createElementNS(null, s ? "ni" : "string"));
                        f(f, ch, v, true);
                    } else {
                        var va = document.createElementNS(null, s ? "ki" : "string");
                        if (t(v) !== "null") {
                            va.appendChild(document.createTextNode(v));
                        }
                        var ch = c.appendChild(va);
                        ch.setAttribute("name", k);
                    }
                }
            }
        }
    };
    f(f, c, a, t(a) === "array");
    var xml = '<?xml version="1.0" encoding="utf-8"?>' + c.outerHTML;
    console.log(xml);
    return xml;
}
export default Json2xml