import {Service} from './services';


export class Person {
    constructor() {
        this._name = 'Vlad';
        this.service = new Service();
    }


    getAllPersons() {
        return this.service.getAllPersons();
    }


}
