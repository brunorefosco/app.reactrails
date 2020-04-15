import React, { Component } from 'react'
import { Button, CardContent, Typography, Card } from '@material-ui/core/';
import { red } from '@material-ui/core/colors';


export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }
    classes = {
        root: {
            minWidth: 275,
            marginBottom: 12,

        },
        title: {
            fontSize: 14,
        },
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/users')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    users: result.data
                });
            });
    }

    render() {
        const { users, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading </div>;
        } else {
            return (
                <div>
                    <Typography>Usuarios:</Typography>
                    {users.map(item => (
                        <Card key={item.id}  variant="outlined" style={{minWidth: 275,marginBottom: 12,}}>
                            <CardContent>
                                <Typography style={{fontSize:14}}>Nombre: {item.name}</Typography>
                                <p>Username: {item.username}</p>
                            </CardContent>
                            <Button color="primary" variant="contained">Botón</Button>
                        </Card>
                    ))}
                </div>
            );
        }
    }
}
