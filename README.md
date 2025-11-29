"""
<p align="center">
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/One_Piece.webp" alt="Straw Hat Pirates Logo" width="200"/>
</p>

<h1 align="center">Hi there, I'm Husain 👋</h1>

<p align="center">
  🚀 I am a <strong>Software Engineer</strong> | 🔍 Passionate about <strong>Building & Solving</strong> | 🎯 Lifelong Learner
  <br>
  👉 <a href="https://roadmap.sh/r/embeddediot-software-engineers" target="_blank"><strong>Check out my Software Engineer Roadmap</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Software%20Engineering-%E2%9C%94%EF%B8%8F-blue" alt="Software Engineering Badge" />
  <img src="https://img.shields.io/badge/YouTube-Coming%20Soon-red" alt="YouTube Badge" />
  <img src="https://komarev.com/ghpvc/?username=HusainCode&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile Views" />
</p>

---

### 🌟 About Me
I'm passionate about continuous learning and growth as a **Software Engineer**. I enjoy working on a variety of technical challenges, from **system-level programming** to **backend development**, and I'm constantly exploring innovative technologies.

I'm not aiming to be the best this year, or the next, or even the one after that. I've got my whole life to master this craft. I'm here for the long run, dedicated to becoming one of the best in the field.

<p align="center">
  <strong>⚠️ Warning:</strong> If you didn't hire me, that decision might age poorly. I'm not just here to code. I'm here to <strong>lead, innovate, and outgrow expectations</strong>. And yes, this one's very personal.
</p>

### 📝 Interviewer Note
> ❌ Please don't ask me *"How do you stay up to date with tech?"*
> If you can't already tell from my work, my consistency, and my drive, I genuinely can't help you answer that.

---

### 💬 Quotes That Drive Me
> 💡 _"Find a job you enjoy doing, and you will never have to work a day in your life."_ – **Mark Twain**
> 🧠 _"Once you stop learning, you start dying."_ – **Albert Einstein**
> 🔁 _"Commit yourself to lifelong learning. The most valuable asset you'll ever have is your mind and what you put into it."_ – **Albert Einstein**

---

### 👨‍💻 Who Am I? (In Code)

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Protocol


# --- Core Interfaces & Abstractions (Interface Segregation) --- #
class Logger(Protocol):
    def log(self, message: str) -> None: ...


class Debuggable:
    """Mixin providing lightweight debug logging (Strategy pattern)."""

    def __init__(self, logger: Logger):
        self._logger = logger

    def debug(self, message: str) -> None:
        self._logger.log(f"[DEBUG] {message}")


# --- Concrete Implementation (Dependency Inversion) --- #
class ConsoleLogger:
    """Concrete logger that writes to the console."""

    def log(self, message: str) -> None:
        print(message)


# --- Domain Layer (Single Responsibility) --- #
@dataclass(frozen=True)
class Education:
    bachelors: str
    masters: str
    specialization: str


# --- Application Layer --- #
class Engineer(ABC):
    """Abstract base class for different types of engineers."""

    @abstractmethod
    def introduce(self) -> str:
        pass


class SoftwareEngineer(Debuggable, Engineer):
    """A well-structured Python representation of an engineer."""

    def __init__(
        self,
        name: str,
        passion: str,
        location: str,
        education: Education,
        logger: Logger
    ):
        super().__init__(logger)
        self._name = name
        self._passion = passion
        self._location = location
        self._education = education
        self.debug("SoftwareEngineer instance initialized.")

    def introduce(self) -> str:
        self.debug("Generating introduction...")
        return (
            f"Hi there, I'm {self._name}!\n"
            f"Passionate about {self._passion} and solving real-world problems.\n"
            f"Based in {self._location}.\n"
            f"I hold a Bachelor's in {self._education.bachelors}.\n"
            f"Currently pursuing a Master's in {self._education.masters}, "
            f"specializing in {self._education.specialization}."
        )


# --- Composition Root (Dependency Injection) --- #
def main() -> None:
    logger = ConsoleLogger()
    edu = Education(
        bachelors="Computer Science",
        masters="Data Science",
        specialization="Machine Learning & Embedded Intelligence",
    )

    husain = SoftwareEngineer(
        name="Husain",
        passion="building smart software & embedded systems",
        location="Texas",
        education=edu,
        logger=logger,
    )

    print(husain.introduce())


if __name__ == "__main__":
    main()
```

**🖨️ Output:**
```
[DEBUG] SoftwareEngineer instance initialized.
[DEBUG] Generating introduction...
Hi there, I'm Husain!
Passionate about building smart software & embedded systems and solving real-world problems.
Based in Texas.
I hold a Bachelor's in Computer Science.
Currently pursuing a Master's in Data Science, specializing in Machine Learning & Embedded Intelligence.
```

---

## 🏆 GitHub Trophies

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=HusainCode&theme=discord&column=7&no-frame=true&margin-w=5&margin-h=5" alt="GitHub Trophies" />
</p>

---

## 🏅 Certifications

<div align="center">
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/Essentials-Linux_250_0.webp" alt="Linux Essentials Certified" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/azuredata.jpg" alt="Microsoft Certified: Azure Data Fundamentals" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/blcokchain.png" alt="Certified Blockchain Expert" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/rhcsa.png" alt="Red Hat Certified System Administrator" width="100" />
  <img src="https://github.com/HusainCode/HusainCode/blob/main/Images/PCAPI.png" alt="Certified Associate Python Programmer" width="140" />
  <img src="https://img.shields.io/badge/NEXT_CERT-PENDING-important?style=for-the-badge" alt="Pending Certification Badge" />
</div>

<br>

<div align="center">

| 🧾 Certification                                | 🏛️ Issuer                             |
|------------------------------------------------|----------------------------------------|
| **Linux Essentials Certified**                 | Linux Professional Institute (LPI)     |
| **Microsoft Certified: Azure Data Fundamentals** | Microsoft                             |
| **Certified Blockchain Expert**                | Blockchain Council                     |
| **Red Hat Certified System Administrator**     | Red Hat                                |
| **Certified Associate Python Programmer**        | Python Institute                       |
| **Next Certification**                         | 🔄 **Pending...**                      |

</div>

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=HusainCode&show_icons=true&theme=radical&count_private=true&hide_border=true&bg_color=0D1117&title_color=00FFFF&icon_color=00FFFF&text_color=FFFFFF" alt="GitHub Stats" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=HusainCode&theme=radical&hide_border=true&background=0D1117&stroke=00FFFF&ring=00FFFF&fire=00FFFF&currStreakLabel=00FFFF&sideNums=FFFFFF&currStreakNum=FFFFFF&dates=FFFFFF&sideLabels=FFFFFF" alt="GitHub Streak" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HusainCode&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=00FFFF&text_color=FFFFFF" alt="Top Languages" />
</p>

---

## 📈 Contribution Activity

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=HusainCode&bg_color=0D1117&color=00FFFF&line=00FFFF&point=FFFFFF&area=true&hide_border=true&custom_title=Husain's%20Contribution%20Graph" alt="Contribution Graph" />
</p>

---

## 🛠️ Languages & Tools

<p align="center">
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/c.svg" alt="C" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/cplusplus.svg" alt="C++" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/4518857_python_icon.svg" alt="Python" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/java.svg" alt="Java" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/Go-Logo_Aqua.svg" alt="Go" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/mysql.svg" alt="MySQL" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/linux.svg" alt="Linux" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/docker.jpeg" alt="Docker" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/Kubernetespic.png" alt="Kubernetes" width="60" height="60" style="margin: 10px;"/>
  <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/aws.jpg" alt="AWS" width="60" height="60" style="margin: 10px;"/>
</p>

---

## 🐍 Contribution Snake

<p align="center">
  <img src="https://github.com/HusainCode/HusainCode/blob/output/github-contribution-grid-snake.svg" alt="Snake Animation" />
</p>

---

## 🤝 Connect with Me

<p align="center">
  <a href="https://www.linkedin.com/in/husain-alshaikhahmed-a6892617b" target="_blank">
    <img src="https://raw.githubusercontent.com/HusainCode/HusainCode/main/Images/5296501_linkedin_network_linkedin%20logo_icon.svg" alt="LinkedIn Profile" width="50" height="50"/>
  </a>
</p>

---

<p align="center">
  <i>⭐️ From <a href="https://github.com/HusainCode">HusainCode</a> - Building the future, one commit at a time.</i>
</p>
"""
