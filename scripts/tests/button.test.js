/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM test", () => {
    test("expects p centent to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});

// beforeAll(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

// describe("DOM tests", () => {
//     test("Expects content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par")
//             .innerHTML).toEqual("You Clicked");
//     });
// });