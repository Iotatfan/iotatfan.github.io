const { spawnSync } = require('child_process');
const path = require('path');

const nodeMajor = Number(process.versions.node.split('.')[0]);
const cliPath = path.resolve(__dirname, '../node_modules/@vue/cli-service/bin/vue-cli-service.js');
const cliArgs = process.argv.slice(2);
const command = cliArgs[0];

const nodeArgs = nodeMajor >= 17
  ? ['--openssl-legacy-provider', cliPath, ...cliArgs]
  : [cliPath, ...cliArgs];

const env = { ...process.env };

if (command === 'serve' && !env.TAILWIND_MODE) {
  env.TAILWIND_MODE = 'watch';
}

const result = spawnSync(process.execPath, nodeArgs, {
  stdio: 'inherit',
  env
});

process.exit(typeof result.status === 'number' ? result.status : 1);
