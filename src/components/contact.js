import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Topland Nanpipat</h2>
                        <img
                            src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/47222098_2096939653679013_1566406501638078464_n.jpg?_nc_cat=108&_nc_oc=AQnsf5Nt0-ETWYFDNTmOosildkBqyefKY9OWyz3Pxq2gI1sCwgi-bLUZhIoYquBK9sY&_nc_ht=scontent.fbkk6-1.fna&oh=b8459c77eeea6ecd37a46f10cd9d20a4&oe=5E2D9687"
                            alt="avatar"
                            style={{ height: '270px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            We don’t make assumptions about the rest of your technology stack,
                            so you can develop new features in React without rewriting existing code.
                            Build encapsulated components that manage their own state, then compose them to make complex UIs.
                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and
                            keep state out of the DOM.
                         </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" />
                                        085 - 8455652
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-facebook-square" />
                                        Nanpipat Klinpratoom
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" />
                                        top18969@gmail.com
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-instagram" />
                                        toptalalop
                                </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;