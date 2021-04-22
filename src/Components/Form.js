import React, { Component } from 'react';
import emailjs from 'emailjs-com'
class Form extends Component {
    
    submitHandler(e){
        e.preventDefault();

        emailjs.sendForm('service_6ytyjlk', 'template_wzcr5yz', e.target, 'user_LTl701lFrzZf1W2LbkrmO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    render() {
        return (
            <div class="container ">
                <form onSubmit={this.submitHandler}>
                <div class="row">
                    <div class="col-1 text-warning bg-danger align-items-start">
                        <h3>Name</h3>
                    </div>

                    <div class="col-md-sm-4  text-warning  d-flex align-content-center flex-wrap">
                        <h6>(Skip for anonymous )</h6>
                    </div>

                </div>


                <div class="row">
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="Type your name.." name="name"onChange={e => { this.setState({ names: e.target.value }) }} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-1  text-warning bg-danger align-content-start">
                        <h3>Message </h3>
                    </div>

                    

                </div>



                <div class="row">
                    <div class="col-10">
                        <textarea class="form-control" placeholder="Type your msg....." rows="15" name="msg" onChange={e => { this.setState({ msg: e.target.value }) }}></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-10 d-flex align-items-end flex-columnalign-items-end flex-column " style={{padding:"8px"}}>
                    <button type="submit" class="btn btn-warning">Send</button>
                    </div>
                </div>
                </form>
                {/* {this.state.names} */}
            </div>
        );
    }
}

export default Form;
