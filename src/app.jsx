import './app.css';
import RowContainer from './components/row_container/row_container';

const App = ({ netflix }) => {
  const arrs = [
    { title: '최고 인기 컨텐츠', method: 'trending' },
    { title: '최고 인기 컨텐츠', method: 'trending' },
  ];
  return (
    <>
      {arrs.map((item) => (
        <RowContainer
          key={Date.now()}
          netflix={netflix}
          title={item.title}
          method={item.method}
        />
      ))}
    </>
  );
};

export default App;
