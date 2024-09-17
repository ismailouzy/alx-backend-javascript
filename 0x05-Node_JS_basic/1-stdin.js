process.stdout.write('Welcome to Holberton School, what is your name?\n');

let name = '';

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    name += chunk;
  }
});

process.stdin.on('end', () => {
  name = name.trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
  process.stdout.write('This important software is now closing\n');
});
