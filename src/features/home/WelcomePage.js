import React from 'react';
import { Link } from 'react-router-dom';

const changeTimer = (e) => {
  var MINUTES = e; 

  var m = MINUTES % 60;

  var h = (MINUTES-m)/60;

  var HHMM = (h < 10 ? "0": "") + h.toString() + ":" + (m<10?"0":"") + m.toString();

  return HHMM;
}

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      timetype: "po",
      timer: 1500     
    }

    this.timeinterval = false;
  }

  onClickType(e) {
    let timer = 1500;

    switch (e) {
      case "sb":
        timer = 300;
        break;
      case "lb":
        timer = 900;
        break;
    }
    this.setState( {
      timetype: e,
      timer: timer
    });

    if (this.timeinterval) {
      window.clearInterval(this.timeinterval);
      this.timeinterval = false;
    }
  }

  onStartTimer(e) {
    if (!this.timeinterval) {
    this.timeinterval = window.setInterval((e) => {
      if (this.state.timer > 0) {
        this.setState({
          timer: this.state.timer - 1
        });
      } else {
        window.clearInterval(this.timeinterval);
        this.timeinterval = false;
      }
    }, 1000);
    } else {
    window.clearInterval(this.timeinterval);
    this.timeinterval = false;
    }
  }

  render() {

    const {timetype, timer} = this.state;

    return (
      <div className="main-page">
        <header className="app-header app-section">
          <div className="app-logo d-flex-center">
          <a href="/"><span className="icon icon-1 ">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" ></path></svg></span>Pomofocus</a>
          </div>
  
          <div className="btn-group">
            <button className="btn btn-1"><span className="icon icon-1"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-table fa-w-16 fa-2x"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z" ></path></svg></span>Report</button>
            <button className="btn btn-1"><span className="icon icon-1"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-cog fa-w-16 fa-2x"><path fill="currentColor" d="M452.515 237l31.843-18.382c9.426-5.441 13.996-16.542 11.177-27.054-11.404-42.531-33.842-80.547-64.058-110.797-7.68-7.688-19.575-9.246-28.985-3.811l-31.785 18.358a196.276 196.276 0 0 0-32.899-19.02V39.541a24.016 24.016 0 0 0-17.842-23.206c-41.761-11.107-86.117-11.121-127.93-.001-10.519 2.798-17.844 12.321-17.844 23.206v36.753a196.276 196.276 0 0 0-32.899 19.02l-31.785-18.358c-9.41-5.435-21.305-3.877-28.985 3.811-30.216 30.25-52.654 68.265-64.058 110.797-2.819 10.512 1.751 21.613 11.177 27.054L59.485 237a197.715 197.715 0 0 0 0 37.999l-31.843 18.382c-9.426 5.441-13.996 16.542-11.177 27.054 11.404 42.531 33.842 80.547 64.058 110.797 7.68 7.688 19.575 9.246 28.985 3.811l31.785-18.358a196.202 196.202 0 0 0 32.899 19.019v36.753a24.016 24.016 0 0 0 17.842 23.206c41.761 11.107 86.117 11.122 127.93.001 10.519-2.798 17.844-12.321 17.844-23.206v-36.753a196.34 196.34 0 0 0 32.899-19.019l31.785 18.358c9.41 5.435 21.305 3.877 28.985-3.811 30.216-30.25 52.654-68.266 64.058-110.797 2.819-10.512-1.751-21.613-11.177-27.054L452.515 275c1.22-12.65 1.22-25.35 0-38zm-52.679 63.019l43.819 25.289a200.138 200.138 0 0 1-33.849 58.528l-43.829-25.309c-31.984 27.397-36.659 30.077-76.168 44.029v50.599a200.917 200.917 0 0 1-67.618 0v-50.599c-39.504-13.95-44.196-16.642-76.168-44.029l-43.829 25.309a200.15 200.15 0 0 1-33.849-58.528l43.819-25.289c-7.63-41.299-7.634-46.719 0-88.038l-43.819-25.289c7.85-21.229 19.31-41.049 33.849-58.529l43.829 25.309c31.984-27.397 36.66-30.078 76.168-44.029V58.845a200.917 200.917 0 0 1 67.618 0v50.599c39.504 13.95 44.196 16.642 76.168 44.029l43.829-25.309a200.143 200.143 0 0 1 33.849 58.529l-43.819 25.289c7.631 41.3 7.634 46.718 0 88.037zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 144c-26.468 0-48-21.532-48-48 0-26.467 21.532-48 48-48s48 21.533 48 48c0 26.468-21.532 48-48 48z" ></path></svg></span>Setting</button>
            <button className="btn btn-1"><span className="icon icon-1"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg-inline--fa fa-user-circle fa-w-16 fa-2x"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" ></path></svg></span>Login</button>
          </div>
          
        </header>      
        
        <div className="app-section hr"/>
  
        <section className=" app-section cal-section">
          <div className="board">
            <div className="board-btn-group d-flex-center">
              <button className={timetype == "po" ? "btn btn-2 active" : "btn btn-2" } onClick={() => {this.onClickType("po");}}>Pomodoro</button>
              <button className={timetype == "sb" ? "btn btn-2 active" : "btn btn-2" } onClick={() => {this.onClickType("sb");}}>Short Break</button>
              <button className={timetype == "lb" ? "btn btn-2 active" : "btn btn-2" } onClick={() => {this.onClickType("lb");}}>Long Break</button>
            </div>
  
            <div className="board-content">
            <span className="timer">{changeTimer(timer)}</span>
            </div>
  
            <div className="text-center">
              <button className="btn btn-3" onClick={(e) => {this.onStartTimer(e);}}>START</button>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default WelcomePage;