import dal from "../2-utils/dal";
import { OkPacket } from "mysql";
import GroupsModel from "../3-models/groups-model";
import MeetingsModel from "../3-models/meetings-model";
import { ResourceNotFoundError } from "../3-models/client-errors";

async function getAllGroups(): Promise<GroupsModel[]> {
    const sql = "SELECT * FROM development_groups"
    const groups = await dal.execute(sql)
    return groups
}

async function getMeetingsByGroups(groupId: number): Promise<MeetingsModel[]> {
    const sql = "SELECT * FROM meeting_schedule WHERE groupId = ?"
    const meetings = await dal.execute(sql, [groupId])
    return meetings;
}


async function addMeeting(meeting: MeetingsModel): Promise<MeetingsModel> {
    meeting.validate()
    const sql = "INSERT INTO meeting_schedule VALUES(DEFAULT, ?, ?, ?, ?, ?)";
    const info: OkPacket = await dal.execute(sql, [meeting.groupId, meeting.beginningTime, meeting.endTime, meeting.description, meeting.roomMeeting]);

    meeting.meetingId = info.insertId;
    return meeting
}

async function deleteMeeting(meetingId: number): Promise<void> {
    const sql = "DELETE FROM meeting_schedule WHERE meetingId = ?"
    const info: OkPacket = await dal.execute(sql, [meetingId])
    if (info.affectedRows === 0) throw new ResourceNotFoundError(meetingId)
}

export default {
    getAllGroups,
    getMeetingsByGroups,
    addMeeting,
    deleteMeeting,
};

