// Data fallbacks (used automatically when opened directly via file:/// protocol without a local web server)
const FALLBACK_EXPERIENCES = [
  {
    "id": 1,
    "company": "IXperience",
    "logo": "imgs/IXperience.svg",
    "role": "UI / UX Designer (Internship)",
    "period": "Oct2026",
    "sectionTitle": "Learning & Responsibilities:",
    "responsibilities": [
      "Applying UX Research, User Flows & Wireframing.",
      "Designing intuitive UI interfaces using Figma.",
      "Creating interactive prototypes and user-centered experiences.",
      "Applying UX principles and usability best practices.",
      "Collaborating with the team to improve design solutions."
    ]
  },
  {
    "id": 2,
    "company": "URAM IT-EG",
    "logo": "https://c.animaapp.com/faqgcqcH/img/frame-115-3@2x.png",
    "role": "Mid Level GRAPHIC DESIGNER",
    "period": "SEP2025 – Present",
    "sectionTitle": "Responsibilities:",
    "responsibilities": [
      "Designed visual identities and branding systems for diverse brands.",
      "Created engaging and consistent social media designs.",
      "Developed logos and key visual assets aligned with brand identity.",
      "Designed creative digital & print marketing materials.",
      "Maintained strong visual consistency, typography, composition, and brand guidelines.",
      "Collaborated with teams to translate concepts into high-quality visual solutions."
    ]
  },
  {
    "id": 3,
    "company": "WELL DESIGN DIGITAL MARKETING",
    "logo": "https://c.animaapp.com/faqgcqcH/img/frame-115-1@2x.png",
    "role": "Mid Level GRAPHIC DESIGNER",
    "period": "Jan2024 – Jul2025",
    "sectionTitle": "Responsibilities:",
    "responsibilities": [
      "Designed visual identities and branding systems for diverse brands.",
      "Created engaging and consistent social media designs.",
      "Developed logos and key visual assets aligned with brand identity.",
      "Designed creative digital & print marketing materials.",
      "Maintained strong visual consistency, typography, composition, and brand guidelines.",
      "Collaborated with teams to translate concepts into high-quality visual solutions."
    ]
  },
  {
    "id": 4,
    "company": "LHH DIGITAL MARKETING",
    "logo": "https://c.animaapp.com/faqgcqcH/img/frame-115-2@2x.png",
    "role": "Junior GRAPHIC DESIGNER",
    "period": "Mar2022 – Feb2023",
    "sectionTitle": "Responsibilities:",
    "responsibilities": [
      "Created social media designs for digital platforms.",
      "Assisted in developing visual identities and branding materials.",
      "Designed marketing and promotional materials for digital and print."
    ]
  }
];

