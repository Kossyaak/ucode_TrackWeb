const path = require('path');
const fs = require('fs');

export class File {
  constructor(name) {
    this.name = name;
    this.pathDir = path.join(path.resolve(), './tmp');
  }
  write(text) {
    if (text === '') {
      throw new Error('write text pls');
    }
    const isExists = (path) => fs.existsSync(path);
    if (!isExists(this.pathDir)) {
      fs.mkdirSync(this.pathDir);
    } else {
      if (!isExists(this.pathDir + '/' + this.name)) {
        fs.writeFileSync(this.pathDir + '/' + this.name, text, 'utf8');
      } else {
        fs.appendFileSync(this.pathDir + '/' + this.name, `\n${text}`);
      }
    }
  }
  read() {
    const textCurr = fs.readFileSync(this.pathDir + '/' + this.name, 'utf8');
    return textCurr;
  }
  delete() {
    try {
      fs.unlinkSync(this.pathDir + '/' + this.name);
    } catch (err) {
      console.error(err);
    }
  }
}
