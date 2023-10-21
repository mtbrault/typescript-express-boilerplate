import appRoot from 'app-root-path';
import tsToJoi, { type Config } from 'typescript-schema-to-joi';
import validate from './validate';

export default (config: Omit<Config, 'tsconfig'>) => validate(tsToJoi({
  ...config,
  tsconfig: `${appRoot}/tsconfig.json`,
}));
