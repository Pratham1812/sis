// import { redisInit,redisClose,getValue,setValue } from "../services/redis"
import {getValue, setValue} from '../../services/redis';

export function score_register(app: any) {
  app.message('sis help ', async (obj: {message: any; say: any}) => {
    await obj.say(
      'Available commands\n1: sis score <batch name (f22,f21)> \n2: sis info <name of user>\n3: sis <name> is/is not <role>\n4: sis bkc mem'
    );
  });
  app.message('sis score ', async (obj: {message: any; say: any}) => {
    const arr: any = obj.message.text.split(' ');

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

      await obj.say('Score is ' + result);
    } else {
      await obj.say('incorrect hai kuch');
    }
  });
}
