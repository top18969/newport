import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
                        alt="avatar"
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>FullStack Web Developer</h1>
                        <h2>Wanna Learning to be lnwza007 in React woiii !!</h2>

                    <hr/>
                    <p>HTML/CSS | Bootstrap | Javascript | C# | Angular</p>

                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;