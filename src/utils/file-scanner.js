class FileScanner {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log('Name is :' + this.name);
    }
}
module.exports = FileScanner;