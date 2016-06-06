import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

export default class extends React.Component{

  render() {

    const styles ={
      button: {
        margin:10,
      },
    };

    return (

      <div>
        <FlatButton
          style={styles.button}
          secondary={true}
          label="微信"
          icon={<FontIcon className="fa fa-wechat"/>}
          disabled = {true}
        />
        <FlatButton
          style={styles.button}
          secondary={true}
          label="微博"
          icon={<FontIcon className="fa fa-weibo"/>}
          disabled = {true}
        />
        <FlatButton
          style={styles.button}
          secondary={true}
          label="QQ"
          icon={<FontIcon className="fa fa-qq"/>}
          disabled = {true}
        />
        <FlatButton
          style={styles.button}
          secondary={true}
          label="Facebook"
          icon={<FontIcon className="fa fa-facebook"/>}
          onTouchTap = {this.props.handleLoginFacebook}
        />
        <FlatButton
          style={styles.button}
          secondary={true}
          label="Twitter"
          icon={<FontIcon className="fa fa-twitter"/>}
          onTouchTap = {this.props.handleLoginTwitter}
        />
        <FlatButton
          style={styles.button}
          secondary={true}
          label="Google"
          icon={<FontIcon className="fa fa-google"/>}
          onTouchTap = {this.props.handleLoginGoogle}
        />
        <FlatButton
          style={styles.button}
          secondary={true}
          label="Github"
          icon={<FontIcon className="fa fa-github"/>}
          onTouchTap = {this.props.handleLoginGithub}
        />
      </div>
    );
  }
}
