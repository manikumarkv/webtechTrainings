import react from 'react';
class Cls extends react.Component{
    state={
        name:"pravalli",
        Favourite:"chocolate"
    }
    render(){
        return(
            <div>
                <h1>{this.state.name+':'+this.state.Favourite}</h1>
            </div>
        )

    }
}
export default Cls;