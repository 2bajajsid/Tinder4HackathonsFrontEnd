import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Carousel from './Carousel'
import { Modal } from 'antd';
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

class App extends React.Component {

  constructor(props){
    super(props)
  }

  state = { visible1: false, user: null, visibleForm: false};

  showModal = () => {
    console.log("Modal on click called!")
    this.setState((state) => {
      return {...state, visible: true}
    });
  };

  showRegistrationForm = () => {
    console.log("Handler called")
    this.setState((state) => {
      return {...state, visibleForm: true}
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState((state) => {
      return {...state, visible: false}
    });
  };

  handleOKRegistrationForm = e => {
    this.setState((state) => {
      return {...state, visibleForm: true}
    });
  }

  handleCancel = e => {
    console.log(e);
    this.setState((state) => {
      return {...state, visible: false}
    });
  };

  handleCancelRegistrationForm = e => {
    this.setState((state) => {
      return {...state, visibleForm: false}
    });
  }

  render(){
    var conditionalButton; 
    if (this.state.user){
      conditionalButton = <div>
                              <Button onClick={this.showModal} variant="contained" color="primary" style={{padding: "10px", margin: "10px"}}>
                                Tell us more about Yourself 
                              </Button>
                              <Button variant="contained" color="primary" style={{padding: "10px", margin: "10px"}}>
                                Find your Team Members
                              </Button>
                          </div>
    } else {
      conditionalButton = <Button onClick={this.showRegistrationForm} variant="contained" color="primary" style={{padding: "10px", margin: "10px"}}>
                            Sign-In
                          </Button>
    }
    return (
      <div className="App">
            <Title style={{padding:"10px", marginTop: "10px"}}> 
              Hackathon for Tinder 
            </Title>
            {conditionalButton}
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Modal
              title="Registration Form"
              visible={this.state.visibleForm}
              onOk={this.handleOKRegistrationForm}
              onCancel={this.handleCancelRegistrationForm}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Container style={{paddingTop: "50px"}}>
              <Row>
                <Col>
                  <Image style={{maxWidth: "300px", maxHeight: "200px"}}src="data:image/;base64,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
                  JOrF5J0OUDQDfckk1y1de7i5ufAgJA6SdBM7xJ+lM51KDvU8CDxkHR8xv5h4zauBeytWwVfdEKn4SBMxIkaCjPAbeSyB4yfqZpb48FYDKolbgMbTqR0/zT7U12FBWM4B8DI++31ig
                  HK2bEPz+n/ZdVCMSZ4l8SxXeY96Gcdtd21pMXUJ/5hP3IqfwrhjoGLiJdiNiNWMaiQdP1rOLplCeBuIPq6gU3gwduOj5g8mS214g/GcMVvikA+Fe8A4WqtcZRALAAneF2Hn3s31ojxAd
                  laLCSxIVB/iYhUH/MRPlNS7FkWrQUbKIn23P9ahOlAayZzZrFVJKsAoBE+vrI+9I9+3bwmNY5mIxQLSxGjKdFGngx+1M9vFi5JXYGPpvSf+JOGL2Ey/ELqx7yP1I+lJJkLZCp4MN20o
                  PtFrmEAXjGgOo99f1oVjLZOoHxaEef9imDnPAqhREOYraQFt5YfEZmgOCva5W2YQfIjY00vwij4gmF7E4YaWQR0Ee4M/pNGOGEM4LD4wM2sSVgb9DopnzNdMHgwM2m/egeI+Ie+p9K
                  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" roundedCircle />
                </Col>
                <Col>
                   <Image style={{maxWidth: "300px", maxHeight: "200px"}} src="https://miro.medium.com/max/1000/1*gErYaM6X6_VTwYAhytsH9Q.png" roundedCircle />
                </Col>
              </Row>
              <Row style={{paddingTop:"20px"}}>
                <Col>
                  <Image style={{maxWidth: "300px", maxHeight: "200px"}} src="https://irishtechnews.ie/wp-content/uploads/2019/07/iot-3337536_1920.png" roundedCircle />
                </Col>
                <Col>
                  <Image style={{maxWidth: "300px", maxHeight: "200px"}} src="https://thedesignlove.com/wp-content/uploads/2019/06/488-Digital-Data-Science-Logo-Template.jpg" roundedCircle/>
                </Col>
                <Col>
                  <Image style={{maxWidth: "300px", maxHeight: "200px"}} src="https://banner2.kisspng.com/20180126/hdq/kisspng-robotics-logo-robot-logo-5a6b93edb54872.3403585615169996617425.jpg" roundedCircle/>
                </Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default App;