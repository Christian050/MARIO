import { Component } from "react";

class Home extends Component{
    constructor (props){
        super(props)
        this.state={
            width: "",
            height: "",
            load: "",
            slenderness_limit:50,
            maximum_allowable_strength:1400,
            E:17000,

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.clearContent=this.clearContent.bind(this);
    }
    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    slender_test(){
        let width=this.state.width
        let height=this.state.height
        let slenderness = height/width

        if (slenderness <= this.state.slenderness_limit){
            return(
                `<div class="alert alert-danger" role="alert">
                <h4>Passed slenderness test!</h4>
                </div>`
            )
        }else{
            return (
                `<div class="alert alert-danger" role="alert">
                <h4>Failed slenderness test!</h4>
                </div>`
            )
            

        }
    }
    handleSubmit(event) {
        let clearBtn = document.querySelector("#clear")
        let slender = document.querySelector("#slenderness")
        let test2 = document.querySelector("#test-2")
        let maxLoad = document.querySelector("#max-load")

        clearBtn.classList.remove("invisible")

        slender.innerHTML = this.slender_test()
        test2.innerHTML = this.test_2()
        maxLoad.innerHTML = this.max_load()

        event.preventDefault()
    }

    clearContent(event) {
        let clearBtn = document.querySelector("#clear")
        let results = document.querySelector("#results")
        results.innerHTML = ''

        event.preventDefault()
        this.setState({
            width: '', height: '', load: ''
        })

        clearBtn.classList.add("invisible") 


}
render() {
    return(
        <div className="main">
            <p>Good day</p>
        </div>
    )
}

}
export default Home