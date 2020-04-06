import  React, { Component } from  'react';
import  CustomersService  from  './CustomersService';

const  customersService  =  new  CustomersService();

class  CustomersList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        customers: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    customersService.getCustomers().then(function (result) {
        console.log(result);
        self.setState({ customers:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    customersService.deleteCustomer({pk :  pk}).then(()=>{
        var  newArr  =  self.state.customers.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({customers:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);        
    customersService.getCustomersByURL(this.state.nextPageURL).then((result) => {
        self.setState({ customers:  result.data, nextPageURL:  result.nextlink})
    });
}
writeMemo(){
    window.location.href= "/customer";
}
updateMemo(pk){
    window.location.href= "/customer/" + pk;
}
render() {
    /* <a  href={"/customer/" + c.pk}> Edit </a> */
    let fixedColumnStyle = {
	minWidth: '120px',
	width: '200px',
    };
    let buttonsColumnStyle = {
	width: '131px',
    };
    return (
        <div  className="customers--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>Memo</th>
                <th style={fixedColumnStyle}>By</th>
                <th style={fixedColumnStyle}>At</th>
                <th style={buttonsColumnStyle}></th>
            </tr>
            </thead>
            <tbody>
            {this.state.customers.map( c  =>
                <tr  key={c.pk}>
                <td>{c.memo}</td>
                <td>{c.name}</td>
                <td>{c.time}</td>
                <td>
                <button  onClick={(e)=>  this.updateMemo(c.pk) }>Edit</button>
                <button  onClick={(e)=>  this.handleDelete(e,c.pk) }>Delete</button>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.writeMemo  }>Post</button>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next Page</button>
        </div>
        );
  }
}
export  default  CustomersList;
