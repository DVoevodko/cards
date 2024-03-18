import React from 'react';

/*
                {React.Children.map(children, c => 
                    )
                }

                {children
                }
            {(typeof(text) !== "undefined")?'<p>'+text+'</p>':''}
            <p>{text}</p>
*/
export const Cards = (props) => {
    const { title, text, button, children} = props;
    const chld = React.Children.map(children, c => c);

    return(
        <div className = 'card'>
            {chld}
            <div class="card-body">
                <h5>{title}</h5>
                <p>{(typeof(text) !== "undefined")?text:''}</p>
                <a href="#" class="btn btn-primary">{(typeof(button) !== "undefined")?button:''}</a>
            </div>
        </div>
    )
}