import {App} from '@slack/bolt';
import { StringIndexed } from '@slack/bolt/dist/types/helpers';
import { SlackEventMiddlewareArgs } from '@slack/bolt';
interface app extends App<StringIndexed>{}

interface middleware extends SlackEventMiddlewareArgs<'message'>{}

interface info
    {
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
      }


export {middleware}

export {info};

export {app};
