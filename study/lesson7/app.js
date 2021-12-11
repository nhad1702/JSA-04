console.log(document.body);
const obj = {
    html: {
        head: {
            meta: {},
            title: {
                value: "Document",
            },
        },
        body: {
            firstChild: {
                div: {
                    firstChild: {
                        h2: {
                            innerText: "H2 Element",
                        },
                    },
                },
            },
        },
    },
};

// console.log(obj.html.body.firstChild.div.firstChild.h2.innerText);

console.dir(document.body);
//getById
//getByClassname
//getByTagName

let h2El = document.getElementById("title");
let textWhiteEl = document.getElementsByClassName("text-white");

console.log(h2El);
h2El.innerText = "Hello JSA-04";