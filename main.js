import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';

import 'reveal.js/dist/theme/moon.css';

const deck = new Reveal();
deck.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom],
});
