````markdown
# 📘 Node.js CLI Tool with Commander

This is a simple CLI (Command-Line Interface) tool built using the [`commander`](https://www.npmjs.com/package/commander) library in Node.js. It performs basic file-based operations such as counting the number of **words** and **lines** in a given file.

## 🚀 Features

- 📄 Count the number of **words** in a text file.
- 📑 Count the number of **lines** in a text file.
- 🧰 Built using the powerful `commander` library for CLI development.

## 📦 Installation

1. Clone this repository or download the files.

```bash
git clone https://github.com/your-username/commander-cli-tool.git
cd commander-cli-tool
````

2. Install dependencies:

```bash
npm install
```

## 🛠 Usage

Make sure you have Node.js installed. You can run the CLI tool using:

```bash
node index.js <command> <file>
```

Replace `index.js` with the filename of your script if it's different.

### Commands

#### 🔤 Count Words

```bash
node index.js count_words <file>
```

**Example:**

```bash
node index.js count_words sample.txt
```

**Output:**

```
The file has 120 words
```

---

#### 📏 Count Lines

```bash
node index.js count_lines <file>
```

**Example:**

```bash
node index.js count_lines sample.txt
```

**Output:**

```
The file has 15 Lines
```

---

## 🧪 Example File

You can create a simple `sample.txt` file for testing:

```
Hello, world!
This is a sample file.
It contains a few lines and words.
Have fun testing!
```

## 📄 File Structure

```
commander-cli-tool/
├── index.js         # Main CLI script
├── package.json     # NPM project metadata
└── README.md        # Project documentation
```

## 🧰 Built With

* [Node.js](https://nodejs.org/)
* [Commander](https://www.npmjs.com/package/commander)

## 📃 License

This project is licensed under the MIT License.

---

Happy Coding! 💻

```

---

### ✅ Next Steps You Can Add Later:
- Add support for counting characters.
- Add a feature to export results to a new file.
- Add colorized CLI output using something like `chalk`.

Let me know if you want a version with badges, examples using `npx`, or publishing it as an npm package.
```
