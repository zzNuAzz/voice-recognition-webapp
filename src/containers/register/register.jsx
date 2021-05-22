import React, { useEffect, useState } from 'react';

import RecordStage from './record-stage/record-stage';
import InputStage from './input-stage/input-stage';
import DoneStage from './done-stage/done-stage';

import RegisterApi from 'api/register'

const RECORD_STAGE = "record";
const INPUT_NAME_STAGE = "input-name";
const DONE_STAGE = "done";
const stageName = [RECORD_STAGE, INPUT_NAME_STAGE, DONE_STAGE];

export default function Register() {
	const [name, setName] = useState("")
	const [record, setRecord] = useState(null);
	const [stage, setStage] = useState(stageName[0]);

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
			return <RecordStage record={record} setRecord={setRecord} stage={_stage}/>
		case INPUT_NAME_STAGE:
			return <InputStage name={name} setName={setName} submit={_onSubmit} stage={_stage}/>
		case DONE_STAGE:
			return <DoneStage />
		default:
			return null;
		}
	}
	return (
		<div className="register-page default-background no-select">
			{renderStage_()}
		</div>
	);
}


