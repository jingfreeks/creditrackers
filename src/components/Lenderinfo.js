import React,{Component} from 'react';
import {Button,Card,CardSection,Input } from './common';

class Lenderinfo extends Component{
    state={text:''};
    render(){
        return(
        <Card>
            <CardSection>
                <Input 
                    value={this.state.text}
                    onChangeText={text =>this.setState({text})}
                   
                />
            </CardSection>
            <CardSection>
                 <Button >
                    View Now
                </Button>
            </CardSection>
        </Card>
    );
    };
};

export default Lenderinfo;