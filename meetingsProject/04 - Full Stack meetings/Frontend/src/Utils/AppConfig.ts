class AppConfig {
    public groupsUrl = "http://localhost:4000/api/groups/";
    public meetingByGroupUrl = "http://localhost:4000/api/meetings_schedule-by-group/";
    public meetingsUrl = "http://localhost:4000/api/meetings/";
}

const appConfig = new AppConfig();

export default appConfig;
