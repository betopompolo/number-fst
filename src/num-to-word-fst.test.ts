import { expect } from "chai";
import { NumToWordFST } from "./num-to-word-fst";

describe('NumToWord FST', () => {
  it('should convert to word correctly', () => {
    expect(NumToWordFST.run('000')).to.be.equal('zero');
    expect(NumToWordFST.run('001')).to.be.equal('um');
    expect(NumToWordFST.run('005')).to.be.equal('cinco');
    expect(NumToWordFST.run('011')).to.be.equal('onze');
    expect(NumToWordFST.run('015')).to.be.equal('quinze');
    expect(NumToWordFST.run('040')).to.be.equal('quarenta');
    expect(NumToWordFST.run('052')).to.be.equal('cinquenta e dois');
  });
});
