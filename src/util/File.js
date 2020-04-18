import CONSTANTES from "../constantes/App";

class File {

    static transformFileToBlob(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            
            reader.onload = (e) => {
                const blob = new Blob(
                    [new Uint8Array(e.target.result)], { type: file.type }
                );
                resolve(blob);
            };

            reader.addEventListener('error', () => {
                reject({ error: "Error try transform file on blob object." });
            });

            reader.readAsArrayBuffer(file);
        });
    }

    static download(url) {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.click();
    }

    static _isTypeFileExpected(type, expectedTypes) {
        const valueIndicatingNotExpectedType = -1;
        return expectedTypes.indexOf(type) > valueIndicatingNotExpectedType;
    }

    static isPdf(type) {
        return File._isTypeFileExpected(type, CONSTANTES.TYPE_FILES.PDF);
    }

    static isImage(type) {
        return File._isTypeFileExpected(type, CONSTANTES.TYPE_FILES.IMAGE);
    }

    static isAudio(type) {
        return File._isTypeFileExpected(type, CONSTANTES.TYPE_FILES.AUDIO);
    }

    static isVideo(type) {
        return File._isTypeFileExpected(type, CONSTANTES.TYPE_FILES.VIDEO);
    }
}

export default File;