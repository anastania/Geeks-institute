function frameWords(words) {
  const cleaned = words.map(w => w.trim()).filter(w => w.length > 0)
  if (cleaned.length === 0) { console.log("No words provided."); return }
  const maxLen = cleaned.reduce((m, w) => Math.max(m, w.length), 0)
  const border = "*".repeat(maxLen + 4)
  console.log(border)
  for (const w of cleaned) console.log(`* ${w.padEnd(maxLen, " ")} *`)
  console.log(border)
}
if (typeof window !== "undefined" && typeof window.prompt === "function") {
  const input = prompt("Enter words separated by commas:")
  frameWords((input || "").split(","))
} else {
  const readline = require("readline")
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  rl.question("Enter words separated by commas: ", ans => {
    frameWords((ans || "").split(","))
    rl.close()
  })
}
