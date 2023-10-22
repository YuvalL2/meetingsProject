import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import GroupsModel from "../../../Models/GroupsModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import MeetingsModel from "../../../Models/MeetingsModel";
import CardMeeting from "../CardMeeting/CardMeeting";


function List(): JSX.Element {

    const [groups, setGroups] = useState<GroupsModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingsModel[]>([])

    useEffect(() => {
        dataService.getAllGroups()
            .then(dbGroups => setGroups(dbGroups))
            .catch(err => notifyService.error(err))

    }, [])

    async function shoeGroup(args: ChangeEvent<HTMLSelectElement>) {
        try {
            const groupId = +args.target.value
            const dbMeetings = await dataService.getMeetingsByGroups(groupId)
            setMeetings(dbMeetings)


        } catch (error) {
            notifyService.error(error)

        }
    }

    async function deleteMeeting(meetingId: number) {
        try {
            await dataService.deleteMeeting(meetingId)
            setMeetings(meetings.filter(meeting => meeting.meetingId !== meetingId))
            notifyService.success("The meeting was successfully deleted!")

        } catch (error: any) {
            notifyService.error(error)
        }
    }

    return (
        <div className="List">
            <h2>List groups</h2>

            <label>Select a group↓</label>
            <br></br>
            <select defaultValue="" onChange={shoeGroup}>
                <option disabled value="">select...</option>
                {groups.map(a => <option key={a.groupId} value={a.groupId}>{a.groupName}</option>)}
            </select>
            <br></br><br></br>

            {meetings.map(meeting => <CardMeeting key={meeting.meetingId} meeting={meeting} deleteCard={deleteMeeting} />)}


        </div>
    );
}

export default List;
