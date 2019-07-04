import React from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { Link } from "react-router-dom";
// const Step = Steps.Step;


import './Header.styl';


class Header extends React.Component {
  state = {
    open: false, // 默认关闭
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  changepage = () => {
    console.log('test', this.state.open)
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const routemap = [{
      text: '首页',
      id: '1',
      url: '/',
      icon: ''
    }, {
      text: '卡片',
      id: '2',
      url: '/card',
      icon: ''
    }, {
      text: '通告',
      id: '3',
      url: '/notice',
      icon: ''
    }]
    const sidebar = (<List>
      {routemap.map((i, index) => {
        return (<List.Item 
          key={index}
          onClick={this.changepage}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          multipleLine
        ><Link to={i.url}>{i.text}</Link></List.Item>);
      })}
    </List>);

    return (<div className="header">
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight-85 }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        <span></span>
      </Drawer>
    </div>);
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) { }
  componentDidUpdate(prevProps, prevState) { }
  componentWillUnmount() { }
}

export default Header;
