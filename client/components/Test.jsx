import React from 'react';
import { AppBar, TextField, IconButton } from 'material-ui'

class Test extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            
                <AppBar
                    style= {styles.appBar}
                    title={"Title"}
                    iconElementLeft={<IconButton iconClassName="muidocs-icon-custom-github" />}
                    iconElementRight={
                        <div style={styles.textField_container}>
                            <TextField
                                style={styles.textField}
                                hintText='Enter a YouTube URL'
                            />
                        </div>
                    }
                />
        )
    }
}

export default Test;

            

const styles = {

  appBar : {
    backgroundColor : '#4D4A4A'
  },

  textField_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '510px',
    backgroundColor: '#',
    borderRadius: '2px'
  },

  textField: {
    width : '500px',
    margin: '5px',
    height: '40px',
    // lineHeight: '40px',
    backgroundColor: '#7E98E0',
    borderRadius: '2px'
  }
};