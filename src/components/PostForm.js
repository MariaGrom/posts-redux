import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "./redux/action";
import { Alert } from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '' };
        this.title = ''
    }

    submitHandler = event => {
        event.preventDefault()
        const { title } = this.state
        // проверка на пустой заголовок при создании поста, чтобы нельзя было создать пустой пост
        if (!title.trim()) {
            return this.props.showAlert('Заголовок поста не может быть пустым')
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({ title: '' })
    }

    // Универсальный обработчик изменения любого поля инпут 
    // ...prev - предыдущее состояниe  
    changeInputHandler = event => {
        event.persist()
        this.setState(prev => (
            {
                ...prev,
                ...{ [event.target.name]: event.target.value }
            }))
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert}/>}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}


const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert
}

const mapStateToProps = state =>({
    alert: state.app.alert
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)