import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as math from '../src/math.js';

const sum = suite('sum');

sum('should be a function', () => {
  assert.type(math.sum, 'function');
});

sum('should compute values', () => {
  assert.is(math.sum(1, 2), 3);
  assert.is(math.sum(-1, -2), -3);
  assert.is(math.sum(-1, 1), 0);
  assert.throws(
    () => math.sum(true, 1),
    (err) => err instanceof TypeError
  );
  assert.throws(
    () => math.sum(1, true),
    (err) => err instanceof TypeError
  );
});

sum.run();

// ---

const div = suite('div');

div('should be a function', () => {
  assert.type(math.div, 'function');
});

div('should compute values', () => {
  assert.is(math.div(1, 2), 0.5);
  assert.is(math.div(-1, -2), 0.5);
  assert.is(math.div(-1, 1), -1);
  assert.throws(
    () => math.div(true, 1),
    (err) => err instanceof TypeError
  );
  assert.throws(
    () => math.div(1, true),
    (err) => err instanceof TypeError
  );
  assert.throws(
    () => math.div(1, 0),
    (err) => err instanceof TypeError
  );
});

div.run();

// ---

const mod = suite('mod');

mod('should be a function', () => {
  assert.type(math.mod, 'function');
});

mod('should compute values', () => {
  assert.is(math.mod(1, 2), 1);
  assert.is(math.mod(-3, -2), -1);
  assert.is(math.mod(7, 4), 3);
  assert.throws(
    () => math.mod(true, 1),
    (err) => err instanceof TypeError
  );
  assert.throws(
    () => math.mod(1, true),
    (err) => err instanceof TypeError
  );
});

mod.run();
