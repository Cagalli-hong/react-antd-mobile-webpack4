import React from 'react';
import { Flex } from 'antd-mobile';
import './Footer.styl';

const PlaceHolder = ({ className = 'Item', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
class Footer extends React.Component {

constructor(props) {
	super(props);
	this.state = {
	};
}

render() {
	function clickitem1() {
		console.log('test1')
	}
	function clickitem2() {
		console.log('test2')
	}
	function clickitem3() {
		console.log('test3')
	}
  return (
		<div className="footer">
			<Flex>
      	<Flex.Item>
					<div className="footeritem" onClick={clickitem1}>
      			Item1
    			</div>
				</Flex.Item>
      	<Flex.Item>
					<div className="footeritem" onClick={clickitem2}>
      			Item2
    			</div>
					</Flex.Item>
      	<Flex.Item>
					<div className="footeritem" onClick={clickitem3}>
      			Item3
    			</div>
				</Flex.Item>
    	</Flex>
		</div>
	);
}
	
componentWillMount() {}
componentDidMount() {}
componentWillReceiveProps(nextProps) {}
shouldComponentUpdate(nextProps, nextState) { return true; }
componentWillUpdate(nextProps, nextState) {}
componentDidUpdate(prevProps, prevState) {}
componentWillUnmount() {}
}

export default Footer;
