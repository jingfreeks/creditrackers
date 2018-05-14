import React,{Component} from 'react';
import {Button,Card,CardSection,Input } from './common';

class Lenderinfo extends Component{
    state={username:'',password:'',confirmpassword:''};
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
                 <Button >
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