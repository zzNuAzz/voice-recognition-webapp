import React from 'react';

import profileIcon from 'assets/register/profile-icon.svg';
import { toast } from 'react-toastify';

export default function InputView({ name, setName, submit, stage }) {

    const _onsubmit = () => {
        if(name.length === 0) {
            toast.warning("Name must not be empty.");
        } else {
            submit().then(result => {
                stage.next()
            }).catch(err => {
                toast.error(err || "Error unknown");
            })
        }
    }
	return (
		<div className="input-view">
			<img className="view-icon" src={profileIcon} alt="record-icon" />
			<input
				value={name}
				onChange={e => setName(e.target.value)}
				type="text"
				placeholder="Click to type your name"
			/>
			<span className="button" onClick={_onsubmit}>Type your name</span>
		</div>
	);
}