const FALLBACK_PROJECTS = [
  {
    "id": 1,
    "title": "Website E-commerce Clothing",
    "type": "ui-ux",
    "category": "Ui Ux Design",
    "platform": "Website",
    "role": "Ui Ux Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 2,
    "title": "Mobile App Fitness Tracker",
    "type": "ui-ux",
    "category": "Ui Ux Design",
    "platform": "Mobile App",
    "role": "Ui Ux Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 3,
    "title": "Dashboard Analytics Platform",
    "type": "ui-ux",
    "category": "Ui Ux Design",
    "platform": "Web App",
    "role": "Ui Ux Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 4,
    "title": "Brand Identity & Guidelines",
    "type": "graphic",
    "category": "Graphic Design",
    "platform": "Branding",
    "role": "Graphic Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 5,
    "title": "Social Media Campaign Designs",
    "type": "graphic",
    "category": "Graphic Design",
    "platform": "Social Media",
    "role": "Graphic Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 6,
    "title": "Packaging & Label Design",
    "type": "graphic",
    "category": "Graphic Design",
    "platform": "Packaging",
    "role": "Graphic Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 7,
    "title": "Creative Marketing Materials",
    "type": "graphic",
    "category": "Graphic Design",
    "platform": "Print & Digital",
    "role": "Graphic Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 8,
    "title": "Logo Design & Key Visuals",
    "type": "graphic",
    "category": "Graphic Design",
    "platform": "Logo Design",
    "role": "Graphic Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  },
  {
    "id": 9,
    "title": "Typography & Editorial Layouts",
    "type": "graphic",
    "category": "Graphic Design",
    "platform": "Print Design",
    "role": "Graphic Designer",
    "image": "https://c.animaapp.com/faqgcqcH/img/frame-106-8@2x.png",
    "link": "#",
    "icon": "https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg"
  }
];

function createProjectCardHtml(project) {
  return `
    <div class="flex flex-col w-full max-w-[411px] items-start gap-4 p-4 relative bg-[#1a1a1a] rounded-lg overflow-hidden hover:scale-[1.01] transition-transform">
        <div class="relative self-stretch w-full h-[262px] rounded-md bg-cover bg-[50%_50%]" style="background-image: url('${project.image}');"></div>
        <div class="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div class="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div class="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22px] whitespace-nowrap">
                    ${project.title}
                </div>
                <div class="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                    <div class="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#8d8c89] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                        ${project.category}
                    </div>
                    <div class="relative w-1 h-1 bg-[#8d8c89] rounded-sm aspect-[1]"></div>
                    <div class="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#8d8c89] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                        ${project.platform}
                    </div>
                </div>
                <div class="inline-flex items-center justify-center gap-2.5 px-3 py-1 relative flex-[0_0_auto] bg-[#303030] rounded-3xl">
                    <div class="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#8d8c89] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                        ${project.role}
                    </div>
                </div>
            </div>
            <a href="${project.link || '#'}" class="relative w-6 h-6 aspect-[1] opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener">
                <img class="relative w-6 h-6 aspect-[1]" src="${project.icon || 'https://c.animaapp.com/faqgcqcH/img/akar-icons-arrow-up-right-8.svg'}" alt="View project" />
            </a>
        </div>
    </div>
  `;
}

function renderProjects(projects) {
  const uiUxContainer = document.getElementById('ui-ux-projects-container');
  const graphicContainer = document.getElementById('graphic-projects-container');

  if (uiUxContainer) {
    const uiUxList = projects.filter(p => p.type === 'ui-ux');
    uiUxContainer.innerHTML = uiUxList.map(createProjectCardHtml).join('');
  }

  if (graphicContainer) {
    const graphicList = projects.filter(p => p.type === 'graphic');
    graphicContainer.innerHTML = graphicList.map(createProjectCardHtml).join('');
  }
}

function renderExperiences(experiences) {
  const container = document.getElementById('experience-list');
  if (!container) return;

  const html = experiences.map((exp, index) => {
    const isLast = index === experiences.length - 1;
    const dividerHtml = isLast ? '' : `<img class="relative self-stretch w-full h-0.5" src="https://c.animaapp.com/faqgcqcH/img/line-13.svg" />`;

    return `
      <div class="flex flex-col items-start gap-[33px] relative self-stretch w-full flex-[0_0_auto]">
          <div class="inline-flex items-center gap-8 relative flex-[0_0_auto]">
              <img class="relative w-[120px] h-[120px] rounded-3xl aspect-[1] object-cover" src="${exp.logo}" alt="${exp.company}" />
              <div class="relative w-fit [font-family:'Geist',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[normal]">
                  ${exp.company}
              </div>
          </div>
          <div class="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div class="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div class="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                      ${exp.role}
                  </div>
                  <div class="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                      ${exp.period}
                  </div>
              </div>
              <div class="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div class="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
                      ${exp.sectionTitle || 'Responsibilities:'}
                  </div>
                  <ul class="relative self-stretch list-disc pl-6 [font-family:'Geist',Helvetica] font-semibold text-[#8d8c89] text-xl tracking-[0] leading-8">
                      ${exp.responsibilities.map(item => `<li>${item}</li>`).join('')}
                  </ul>
              </div>
          </div>
      </div>
      ${dividerHtml}
    `;
  }).join('');

  container.innerHTML = html;
}

async function loadData() {
  let projects = FALLBACK_PROJECTS;
  let experiences = FALLBACK_EXPERIENCES;

  try {
    const [projRes, expRes] = await Promise.all([
      fetch('projects.json'),
      fetch('experience.json')
    ]);

    if (projRes.ok) {
      projects = await projRes.json();
    }
    if (expRes.ok) {
      experiences = await expRes.json();
    }
  } catch (err) {
    console.info('Loaded data from fallback cache (file protocol or fetch unavailable):', err);
  }

  renderProjects(projects);
  renderExperiences(experiences);
}

document.addEventListener('DOMContentLoaded', loadData);
