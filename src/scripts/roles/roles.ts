import {getValue, setValue} from '../../services/redis';
import { middleware } from '../types';

import { app} from '../types';

export function role_register(app: app) {
  app.message('sis ', async (args: middleware) => {
    if (
      JSON.parse(JSON.stringify(args.message)).text.split(' ').includes('is') &&
      !JSON.parse(JSON.stringify(args.message)).text.split(' ').includes('not')
    ) {
      const name: string = JSON.parse(JSON.stringify(args.message)).text.split(' ')[1];
      const role: string = JSON.parse(JSON.stringify(args.message)).text.split(' ')[3];
      await setValue((name + '_role').toLowerCase(), role);
      await args.say('Ok ' + name + ' is ' + role);
    } else if (
      JSON.parse(JSON.stringify(args.message)).text.split(' ').includes('is') &&
      JSON.parse(JSON.stringify(args.message)).text.split(' ').includes('not')
    ) {
      const name: string = JSON.parse(JSON.stringify(args.message)).text.split(' ')[1];
      const role: string = JSON.parse(JSON.stringify(args.message)).text.split(' ')[4];
      await setValue(name + '_role', 'nothing to me');
      await args.say('Ok ' + name + ' is not ' + role);
    } else if(JSON.parse(JSON.stringify(args.message)).text=="sis help") {
      await args.say(
        'hmm.. \nAvailable commands :\n1: sis score <batch name (f21,f22)>\n2: sis info <name of user> \n3:sis <name> is/is not <role>'
      );
    }
  });
  app.message("foo",async (args:middleware)=>{
    console.log(JSON.parse(JSON.stringify(args.message)).text)
  })
    
 

  app.message('sis whois', async (args: middleware) => {
    const name: string = JSON.parse(JSON.stringify(args.message)).text.split(' ')[2];
    const res: string = await getValue((name + '_role').toLowerCase());
    await args.say(name + ' is ' + res);
  });
}
