
// Get て形 (Te-form)
export const getTeForm = (masuForm: string, group: number): string => {
    const stem = masuForm.replace(/ます$/, '');

    if (group === 2) {
        return stem + 'て';
    }

    if (group === 3) {
        if (masuForm === 'します') return 'して';
        if (masuForm === 'きます' || masuForm === '来ます') return '来て';
        if (masuForm.endsWith('します')) return stem + 'して';
        if (masuForm.endsWith('きます')) return stem + '来て';
        return stem + 'て';
    }

    // Group 1 (Godan)
    if (masuForm === '行きます' || masuForm === 'いきます') return '行って';

    const lastChar = stem.slice(-1);
    const base = stem.slice(0, -1);

    switch (lastChar) {
        case 'い': case 'ち': case 'り': return base + 'って';
        case 'み': case 'び': case 'に': return base + 'んで';
        case 'き': return base + 'いて';
        case 'ぎ': return base + 'いで';
        case 'し': return stem + 'て';
        default: return stem + 'て';
    }
};

// Get た形 (Ta-form / Past tense)
export const getTaForm = (masuForm: string, group: number): string => {
    const teForm = getTeForm(masuForm, group);
    // て->た, で->だ
    return teForm.replace(/て$/, 'た').replace(/で$/, 'だ');
};

// Get ない形 (Nai-form / Negative)
export const getNaiForm = (masuForm: string, group: number): string => {
    const stem = masuForm.replace(/ます$/, '');

    if (group === 2) {
        return stem + 'ない';
    }

    if (group === 3) {
        if (masuForm === 'します') return 'しない';
        if (masuForm === 'きます' || masuForm === '来ます') return '来ない';
        if (masuForm.endsWith('します')) return masuForm.replace(/します$/, 'しない');
        if (masuForm.endsWith('きます')) return masuForm.replace(/きます$/, '来ない');
        return stem + 'ない';
    }

    // Group 1: Change i-row to a-row + ない
    // Exception: あります -> ない (not あらない)
    if (masuForm === 'あります') return 'ない';

    const lastChar = stem.slice(-1);
    const base = stem.slice(0, -1);

    const iToA: Record<string, string> = {
        'い': 'わ', 'き': 'か', 'ぎ': 'が', 'し': 'さ',
        'ち': 'た', 'に': 'な', 'び': 'ば', 'み': 'ま', 'り': 'ら'
    };

    const aColumn = iToA[lastChar] || lastChar;
    return base + aColumn + 'ない';
};

// Get 辞書形 (Dictionary form)
export const getDictionaryForm = (masuForm: string, group: number): string => {
    const stem = masuForm.replace(/ます$/, '');

    if (group === 2) {
        return stem + 'る';
    }

    if (group === 3) {
        if (masuForm === 'します') return 'する';
        if (masuForm === 'きます' || masuForm === '来ます') return '来る';
        if (masuForm.endsWith('します')) return masuForm.replace(/します$/, 'する');
        if (masuForm.endsWith('きます')) return masuForm.replace(/きます$/, '来る');
        return stem + 'る';
    }

    // Group 1: Change i-row to u-row
    const lastChar = stem.slice(-1);
    const base = stem.slice(0, -1);

    const iToU: Record<string, string> = {
        'い': 'う', 'き': 'く', 'ぎ': 'ぐ', 'し': 'す',
        'ち': 'つ', 'に': 'ぬ', 'び': 'ぶ', 'み': 'む', 'り': 'る'
    };

    const uColumn = iToU[lastChar] || lastChar;
    return base + uColumn;
};

// Get なかった形 (Nakatta-form / Past negative)
export const getNakattaForm = (masuForm: string, group: number): string => {
    const naiForm = getNaiForm(masuForm, group);
    return naiForm.replace(/ない$/, 'なかった');
};

// Get all conjugations for a verb
export interface VerbConjugations {
    masuForm: string;       // ます形 (polite present)
    dictionaryForm: string; // 辞書形 (dictionary)
    teForm: string;         // て形 (te-form)
    taForm: string;         // た形 (past)
    naiForm: string;        // ない形 (negative)
    nakattaForm: string;    // なかった形 (past negative)
}

export const getAllConjugations = (masuForm: string, group: number): VerbConjugations => {
    return {
        masuForm: masuForm,
        dictionaryForm: getDictionaryForm(masuForm, group),
        teForm: getTeForm(masuForm, group),
        taForm: getTaForm(masuForm, group),
        naiForm: getNaiForm(masuForm, group),
        nakattaForm: getNakattaForm(masuForm, group),
    };
};
