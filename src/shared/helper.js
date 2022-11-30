export const getEventType = (type) => {
    if(type === "hyp") return "have_you_places";
    if(type === "psb") return "personal_skills_business";
    if(type === "gsb") return "group_skills_business";
}