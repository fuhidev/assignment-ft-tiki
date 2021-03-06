import React from 'react';
import { EditableTable } from '../Table/EditableTable';
import { Column } from '../Table/Model';
import { BookAPI } from '../../services/main/book/book.api';
import { Book } from '../../services/main/book/model';
export class MainComponent extends React.Component {
  private api = new BookAPI();
  private columns: Column[] = [];
  constructor() {
    super({});
    this.columns = [{
      dataIndex: '_id',
      isPrimary: true,
      hidden: true, title: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '30%',
      editable: true,
      required: true
    },
    {
      title: 'Author',
      dataIndex: 'author',
      width: '20%',
      editable: true,
      required: true
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '10%',
      editable: true,
      required: true,
      inputType:'number'
    },
    {
      title: 'Discount',
      dataIndex: 'sale',
      width: '10%',
      editable: true,
      inputType:'number'
    },
    {
      title: 'Photos', dataIndex: 'photos', width: '30%', inputType: 'file', editable: true,
      render: (text: any, book: Book) => {
        var imgSrc = 'data:image/png;base64,' + (book.photo && book.photo.data ?
          book.photo.data
          : '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'
        );

        return <img className="table-photo" src={imgSrc} />;
      }
    }
    ];
  }
  render() {

    return (
      <EditableTable<Book>
        columns={this.columns}
        api={this.api}
        isNew={true}
      />
    );
  }
}