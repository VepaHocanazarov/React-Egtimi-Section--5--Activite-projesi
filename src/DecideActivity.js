import React, { Component } from 'react'

 class DecideActivity extends Component {

  state ={
    longitude:0,
    error:""
  }
  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {

      this.setState({
        longitude:position.coords.longitude
      })

        console.log(position);

      },
      (err) =>{
     
        console.log(err);

        this.setState({
          error:err.message
        })

      }
      );

      const{longitude,error} = this.state;

      if(longitude !== 0 &&  !error){
        return(
           <div> 
            Boylam : {longitude}

           </div>
        )
      }

      else if(longitude === 0 && error){
        return(
          <div>
            Hata : {error}
          </div>
        )
      }
    return (
      <div>

       Loading...
        
      </div>
    )
  }
}

export default DecideActivity;
