export class Post {
    constructor(
        public title: string,
        public description: string, 
        public imagePath: string, 
        public auther: string,
        public datetimeCreated: Date,
        public numberOfLikes: number)
        {}
}
//export bedeutet, dass wir die Klasse außerhalb dieses Files benutzen wollen