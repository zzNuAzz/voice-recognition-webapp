import React, { Fragment, useRef, useState } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

import recordIcon from 'assets/register/record-icon.svg';
import signalBar from 'assets/register/signal.svg';
import { toast } from 'react-toastify';

const RECORD_TIME = 5000; //ms

export default function RecordView({setRecord, stage}) {
	const [recordState, setRecordState] = useState(null);
	const timeOut = useRef(null);

	const _recordStop = () => {
		setRecordState(RecordState.STOP);
		clearTimeout(timeOut.current);
	}
	const _recordStart = () => {
		setRecordState(RecordState.START);
		toast.info(`Recoding in ${RECORD_TIME / 1000}s left.`)
		timeOut.current = setTimeout(()=>{
			_recordStop();
			stage.next();
		}, RECORD_TIME)
		
	}
	const _onStop = (audioData) => {
		setRecord(audioData);
	}
	return (
		<Fragment>
			<div className="record-view">
				<img className="view-icon" src={recordIcon} alt="record-icon" />
				<img className="signal-bar" src={signalBar} alt="record-icon" />
				{recordState !== RecordState.START ? (
					<span className="button" onClick={_recordStart}>Click to record</span>
				) : (
					<span className="button" onClick={_recordStop}>Cancel</span>
				)}
			</div>
			<AudioReactRecorder state={recordState} onStop={_onStop} />
		</Fragment>
	);
}
