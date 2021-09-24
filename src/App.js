import './sass/App.scss';
import ContainerBox from './components/ContainerBox';
import { createRef, useEffect, useState } from 'react';

function App() {
  const personalDescription = `A final year student at CUHK\nmajoring in Information Engineering\nminor in Computer Science\n\nPassionate about learning and changing things around.`;
  // const titleBoxes = [];
  // const backgroundImages = [];
  // const peopleImges = [];
  const homeRef = createRef();
  const projectRef = createRef();
  const contactRef = createRef();
  const [currentY, setCurrentY] = useState(window.pageYOffset);
  const [lastY, setLastY] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', updateCurrentY)
    return () => {
      window.removeEventListener('scroll', updateCurrentY)
    }
  }, [])

  useEffect(() => {
    if (lastY < currentY) {
      setScrollUp(false)
    } else {
      setScrollUp(true)
    }

    setLastY(currentY <= 0 ? 0 : currentY);
    if (currentY <= homeRef.current.getBoundingClientRect().bottom && currentY >= homeRef.current.getBoundingClientRect().bottom - 30 && scrollUp === false) {
      window.scrollBy({
        top: projectRef.current.getBoundingClientRect().top - 100,
        behavior: "smooth"
      });
    } else if (currentY <= projectRef.current.getBoundingClientRect().bottom && currentY >= projectRef.current.getBoundingClientRect().bottom - 30 && scrollUp === false) {
      window.scrollBy({
        top: contactRef.current.getBoundingClientRect().top - 100,
        behavior: "smooth"
      });
      // } else if (currentY <= projectRef.current.getBoundingClientRect().bottom + 30 && currentY >= projectRef.current.getBoundingClientRect().bottom && scrollUp === true) {
      //   console.log('asc')
      //   window.scrollBy({
      //     top: projectRef.current.getBoundingClientRect().top - 100,
      //     behavior: "smooth"
      //   });
      // } else if (currentY <= homeRef.current.getBoundingClientRect().bottom + 30 && currentY >= homeRef.current.getBoundingClientRect().bottom && scrollUp === true) {
      //   window.scrollBy({
      //     top: homeRef.current.getBoundingClientRect().top - 100,
      //     behavior: "smooth"
      //   });
    }
  }, [currentY])


  const toolBar = () => (
    <header className="toolbar">
      <div className="title" onClick={() => scrollToView(homeRef)}>
        Justin Chow
      </div>
      <div className="toolbar-info">
        <div className="toolbar-item" onClick={() => scrollToView(projectRef)}>
          Project
        </div>
        <div className="toolbar-item" onClick={() => scrollToView(contactRef)}>
          Contact
        </div>
      </div>
    </header>
  )

  const bottomBar = () => (
    <div className="bottom-bar">
      Be what you want to be.
    </div>
  )

  const updateCurrentY = () => {
    setCurrentY(window.pageYOffset);
  }

  return (
    <div>
      <div className="main-container">
        {toolBar()}
        <ContainerBox title="JUSTIN CHOW" description={personalDescription} titleBox="Home" background="bg1.svg" peopleImg="man with map.svg" ref={homeRef} />
        <ContainerBox title="Repositories" description={`I love to create interesting stuff.${"\n"}${"\n"}Check out my repositories here!`} titleBox="Project" background="bg10.svg" peopleImg="man with paper.svg" button={true} ref={projectRef} />
        <ContainerBox title="Looking for opportunites" description={`${"\n"}Email: justinchow3010@gmail.com${"\n"} `} titleBox="Contact" background="bg19.svg" peopleImg="woman talking.svg" ref={contactRef} />
      </div>
      {bottomBar()}
    </div>
  );
}

const scrollToView = (ref) => {
  const elementPosition = ref.current.getBoundingClientRect().top;
  if (ref.current) {
    window.scrollBy({
      top: elementPosition - 100,
      behavior: "smooth"
    });
  }
}

export default App;
