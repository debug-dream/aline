# Yet Another Cline (prev. Claude Dev)

> [!IMPORTANT]  
> ### ✨ Post-fork Features ✨ <br>
> * 💪 Customize system prompts <br>
> * 📉 Reduce token consumption in CLINE mode <br>
> * 🧄 Fewer token consumption in chatbot scenario <br>
> * 🔥 Beautified chat view <br>
> * 💎 Direct integration with DeepSeek v3 <br>
> * 🚀 Quickly Switch API Provider <br>
> * 🧪 Provide codelen shortcut commands <br>

### 💪 Customize system prompts

Customize the system prompt to suit your needs. You can change Cline's behavior. <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/customize-system-prompts/system_prompt_demo.png" alt="prompt settings"/><br>

### 🔥 Beautified chat view

Providing a beautified chat interface in chat scenarios. <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/customize-system-prompts/chatview-ui.png" alt="chat view"/><br>

### 🧄 Fewer token consumption in chatbot scenario

The token consumption in the chatbot scenario has been significantly reduced compared to Cline <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/customize-system-prompts/compare-tokens.png" alt="token consumption"/><br>

### 📉 Reduce token consumption in cline mode

Aline can reduce token consumption in CLINE scenario.<br>
Example: under the same prompt, aline consumes 31k tokens, while cline consumes 45k tokens.  <br>
<details>
    Aline consumes 31k tokens <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/cdn/aline-cline-mode.png" alt="aline-reduce-token"/><br>
    Cline consumes 45k tokens <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/cdn/origin-cline-mode.png" alt="origin-token"/><br>
</details>
<br>

### 🚀 Quickly Switch API Provider

You can click the API provider option to quickly switch between different providers. <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/customize-system-prompts/api_provider_demo.png" alt="provider option"/><br>

### 🧪 Provide codelen shortcut commands

Provide codelen shortcut commands to quickly execute code analysis tasks. <br>
<img width="720" img src="https://github.com/debug-dream/aline/releases/download/cdn/codelen.png" alt="codelen shortcut"/><br>
<br>


<br><br>
---

Meet Cline, an AI assistant that can use your **CLI** a**N**d **E**ditor.

<p align="center">
  <img src="https://media.githubusercontent.com/media/cline/cline/main/assets/docs/demo.gif" width="100%" />
</p>

<img align="right" width="340" src="https://github.com/user-attachments/assets/3cf21e04-7ce9-4d22-a7b9-ba2c595e88a4"><br>

### Use any API and Model

Cline supports API providers like OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, and GCP Vertex. You can also configure any OpenAI compatible API, or use a local model through LM Studio/Ollama. If you're using OpenRouter, the extension fetches their latest model list, allowing you to use the newest models as soon as they're available.

The extension also keeps track of total tokens and API usage cost for the entire task loop and individual requests, keeping you informed of spend every step of the way.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/81be79a8-1fdb-4028-9129-5fe055e01e76">

### Run Commands in Terminal

Thanks to the new [shell integration updates in VSCode v1.93](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api), Cline can execute commands directly in your terminal and receive the output. This allows him to perform a wide range of tasks, from installing packages and running build scripts to deploying applications, managing databases, and executing tests, all while adapting to your dev environment & toolchain to get the job done right.

For long running processes like dev servers, use the "Proceed While Running" button to let Cline continue in the task while the command runs in the background. As Cline works he’ll be notified of any new terminal output along the way, letting him react to issues that may come up, such as compile-time errors when editing files.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="400" src="https://github.com/user-attachments/assets/c5977833-d9b8-491e-90f9-05f9cd38c588">

### Create and Edit Files

Cline can create and edit files directly in your editor, presenting you a diff view of the changes. You can edit or revert Cline's changes directly in the diff view editor, or provide feedback in chat until you're satisfied with the result. Cline also monitors linter/compiler errors (missing imports, syntax errors, etc.) so he can fix issues that come up along the way on his own.

All changes made by Cline are recorded in your file's Timeline, providing an easy way to track and revert modifications if needed.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/bc2e85ba-dfeb-4fe6-9942-7cfc4703cbe5">

### Use the Browser

With Claude 3.5 Sonnet's new [Computer Use](https://www.anthropic.com/news/3-5-models-and-computer-use) capability, Cline can launch a browser, click elements, type text, and scroll, capturing screenshots and console logs at each step. This allows for interactive debugging, end-to-end testing, and even general web use! This gives him autonomy to fixing visual bugs and runtime issues without you needing to handhold and copy-pasting error logs yourself.

Try asking Cline to "test the app", and watch as he runs a command like `npm run dev`, launches your locally running dev server in a browser, and performs a series of tests to confirm that everything works. [See a demo here.](https://x.com/sdrzn/status/1850880547825823989)

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="360" src="https://github.com/user-attachments/assets/7fdf41e6-281a-4b4b-ac19-020b838b6970">

### Add Context

-   **`@url`:** Paste in a URL for the extension to fetch and convert to markdown, useful when you want to give Cline the latest docs
-   **`@problems`:** Add workspace errors and warnings ('Problems' panel) for Cline to fix
-   **`@file`:** Adds a file's contents so you don't have to waste API requests approving read file (+ type to search files)
-   **`@folder`:** Adds folder's files all at once to speed up your workflow even more

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="350" src="https://github.com/user-attachments/assets/140c8606-d3bf-41b9-9a1f-4dbf0d4c90cb">

### Checkpoints: Compare and Restore

As Cline works through a task, the extension takes a snapshot of your workspace at each step. You can use the 'Compare' button to see a diff between the snapshot and your current workspace, and the 'Restore' button to roll back to that point.

For example, when working with a local web server, you can use 'Restore Workspace Only' to quickly test different versions of your app, then use 'Restore Task and Workspace' when you find the version you want to continue building from. This lets you safely explore different approaches without losing progress.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

## Contributing

<details>
<summary>Local Development Instructions</summary>

1. Clone the repository _(Requires [git-lfs](https://git-lfs.com/))_:
    ```bash
    git clone https://github.com/cline/cline.git
    ```
2. Open the project in VSCode:
    ```bash
    code cline
    ```
3. Install the necessary dependencies for the extension and webview-gui:
    ```bash
    npm run install:all
    ```
4. Launch by pressing `F5` (or `Run`->`Start Debugging`) to open a new VSCode window with the extension loaded. (You may need to install the [esbuild problem matchers extension](https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers) if you run into issues building the project.)

</details>