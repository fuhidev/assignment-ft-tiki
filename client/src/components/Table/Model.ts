export interface Column {
  hidden?:boolean;
  isPrimary?:boolean;
  title: string;
  dataIndex: string;
  width?: string | number;
  editable?: boolean;
  inputType?: 'string' | 'number' | 'date'|'file',
  render?:(text:string,record:any,isEditable:boolean)=>JSX.Element
};