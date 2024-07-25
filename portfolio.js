
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const width = skillLevel.getAttribute('data-skill-level');
        skillLevel.style.width = width;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});
