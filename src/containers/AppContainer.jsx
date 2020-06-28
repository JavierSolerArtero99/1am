import React from 'react';
import './../assets/styles/containers/AppContainer.scss'
import MainSection from './MainSection';

class AppContainer extends React.Component {
    /* STATE && CONSTRUCTOR */
    state = {
        loading: true,
    }

    constructor(props) {
        super(props);
    }

    /* LIFECYCLE */
    async componentDidMount() {
        await this.fetchData();
    }

    fetchData() {
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 5500);
    }

    getStateComponent() {
        return(<p>hola</p>)
    }

    render() {
        const { loading } = this.state;

        return (
            <div className="AppContainer">
                {loading ?
                    <img
                        src={require("../assets/gifs/GiftLoading.gif")}
                        class="LoadingGift"
                        alt="Funny image"
                    />
                    :
                    // cambiador de pantalla
                    <div className="MainContainer">
                        <MainSection />
                    </div>
                }
            </div>
        )
    }
}

export default AppContainer;