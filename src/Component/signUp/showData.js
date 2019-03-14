import React,{ Component } from 'react'
import { fetctPostData } from '../../store/signup/actions'
import { connect } from 'react-redux'



class ShowData extends Component {
    componentWillMount(){
        this.props.fetctPostData()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }
    render(){
        const postItems = this.props.data.map(post => (
            <div className="singdata" key={post.id}>
              <h3>{post.firstname} {post.lastname}</h3>
              <p>{post.email}</p>
            </div>))
        return(
            <div className="signup-container">
                <h1>Show User Data</h1>
                <div className="container">
                    {postItems}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    data: state.signup.datas,
    newpost: state.signup.item
})

export default connect(mapStateToProps,{ fetctPostData })(ShowData);