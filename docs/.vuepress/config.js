const dirTree = require("directory-tree") 
const path    = require("path")

const getSubDir = source => {
    const myPath = path.join(__dirname, "../", source)
    const result = dirTree(myPath, {extensions:/\.md/})
    result.children.map(children => {
        console.log(path.parse(children.name))
    })
}

getSubDir("belajar")

module.exports = {
    title: "Hepi-Hepi",
    description: `Blog hepi-hepi seputar teknologi.`,
    themeConfig: {
        nav: [
            {text: "Beranda", link: "/"},
            {text: "Belajar", link: "/belajar/"},
        ],
        sidebar: {
        }
    },
    dest: "public"
}
