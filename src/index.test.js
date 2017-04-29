//chai is an assertion library. "Do something and expect a certain result"
import {expect} from 'chai';
//jsdom reads through html file and reads to memory. Really fast
import jsdom from 'jsdom';
import fs from 'fs';

/*to write a test, provide a description. the code expects something to happen*/
describe('Our first test', () => {
  it('should pass', (done) => {
    expect(true).to.equal(true);
    done(); //this is needed to tell code that this test is finished
  });

});

describe('index.html', () => {
 it('should have h1 that says Products', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Products");
      window.close();
      done();
    })
  });
});
