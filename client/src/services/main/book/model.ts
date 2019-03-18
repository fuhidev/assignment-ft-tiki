export interface Book {
  _id: string, title: string, price: number, sale: number,
  comments: Comment[],
  photo?: Photo,
  author: String
}

export interface Comment {
  body?: string, date: Date
}

export interface Photo {
  data?: string, contentType?: string, date: Date
}
