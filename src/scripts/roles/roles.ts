import {getValue, setValue} from '../../services/redis';

export function role_register(app: any) {
  app.message('sis ', async (obj: {message: any; say: any}) => {
    if (
      obj.message.text.split(' ').includes('is') &&
      !obj.message.text.split(' ').includes('not')
    ) {
      const name: string = obj.message.text.split(' ')[1];
      const role: string = obj.message.text.split(' ')[3];
      await setValue((name + '_role').toLowerCase(), role);
      await obj.say('Ok ' + name + ' is ' + role);
    } else if (
      obj.message.text.split(' ').includes('is') &&
      obj.message.text.split(' ').includes('not')
    ) {
      const name: string = obj.message.text.split(' ')[1];
      const role: string = obj.message.text.split(' ')[4];
      await setValue(name + '_role', 'nothing to');
      await obj.say('Ok ' + name + ' is not ' + role);
    }else if(obj.message==="sis") {
      await obj.say(
        'hmm.. \nAvailable commands :\n1: sis score <batch name (f21,f22)>\n2: sis info <name of user> \n3:sis <name> is/is not <role>'
      );
    }
  });
  app.message('sis whois', async (obj: {message: any; say: any}) => {
    const name: string = obj.message.text.split(' ')[2];
    const res: string = await getValue((name + '_role').toLowerCase());
    await obj.say(name + ' is ' + res);
  });
}
