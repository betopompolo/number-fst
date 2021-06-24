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
  it('should normalize correctly', () => {
    expect(NormalizerFST.run('000')).to.be.equal('0');
    expect(NormalizerFST.run('001')).to.be.equal('1');
    expect(NormalizerFST.run('010')).to.be.equal('10');
    expect(NormalizerFST.run('100')).to.be.equal('100');
    expect(NormalizerFST.run('101')).to.be.equal('101');
    expect(NormalizerFST.run('042')).to.be.equal('42');
  });
});
