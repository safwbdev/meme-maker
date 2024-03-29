import React, { Component } from 'react'

export default class MemeMaker extends Component {
    constructor() {
        super()
        this.state = {
          topText: "",
          bottomText: "",
          randomImg: "http://i.imgflip.com/1bij.jpg",
          allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
      }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            // console.log(memes[0])
            this.setState({ allMemeImgs: memes })
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="container section">
                <div className="row">
                    <div className="col s6">
                <form className='meme-form'>
                    <input
                        type='text'
                        name='topText'
                        placeholder='Top Text'
                        value={this.state.topText}
                        onChange={this.handleChange}
                        />
                    <input
                        type='text'
                        name='bottomText'
                        placeholder='Bottom Text'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        />
                    <button>Gen</button>
                </form>
                </div>

                <div className="col s6">
                <div className='meme'>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
