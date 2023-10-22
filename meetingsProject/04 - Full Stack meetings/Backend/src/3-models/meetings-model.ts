import Joi from "joi";
import { ValidationError } from "./client-errors";

class MeetingsModel {
    public meetingId: number;
    public groupId: number;
    public beginningTime: number;
    public endTime: number;
    public description: string;
    public roomMeeting: string;

    public constructor(meeting: MeetingsModel) {
        this.meetingId = meeting.meetingId;
        this.groupId = meeting.groupId;
        this.beginningTime = meeting.beginningTime;
        this.endTime = meeting.endTime;
        this.description = meeting.description;
        this.roomMeeting = meeting.roomMeeting;
    }

    private static validationSchema = Joi.object({
        meetingId: Joi.number().optional().positive().integer(),
        groupId: Joi.number().required().positive().integer(),
        beginningTime: Joi.date().required(),
        endTime: Joi.date().required(),
        description: Joi.string().required().max(1000),
        roomMeeting: Joi.string().required().max(50),
    })

    public validate(): void {
        const result = MeetingsModel.validationSchema.validate(this);
        if (result.error?.message) throw new ValidationError(result.error.message);
    }
}

export default MeetingsModel