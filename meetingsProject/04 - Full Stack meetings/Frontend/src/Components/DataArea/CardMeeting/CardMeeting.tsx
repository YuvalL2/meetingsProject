import MeetingsModel from "../../../Models/MeetingsModel";
import "./CardMeeting.css";


interface CardMeetingProps {
    meeting: MeetingsModel
    deleteCard: (meetingId: number) => void;
}


function CardMeeting(props: CardMeetingProps): JSX.Element {

    async function deleteCard() {
        props.deleteCard(props.meeting.meetingId)
    }

    return (
        <div className="CardMeeting">
            <span>beginningTime: {props.meeting.beginningTime}</span>
            <br /><br />
            <span>endTime: {props.meeting.endTime}</span>
            <br /><br />
            <span>roomName: {props.meeting.roomMeeting}</span>
            <br /><br />
            <span>Description: {props.meeting.description}</span>

            <button onClick={deleteCard}>🗑️</button>

        </div >
    );
}

export default CardMeeting;
