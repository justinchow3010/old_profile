import './sass/App.scss';
import ContainerBox from './components/ContainerBox';

function App() {
  return (
    <>
      {toolBar()}
      <ContainerBox/>
    </>
  );
}

const toolBar = () => (
  <header className="toolbar">
    <div className="title">
      Justin Chow
    </div>
    <div className="toolbar-info">
      <div className="toolbar-item">
        Project
      </div>
      <div className="toolbar-item">
        Contact
      </div>
    </div>
  </header>
)
export default App;
