import React from "react"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import Radium from "radium"
import {connect} from "react-redux"
import {login} from "../../redux/actions/authAction"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    getStyles(){
        return {
            root:{
                // border:'5px solid red',
                textAlign:'center',
                boxShadow: '0px 0px 20px 1px rgba(15,161,149,0.75)',
                padding:'0 1em 1em',
                margin:'30px 16px',
                '@media(min-width:400px)':{
                    width:'400px',
                    margin:'30px auto'
                }
            },
            label:{
                fontWeight:'600',
                fontSize:'1em',
                lineHeight:'40px'
            },
            textField:{
                display:'block',
                width:'100%',
                fontSize:'.9em'
            },
            button:{
                width:'130px',
                height:'40px',
                marginTop:'30px',
                marginBottom:'15px'
            },
            a:{
                fontSize:'.8em',
                textDecoration:'none',
                color:'grey',
                ':hover':{color:'#00bcd4'}
            }
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let username = this.refs.username.getValue()
        let password = this.refs.password.getValue()
        this.props.login({username,password})
    }

    render(){
        const styles=this.getStyles()
        return(
            <div style={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <TextField ref="username" style={styles.textField} floatingLabelText="用户名"/>
                    <TextField ref="password" style={styles.textField} floatingLabelText="密码" type="password"/> 
                    <RaisedButton 
                        primary={true} 
                        style={styles.button} 
                        labelStyle={styles.label} 
                        type="submit" 
                        label="登录"
                    />                   
                </form>
            </div>
        )
    }
}

export default connect(null,{login})(Radium(Login))