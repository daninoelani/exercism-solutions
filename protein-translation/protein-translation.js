export const translate = (str) => {

  const stringChop = (string, size) => {
    if (str == null) return [];
    string = String(string);
    size = ~~size;
    return size > 0 ? string.match(new RegExp('.{1,' + size + '}', 'g')) : [string];
  }

  let proteinsSplit = stringChop(str, 3)
  
  var result = [];
  if (proteinsSplit[0] === 'UAA' || proteinsSplit[0] === 'UAG' || proteinsSplit[0] === 'UGA') {
    return result; 
  }
  // } else if (step === 'UAA' || step === 'UAG' || step === 'UGA') { break; }
    // return proteinsSplit.map(arr => {
    //   for (let step in arr) {
      else {
        for (let i=0; i<proteinsSplit.length; i++) {
      switch(proteinsSplit[1]) {
        case 'UAA':
        case 'UAG':
        case 'UGA':
          return result;
          break;
        case 'AUG':
          return result.push('Methionine');
          break;
        case 'UUU':
        case 'UUC':
          return result.push('Phenylalanine');
          break;
        case 'UUA':
        case 'UUG':
          return result.push('Leucine');
          break;
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
          return result.push('Serine');
          break;
        case 'UAU':
        case 'UAC':
          return result.push('Tyrosine');
          break;
        case 'UGU':
        case 'UGC':
          return result.push('Cysteine');
          break;
        case 'UGG':
          return result.push('Tryptophan');
          break;
        default:
          throw new Error('Invalid codon');
      }}}}
