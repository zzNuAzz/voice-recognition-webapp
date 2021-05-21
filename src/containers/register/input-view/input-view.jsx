import React, { useEffect, useState } from 'react';

import profileIcon from 'assets/register/profile-icon.svg';
import { toast } from 'react-toastify';

export default function InputView({ name, setName, submit, stage }) {

    const _onsubmit = async () => {
        if(name.length === 0) {
            toast.warning("Name must not be empty.");
        } else {
            const result = await submit();
            if(result?.success) {
                stage.next()
            } else {
                toast.error(result?.message || "Error unknown");
            }
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
			<span disabled className="button" onClick={_onsubmit}>Type your name</span>
		</div>
	);
}
