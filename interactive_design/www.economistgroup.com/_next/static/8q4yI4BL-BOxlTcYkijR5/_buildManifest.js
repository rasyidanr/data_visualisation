self.__BUILD_MANIFEST = function(s, e, a, c) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, a, e, c, "static/chunks/pages/index-920d6234c4b71e8d.js"],
        "/404": [s, e, "static/chunks/pages/404-35f3b4da97e49d5b.js"],
        "/_error": ["static/chunks/pages/_error-9734db4c9fd59614.js"],
        "/group-news": [s, a, e, c, "static/chunks/pages/group-news-dcc04d030c9de5fe.js"],
        "/group-news/[category]": [s, a, e, c, "static/chunks/pages/group-news/[category]-2355d2e80f52bf1d.js"],
        "/group-news/[category]/[slug]": [s, a, e, c, "static/chunks/pages/group-news/[category]/[slug]-f2519a882787688c.js"],
        "/sitemap.xml": ["static/chunks/388-fd09e9b7ce182948.js", "static/chunks/pages/sitemap.xml-6c7ed52ef100091d.js"],
        "/[...permalink]": [s, a, e, c, "static/chunks/pages/[...permalink]-95704da7097f1595.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/group-news", "/group-news/[category]", "/group-news/[category]/[slug]", "/sitemap.xml", "/[...permalink]"]
    }
}("static/chunks/656-16b6a71479051222.js", "static/chunks/174-4b1bd46d6eb65091.js", "static/chunks/212-dea0b1602d5a11b1.js", "static/chunks/107-78aadf6b844948b3.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();