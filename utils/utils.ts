export default class Utils {
    static randomStringNoINT(size: number) {
        let text = '';
        const possible = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}