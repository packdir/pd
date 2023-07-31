import * as os from 'os'
import * as path from 'path'

// $HOME/.packdir/
export const HOME_DIR = path.join(os.homedir(), '.packdir')

// Configuration filename: $HOME/.packdir/config.
export const CONFIG_FILE = path.join(HOME_DIR, 'config')
