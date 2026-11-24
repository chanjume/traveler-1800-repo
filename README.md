# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/competitions/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/chanjume/traveler-1800-repo/rank.svg)](https://make.fun/competitions/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/chanjume/traveler-1800-repo/reward.svg)](https://make.fun/competitions/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

One sentence (178 characters) explaining the modern internet to a time
traveler who has just stepped out of the year 1800 — using only imagery
they could already picture: libraries, post offices, market stalls,
letters, the sea, ink.

> Imagine every library, post office, and market stall on earth folded
> into one small room, where a letter you write crosses the sea before
> the ink dries — and the room talks back.

## How it works

`main.ts` writes that single sentence to `/output/entry.txt`. It checks
the sentence is 1–200 characters first, so an out-of-range sentence
fails loudly instead of submitting invalid output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
