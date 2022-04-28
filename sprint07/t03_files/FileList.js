const path = require('path');
const fs = require('fs');

export class FileList {
  constructor() {
    this.pathDir = path.join(path.resolve(), './tmp');
  }
  getList() {
    const fileDate = [];
    fs.readdirSync(this.pathDir).forEach((file) => {
      const text = fs.readFileSync(this.pathDir + '/' + file, 'utf-8');
      fileDate.push({ fileName: file, text });
    });
    return fileDate;
  }
  hasFiles() {
    if (!fs.existsSync(this.pathDir)) {
      fs.mkdirSync(this.pathDir);
    } else {
      const isEmpty = fs.readdirSync(this.pathDir);
      return isEmpty ? true : false;
    }
  }
  getHTMLList() {
    let buf = '';
    fs.readdirSync(this.pathDir).forEach((fileName) => {
      buf += `<li><a href="/select-file?file=${fileName}">${fileName}</a></li>`;
    });
    return `<ul>${buf}</ul>`;
  }
}
