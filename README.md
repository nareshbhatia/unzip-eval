# Unzipping Library Evaluation

Evaluation of unzipping libraries for Node.js

## Usage

Place a file called example.zip in the root folder.

```bash
yarn build

# Run one of the following commands to evaluate the corresponding library

node dist/adm-zip-eval.js
node dist/extract-zip-eval.js
node dist/unzipper-eval.js
node dist/yauzl-eval.js    # TODO: write to a folder instead of stdout
```

example.zip will be unzipped to a folder called _output_.

## Evaluation

Unzipping libraries come in two flavors: streaming (e.g.
[node-unzipper](https://github.com/ZJONSSON/node-unzipper)) and non-streaming
(e.g. [yauzl](https://github.com/thejoshwolfe/yauzl)). yazul documentation
describes the differences very nicely and makes a convincing argument for
non-streaming apis:

"Due to the design of the .zip file format, it's impossible to interpret a .zip
file from start to finish (such as from a readable stream) without sacrificing
correctness. The Central Directory, which is the authority on the contents of
the .zip file, is at the end of a .zip file, not the beginning. A streaming API
would need to either buffer the entire .zip file to get to the Central Directory
before interpreting anything (defeating the purpose of a streaming interface),
or rely on the Local File Headers which are interspersed through the .zip file.
However, the Local File Headers are explicitly denounced in the spec as being
unreliable copies of the Central Directory, so trusting them would be a
violation of the spec.

Any library that offers a streaming unzip API must make one of the above two
compromises, which makes the library either dishonest or nonconformant (usually
the latter). This library insists on correctness and adherence to the spec, and
so does not offer a streaming API."

yauzl seems to be the most robust upzipping library with ~6,000,000 downloads in
the last 6 months. However, it does not provide a high-level api for unzipping
to a folder. [extract-zip](https://github.com/maxogden/extract-zip) provides
this high-level api on top on yauzl, giving the best of both worlds.
