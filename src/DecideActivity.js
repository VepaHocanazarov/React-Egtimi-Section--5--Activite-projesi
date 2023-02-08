import React, { Component } from 'react'

class DecideActivity extends Component {

  constructor(props) {
    super(props);
    this.state = {

      latitude: null,
      error: ""
    }

    window.navigator.geolocation.getCurrentPosition((position) => {

      //console.log(position);

      this.setState({
        latitude: position.coords.latitude
      });
    },
      (err) => {

        console.log(err);

        this.setState({
          error: err.message
        });

      });

  };

  componentWillunmount(){
    this.setState({
      latitude:0
    });
  }




  decideActivity(lat) {

    const currentMonth = new Date().getMonth();

    const summer = {
      text: "Yüzmeye gidebilirsin",
      iconName: "sun"
    };

    const winter = {
      text: "Spor salonuna gidebilirsin",
      iconName: "snowflake"
    }


    if (lat < 0) {
      //Güney yarımküre

      return currentMonth > 5 && currentMonth < 8 ? summer  : winter ;

     
    }
    else {
      //Kuzey yarımküre
      
      return currentMonth > 8 && currentMonth < 8 ? winter : summer;
    }
  };


  render() {

    const { latitude, error } = this.state;
    //console.log(this.decideActivity(latitude));

    if (latitude !== 0 && !error) {

      const activity = this.decideActivity(latitude);
      return (
        <h2 className="ui header">
          <i className={`${activity.iconName} icon`} ></i>
          <div className="content">
            {activity.text}
          </div>
        </h2>
      )
    }

    else if (latitude === 0 && error) {
      return (
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
