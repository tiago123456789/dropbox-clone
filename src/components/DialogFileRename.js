import React from "react";

export default (props) => (
    <div class="react-confirm-alert">
        <div class="react-confirm-alert-body">
            <h1>Wish file rename?</h1>
            <input className="form-control" placeholder="Typing new name" />
            <br />
            <div className="">
                <button className="btn btn-xs btn-primary" onClick={props.buttons[0].onClick}>Yes</button>&nbsp;
                <button className="btn btn-xs btn-primary" onClick={props.onClose}>No</button>
            </div>
        </div>
    </div>
)