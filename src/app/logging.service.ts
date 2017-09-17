import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
    constructor() { }
    logToConsole(mesg:string){
        console.log(mesg);
    }
}