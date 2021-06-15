import React, { Component } from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {PRODUCTS} from './products';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Main extends Component {
  constructor(props) {
    super(props);
     this.state = {
         products: PRODUCTS,
         filter: " "
     }
  }

  handleChange=(event) => {
     this.setState({
         filter: event.target.value
     })
  }
     
  render(){
        
      const lowerCaseFilter=this.state.filter.toLocaleLowerCase()
      const list = this.state.products.filter((val) => {
         return Object.keys(val).some(key=>{
           if(typeof val[key]==='string'){
               return val[key].toLocaleLowerCase().includes(lowerCaseFilter)
           }
         })
      }).map((product) => {
            return (
              <div  className="col-12 col-md-3 m-3">
                <Card key={product.id}>
                  <CardImg width="100%" height="250px" src={product.image} alt={product.name} />
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.price}</CardText>
                </Card>
              </div>
            );
        });

    return (
      <div>
              <Header/>
              <Switch>
              <Route path='/home'  />
              <Route path='/aboutus' />
              <Route exact path='/products' />
              <Route exact path='/contactus' />
              <Redirect to="/home" />
              </Switch>
              <div className="icon">
              <input type="text" placeholder="Search..."
              onChange={(event) => this.handleChange(event)}/>
              </div>
              <div className="container">
              <div className="row">
                  {list}
              </div>
              </div>
              <div className="App-footer">
                <Footer/>
              </div>  
      </div>
    );
 }
}
export default Main;
