import React from "react";

class Boxes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     children: 0
  //   };

  //   this.addOne = this.addOne.bind(this);
  // }

  state = { children: 0 };

  // addOne(e) {
  //   e.stopPropagation();
  //   this.setState({
  //     children: this.state.children + 1
  //   });
  // }

  addOne = e => {
    e.stopPropagation();
    this.setState({
      children: this.state.children + 1
    });
  };

  makeChildren() {
    let boxComponent = [];
    for (let i = 0; i < this.state.children; i++) {
      boxComponent.push(<Boxes key={i}></Boxes>);
    }
    return boxComponent;
  }

  render() {
    return (
      <ul className="box">
        <li onClick={this.addOne}>{this.makeChildren()}</li>
      </ul>
    );
  }
}

// export default Box;

// class Boxes extends Component {
//   state = { clickCount: this.props.clickCount || 0 };
//   onClick = e => {
//     console.log("outer click...click count:", this.state.clickCount);
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   };

//   onClick2 = e => {
//     console.log("inner click....click count:", this.state.clickCount);
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   };

//   render() {
//     return (
//       <ol className="box">
//         <li onClick={this.props.onClick || this.onClick}>
//           {this.props.text || "root"}
//           {[...Array(this.state.clickCount)].map((e, i) => (
//             <Boxes
//               key={`${this.props.level}-${i}`}
//               text={`${this.props.level || 0}-${i}`}
//               level={this.props.level + 1 || 1}
//               onClick={this.onClick2}
//               clickCount={0}
//             />
//           ))}
//         </li>
//       </ol>
//     );
//   }
// }
////////////////

// class Boxes extends Component {
//   state = { clickCount: this.props.clickCount || 0 };
//   onClick = e => {
//     console.log("outer click...click count:", this.state.clickCount);
//     console.log(e.target.textContent);
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   };
//   render() {
//     return (
//       <ol className="box">
//         {[...Array(this.state.clickCount)].map((e, i) => (
//           <Item
//             key={`${this.props.level}-${i}`}
//             text={`${this.props.level || 0}-${i}`}
//             level={this.props.level + 1 || 1}
//             onClick={this.onClick}
//           />
//         ))}
//       </ol>
//     );
//   }
// }

// class Item extends Component {
//   state = { isClicked: false };

//   onClick = e => {
//     console.log("inner on click");
//     console.log(e);
//     this.state.isClicked && this.props.onClick.bind(this)();
//     this.setState({ isClicked: true });
//   };

//   render() {
//     const count = this.state.isClicked ? 1 : 0;
//     return (
//       <li onClick={this.onClick}>
//         <Boxes clickCount={count} />
//       </li>
//     );
//   }
// }

// class Boxes extends Component {
//   state = { clickCount: this.props.clickCount || 0, innerClick: false };
//   onClick = e => {
//     console.log("outer click...click count:", this.state.clickCount);
//     console.log(e.target.textContent);
//     let count =
//       e.target.children.length > 0 || e.target.textContent === "root"
//         ? this.state.clickCount + 1
//         : this.state.clickCount;
//     this.setState({
//       clickCount: count,
//       innerClick: e.target.children.length === 0
//     });
//     console.log("count: ", this.state.clickCount + 1);

//     // this.setState({ clickCount: this.state.clickCount + 1 });
//   };
//   //   onClick2 = e => {
//   //     console.log("inner click...click count:", this.state.clickCount);
//   //   };
//   render() {
//     return (
//       <ol className="box">
//         <li onClick={this.props.onClick || this.onClick}>
//           {this.props.text || "root"}
//           {this.state.innerClick && (
//             <ol className="box">
//               <li onClick={this.props.onClick || this.onClick}></li>
//             </ol>
//           )}
//           {[...Array(this.state.clickCount)].map((e, i) => (
//             <Boxes
//               key={`${this.props.level}-${i}`}
//               text={`${this.props.level || 0}-${i}`}
//               level={this.props.level + 1 || 1}
//               onClick={this.onClick}
//               clickCount={0}
//             />
//           ))}
//         </li>
//       </ol>
//     );
//   }
// }

// const generate = () => {
//   let count = 0;
//   const countUp = () => count++;

//   return countUp;
// };

// const generateID = generate();

// class Box extends Component {
//   state = { clickCount: 0 };
//   onClick = e => {
//     console.log("click count:", this.state.clickCount);
//     console.log(e.target.textContent);
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   };
//   render() {
//     return (
//       <ol className="box">
//         <li onClick={this.onClick}>
//           {"Hi " + this.props.text}
//           {[...Array(this.state.clickCount)].map((e, i) => (
//             <Boxes
//               key={`${generateID()}-${i}`}
//               text={`${this.props.level || 0}-${i}`}
//               level={this.props.level + 1 || 1}
//               onClick={this.onClick}
//             />
//           ))}
//         </li>
//       </ol>
//     );
//   }
// }

// function Boxes() {
//   return <Root text={generateID()} onClick={Root.onClick} />;
// }

// class Boxes extends Component {
//   state = { isClicked: false };
//   onClick = e => {
//     console.log("start on click");
//     this.setState({ isClicked: true });
//   };
//   render() {
//     const content = this.state.isClicked ? (
//       <Box id={generateID()} />
//     ) : (
//       <li className="item" onClick={this.onClick}>
//         root
//       </li>
//     );
//     return content;
//   }
// }

// class BoxItem extends Component {
//   state = { isClicked: false };

//   onClick = e => {
//     console.log("inner on click");
//     console.log(e);
//     this.setState({ isClicked: true });
//     this.props.onClick.bind(this)();
//   };

//   render() {
//     const content = this.state.isClicked ? (
//       <li className="item" onClick={this.onClick}>
//         <Box id={generateID()} />
//       </li>
//     ) : (
//       <li className="item" onClick={this.onClick}>
//         {this.props.text}
//       </li>
//     );
//     return content;
//   }
// }

// class Box extends Component {
//   state = {
//     clickCount: 0
//   };

//   onClick = e => {
//     console.log("clicked");
//     console.log("box clickCount state", this.state.clickCount);
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   };

//   render() {
//     return (
//       <ol>
//         {[...Array(this.state.clickCount + 1)].map((e, i) => (
//           <BoxItem
//             key={`${this.props.id}-${i}`}
//             text={`${this.props.id}-${i}`}
//             onClick={this.onClick}
//           />
//         ))}
//       </ol>
//     );
//   }
// }

export default Boxes;
