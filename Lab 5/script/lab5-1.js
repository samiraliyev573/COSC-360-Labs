
// add style function for ease of use
function addstyle(text) {

    // define css text
    var css = text;

    // define head
    var head = document.head;


    var style = document.createElement('style');


    // add style to head
    head.appendChild(style);

    //make css 
    if (style.styleSheet) {

        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

}

window.onload = function () {
    // add stule
    addstyle('.required:valid{ background-color: red;}');

    // get all the requied elements
    var requiredElements = document.getElementsByClassName("required");

    // title is the first required element
    var title = requiredElements[0];

    // description is the second required element
    var desc = requiredElements[1];

    // checkbox is the third
    var checkbox = requiredElements[2];

    // add event listener to title and description
    title.addEventListener("input", function (event) {
        addstyle('input.required:valid {background-color:white }');
    });

    desc.addEventListener("input", function () {
        addstyle('textarea.required:valid{background-color:white}');
    })
    // get submit button
    var submit = document.getElementById("mainForm");
    // create function for when submit is pressed
    submit.onsubmit = validateForm();


    // checks whether the form is right or wrong
    function validateForm() {
        // add eventlistener to submit button
        submit.addEventListener("submit", function (event) {
            var requiredElements = document.getElementsByClassName("required");
            var title = requiredElements[0];
            var desc = requiredElements[1];
            var checkbox = requiredElements[2];
            //check if the title or desc or checkbox is empty or not
            if (!((title.value != "" && desc.value != "") && checkbox.checked)) {
                // stop from submit button working
                event.preventDefault();

                // check which one of them are empty and set their colors to pink
                if (title.value === "") {
                    addstyle('input.required:valid {background-color:pink }');
                }

                if (desc.value === "") {
                    addstyle('textarea.required:valid{background-color:pink}');
                }

                if (!checkbox.checked) {
                    alert("Accept the software license first");
                }
            }
        });
    }
}