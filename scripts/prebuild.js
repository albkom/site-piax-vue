import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json
const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8'));

console.log('itagoglow version:', packageJson.dependencies.itagoglow);
console.log('Version file updated successfully');
const localVersion = packageJson.version.split('.').slice(0, 2).join('.');
const versionParts = packageJson.version.split('.');
let minor = parseInt(versionParts[1], 10);
minor += 1;
versionParts[1] = minor.toString();
packageJson.version = versionParts.join('.');
writeFileSync(join(__dirname, '../package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
// Combine both version exports into one file
const combinedContent = `// This file is auto-generated. Do not edit directly.
export const versionItagoglow = "${packageJson.dependencies.itagoglow}";
export const versionLocal = "${localVersion}";
`;

writeFileSync(join(__dirname, '../src/versions.ts'), combinedContent, 'utf8');

console.log('itagoglow version:', packageJson.dependencies.itagoglow);
console.log('Local version:', localVersion);
console.log('Versions file updated successfully');
