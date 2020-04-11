import React from "react";

export default (props) => (
    <div class="react-confirm-alert">
        <div class="react-confirm-alert-body">
            <h1>Wish file rename?</h1>
            <input className="form-control" 
                onChange={(event) => props.changeValueInput("newNameFile", event.target.value)}
             placeholder="Typing new name" />
            <br />
            <div className="">
                <button className="btn btn-xs btn-primary" 
                    onClick={() => {
                        props.buttons[0].onClick();
                        props.onClose()
                    }} >Save</button>&nbsp;
                <button className="btn btn-xs btn-primary" 
                    onClick={props.onClose}>Cancel</button>
            </div>
        </div>
    </div>
)