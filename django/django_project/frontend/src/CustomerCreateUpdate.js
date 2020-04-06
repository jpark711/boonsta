import  React, { Component } from  'react';

import  CustomersService  from  './CustomersService';

const  customersService  =  new  CustomersService();

class  CustomerCreateUpdate  extends  Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount(){
    const { match: { params } } =  this.props;
    if(params  &&  params.pk)
    {
        customersService.getCustomer(params.pk).then((c)=>{
            this.refs.name.value  =  c.name;
            this.refs.memo.value  =  c.memo;
        })
    }
}

handleCreate(){
    customersService.createCustomer(
        {
        "name":  this.refs.name.value,
        "memo":  this.refs.memo.value,
	"time":  new Date().toLocaleString()
        }).then((result)=>{
		console.log(this);
                alert("New memo posted!");
		window.location.href="http://boonsta.com";
        }).catch(()=>{
	console.log(this);
	alert('debugging!');
                alert('There was an error! Please re-check your form.');
        });
}

handleUpdate(pk){
customersService.updateCustomer(
    {
    "pk":  pk,
    "name":  this.refs.name.value,
    "memo":  this.refs.memo.value,
    "time":  new Date().toLocaleString()
    }
    ).then((result)=>{
        alert("Memo updated!");
	window.location.href="http://boonsta.com";
    }).catch(()=>{
    console.log(this);
    alert('debugging!');
        alert('There was an error! Please re-check your form.');
    });
}

handleSubmit(event) {
    const { match: { params } } =  this.props;
    if(params  &&  params.pk){
        this.handleUpdate(params.pk);
    }
    else
    {
        this.handleCreate();
    }
    event.preventDefault();
}

render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Memo:</label>
              <textarea className="form-control" ref='memo' ></textarea>

            <label>
              Name:</label>
              <input className="form-control" type="text" ref='name' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
  }

}
export default CustomerCreateUpdate;
