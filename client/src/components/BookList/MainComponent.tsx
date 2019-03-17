import React from 'react';
import { EditableTable } from '../Table/EditableTable';
import { Column } from '../Table/Model';
import { BookAPI } from '../../services/Book/api/book.api';
import { Book } from '../../services/Book/models/book.model';
export class MainComponent extends React.Component {
  private api = new BookAPI();
  private columns: Column[] = [];
  constructor() {
    super({});
    this.columns = [{
      title: 'ID',
      dataIndex: 'id',
      width: '40%',
      editable: false,
      isPrimary: true
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      width: '60%',
      editable: false,
    }
    ];
  }
  render() {

    return (
      <EditableTable<Book>
        columns={this.columns}
        api={this.api}
        isNew={false}
      />
    );
  }
}