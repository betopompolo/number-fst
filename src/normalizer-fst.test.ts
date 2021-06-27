import { expect } from "chai";
import { NormalizerFST } from "./normalizer-fst";

describe('Normalizer FST', () => {
  it('should throw error due to non-numeric character in input', () => {
    const input = 'a00';
    expect(() => NormalizerFST.run(input)).to.throw();
  });

  it('should normalize input with length >= 3 correctly', () => {
    expect(NormalizerFST.run('00001')).to.be.equal('001');
    expect(NormalizerFST.run('00101')).to.be.equal('101');
    expect(NormalizerFST.run('110')).to.be.equal('110');
  });

  it('should normalize input with length < 3 correctly', () => {
    expect(NormalizerFST.run('1')).to.be.equal('001');
    expect(NormalizerFST.run('42')).to.be.equal('042');
  });
});
