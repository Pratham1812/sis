import {readFile, utils} from 'xlsx';
const workbook = readFile('./src/utils/info.xlsx');
const sheetName: string = workbook.SheetNames[0];
const sheet: object = workbook.Sheets[sheetName];
const json: {
  Name: string;
  'Phone No': number;
  'Email Id': string;
  'DOB(dd/mm/yyyy)': number;
  Year: string;
  Branch: string;
  'Enrollment Number': number;
  'Room No': string;
  'GITHUB ID': string;
  'SLACK USER ID': string;
}[] = utils.sheet_to_json(sheet);

export function info_register(app: any) {
  app.message('sis info ', async (obj: {message: any; say: any}) => {
    const name: string = obj.message.text.split(' ')[2];
    const search: any = new RegExp(name, 'i');
    let flag: number = 0;
    for (let i = 0; i < json.length; i++) {
      if (json[i]['Name'].match(search)) {
        await obj.say(
          'Name : ' +
            json[i].Name +
            '\n Email Id:' +
            json[i]['Email Id'] +
            '\n Phone No.:' +
            json[i]['Phone No'] +
            '\n Enrollment Number :' +
            json[i]['Enrollment Number'] +
            '\n Github Id:' +
            json[i]['GITHUB ID'] +
            '\n'
        );
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      await obj.say('No user found ');
    }
  });
}
