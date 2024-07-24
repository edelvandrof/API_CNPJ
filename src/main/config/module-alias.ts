import { addAlias } from 'module-alias';
import { resolve } from 'path';

const path = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
addAlias('@src', resolve(path));