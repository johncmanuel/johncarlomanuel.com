<script>
  import Experience from "./experience.svelte";

  // Basis of my resume in JSON format
  // TODO: Use as data when creating resume
  // Data related to my resume can be placed in a separate, public repository
  const experiences = [
    {
      bullet_points: [
        "Coordinated 4 club projects in club with 100+ members through GitHub and Discord",
        "Gave presentations and workshops on software engineering project workflows and version control such as Git and GitHub",
        "Held weekly work sessions to give members time to work with each other and make progress on club projects",
        "Helped many members gain practical experience in collaborative software engineering"
      ],
      timestamp: "Sep 2022 - May 2023",
      title: "Project Manager",
      url: "https://skycsc.vercel.app/",
      company: "Computer Science Club, Skyline College"
    },
    {
      bullet_points: [
        "Held 20+ group and individual tutoring sessions for students enrolled in introductory Python and C++ classes",
        "Collaborated with computer science tutors to create workshops explaining difficult concepts such as object-oriented programming and recursion",
        "Helped many students grasp basic fundamentals of programming and strengthened their understanding"
      ],
      timestamp: "Aug 2022 - Dec 2022",
      title: "Peer Instructor",
      url: "https://skylinecollege.edu/stemcenter/",
      company: "STEM Center, Skyline College"
    },
    {
      bullet_points: [
        "Leveraged computer vision and deep learning techniques such as real-time object detection and distance estimation with PyTorch and NVIDIA Jetson Nano to enhance control of affordable, soft rehabilitative robotic glove",
        "Trained and fine-tuned SSD-MobileNet v2 model using dataset with 1500+ images of glove to detect the latter",
        "Collaborated closely with computer engineering researchers to successfully integrate glove with an EMG system using serial communication protocols to help glove respond to nearby objects"
      ],
      timestamp: "Jun 2022 - Aug 2022",
      title: "Computer Vision Research Intern",
      url: "http://sfsu-miclab.org/",
      company: "MIC Lab, San Francisco State University"
    },
    {
      bullet_points: [
        "Collaborated with team consisting of a developer and two designers to design and develop a remote-controlled vehicle for navigating hazardous environments, showcasing effective teamwork and technical skills.",
        "Led technical development and documentation with developer to design vehicle's features and functionalities such as light sensors, joystick controls, and Bluetooth connectivity using Arduino and C++",
        "Authored project documentation on vehicle and delivered and presented the project to audience of 15+ students and teachers"
      ],
      timestamp: "Jan 2022",
      title: "Research Intern",
      url: "https://www.skylinecollege.edu/",
      company: "Skyline College"
    }
  ];
</script>

<ul class="timeline timeline-snap-icon timeline-compact timeline-vertical p-5 lg:px-[30%]">
  {#each experiences as exp}
    <Experience
      bulletPoints={exp.bullet_points}
      timestamp={exp.timestamp}
      jobTitle={exp.title}
      company={exp.company}
    />
  {/each}
</ul>
