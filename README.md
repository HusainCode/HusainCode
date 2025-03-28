<p align="center">
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/One_Piece.webp" alt="Straw Hat Pirates Logo" width="200"/>
</p>

<h1 align="center">Hi there, I'm Husain 👋</h1>

<p align="center">
  🚀 I am a <strong>Software Engineer</strong> | 🔍 Passionate about <strong>Embedded Systems & IoT Applications</strong> | 🎯 Lifelong Learner  
  <br>
  👉 <a href="https://roadmap.sh/r/embeddediot-software-engineers" target="_blank"><strong>Check out my Software Engineer Roadmap</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Software%20Engineering-%E2%9C%94%EF%B8%8F-blue" alt="Software Engineering Badge" />
  <img src="https://img.shields.io/badge/OpenCV-%F0%9F%94%8D-green" alt="OpenCV Badge" />
  <img src="https://img.shields.io/badge/YouTube-Coming%20Soon-red" alt="YouTube Badge" />
</p>

---

### 🌟 About Me
I'm passionate about learning and aspire to become an accomplished **Software Engineer**. I enjoy working on **embedded systems**, **IoT**, **backend development**, **AI/ML**, and **robotics**. I'm always exploring innovative ways to build software that makes a meaningful difference in the world.
---
> 💡 _"Find a job you enjoy doing, and you will never have to work a day in your life."_ – **Mark Twain**  
> 🧠 _"Once you stop learning, you start dying."_ – **Albert Einstein**  
> 🔁 _"Commit yourself to lifelong learning. The most valuable asset you’ll ever have is your mind and what you put into it."_ – **Albert Einstein**

```python
import threading
import time
from datetime import datetime
import pytz
from functools import wraps

def live_clock(stop_event):
    """Continuously print the current time in Austin, TX."""
    tz = pytz.timezone("America/Chicago")  # Covers Austin, Texas (handles DST)
    while not stop_event.is_set():
        now = datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")
        print(f"\r🕒 Current Austin Time: {now}", end="", flush=True)
        time.sleep(1)

def timestamped_output(func):
    """Decorator to print timestamp before running intro."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("\n\n📅 Static Timestamp:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        print("===========================================")
        return func(*args, **kwargs)
    return wrapper

class LocationMixin:
    def format_location(self, location: str) -> str:
        return f"I'm currently based in {location}."

class DegreeFormatter:
    def __init__(self, education: str, pending_degree: str, specialization: str):
        self.education = education
        self.pending_degree = pending_degree
        self.specialization = specialization

    def formatted_degrees(self) -> str:
        return (
            f"I hold a Bachelor's degree in {self.education}.\n"
            f"I'm currently pursuing a {self.pending_degree}, specializing in {self.specialization}."
        )

class Introduction(LocationMixin):
    def __init__(self, name: str, passion: str, location: str, degree_formatter: DegreeFormatter):
        self.name = name
        self.passion = passion
        self.location = location
        self.degree_formatter = degree_formatter

    @property
    def greeting(self) -> str:
        return f"Hi there, I'm {self.name} 👋"

    @property
    def passion_statement(self) -> str:
        return f"I'm passionate about {self.passion} and continuously expanding my knowledge."

    @timestamped_output
    def display(self) -> None:
        print(self.greeting)
        print(self.passion_statement)
        print(self.format_location(self.location))
        print(self.degree_formatter.formatted_degrees())

def main():
    name = "Husain"
    passion = "building smart, scalable systems and innovating in AI/ML, Embedded Systems, and Robotics"
    location = "Austin, Texas"
    education = "Computer Science"
    pending_degree = "Master of Science in Data Science"
    specialization = "Machine Learning and Intelligent Systems"

    # Start clock in a separate thread
    stop_event = threading.Event()
    clock_thread = threading.Thread(target=live_clock, args=(stop_event,))
    clock_thread.start()

    # Run introduction
    try:
        degree_formatter = DegreeFormatter(education, pending_degree, specialization)
        intro = Introduction(name, passion, location, degree_formatter)
        intro.display()

        # Keep clock running until user presses Enter
        print("\n\nPress Enter to stop the clock and exit.")
        input()
    finally:
        stop_event.set()
        clock_thread.join()
        print("\n🛑 Clock stopped. Goodbye!")

if __name__ == "__main__":
    main()
```
## Certifications

<div align="left">
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/Essentials-Linux_250_0.webp" alt="Linux Essentials Certified" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/azuredata.jpg" alt="Microsoft Certified: Azure Data Fundamentals" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/blcokchain.png" alt="Certified Blockchain Expert" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/rhcsa.png" alt="Red Hat Certified System Administrator" width="100" />
</div>

# Certifications

| Certification                     | Issuer                       |
|-----------------------------------|------------------------------|
| **Linux Essentials Certified**    | Linux Professional Institute (LPI) |
| **Microsoft Certified: Azure Data Fundamentals** | Microsoft |
| **Certified Blockchain Expert**   | Blockchain Council          |
| **Red Hat Certified System Administrator** | Red Hat               |


<hr>

## GitHub Stats

![Husain's GitHub Stats](https://github-readme-stats.vercel.app/api?username=HusainCode&show_icons=true&theme=dark&count_private=true)
![Husain's GitHub Streak](https://streak-stats.demolab.com?user=HusainCode&theme=dark)

<hr>

## Languages and Tools

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=HusainCode&layout=compact&theme=radical)

### Languages & Tools:

<p align="left">
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/4518857_python_icon.svg" alt="Python" width="40" style="margin-right: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/c.svg" alt="C" width="40" style="margin-right: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/cplusplus.svg" alt="C++" width="40" style="margin-right: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/java.svg" alt="Java" width="40" style="margin-right: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/mysql.svg" alt="MySQL" width="40" style="margin-right: 13px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/linux.svg" alt="Linux" width="40" style="margin-right: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/Go-Logo_Aqua.svg" alt="Go" width="40" style="margin-right: 13px;"/>
  
</p>

<hr>

## Connect with Me

<div align="left" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <a href="https://www.linkedin.com/in/husain-alshaikhahmed-a6892617b" target="_blank">
    <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/5296501_linkedin_network_linkedin%20logo_icon.svg" alt="LinkedIn Profile" width="40" style="margin-right: 10px;"/>
  </a>
</div>


<hr>

<div align="center" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <p>Visitors count</p>
  <img src="https://profile-counter.glitch.me/HusainCode/count.svg" />
</div>



