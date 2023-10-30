import * as readline from 'readline';
import debounce  from './debounce.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const debouncedLog = debounce(() => {
    console.log("Function executed!");
}, 1000);

rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    debouncedLog();
});
