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
from dataclasses import dataclass

class DebugMixin:
    def debug_log(self, message):
        print(f"[DEBUG] {message}")

@dataclass
class Education:
    bachelors: str
    masters: str
    specialization: str

class SoftwareEngineer(DebugMixin):
    """
    A class representing a software engineer with a focus on
    embedded systems, IoT, and intelligent software solutions.
    """

    def __init__(self, name: str, passion: str, location: str, education: Education):
        self.name = name
        self.passion = passion
        self.location = location
        self.education = education
        self.debug_log("SoftwareEngineer object created.")

    def generate_introduction(self) -> str:
        """
        Generates a formatted introduction string.
        """
        self.debug_log("Generating introduction...")
        intro = (
            f"👨‍💻 Hi there, I'm {self.name}!\n"
            f"💡 Passionate about {self.passion} and solving real-world problems.\n"
            f"📍 Based in {self.location}.\n"
            f"🎓 I hold a Bachelor's in {self.education.bachelors}.\n"
            f"📚 Currently pursuing a Master's in {self.education.masters}, "
            f"specializing in {self.education.specialization}.\n"
        )
        return intro

    def execute(self):
        """
        Displays the formatted introduction.
        """
        self.debug_log("Executing introduction routine...")
        print(self.generate_introduction())

def main():
    husain_edu = Education(
        bachelors="Computer Science",
        masters="Data Science",
        specialization="Machine Learning & Embedded Intelligence"
    )

    husain = SoftwareEngineer(
        name="Husain",
        passion="building smart software & embedded systems",
        location="Texas",
        education=husain_edu
    )

    husain.execute()

if __name__ == "__main__":
    main()
```
```
### 🖨️ Output:
```bash
$ python3 intro.py
[DEBUG] SoftwareEngineer object created.
[DEBUG] Executing introduction routine...
[DEBUG] Compiling thoughts...
👨‍💻 Hi there, I'm Husain!
💡 Passionate about building smart software & embedded systems and solving real-world problems.
📍 Based in Texas.
🎓 I hold a Bachelor's in Computer Science.
📚 Currently pursuing a Master's in Data Science, specializing in Machine Learning & Embedded Intelligence.
```
## 🏅 Certifications

<div align="left">
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/Essentials-Linux_250_0.webp" alt="Linux Essentials Certified" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/azuredata.jpg" alt="Microsoft Certified: Azure Data Fundamentals" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/blcokchain.png" alt="Certified Blockchain Expert" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/rhcsa.png" alt="Red Hat Certified System Administrator" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/PCAPI.png" alt="Certified Associate Python Programmer" width="140" />
  <img src="https://img.shields.io/badge/NEXT_CERT-PENDING-important?style=for-the-badge&logo=OpenAI" alt="Pending Certification Badge" />
</div>

<br>

| 🧾 Certification                                | 🏛️ Issuer                             |
|------------------------------------------------|----------------------------------------|
| **Linux Essentials Certified**                 | Linux Professional Institute (LPI)     |
| **Microsoft Certified: Azure Data Fundamentals** | Microsoft                             |
| **Certified Blockchain Expert**                | Blockchain Council                     |
| **Red Hat Certified System Administrator**     | Red Hat                                |
| **Certified Associate Python Programmer**        | Python Institute                       |
| **Next Certification**                         | <span id="pending-cert" style="font-weight:bold;">🔄 Pending...</span> |

---

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



