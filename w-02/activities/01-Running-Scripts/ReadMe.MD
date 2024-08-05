<h5>
Now that you have Node.js installed, let’s run a simple program using Visual Studio Code (VS Code). You can use any of the exercises you’ve worked on or create a new JavaScript file with some code. Follow these steps:
</h5>
<ol>
<li>Create or Select a JavaScript File:
<ul>
<li>You can either download one of the exercises you’ve already worked on or create a new file.</li>
<li>
For a new file, open your text editor and write some simple JavaScript code. For example, create a file named hello.js with the following content:
<ul><li>console.log("Hello, Node.js!");</li></ul>
</li>
</ul>
</li>
<li>
Open the Directory with Visual Studio Code
<ul>
<li>
Open your terminal (Command Prompt for Windows, Terminal for macOS/Linux).
</li>
<li>
Use the cd command to navigate to the directory where your JavaScript file is located. For example, if your file is in a folder named projects, you would type:
<ul>cd path/to/your/projects</ul>
</li>
<li>
Once you are in the correct directory, open Visual Studio Code by typing:
<ul><li>code .</li></ul>
</li>
<li>This command will open VS Code in the current directory only if you’ve enabled this feature
</li>
</ul>
</li>
<li>
Run the JavaScript File in VS Code
<ul>
<li>
In Visual Studio Code, open the built-in terminal by going to View > Terminal or by pressing Ctrl+J (Windows/Linux) or Cmd+J (macOS).
</li>
<li>
Make sure the terminal is in the correct directory where your file is located. If not, navigate to the directory using the cd command.
</li>
<li>
Run your JavaScript file with Node.js by typing:
<ul><li>node name_of_your_file.js</li></ul>
</li>
<li>
Replace name_of_your_file.js with the actual name of your file. For example:
<ul><li>node hello.js</li></ul>
</li>
</ul>
</li>
<li>
See the Output
<ul>
<li>
If your script contains code that writes to the console, you will see the output in the VS Code terminal. For example, running the hello.js file should display: Hello, Node.js
</li>
<li>
Note: You will only see output if your code includes statements that write to the console, like console.log().
</li>
</ul>
</li>
<li>
Experiment with More Files
<ul>
<li>
Try running all the exercises you have completed in this manner.
</li>
<li>
Experiment by creating new scripts and running them with Node.js. For example, create a file named sum.js with the following content:
<ul><li>let a = 5; let b = 10;</li></ul>
<ul><li>console.log("The sum is:", a + b);</li></ul>
</li>
<li>
Navigate to the directory where sum.js is located in VS Code and run it:
<ul><li>node sum.js</li></ul>
</li>
<li>
You should see the output: The sum is: 15
</li>
</ul>
</li>
</ol>
<p>See? In a nutshell, Node allows us to run JS code outside a browser! This means now we can use JS as a server-side language like Python or Java, but more importantly, that we can build any kind of applications using web technologies!</p>
