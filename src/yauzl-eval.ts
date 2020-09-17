import yauzl from 'yauzl';

const archive = './example.zip';
const destination = './output';

yauzl.open(archive, { lazyEntries: true }, function (err, zipfile) {
    if (err) throw err;
    if (zipfile === undefined) throw new Error('zipfile is undefined');
    zipfile.readEntry();
    zipfile.on('entry', function (entry) {
        if (/\/$/.test(entry.fileName)) {
            // Directory file names end with '/'.
            // Note that entries for directories themselves are optional.
            // An entry's fileName implicitly requires its parent directories to exist.
            zipfile.readEntry();
        } else {
            // file entry
            zipfile.openReadStream(entry, function (err, readStream) {
                if (err) throw err;
                if (readStream === undefined)
                    throw new Error('readStream is undefined');
                readStream.on('end', function () {
                    zipfile.readEntry();
                });
                // TODO: write to a folder instead of stdout
                readStream.pipe(process.stdout);
            });
        }
    });
});
