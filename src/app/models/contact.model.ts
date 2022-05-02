export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '') {

    }

    setId?(id:string) {
        // Implement your own set Id
        this._id = id
    }
}

