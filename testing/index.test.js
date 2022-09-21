const renderDom = require('./helpers')

let dom;
let document;

describe('index.html', () => {
    beforeEach( async() => {
        dom = await renderDom('index.html');
        document = await dom.window.document;
    })

    test('it has a title', () => {
        let title = document.querySelector('title');
        expect(title).toBeTruthy();
    })
    test('h1 says something about lotr to begin with', () => {
        const h1 = document.querySelector('h1')
        expect(h1.innerHTML).toContain("The Lord of the rings")
    })
    test('the h1 is updated when we hit the button', () => {
        const btn = document.querySelector('#updateTitle');
        btn.dispatchEvent(new dom.window.Event('click'));
        const h1 = document.querySelector('h1');
        expect(h1.innerHTML).toContain("you hit me");
    })
})