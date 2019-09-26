import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '250px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '1em' }}>Nanpipat Klinpratoom</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                        <Education 
                            startYear={2002}
                            endYear={2018}
                            schoolName="Srinakarinwirot"
                            schoolDescription="College of social communication 
                            innovation Computer For Communicationnnnnnnnnnnnnn"
                        />
                        <Education 
                            startYear={2019}
                            endYear={2030}
                            schoolName="Srinakarinwirot2"
                            schoolDescription="College of social communication 
                            innovation Computer For Communicationnnnnnnnnnnnnn version 2"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>

                        <Experience 
                            startYear={2030}
                            endYear={2031}
                            jobName="First Job"
                            jobDescription="programer fucking hard programer fucking hard programer fucking hard programer fucking hard 
                            programer fucking hard programer fucking hard programer fucking hard programer fucking hard "
                        />
                        <Experience 
                            startYear={2031}
                            endYear={2032}
                            jobName="Second Job"
                            jobDescription="programer fucking hard programer fucking hard programer fucking hard programer fucking hard 
                            programer fucking hard programer fucking hard programer fucking hard programer fucking hard "
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skill</h2>
                        <Skill 
                            skill="Javascript"
                            progress={100}
                        />
                        <Skill 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skill 
                            skill="Angular"
                            progress={50}
                        />
                        <Skill 
                            skill="C#/.Net"
                            progress={70}
                        />
                        <Skill 
                            skill="SQL Server"
                            progress={40}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;