class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.contact.name} {this.props.contact.phone}
      </div>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: "tiger1", phone: "010-8798332-01" },
        { name: "tiger2", phone: "010-8798332-02" },
        { name: "tiger3", phone: "010-8798332-03" },
        { name: "tiger4", phone: "010-8798332-04" },
        { name: "tiger5", phone: "010-8798332-05" },
        { name: "tiger6", phone: "010-8798332-06" }
      ]
    };
  }
  render() {
    const mapToComponent = data => {
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} />;
      });
    };
    return <div>{mapToComponent(this.state.contactData)}</div>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div>
        <h2> word : {this.state.value} </h2>
        <button onClick={this.handleClick}> Click </button>
      </div>
    );
  }
}

class Codelab extends React.Component {
  render() {
    let text = " Hello i am vcjoo ";
    let styleJS = {
      backgroundColor: "lightgray"
    };
    {
      /** Hello? */
    }
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Codelab.defaultProps = {
  name: "Unknown"
};

class App extends React.Component {
  render() {
    return (
      <Codelab name={this.props.name} number={this.props.number}>
        {this.props.children}
      </Codelab>
    );
  }
}
const getElement = document.getElementById("root");
ReactDOM.render(<Counter> i am vcjoo </Counter>, getElement);
