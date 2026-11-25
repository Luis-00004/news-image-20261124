// Luis's entry for make.fun news-image-20261124 (Node 22, standard library only).
// The image sums up Tuesday 24 November 2026 in one front page: 45 stories,
// drawn for this competition. Top stories: the ICJ genocide ruling, a Houthi
// strike on a Riyadh tower, NATO's vow to defend space. The page uses a dark
// blue theme (an even date) with story-specific illustrations; the three top
// panels are ultra-wide panoramas that fill their strips edge to edge, and the
// twelve medium illustrations are layered scenes with sky and ground. This
// program copies the repository's entry.png to the grader's output directory,
// creating it first if needed.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), target);
// Verify the copy landed, so a silent failure cannot pass as an entry.
const written = statSync(target);
if (written.size === 0) throw new Error('entry.png was copied empty');
console.log(`wrote ${target} (${written.size} bytes)`);
