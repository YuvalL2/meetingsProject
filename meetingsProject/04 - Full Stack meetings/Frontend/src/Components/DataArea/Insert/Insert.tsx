import { useEffect, useState } from "react";
import "./Insert.css";
import GroupsModel from "../../../Models/GroupsModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import { useForm } from "react-hook-form";
import MeetingsModel from "../../../Models/MeetingsModel";
import { useNavigate } from "react-router-dom";

function Insert(): JSX.Element {
    const [groups, setGroups] = useState<GroupsModel[]>([]);
    const { register, handleSubmit } = useForm<MeetingsModel>()
    const navigate = useNavigate()

    useEffect(() => {
        dataService.getAllGroups()
            .then(dbGroups => setGroups(dbGroups))
            .catch(err => notifyService.error(err))

    }, [])

    async function send(meeting: MeetingsModel) {
        try {
            await dataService.addMeeting(meeting)
            notifyService.success("meeting added successfully")
            navigate("/list")

        } catch (error: any) {
            notifyService.error(error)

        }
    }

    return (
        <div className="Insert">
            <form onSubmit={handleSubmit(send)}>
                <label>groups:</label>
                <select defaultValue="" {...register("groupId")}>
                    <option disabled value="">select..</option>
                    {groups.map(a => <option key={a.groupId} value={a.groupId}>{a.groupName}</option>)}
                </select>

                <label>beginningTime:</label>
                <input type="datetime-local"  {...register("beginningTime")} required/>

                <label>endTime:</label>
                <input type="datetime-local" {...register("endTime")} required/>

                <label>roomName:</label>
                <input type="string" {...register("roomMeeting")} required/>

                <label>Description:</label>
                <input type="text" {...register("description")} required/>

                <button>submit</button>
            </form>
        </div>
    );
}

export default Insert;
