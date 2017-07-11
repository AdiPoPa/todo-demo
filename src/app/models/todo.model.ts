export class Todo {

  public id: number;
  public title: string;
  public body: string;
  public category: string;
  public thumbnail: string;

  constructor(id: number, title: string, body: string, category: string, thumbnail: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}
