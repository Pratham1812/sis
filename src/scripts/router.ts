import {role_register} from './roles/roles';
import {score_register} from './scores/scores';
import {info_register} from './info/info';

export function registerListeners(app: any) {
  score_register(app);
  role_register(app);
  info_register(app);
}
