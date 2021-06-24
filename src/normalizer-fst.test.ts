import { expect } from "chai";
import { NormalizerFST } from "./normalizer-fst";

describe('Normalizer FST', () => {
  it('should throw error due to non-numeric character in input', () => {
    const input = 'a00';
    expect(() => NormalizerFST.run(input)).to.throw();
  });
  it('should throw error due to invalid input length', () => {
    const input = '0001';
    expect(() => NormalizerFST.run(input)).to.throw();
  });
});
