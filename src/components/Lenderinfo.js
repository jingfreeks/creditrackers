import React,{Component} from 'react';
import {Button,Card,CardSection,Input } from './common';

class Lenderinfo extends Component{
    state={username:'',password:'',confirmpassword:''};

    onButtonPress(){
        const {username,password,confirmpassword}=this.state;
        
        console.log(this.state);

        fetch('https://reactnativecode.000webhostapp.com/user_registration.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
           
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
                
        }).catch((error) => {
            console.error(error);
        });

    }

    render(){
        return(
        <Card>
            <CardSection>
                <Input 
                              
                    placeholder="username"
                    label="Username"
                    value={this.state.username}
                    onChangeText={username =>this.setState({username})}
                   
                />
            </CardSection>
            <CardSection>
                <Input 
                    secureTextEntry     
                    placeholder="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password =>this.setState({password})}
                   
                />
            </CardSection>
            <CardSection>
                <Input 
                        secureTextEntry     
                        placeholder="confirmpassword"
                        label="Confirm Password"
                        value={this.state.confirmpassword}
                        onChangeText={confirmpassword =>this.setState({confirmpassword})}
                    
                    />
            </CardSection>
            <CardSection>
                 <Button onPress={this.onButtonPress.bind(this)}>
                    Register
                </Button>
            </CardSection>
            <CardSection>
                 <Button >
                    Cancel
                </Button>
            </CardSection>            
        </Card>
    );
    };
};

export default Lenderinfo;