import React, { Component } from 'react'

 class DecideActivity extends Component {

  state ={
    latitude:0,
    error:""
  };



  decideActivity(lat){

    const currentMonth = new Date().getMonth();

    if(lat<0){
      //Güney yarımküre

      if(currentMonth > 3 && currentMonth<9 ){
        return "Spor salonuna gidebilirsin"
      }
      else{
        return "Yüzmeye gidebilirsin"
      }

    }
    else{
      //Kuzey yarımküre

      if(currentMonth > 9 && currentMonth<4){
        return "Spor salonuna gidebilirsin"
      }
      else{
        return "Yüzmeye gidebilirsin"
      }
    }
  };

 
  render() {

  // e.preventDefault();
   
    const{latitude,error} = this.state;
     console.log(this.decideActivity(latitude));
  
    window.navigator.geolocation.getCurrentPosition((position) => {

      //console.log(position);

      this.setState({
        latitude:position.coords.latitude
      })

    

      },
      (err) =>{

         console.log(err);

        this.setState({
          error:err.message
        })

      }
      );

    

      if(latitude !== 0 &&  !error){
        return(
           <div>
            Enlem : {latitude}

           </div>
        )
      }

      else if(latitude === 0 && error){
        return(
          <div>
            Hata : {error}
          </div>
        )
      };
    return (
      <div>

       Loading...

      

      </div>
    )
  }
}

export default DecideActivity;
