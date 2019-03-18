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
    },
    {
      title: 'Author',
      dataIndex: 'author',
      width: '20%',
      editable: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '10%',
      editable: true,
    },
    {
      title: 'Discount',
      dataIndex: 'sale',
      width: '10%',
      editable: true,
    },
    {
      title: 'Photos', dataIndex: 'photos', width: '30%', inputType: 'file', editable: true,
      render: (text: any, record: Book) => (
        <a href="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" target="_blank">
          <img className="table-photo" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </a>
      )
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