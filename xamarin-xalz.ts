import { exit } from "process";
import { existsSync, readFileSync, writeFile } from "fs";
import * as lz4 from 'lz4';

const args = process.argv.slice(2);

if (args.length != 2) {
  console.warn("[-] Usage: xamarin-xalz <source-dll> <dest-dll>");
  exit(0);
}

const source = args[0];
const dest = args[1];
const header = "XALZ";

if (!existsSync(source)) {
    console.log(`[-] Not found file ${source}`);
    exit(0)
}

const data = readFileSync(source);
const header_file = Uint8Array.prototype.slice.call(data, 0, 4).toString();

if (header_file != header) {
    console.warn("Does not contain the expected bytes")
    exit()
}

const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
const uncompressed_lenght = view.getUint32(8, true)
const payload = Uint8Array.prototype.slice.call(data, 12)
const decompressedBuffer = Buffer.alloc(uncompressed_lenght);
lz4.decodeBlock(payload, decompressedBuffer);

writeFile(dest, decompressedBuffer, (err) => {
    if (err) throw err;
    console.log(`[+] The file ${dest} has been saved!`);
});
