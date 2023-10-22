import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import MeetingsModel from "../3-models/meetings-model";
import StatusCode from "../3-models/status-code";
import { required } from "joi";

const router = express.Router();

router.get("/groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groups = await dataService.getAllGroups()
        response.json(groups)
    }
    catch (err: any) { next(err); }
});


router.get("/meetings_schedule-by-group/:groupId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groupId = +request.params.groupId;
        const meetings = await dataService.getMeetingsByGroups(groupId)
        response.json(meetings)
    }
    catch (err: any) { next(err); }
});


router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingsModel(request.body)
        const addedMeeting = await dataService.addMeeting(meeting)
        response.status(StatusCode.Created).json(addedMeeting)
    }
    catch (err: any) { next(err); }
});

router.delete("/meetings/:meetingId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meetingId = +request.params.meetingId
        await dataService.deleteMeeting(meetingId)
        response.sendStatus(StatusCode.NoContent)
    }
    catch (err: any) { next(err); }
});


export default router;
