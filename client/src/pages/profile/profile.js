import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    return (
        <div className="llama">


            <Jumbotron fluid>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <img className="img-responsive" src="data:image/jpeg;base64,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" alt="logo" />


            <div className="container">
        <div className="card">
                    <div className="card-header">
                        <h3>Profile Page</h3>

                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-7">
                        <div className="row">
                            Hello squirrel
                        </div>
                        <br></br>
                        <div className="row">
                            Email: squirrel@squirrely.nut
                        </div>
                        <br></br>
                        <div className="row">
                            Joined: Jan 1st 2000
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-3">
                                <Button color="primary">Create Post</Button>{' '}
                            </div>
                            <div className="col-md-3">
                                <Button color="success">Edit Profile</Button>{' '}
                            </div>
                            <div className="col-md-3">
                                <Button color="danger">Delete Profile</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-9">
                    <div className="p">
                        <p>Hi my name is Bob. I am a squirrel who likes to eat nuts</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <CardGroup>
                        <Card>
                            <CardBody>
                                <CardTitle>1 connections</CardTitle>
                                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                <CardText>billy</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Events I want to go to</CardTitle>
                                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                <CardText>Corona virus rally</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Events I've made connections with</CardTitle>
                                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                <CardText>The tree huggers</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
}
export default Profile