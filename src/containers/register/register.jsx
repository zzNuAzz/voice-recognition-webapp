import React, { useEffect, useState } from 'react';

import RecordView from './record-view/record-view';
import InputView from './input-view/input-view';
import DoneView from './done-view/done-view';

import RegisterApi from 'api/register'

const RECORD_STAGE = "record";
const INPUT_NAME_STAGE = "input-name";
const DONE_STAGE = "done";
const stageName = [RECORD_STAGE, INPUT_NAME_STAGE, DONE_STAGE];

export default function Register() {
	const [name, setName] = useState("")
	const [record, setRecord] = useState(null);
	const [stage, setStage] = useState("record");

	const _stage = {
		next: function() {
			const idStage = stageName.indexOf(stage);
			if(idStage === stageName.length - 1) return;
			setStage(stageName[(idStage+1) % stageName.length]);
		},
		prev: function() {
			const idStage = stageName.indexOf(stage);
			if(idStage === 0) return;
			setStage(stageName[(idStage-1) % stageName.length]);
		},
	};

	useEffect(()=> {
		console.log("info", {record, name});
	}, [record, name])
	

	function _onSubmit() {
		return RegisterApi.post({record, name})
	}

  // _nextStage()
	function renderStage_() {
		switch (stage) {
		case RECORD_STAGE:
			return <RecordView record={record} setRecord={setRecord} stage={_stage}/>
		case INPUT_NAME_STAGE:
			return <InputView name={name} setName={setName} submit={_onSubmit} stage={_stage}/>
		case DONE_STAGE:
			return <DoneView />
		}
		return null;
	}
	return (
		<div className="register-page default-background no-select">
			{renderStage_()}
		</div>
	);
}


