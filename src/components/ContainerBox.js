import { forwardRef } from 'react';
import '../sass/App.scss';

const ContainerBox = forwardRef(({ title = "JUSTIN CHOW", description = "Not available", titleBox = "HOME", background = "bg1.svg", peopleImg = "man with map.svg", button = false }, ref) => {
    return (
        <div className="container-box" ref={ref}>
            <div className="background-box">
                <div className="trans-box">
                    <div>
                        <div className="name">
                            {title}
                        </div>
                        <div className="description">
                            {description}
                        </div>
                        {button === true
                            ? <a className="button" href="https://github.com/justinchow3010?tab=repositories">
                                more...
                            </a>
                            : <></>
                        }
                        {titleBox === "Contact"
                            ? <div className="icon-container">
                                <a className="icon" href="https://www.linkedin.com/in/justin-chow-41638b1bb/">
                                    <img src={require("../assets/linkedin.svg").default} alt="lnkedin" style={{ width: "54px" }} />
                                </a>
                                <a className="icon" href="https://github.com/justinchow3010">
                                    <img src={require("../assets/github.png").default} alt="lnkedin" style={{ width: "54px" }} />
                                </a>
                            </div>
                            : <></>
                        }
                    </div>
                </div>
            </div>
            <div className="image-box">
                {background === "bg10.svg"
                    ? <img src={require(`../assets/${background}`).default} alt="background" className="background" style={{ top: "20%", left: "10%" }} />
                    : background === "bg19.svg"
                        ? <img src={require(`../assets/${background}`).default} alt="background" className="background" style={{ bottom: "10%", height: "80%", left: "20%" }} />
                        : <img src={require(`../assets/${background}`).default} alt="background" className="background" />
                }
                {peopleImg === "woman talking.svg"
                    ? <img src={require(`../assets/${peopleImg}`).default} alt="woman" className="people" style={{ left: "80%" }} />
                    : <img src={require(`../assets/${peopleImg}`).default} alt="man" className="people" />
                }
                <div className="title-box">
                    {titleBox}
                </div>
            </div>
        </div>
    )
})

export default ContainerBox;