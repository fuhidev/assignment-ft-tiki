import React from 'react';
import { MainComponent } from '../components/BookList';
import { getAll } from '../services/main/book/action';
import { connect } from 'react-redux';

type DispatchToProps = {
  getAll: () => void
};

type Props = {

} & DispatchToProps;

class BookListPage extends React.Component<Props, {}> {
  render() {
    return <div>
      <MainComponent />
    </div>;
  }

  componentDidMount(){
    this.props.getAll();
  }
}

const mapDispatchToProps = (dispatch: Function): DispatchToProps => ({
  getAll: () => dispatch(getAll())
});

export default connect(null, mapDispatchToProps)(BookListPage);