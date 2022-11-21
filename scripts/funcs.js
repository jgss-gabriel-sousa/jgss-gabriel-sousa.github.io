export function accentsTidy(s){
    var r = s.toLowerCase();
    const non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (let i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
    return r;
};

export function blankSpaceFix(s){
    return s.replace(/\s/g, "_");
}