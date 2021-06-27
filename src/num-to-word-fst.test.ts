import { expect } from "chai";
import { NumToWordFST } from "./num-to-word-fst";

describe('NumToWord FST', () => {
  it('should transcribe units correctly', () => {
    expect(NumToWordFST.run('0')).to.be.equal('zero');
    expect(NumToWordFST.run('001')).to.be.equal('um');
    expect(NumToWordFST.run('05')).to.be.equal('cinco');
    expect(NumToWordFST.run('011')).to.be.equal('onze');
  });

  it('should transcribe tens correctly', () => {
    expect(NumToWordFST.run('15')).to.be.equal('quinze');
    expect(NumToWordFST.run('040')).to.be.equal('quarenta');
    expect(NumToWordFST.run('052')).to.be.equal('cinquenta e dois');
  });

  it('should transcribe hundreds correctly', () => {
    expect(NumToWordFST.run('100')).to.be.equal('cem');
    expect(NumToWordFST.run('101')).to.be.equal('cento e um');
    expect(NumToWordFST.run('110')).to.be.equal('cento e dez');
    expect(NumToWordFST.run('00177')).to.be.equal('cento e setenta e sete');
    expect(NumToWordFST.run('111')).to.be.equal('cento e onze');
    expect(NumToWordFST.run('242')).to.be.equal('duzentos e quarenta e dois');
  });
});
