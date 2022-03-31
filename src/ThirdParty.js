import React from 'react';
import axios from 'axios';
import './css/Widgets.css';
  
class InstagramFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             postings: [],
        }
    }

componentDidMount() {
    axios.get('https://graph.instagram.com/me/media?', {
                                        params: {
                                            fields: 'id,username,caption,media_url,media_type',
                                            access_token: 'IGQVJXWlV4NG1uTzE2Qk04bmN6MUJUWkItSGRLdXNpNmY5T1prdVF6OHpEdnFOSnhKeno2akYteTJRaXMyODlsWU0waWxEZAFl6ZAmMyNTBHbVItUWtiQnNJTEtaOUJXVnpNWXdqcXF2bTJ3dGJVS3ZANbQZDZD'
                                        },
                                        responseType: 'json'
                                    })
                                    .then(function(response) {
                                        console.log(response.data);
                                        this.setState({
                                            postings: response.data.data
                                        })
                                    }.bind(this));
 }

render () {  
    const postingsToRender = this.state.postings.map(post => {
        if (post.media_type === 'IMAGE') {
        return (
            <div key={post.id}>
                <div name='MediaContainer' className='media-container'>
                    <img src={post.media_url} alt='post' />
                </div>
                <span>{post.caption}</span>   
            </div>
        )}
    });
        
        return (
            <div>
                {postingsToRender}
            </div>
        );
    }                            
}

export default InstagramFeed;
