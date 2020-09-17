import extract from 'extract-zip';

const archive = './example.zip';
const destination = __dirname + '/../output';

async function main() {
    try {
        await extract(archive, { dir: destination });
        console.log('Extraction complete');
    } catch (err) {
        console.log(err);
    }
}

main();
