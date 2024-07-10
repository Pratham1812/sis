// import { redisInit,redisClose,getValue,setValue } from "../services/redis"
import {getValue, setValue} from '../../services/redis';
import { app} from '../types';
import { middleware } from '../types';


export function score_register(app: app) {
  app.message('sis help ', async (args: middleware) => {
    await args.say(
      'Available commands\n1: sis score <batch name (f22,f21)> \n2: sis info <name of user>\n3: sis <name> is/is not <role>\n4: sis bkc mem'
    );
  });
  app.message('sis score ', async (args: middleware) => {
    const arr: any = JSON.parse(JSON.stringify(args.message)).text.split(' ');

    let batch: string = await getValue(arr[2]);
    if (batch) {
      const names: any = batch.split(',');
      let result: string = '';
      result += '\n \n';

      for (let i = 0; i < names.length; i++) {
        let score: string = await getValue(names[i]);
        result += names[i];
        result += ' :';
        result += score;
        result += '\n';
      }

      await args.say('Score is ' + result);
    } else {
      await args.say('incorrect hai kuch');
    }
  });
}
