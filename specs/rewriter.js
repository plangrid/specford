require('babel/register');

var R = require('../src/rewriter/slimer');

describe('The Rewriter', function() {

  beforeEach(function() {
    this.r = new R();
  });

  it('Exists', function() {
    expect(this.r instanceof R).toBe(true);
  });

  describe("block handling", function() {
    it("starts empty", function() {
      expect(this.r.code.length).toBeFalsy();
      expect(this.r.steps.length).toBeFalsy();
      expect(this.r.step.length).toBeFalsy();
    });

    it("starts the code block", function() {
      expect(this.r.code.length).toBeFalsy();
      this.r.startCodeBlock();
      expect(this.r.code.length).toBe(6);
      //console.log(this.r.code);
    });

    it("pushes a complete visit fn", function() {
      expect(this.r.code.length).toBeFalsy();
      this.r.pushVisitBlock();
      expect(this.r.code.length).toBe(1);
      //console.log(this.r.code);
    });

    it("pushes steps to code", function() {
      this.r.pushStepsBlock();
      expect(this.r.code.length).toBe(1);
      //console.log(this.r.code);
    });

    it("pushes step to steps", function() {
      this.r.step.push('foo');
      expect(this.r.step.length).toBe(1);
      expect(this.r.steps.length).toBe(0);
      this.r.moveStep();
      expect(this.r.step.length).toBe(0);
      expect(this.r.steps.length).toBe(1);
    });
  });

  describe("token handling", function() {
    it("handles first visit token", function() {
      this.r.handleVisit('foo.com');
      expect(this.r.initialVisit).toBe('foo.com');
      expect(this.r.step.length).toBe(2);
    });

    // TODO handle multiple visits

    it("handles 'selectorExists'", function() {
      var item = {
        tokens: [['SELECTOR', 'selector'], ['REFERENCE', '.bar'], ['ASSERT', 'exists']],
        selector: '.foo'
      };
      this.r.handleItem(item);
      // console.log(require('util').inspect(this.r.step, { depth: null }));
      expect(this.r.step[0].search(/test.selectorExists/)).toBe(0);
      expect(~this.r.step[0].search(/\.foo/)).toBeTruthy();
      expect(~this.r.step[0].search(/\.bar/)).toBeTruthy();
    });

    it("handles '!selectorExists'", function() {
      var item = {
        tokens: [['SELECTOR', 'selector'], ['REFERENCE', '#baz'], ['ASSERT', 'doesNotExist']],
        selector: '.bar'
      };
      this.r.handleItem(item);
      // console.log(require('util').inspect(this.r.step, { depth: null }));
      expect(this.r.step[0].search(/test.selectorDoesNotExist/)).toBe(0);
      expect(~this.r.step[0].search(/\.bar/)).toBeTruthy();
      expect(~this.r.step[0].search(/\#baz/)).toBeTruthy();
    });

    it("handles 'textExists'", function() {
      var item = {
        tokens: [['TEXT', 'text'], ['REFERENCE', 'baz vop'], ['ASSERT', 'exists']],
        selector: '.foo-bar'
      };
      this.r.handleItem(item);

      expect(this.r.step[0].search(/test.textExists/)).toBe(0);
      expect(~this.r.step[0].search(/\.foo-bar/)).toBeTruthy();
      expect(~this.r.step[0].search(/baz vop/)).toBeTruthy();
    });

    it("handles '!textExists'", function() {
      var item = {
        tokens: [['TEXT', 'text'], ['REFERENCE', 'spam eggs'], ['ASSERT', 'doesNotExist']],
        selector: 'div.foo'
      };
      this.r.handleItem(item);

      expect(this.r.step[0].search(/test.textDoesNotExist/)).toBe(0);
      expect(~this.r.step[0].search(/div.foo/)).toBeTruthy();
      expect(~this.r.step[0].search(/spam eggs/)).toBeTruthy();
    });

    it("handles number exists (no quantifier)", function() {
      var inner = ['NUMBER', '5'];
      inner.quantifier = '';

      var item = {
        tokens: [inner, ['REFERENCE', '.foo'], ['ASSERT', 'exist']],
        selector: 'div.bar'
      };

      this.r.handleItem(item);

      expect(this.r.step[0].search(/test.countExists/)).toBe(0);
      expect(~this.r.step[0].search(/5/)).toBeTruthy();
      expect(~this.r.step[0].search(/div.bar/)).toBeTruthy();
      expect(~this.r.step[0].search(/\.foo/)).toBeTruthy();
    });

    it("handles number exists (with quantifier)", function() {
      var inner = ['NUMBER', '3'];
      inner.quantifier = '>';

      var item = {
        tokens: [inner, ['REFERENCE', '.baz'], ['ASSERT', 'exist']],
        selector: 'div.foo-bar'
      };

      this.r.handleItem(item);

      expect(this.r.step[0].search(/test.countExists/)).toBe(0);
      expect(~this.r.step[0].search(/3/)).toBeTruthy();
      expect(~this.r.step[0].search(/\>/)).toBeTruthy();
      expect(~this.r.step[0].search(/div.foo-bar/)).toBeTruthy();
      expect(~this.r.step[0].search(/\.baz/)).toBeTruthy();
    });
  });

});
