import dataFile from "../../data.csv";
import * as d3 from "d3";

// Returns a Promise
export function getData() {
    return d3.csv(dataFile, function (rawData) {
        return {
            five_year_plan: rawData.five_year_plan,
            canvas_use: rawData.canvas_use,
            degree: rawData.degree,
            degree_major: rawData.degree_major,
            degree_started: parseInt(rawData.degree_started),
            expected_graduation_date: Date(rawData.expected_graduation_date),
            expected_learnings: rawData.expected_learnings,
            facebook_use: rawData.facebook_use,
            interests_and_hobbies: rawData.interests_and_hobbies,
            kth_social_use: rawData.kth_social_use,
            personal_art_skills: parseInt(rawData.personal_art_skills),
            personal_collab_skills: parseInt(rawData.personal_collab_skills),
            personal_comms_skills: parseInt(rawData.personal_comms_skills),
            personal_comp_skills: parseInt(rawData.personal_comp_skills),
            personal_git_skills: parseInt(rawData.personal_git_skills),
            personal_graphics_skills: parseInt(rawData.personal_graphics_skills),
            personal_hci_skills: parseInt(rawData.personal_hci_skills),
            personal_math_skills: parseInt(rawData.personal_math_skills),
            personal_progr_skills: parseInt(rawData.personal_progr_skills),
            personal_stat_skills: parseInt(rawData.personal_stat_skills),
            personal_ux_skills: parseInt(rawData.personal_ux_skills),
            personal_vis_skills: parseInt(rawData.personal_vis_skills),
            previous_university: rawData.previous_university,
            relevant_course_experience: rawData.relevant_course_experience,
            thesis_status: rawData.thesis_status,
            timestamp: rawData.timestamp,
            username: rawData.username,
            MathWiz: (parseInt(rawData.personal_math_skills)+parseInt(rawData.personal_stat_skills))/2,
            Programmer: (parseInt(rawData.personal_progr_skills)+parseInt(rawData.personal_git_skills)+parseInt(rawData.personal_comp_skills)+parseInt(rawData.personal_graphics_skills))/4,
            Artist: (parseInt(rawData.personal_art_skills)+parseInt(rawData.personal_vis_skills))/2,
            UX: (parseInt(rawData.personal_ux_skills)+parseInt(rawData.personal_vis_skills))/2,
            Communicator: (parseInt(rawData.personal_comms_skills)+parseInt(rawData.personal_collab_skills))/2,
        }
    });
}
