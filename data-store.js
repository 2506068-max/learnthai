/**
 * Mali's Thai - DataStore & Asynchronous Lazy Loader
 * Memisahkan dan memuat dataset statis secara asinkron saat panel dibuka.
 */
window.THAI_CONSONANTS = window.THAI_CONSONANTS || [];
window.THAI_VOWELS = window.THAI_VOWELS || [];
window.THAI_TONES = window.THAI_TONES || [];
window.THAI_TONE_MARKS = window.THAI_TONE_MARKS || [];
window.THAI_NUMERALS = window.THAI_NUMERALS || [];
window.THAI_DICTIONARY = window.THAI_DICTIONARY || [];
window.THAI_VOCAB_BANK = window.THAI_VOCAB_BANK || [];
window.CURRICULUM_UNITS = window.CURRICULUM_UNITS || [];
window.ALL_LESSONS_ORDER = window.ALL_LESSONS_ORDER || [];
window.LESSON_DATABASE = window.LESSON_DATABASE || {};
window.JAZMI_CURRICULUM_DATA = window.JAZMI_CURRICULUM_DATA || [];

const DataStore = {
  alphabet: null,
  dictionary: null,
  curriculum: null,
  loading: {
    alphabet: null,
    dictionary: null,
    curriculum: null
  },

  isLoaded(key) {
    if (key === 'alphabet') return !!this.alphabet && window.THAI_CONSONANTS.length > 0;
    if (key === 'dictionary') return !!this.dictionary && window.THAI_DICTIONARY.length > 0;
    if (key === 'curriculum') return !!this.curriculum && window.CURRICULUM_UNITS.length > 0;
    return false;
  },

  async loadAlphabet() {
    if (this.isLoaded('alphabet')) return this.alphabet;
    if (this.loading.alphabet) return this.loading.alphabet;

    this.loading.alphabet = (async () => {
      try {
        const res = await fetch('data/alphabet.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        this.alphabet = data;
        window.THAI_CONSONANTS = data.consonants || [];
        window.THAI_VOWELS = data.vowels || [];
        window.THAI_TONES = data.tones || [];
        window.THAI_TONE_MARKS = data.toneMarks || [];
        window.THAI_NUMERALS = data.numerals || [];
        return data;
      } catch (err) {
        console.error('DataStore: Gagal memuat data/alphabet.json', err);
        throw err;
      } finally {
        this.loading.alphabet = null;
      }
    })();

    return this.loading.alphabet;
  },

  async loadDictionary() {
    if (this.isLoaded('dictionary')) return this.dictionary;
    if (this.loading.dictionary) return this.loading.dictionary;

    this.loading.dictionary = (async () => {
      try {
        const res = await fetch('data/dictionary.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        this.dictionary = data;
        window.THAI_DICTIONARY = data.dictionary || [];
        window.THAI_VOCAB_BANK = data.vocabBank || [];
        return data;
      } catch (err) {
        console.error('DataStore: Gagal memuat data/dictionary.json', err);
        throw err;
      } finally {
        this.loading.dictionary = null;
      }
    })();

    return this.loading.dictionary;
  },

  async loadCurriculum() {
    if (this.isLoaded('curriculum')) return this.curriculum;
    if (this.loading.curriculum) return this.loading.curriculum;

    this.loading.curriculum = (async () => {
      try {
        const res = await fetch('data/curriculum.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        this.curriculum = data;
        window.CURRICULUM_UNITS = data.units || [];
        window.ALL_LESSONS_ORDER = data.lessonOrder || [];
        window.LESSON_DATABASE = data.lessonDatabase || {};
        window.JAZMI_CURRICULUM_DATA = data.jazmiData || [];
        return data;
      } catch (err) {
        console.error('DataStore: Gagal memuat data/curriculum.json', err);
        throw err;
      } finally {
        this.loading.curriculum = null;
      }
    })();

    return this.loading.curriculum;
  },

  showSkeleton(container, message = "Memuat materi bahasa Thai...") {
    if (typeof container === 'string') container = document.getElementById(container);
    if (!container) return;
    container.innerHTML = `
      <div class="mali-skeleton-wrap">
        <div class="mali-skeleton-lotus">🪷</div>
        <div class="mali-skeleton-title">${message}</div>
        <div class="mali-skeleton-shimmer"></div>
      </div>
    `;
  }
};

window.DataStore = DataStore;

