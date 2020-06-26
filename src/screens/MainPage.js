import React from 'react';

class MainPage extends React.Component {
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
        }, 3000);
    }

    /* LAYOUT */
    render() {
        const { loading } = this.state;

        return (
            loading ?
                (
                    <div className="ContentContainer">
                        <img src={require("../assets/GiftLoading.gif")} class="LoadingGift" alt="Funny image" />
                    </div>
                )
                :
                (<p class="letra">cargado</p>)
        );
    }
}

export default MainPage