export default class Post  {
    constructor(title, img){
        this.title = title
        this.img = img
        this.date = new Date()
    }
    toString(){
        return JSON.stringify({
            title: this.title,
            img: this.img,
            date: this.date.toJSON()
        })
    }
}
let a=1;
let b =2;
let sum = a +b;
console.log(sum);