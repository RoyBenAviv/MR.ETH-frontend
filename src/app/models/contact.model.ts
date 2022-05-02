export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '') {

    }

    setId?(id:string) {
        this._id = id
    }
}

