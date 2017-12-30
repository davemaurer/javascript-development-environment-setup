import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // fs stands for file system and comes ready to go with node

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
   expect(4).to.equal(4);
  })
});

describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const { window } = new JSDOM(index);
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("Hello World!");
    window.close();
  });
});

describe('', () => {
  it('', () => {

  });
});