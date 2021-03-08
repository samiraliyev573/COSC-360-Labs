


window.onload = function () {
    // css text
    var css = ".hoverNode{ background-color: yellow;}";

    // define head
    var head = document.head;

    // create style element
    var style = document.createElement('style');

    // add this to the document
    head.appendChild(style);

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }


    //get all nodes available
    var allnodes = document.getElementsByTagName("*");


    // loop for every child node
    for (var i = 0; i < allnodes.length; i++) {
        // if its not a textarea
        if (allnodes[i].nodeType != 3) {


            // create span
            textNode = document.createElement('span');
            // add style to it
            textNode.className = "hoverNode";
            // make its inner html the tagname of the parent
            textNode.innerHTML = allnodes[i].tagName;

            // add event listener to the text node
            textNode.addEventListener("click", function (event) {
                //alert box when clicked
                alert("ID: " + event.target.parentElement.tagName + "  innerHtml: " + event.target.parentElement.innerHTML);
            });
            // append that child to the textnode.
            allnodes[i].appendChild(textNode);


        }
        i++;

    }
};