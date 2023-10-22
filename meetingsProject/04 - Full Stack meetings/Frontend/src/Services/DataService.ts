import axios from "axios";
import GroupsModel from "../Models/GroupsModel";
import appConfig from "../Utils/AppConfig";
import MeetingsModel from "../Models/MeetingsModel";


class DataService {
    public async getAllGroups(): Promise<GroupsModel[]> {
        const response = await axios.get<GroupsModel[]>(appConfig.groupsUrl)
        const group = response.data
        return group
    }

    public async getMeetingsByGroups(groupId: number): Promise<MeetingsModel[]> {
        const response = await axios.get<MeetingsModel[]>(appConfig.meetingByGroupUrl + groupId)
        const meeting = response.data
        return meeting
    }

    public async addMeeting(meeting: MeetingsModel): Promise<void> {
        await axios.post<MeetingsModel>(appConfig.meetingsUrl, meeting)

    }

    public async deleteMeeting(meetingId: number): Promise<void> {
        await axios.delete<MeetingsModel>(appConfig.meetingsUrl + meetingId)

    }
}




const dataService = new DataService();

export default dataService;
