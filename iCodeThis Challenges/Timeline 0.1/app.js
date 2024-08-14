const challenges = [
    {
        date: 'August 13, 2024',
        title: 'Color Generator',
        image: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/16a678d8-199f-46e3-a612-1136bd02dd86.png',
        link: 'https://icodethis.com/modes/design-to-code/118/submissions/314321'
    },
    {
        date: 'August 14, 2024',
        title: 'Blog Header',
        image: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/6e101e4a-4eaf-4b54-8bfc-08cae00bff7b.png',
        link: 'https://icodethis.com/modes/design-to-code/106/submissions/313761'
    },
    {
        date: 'August 15, 2024',
        title: 'Analytics Chart',
        image: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/421776dd-f640-437a-a7b6-3cf1cd5dc67d.png',
        link: 'https://icodethis.com/modes/design-to-code/126/submissions/313635'
    },
    {
        date: 'August 16, 2024',
        title: 'Stat Cards',
        image: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/b2cb5627-0727-4c82-bcfc-a4b588f712ff.png',
        link: 'https://icodethis.com/modes/design-to-code/420/submissions/313003'
    }
];

const timeline = document.getElementById('timeline');

challenges.forEach((challenge, index) => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');
    item.innerHTML = `
                <img src="${challenge.image}" class="timeline-img" />
                <div class="timeline-content">
                    <p class="date">${challenge.date}</p>
                    <p class="title">${challenge.title}</p>
                    <a href="${challenge.link}" class="link">View Submission</a>
                </div>
            `;
    timeline.appendChild(item);
});

// toggle dark theme mode
const toggleThemeBtn = document.getElementById("theme-toggle");
const body = document.querySelector("body");
const timelineItems = document.querySelectorAll(".timeline-item");

toggleThemeBtn.addEventListener("click", () => {
    const sun = toggleThemeBtn.querySelector(".fa-sun");
    const moon = toggleThemeBtn.querySelector(".fa-moon");

    if (body.hasAttribute("data-dark-mode")) {
        body.removeAttribute("data-dark-mode");
        body.style.setProperty("--__subHeadClr", "var(--clr-dark-accent)");
        timeline.style.setProperty("--__barClr", "var(--clr-bar)");
        moon.style.transform = "translateY(0)";
        sun.style.transform = "translateY(200%)";
    } else {
        body.setAttribute("data-dark-mode", "true");
        body.style.setProperty("--__subHeadClr", "var(--clr-light-accent)");

        timeline.style.setProperty("--__barClr", "var(--clr-link)");
        sun.style.transform = "translateY(0)";
        moon.style.transform = "translateY(200%)";
    }
});

timelineItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.opacity = "1";
    }, 550 + index * 200);
});
