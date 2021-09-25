import { Component } from 'react';
import Button from "./../components/Button/Button";
import './Pager.scss';

class Pager extends Component {
  current = 0;
  render() {

    let buttons = [];
    let { start, end, current, compact } = this.props;
    let omitting = false;
    start = parseInt(start);
    end = parseInt(end);
    this.current = parseInt(!current ? start : current);

    for (let i = start; i <= end; i++) {
      if (!compact || (compact &&
         (i === start ||
          i === end ||
          i === this.current ||
          i === this.current + 1 ||
          i === this.current - 1))) {
        buttons.push(
          <Button
            key={i}
            text={i}
            {...(i === this.current ? { className: "primary" } : {})}
            onClick={() => { console.log("selected", i); }}></Button>
        )
        omitting = false;
      }
      else {
        if (!omitting) {
          omitting = true;
          buttons.push(<Button key={i} text="..." disabled></Button>);
        }
      }
    }

    return <>
      <Button text="<"></Button>
      {buttons}
      <Button text=">"></Button>
    </>
  }
}

export default Pager;
