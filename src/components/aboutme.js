import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'



class About extends Component{

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <Grid className="sendmail-grid">
                    <Cell className="sendmail-cell" col={12}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSub">Subject</Label>
                                <Input type="text" name="email" id="exampleSub" placeholder="subject" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">E-mail</Label>
                                <Input type="email" name="password" id="exampleEmail" placeholder="password placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;