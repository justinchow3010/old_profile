import '../sass/App.scss';

const ContainerBox = () => {
    return (
        <div className="container-box">
            <div className="background-box">
                <div className="trans-box">
                    <div>
                        <div className="name">
                            JUSTIN CHOW
                        </div>
                        <div className="description">
                            CUHK student
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={require("../assets/bg1.svg").default} alt="background" className="background" />
                <img src={require("../assets/man with map.svg").default} alt="man" className="people" />
                <div className="title-box">
                    HOME
                </div>
            </div>
        </div>
    )
}

export default ContainerBox;