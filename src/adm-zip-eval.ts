import AdmZip from 'adm-zip';

const archive = './example.zip';
const destination = './output';

const zip = new AdmZip(archive);
zip.extractAllTo(destination, true);
