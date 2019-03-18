import React from 'react';
import { Book } from '../../services/main/book/model';
import { List } from 'antd';
import { CardComponent } from '../Book/Card';
import { connect } from 'react-redux';
import { AllModelReducer } from '../../reducers';

type StateToProps = {
  books: Book[]
};

type Props = {

} & StateToProps;

class Component extends React.Component<Props, {}> {
  render() {
    const { books } = this.props;

    return (
      <List
        grid={{
          gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 6,
        }}
        dataSource={books}
        renderItem={(item: Book) => (
          <List.Item>
            <CardComponent
            book={item}
            />
          </List.Item>
          )}
        />
      );
    }
  }
  
const mapStateToProps = (state: AllModelReducer): StateToProps => ({
              books: state.main.books
          });
          
          const MainComponent = connect(mapStateToProps, null)(Component);
export {
              MainComponent
            }