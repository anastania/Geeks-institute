
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; 
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

const video1 = new Video("JavaScript Basics", "Anas", 300);
video1.watch();

const video2 = new Video("Node.js Crash Course", "Sara", 600);
video2.watch();

const videoData = [
  { title: "React Tutorial", uploader: "Omar", time: 1200 },
  { title: "CSS Animations", uploader: "Nora", time: 800 },
  { title: "HTML Crash Course", uploader: "Youssef", time: 400 },
  { title: "Python for Beginners", uploader: "Fatima", time: 1500 },
  { title: "MongoDB Basics", uploader: "Ali", time: 900 },
];
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

videos.forEach(video => video.watch());
