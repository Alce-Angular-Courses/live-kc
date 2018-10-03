interface BookModel {
    id: number;
    title: string;
    autor: string;
    description: string;
}

export class Book implements BookModel {

    constructor(public id: number,
      public title: string,
      public autor: string,
      public description: string) { }
}

