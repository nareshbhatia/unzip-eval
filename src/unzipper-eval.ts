import fs from 'fs';
import unzipper from 'unzipper';

const archive = './example.zip';
const destination = './output';

const readStream = fs.createReadStream(archive);
readStream
    .pipe(unzipper.Extract({ path: destination }))
    .on('error', (err) => {
        console.log(
            `Failed to extract archive to file system: ${archive}`,
            err
        );
    })
    .on('close', () => {
        console.log(`Successfully extracted archive to: ${destination}`);
    });
