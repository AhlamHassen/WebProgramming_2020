export class Contact {
    Title: string;
    Name: string;
    Address: string;
    ImgUrl: string;

    constructor(title: string, name: string, address: string, url: string){
        this.Title = title;
        this.Name = name;
        this.Address = address;
        this.ImgUrl = url;

    }
}
