function consoleNodesRecursive(root) {
    console.dir(root)
    root.childNodes.forEach(function (child){
        console.log(child);
        if (child.childNodes && child.childNodes.length) {
            consoleNodesRecursive(child)
        }
    });
}

var rootElement = document.getElementById("rootElement")
console.log(rootElement);