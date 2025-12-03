
export const getTeForm = (masuForm: string, group: number): string => {
    // Remove 'masu' from the end
    const stem = masuForm.replace(/ます$/, '');

    if (group === 2) {
        // Group 2 (Ichidan): stem + te
        return stem + 'て';
    }

    if (group === 3) {
        // Group 3 (Irregular)
        if (masuForm === 'します') return 'して';
        if (masuForm === 'きます' || masuForm === '来ます') return '来て';
        // Compound verbs ending in shimasu/kimasu
        if (masuForm.endsWith('します')) return stem + 'して';
        if (masuForm.endsWith('きます')) return stem + '来て';
        return stem + 'て'; // Fallback
    }

    // Group 1 (Godan)
    // Check the last character of the stem (before 'masu')
    // The stem in masu-form ends with an 'i' column sound.
    // We need to map that to the dictionary form ending to apply te-form rules,
    // OR just map the pre-masu sound directly to te-form.

    // Pre-masu endings mapping to Te-form:
    // i, chi, ri -> tte
    // mi, bi, ni -> nde
    // ki -> ite
    // gi -> ide
    // shi -> shite

    // Exception: ikimasu -> itte
    if (masuForm === '行きます' || masuForm === 'いきます') return '行って';

    const lastChar = stem.slice(-1);
    const base = stem.slice(0, -1);

    switch (lastChar) {
        case 'い': // aimasu -> atte
        case 'ち': // machimasu -> matte
        case 'り': // kaerimasu -> kaette
            return base + 'って';

        case 'み': // nomimasu -> nonde
        case 'び': // yobimasu -> yonde
        case 'に': // shinimasu -> shinde
            return base + 'んで';

        case 'き': // kakimasu -> kaite
            return base + 'いて';

        case 'ぎ': // oyogimasu -> oyoide
            return base + 'いで';

        case 'し': // hanashimasu -> hanashite
            return stem + 'て';

        default:
            return stem + 'て';
    }
};
